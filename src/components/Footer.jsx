export default function Footer() {
  return (
    <footer>
      <div className="footer-top" id="contato">
        <div className="container">
          <div className="footer-brand-wrapper">
            <a href="#" className="logo">
              <img src="https://upload.wikimedia.org/wikipedia/pt/f/f9/Furia_Esports_logo.png" alt="FURIA logo" style={{ width: '100px', height: 'auto' }} />
            </a>

            <div className="footer-menu-wrapper">
              <ul className="footer-menu-list">
                <li><a href="#hero" className="footer-menu-link">Home</a></li>
                <li><a href="#about" className="footer-menu-link">FURIA CS</a></li>
                <li><a href="#tournament" className="footer-menu-link">Campeonatos</a></li>
              </ul>

              <div className="footer-input-wrapper">
                <input type="text" name="message" required placeholder="Find Here Now" className="footer-input" />
                <button className="btn btn-primary">
                  <ion-icon name="search-outline"></ion-icon>
                </button>
              </div>
            </div>
          </div>

          <div className="footer-quicklinks">
            <ul className="quicklink-list">
              <li><a href="https://www.furia.gg/faq" className="quicklink-item">Faq</a></li>
              <li><a href="https://api.whatsapp.com/send?phone=5511945128297" className="quicklink-item">Centro de atendimento</a></li>
              <li><a href="https://www.furia.gg/termos-condicoes" className="quicklink-item">Termos de uso</a></li>
              <li><a href="https://www.furia.gg/politica-privacidade" className="quicklink-item">Privacidade</a></li>
            </ul>

            <ul className="footer-social-list">
              <li>
                <a href="https://twitch.tv/furiatv" className="footer-social-link">
                  <ion-icon name="logo-twitch"></ion-icon>
                </a>
              </li>
              <li>
                <a href="https://youtube.com/@furiagg" className="footer-social-link">
                  <ion-icon name="logo-youtube"></ion-icon>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            Copyright &copy; 2025 <a href="https://www.linkedin.com/in/boonemalay/">Pedro Brito (Boone)</a>. todos os direitos reservados
          </p>
        </div>
      </div>

      <a href="#top" className="btn btn-primary go-top" data-go-top>
        <ion-icon name="chevron-up-outline"></ion-icon>
      </a>
    </footer>
  )
}
