// types/wordpress.d.ts

// Declaração de módulo para WordPress
declare namespace WP {
    interface Media {
      (options: any): any;
    }
    
    interface Customize {
      (setting: string, callback: (value: any) => void): void;
    }
  }
  
  // Extensão da interface Window
  interface Window {
    wp: {
      media?: WP.Media;
      customize?: WP.Customize;
      api?: any;
    };
    ajaxurl: string;
  }
  
  // Declaração de variáveis globais
  declare var wp: Window['wp'];
  declare var ajaxurl: string;