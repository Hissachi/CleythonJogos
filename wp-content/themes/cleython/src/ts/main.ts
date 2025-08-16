import 'jquery';

// Extensão dos tipos globais
declare global {
  interface Window {
    ajaxurl: string;
    wp_theme_vars?: {
      ajaxurl: string;
      nonce: string;
    };
  }
}

// Interface para respostas AJAX
interface AjaxResponse {
  success: boolean;
  data?: unknown;
  message?: string;
}

interface FormResponse {
  status: string;
  message: string;
  data?: unknown;
}

class ThemeCore {
  private mobileMenuActive = false;

  constructor() {
    this.init();
  }

  private init(): void {
    this.setupMobileMenu();
    this.setupAjaxForms();
  }

  private setupMobileMenu(): void {
    $('#mobile-menu-toggle').on('click', (e: JQuery.ClickEvent) => {
      e.preventDefault();
      this.mobileMenuActive = !this.mobileMenuActive;
      $('#primary-menu').toggleClass('active', this.mobileMenuActive);
    });
  }

  private setupAjaxForms(): void {
    $('.ajax-form').on('submit', (e: JQuery.SubmitEvent) => {
      e.preventDefault();
      
      if (!window.ajaxurl) {
        console.error('ajaxurl não definido');
        return;
      }

      const formData = $(e.currentTarget).serialize();
      
      $.post(window.ajaxurl, {
        action: 'my_theme_form_submit',
        data: formData
      }, (response: FormResponse) => {
        this.handleFormResponse(response);
      });
    });
  }

  private handleFormResponse(response: FormResponse): void {
    console.log('Resposta do servidor:', response);
  }
}

// Handler do botão de contato
function handleContactClick(e: MouseEvent): void {
  e.preventDefault();
  
  if (!window.wp_theme_vars?.ajaxurl) {
    window.location.href = '/contato';
    return;
  }

  fetch(window.wp_theme_vars.ajaxurl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      action: 'track_about_page_click',
      nonce: window.wp_theme_vars.nonce
    })
  })
  .then(async (response: Response) => {
    const data: AjaxResponse = await response.json();
    if (data.success) {
      window.location.href = '/contato';
    }
  })
  .catch((error) => {
    console.error('Erro:', error);
  });
}

// Inicialização
$(document).ready(() => {
  console.log('Tema carregado!');
  
  document.getElementById('contactBtn')?.addEventListener('click', handleContactClick);
  
  new ThemeCore();
});