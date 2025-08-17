declare const wp_theme_vars: {
    ajaxurl: string;
    nonce: string;
  };
  
  interface TeamMember {
    name: string;
    role: string;
    bio: string;
    photo: string;
  }
  
  class AboutPage {
    private teamMembers: TeamMember[] = [
      {
        name: 'Pedro Vargas',
        role: 'CEO & Fundador da Cleython',
        bio: 'Fundador da empresa com 10 anos de experiência',
        photo: 'https://media.licdn.com/dms/image/v2/D4D35AQGk1NjMyXae9w/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1692547024100?e=1756004400&v=beta&t=XwlVr6s43Gp8C4alXFQWa2Vmwdwoe6bkz10F1LSMjhQ'
      },
      {
        name: 'Matheus Lima',
        role: 'Jogador de golf 1.8 álcool',
        bio: 'Especialista em cachorro cheetos e dormir de calça para baixo',
        photo: 'https://media.licdn.com/dms/image/v2/D4E35AQFZamWDOe_PHQ/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1728765060057?e=1756004400&v=beta&t=UUduejeSuW5N9gjlY5wTsTCIfeKnuAEYpUmUjJt4QK4'
      }
    ];
  
    constructor() {
      this.init();
    }
  
    private init(): void {
      this.renderContent();
      this.setupEventListeners();
    }
  
    private renderContent(): void {
      const contentElement = document.getElementById('aboutContent');
      if (contentElement) {
        contentElement.innerHTML = `
          <p>${this.getDynamicContent()}</p>
          <p class="mt-4">Fundada em ${new Date().getFullYear() - 5}</p>
        `;
      }

      this.renderTeamMembers();
    }
  
    private renderTeamMembers(): void {
      const teamContainer = document.getElementById('teamMembers');
      if (!teamContainer) return;
  
      teamContainer.innerHTML = this.teamMembers.map(member => `
        <div class="team-card bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl hover:dark:bg-gray-950 transition-all ease-in-out">
          <img src="${member.photo}" alt="${member.name}" class="w-32 h-32 rounded-full mx-auto mb-4 object-cover">
          <h3 class="text-xl font-bold text-center">${member.name}</h3>
          <p class="text-indigo-600 text-center mb-3">${member.role}</p>
          <p class="text-gray-600">${member.bio}</p>
        </div>
      `).join('');
    }
  
    private setupEventListeners(): void {
      const contactBtn = document.getElementById('contactBtn');
      if (contactBtn) {
        contactBtn.addEventListener('click', () => {
          this.handleContactClick();
        });
      }
    }
  
    private handleContactClick(): void {
      if (typeof wp_theme_vars !== 'undefined') {
        fetch(wp_theme_vars.ajaxurl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({
            action: 'track_about_page_click',
            nonce: wp_theme_vars.nonce
          })
        })
        .then(response => response.json())
        .then(data => {
          console.log('Sucesso:', data);
          window.location.href = '/contato';
        });
      } else {
        window.location.href = '/contato';
      }
    }
  
    private getDynamicContent(): string {
      return 'Somos uma empresa dedicada a criar soluções inovadoras para nossos clientes.';
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    new AboutPage();
  });