import { useEffect } from 'react';

const useFuriaAnimations = () => {
  useEffect(() => {
    // Função para alternar classes
    const elemToggleFunc = (elem) => {
      if (elem) elem.classList.toggle("active");
    };

    // Configuração do menu mobile
    const setupMobileMenu = () => {
      const navbar = document.querySelector("[data-nav]");
      const navOpenBtn = document.querySelector("[data-nav-open-btn]");
      const navCloseBtn = document.querySelector("[data-nav-close-btn]");
      const overlay = document.querySelector("[data-overlay]");

      if (!navbar || !navOpenBtn || !navCloseBtn || !overlay) return;

      const handleNavClick = () => {
        elemToggleFunc(navbar);
        elemToggleFunc(overlay);
        elemToggleFunc(document.body);
      };

      navOpenBtn.addEventListener("click", handleNavClick);
      navCloseBtn.addEventListener("click", handleNavClick);
      overlay.addEventListener("click", handleNavClick);

      return () => {
        navOpenBtn.removeEventListener("click", handleNavClick);
        navCloseBtn.removeEventListener("click", handleNavClick);
        overlay.removeEventListener("click", handleNavClick);
      };
    };

    // Configuração do botão "voltar ao topo"
    const setupGoTopButton = () => {
      const goTopBtn = document.querySelector("[data-go-top]");
      if (!goTopBtn) return;

      const handleScroll = () => {
        window.scrollY >= 800
          ? goTopBtn.classList.add("active")
          : goTopBtn.classList.remove("active");
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    };

    // Inicializa todas as funções
    const cleanUpMenu = setupMobileMenu();
    const cleanUpScroll = setupGoTopButton();

    // Limpeza quando o componente desmontar
    return () => {
      if (cleanUpMenu) cleanUpMenu();
      if (cleanUpScroll) cleanUpScroll();
    };
  }, []);
};

export default useFuriaAnimations;
