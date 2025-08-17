// Exporta como módulo
export type Theme = 'light' | 'dark';

declare global {
  interface Window {
    themeManager: {
      toggleTheme: () => void;
      getCurrentTheme: () => Theme;
      subscribe: (callback: (theme: Theme) => void) => void;
    };
  }
  
  interface ImportMeta {
    env: {
      DEV?: boolean;
    };
  }
}