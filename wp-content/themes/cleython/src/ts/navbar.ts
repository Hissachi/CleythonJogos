class Navbar {
  constructor() {
    this.init();
  }

  private init(): void {
    this.render();
    this.setupEventListeners();
  }

  private render(): void {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    navbar.innerHTML = `
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center py-4">
          <a href="/" class="text-2xl font-bold text-indigo-600">${this.getSiteName()}</a>
          <div class="hidden md:flex space-x-8">
            ${this.renderMenuItems()}
          </div>
          <button id="mobileMenuButton" class="md:hidden">
            <!-- Ícone do menu mobile -->
          </button>
        </div>
      </div>
    `;
  }

  private getSiteName(): string {
    return document.querySelector('title')?.textContent?.split('|')[0] || 'Meu Site';
  }

  private renderMenuItems(): string {
    return `
      <a href="/" class="nav-link">Home</a>
      <a href="/sobre-nos" class="nav-link">Sobre Nós</a>
      <a href="/contato" class="nav-link">Contato</a>
    `;
  }

  private setupEventListeners(): void {
    // Adicione listeners para menu mobile
  }
}

// Inicializa quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
  new Navbar();
});