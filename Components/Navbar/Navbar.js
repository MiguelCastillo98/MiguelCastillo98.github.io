function Navbar() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={scrolled ? "show-box-shadow" : ""}>
      <div className="container">
        <a href="#">
          <h3>MIGUEL CASTILLO</h3>
        </a>

        {/* Agregamos o quitamos la clase 'open' según el estado */}
        <ul className={menuOpen ? "open" : ""}>
          <li>
            <a href="#" className="active" onClick={closeMenu}>
              {t('home')}
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu}>
              {t('about')}
            </a>
          </li>
          <li>
            <a href="#services" onClick={closeMenu}>
              {t('services')}
            </a>
          </li>
          <li>
            <a href="#portfolio" onClick={closeMenu}>
              {t('portfolio')}
            </a>
          </li>
          <li>
            <a href="#contacto" onClick={closeMenu}>
              {t('contact')}
            </a>
          </li>
        </ul>
        
        {/* Botón Abrir Hamburguesa */}
        {!menuOpen && (
          <button id="menu-btn" onClick={() => setMenuOpen(true)}>
            <span className="material-symbols-sharp">menu</span>
          </button>
        )}
        
        {/* Botón Cerrar X */}
        {menuOpen && (
          <button id="close-btn" onClick={() => setMenuOpen(false)}>
            <span className="material-symbols-sharp">close</span>
          </button>
        )}
      </div>
    </nav>
  );
}