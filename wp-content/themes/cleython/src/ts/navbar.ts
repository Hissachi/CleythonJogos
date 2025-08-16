class Navbar {
  private isMobileMenuOpen = false;

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
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-20 items-center">
          <!-- Logo -->
          <div class="flex-shrink-0 flex items-center">
            <a href="/" class="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              ${this.getSiteName()}
            </a>
          </div>

          <!-- Menu Desktop -->
          <div class="hidden md:ml-6 md:flex md:items-center md:space-x-8">
            ${this.renderMenuItems()}
            <a href="/contato" class="px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition-colors duration-200">
              Contato
            </a>
          </div>

          <!-- Botão Mobile -->
          <div class="-mr-2 flex items-center md:hidden">
            <button id="mobileMenuButton" type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none">
              <span class="sr-only">Abrir menu</span>
              ${this.getMenuIcon()}
            </button>
          </div>
        </div>
      </div>

      <!-- Menu Mobile -->
      <div id="mobileMenu" class="md:hidden hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          ${this.renderMobileMenuItems()}
        </div>
      </div>
    `;
  }

  private getSiteName(): string {
    return document.querySelector('title')?.textContent?.split('|')[0]?.trim() || 'Cleython';
  }

  private renderMenuItems(): string {
    const currentPath = window.location.pathname;
    const items = [
      { path: '/', label: 'Home' },
      { path: '/sobre-nos', label: 'Sobre Nós' },
      { path: '/blog', label: 'Blog' }
    ];

    return items.map(item => `
      <a href="${item.path}" class="${this.isActive(item.path, currentPath) ? 
        'border-indigo-500 text-gray-900' : 
        'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'} 
        inline-flex items-center px-1 pt-1 border-b-2 text-lg font-medium">
        ${item.label}
      </a>
    `).join('');
  }

  private renderMobileMenuItems(): string {
    const currentPath = window.location.pathname;
    const items = [
      { path: '/', label: 'Home' },
      { path: '/sobre-nos', label: 'Sobre Nós' },
      { path: '/blog', label: 'Blog' },
      { path: '/contato', label: 'Contato' }
    ];

    return items.map(item => `
      <a href="${item.path}" class="${this.isActive(item.path, currentPath) ? 
        'bg-indigo-50 text-indigo-700' : 
        'text-gray-700 hover:bg-gray-100 hover:text-gray-900'} 
        block px-3 py-2 rounded-md text-base font-medium">
        ${item.label}
      </a>
    `).join('');
  }

  private isActive(path: string, currentPath: string): boolean {
    return currentPath === path || (path !== '/' && currentPath.startsWith(path));
  }

  private getMenuIcon(): string {
    return this.isMobileMenuOpen ? `
      <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    ` : `
      <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    `;
  }

  private setupEventListeners(): void {
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const mobileMenu = document.getElementById('mobileMenu');

    if (mobileMenuButton && mobileMenu) {
      mobileMenuButton.addEventListener('click', () => {
        this.isMobileMenuOpen = !this.isMobileMenuOpen;
        mobileMenu.classList.toggle('hidden');
        mobileMenuButton.innerHTML = this.getMenuIcon();
      });
    }
  }
}

// Inicializa quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
  new Navbar();
});