import 'jquery';
declare var $: any;
declare var jQuery: any;

declare global {
  interface Window {
    $: any;
    jQuery: any;
  }
}

// Seu código principal
$(document).ready(() => {
  console.log('Tema carregado!');
});

class ThemeCore {
  private mobileMenuActive: boolean = false;

  constructor() {
    this.init();
  }

  private init(): void {
    this.setupMobileMenu();
    this.setupAjaxForms();
  }

  private setupMobileMenu(): void {
    $('#mobile-menu-toggle').on('click', () => {
      this.mobileMenuActive = !this.mobileMenuActive;
      $('#primary-menu').toggleClass('active', this.mobileMenuActive);
    });
  }

  private setupAjaxForms(): void {
    $('.ajax-form').on('submit', (e) => {
      e.preventDefault();
      
      if (!window.ajaxurl) {
        console.error('ajaxurl não definido');
        return;
      }

      $.post(window.ajaxurl, {
        action: 'my_theme_form_submit',
        data: $(e.target).serialize()
      }, (response) => {
        this.handleFormResponse(response);
      });
    });
  }

  private handleFormResponse(response: any): void {
    console.log('Resposta do servidor:', response);
  }
}

// Inicialização quando o DOM estiver pronto
$(document).ready(() => {
  console.log('jQuery funcionando!');
});