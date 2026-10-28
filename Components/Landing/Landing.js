function Landing() {
  return (
    <section className="landing">
      <div className="container">
        <div className="socials">
          <a href="https://www.instagram.com/miguel_ang.rojas/" target="_blank" rel="noreferrer">
            <i className="uil uil-instagram"></i>
          </a>
          <a href="https://github.com/MiguelCastillo98" target="_blank" rel="noreferrer">
            <i className="uil uil-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/miguel-angel-castillo-rojas-frontend-developer/" target="_blank" rel="noreferrer">
            <i className="uil uil-linkedin"></i>
          </a>
        </div>
        <div className="info">
          <h1>UI/UX Design & Frontend Developer</h1>
          
          {/* Traducción directa con la función global t() */}
          <h3>{t('Myname')}</h3> 
          
          <div className="text-1">
            <span className="typing"></span>
          </div>
          <br />
          
          <p>
            {t('Mydescription')}
          </p>
          
          <a href="#contacto" className="btn btn-primary">
            {t('lets-talk')}
          </a>
        </div>
        
        {/* Animación de círculo y foto de perfil */}
        <div className="profile-area">
          <div className="outer-circle">
            <span className="material-symbols-sharp">design_services</span>
            <span className="material-symbols-sharp">category</span>
            <span className="material-symbols-sharp">code</span>
            <span className="material-symbols-sharp">terminal</span>
          </div>
          <div className="inner-circle">
            <img className="Me" src="./images/Me2.jpg" alt="miguel castillo's picture" />
          </div>
        </div>
      </div>
    </section>
  );
}