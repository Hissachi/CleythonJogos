// src/ts/main.ts
import { Navbar } from './components/navbar';
import 'jquery';

// Tipos globais
declare global {
    interface Window {
        ajaxurl: string;
        wp_theme_vars?: {
            ajaxurl: string;
            nonce: string;
            themePath: string;
        };
    }
}

interface AjaxResponse {
    success: boolean;
    data?: unknown;
    message?: string;
}

class ThemeApp {
    private static initialized = false;

    public static init() {
        if (this.initialized) return;
        this.initialized = true;

        console.groupCollapsed('[ThemeApp] Inicialização');
        
        // Inicializa componentes principais
        Navbar.init();
        
        // Configura handlers
        this.setupContactHandler();
        this.setupAjaxForms();
        this.setupDynamicContentHandler();

        console.groupEnd();
        console.log('[ThemeApp] Inicializado com sucesso');
    }

    private static setupContactHandler(): void {
        document.getElementById('contactBtn')?.addEventListener('click', (e) => {
            e.preventDefault();
            this.handleContactClick();
        });
    }

    private static handleContactClick(): void {
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
        .catch(console.error);
    }

    private static setupAjaxForms(): void {
        $(document).on('submit', '.ajax-form', (e: JQuery.SubmitEvent) => {
            e.preventDefault();
            this.handleFormSubmit(e.currentTarget);
        });
    }

    private static handleFormSubmit(form: HTMLFormElement): void {
        if (!window.ajaxurl) {
            console.error('ajaxurl não definido');
            return;
        }

        const formData = $(form).serialize();
        
        $.post(window.ajaxurl, {
            action: 'my_theme_form_submit',
            data: formData
        })
        .done((response: unknown) => {
            console.log('Resposta AJAX:', response);
        })
        .fail(console.error);
    }

    private static setupDynamicContentHandler(): void {
        // Observa mudanças no DOM para conteúdo dinâmico
        new MutationObserver((mutations) => {
            if (document.getElementById('theme-toggle')) {
                console.log('Conteúdo dinâmico detectado - reinicializando componentes');
                Navbar.init();
            }
        }).observe(document.body, {
            childList: true,
            subtree: true
        });
    }
}

// Estratégias de inicialização
function initializeTheme() {
    // 1. Se o DOM já estiver pronto
    if (document.readyState === 'complete') {
        ThemeApp.init();
        return;
    }

    // 2. Espera pelo evento DOMContentLoaded
    document.addEventListener('DOMContentLoaded', () => {
      // Inicializa o tema
      Navbar.init();
      
      // Fallback visual - remove classe dark se houver problema
      setTimeout(() => {
          if (document.body.classList.contains('dark') && 
              window.matchMedia('(prefers-color-scheme: light)').matches) {
              document.body.classList.remove('dark');
              console.warn('Fallback: tema dark removido por conflito');
          }
      }, 1000);
  });

    // 3. Fallback para 5 segundos
    setTimeout(() => {
        if (!document.getElementById('theme-toggle')) {
            console.warn('Inicialização tardia - tentando novamente');
            ThemeApp.init();
        }
    }, 5000);
    
    new MutationObserver(() => {
      if (document.getElementById('theme-toggle')) {
          Navbar.init();
      }
  }).observe(document.body, { childList: true, subtree: true });
}

// Inicialização principal
initializeTheme();