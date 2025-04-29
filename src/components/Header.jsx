export default function Header() {
  return (
    <header className="header" id="top">
      <div className="overlay" data-overlay></div>
      <div className="container">
        <a href="#" className="logo">
          <img src="https://upload.wikimedia.org/wikipedia/pt/f/f9/Furia_Esports_logo.png" alt="FURIA logo" style={{ width: '50px', height: 'auto' }} />
        </a>

        <button className="nav-open-btn" data-nav-open-btn>
          <ion-icon name="menu-outline"></ion-icon>
        </button>

        <nav className="navbar" data-nav>
          <div className="navbar-top">
            <a href="#" className="logo">
              <img src="https://furiagg.fbitsstatic.net/sf/img/logo-furia.svg?theme=main&v=202410241814" alt="FURIA logo" />
            </a>
            <button className="nav-close-btn" data-nav-close-btn>
              <ion-icon name="close-outline"></ion-icon>
            </button>
          </div>

          <ul className="navbar-list">
            <li><a href="#hero" className="navbar-link">Home</a></li>
            <li><a href="#about" className="navbar-link">FURIA CS</a></li>
            <li><a href="#tournament" className="navbar-link">Campeonatos</a></li>
            <li><a href="#contato" className="navbar-link">Contato</a></li>
          </ul>

          <ul className="nav-social-list">
            <li>
              <a href="https://twitter.com/FURIA" className="social-link">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/furiagg" className="social-link">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>
            <li>
              <a href="https://youtube.com/@furiagg" className="social-link">
                <ion-icon name="logo-youtube"></ion-icon>
              </a>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <button className="search">
            <ion-icon name="search-outline"></ion-icon>
          </button>
        </div>
      </div>
    </header>
  )
}