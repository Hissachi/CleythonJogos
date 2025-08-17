// src/ts/components/navbar.ts
export class Navbar {
  private static instance: Navbar;
  
  constructor() {
      this.initTheme();
  }

  private initTheme(): void {
      // Verifica se já tem tema definido
      const savedTheme = localStorage.getItem('theme') as 'light'|'dark'|null;
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      // Aplica o tema inicial
      const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
      this.applyTheme(initialTheme, false); // false = não salva no localStorage

      // Configura o toggle
      document.getElementById('theme-toggle')?.addEventListener('click', () => {
          const isDark = !document.documentElement.classList.contains('dark');
          this.applyTheme(isDark ? 'dark' : 'light');
      });
  }

  private applyTheme(theme: 'light'|'dark', saveToStorage = true): void {
      console.log(`Aplicando tema: ${theme}`);
      
      // Aplica as classes
      document.documentElement.classList.toggle('dark', theme === 'dark');
      document.body.classList.toggle('dark', theme === 'dark');
      
      // Atualiza o ícone
      this.updateThemeIcon(theme);
      
      // Salva preferência
      if (saveToStorage) {
          localStorage.setItem('theme', theme);
      }
  }

  private updateThemeIcon(theme: 'light'|'dark'): void {
      const iconPath = document.getElementById('theme-toggle')?.querySelector('path');
      if (!iconPath) return;

      const iconPaths = {
          dark: 'M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z',
          light: 'M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z'
      };

      iconPath.setAttribute('d', iconPaths[theme]);
  }

  public static init(): Navbar {
      if (!Navbar.instance) {
          Navbar.instance = new Navbar();
      }
      return Navbar.instance;
  }
}