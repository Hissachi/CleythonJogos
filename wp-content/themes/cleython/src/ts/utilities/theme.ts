import { Theme } from '../types/theme';

// Implementação do ThemeManager
export class ThemeManager {
  private state: Theme;
  private subscribers: Array<(theme: Theme) => void> = [];

  constructor() {
    this.state = this.getSavedTheme();
    this.applyTheme(this.state);
  }

  private getSavedTheme(): Theme {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  private applyTheme(theme: Theme): void {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
    this.state = theme;
    this.notifySubscribers();
  }

  public toggleTheme(): void {
    this.applyTheme(this.state === 'light' ? 'dark' : 'light');
  }

  public getCurrentTheme(): Theme {
    return this.state;
  }

  public subscribe(callback: (theme: Theme) => void): void {
    this.subscribers.push(callback);
    callback(this.state);
  }

  private notifySubscribers(): void {
    this.subscribers.forEach(cb => cb(this.state));
  }
}

// Exporta uma instância singleton
export const themeManager = new ThemeManager();

// Opcional: expõe para debug no console
if (import.meta.env.DEV) {
  window.themeManager = themeManager;
}