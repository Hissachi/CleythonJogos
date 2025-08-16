export class NavbarEffects {
    private lastScroll = 0;
    private navbar: HTMLElement | null;
  
    constructor() {
      this.navbar = document.getElementById('navbar');
      this.init();
    }
  
    private init(): void {
      if (!this.navbar) return;
  
      window.addEventListener('scroll', () => this.handleScroll());
      this.handleScroll(); // Executa imediatamente para estado inicial
    }
  
    private handleScroll(): void {
      if (!this.navbar) return;
  
      const currentScroll = window.pageYOffset;
  
      if (currentScroll <= 10) {
        // No topo da página
        this.navbar.classList.remove('navbar-scrolled');
        this.navbar.classList.remove('shadow-lg');
      } else {
        // Rolando para baixo
        this.navbar.classList.add('navbar-scrolled');
        
        if (currentScroll > this.lastScroll && currentScroll > 100) {
          // Rolando para baixo - esconde navbar
          this.navbar.style.transform = 'translateY(-100%)';
        } else {
          // Rolando para cima - mostra navbar
          this.navbar.style.transform = 'translateY(0)';
        }
      }
  
      this.lastScroll = currentScroll;
    }
  }
  
  // Inicializa
  document.addEventListener('DOMContentLoaded', () => {
    new NavbarEffects();
  });