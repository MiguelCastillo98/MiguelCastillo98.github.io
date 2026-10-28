function Contact() {
  return (
    <section className="contacto" id="contacto">
      <div className="titulo-seccion">
        <h2 className="title">{t('contact')}</h2>
      </div>
      <div className="redes-sociales">
        <a href="https://www.instagram.com/miguel_ang.rojas/" target="_blank" rel="noreferrer" aria-label="instagram">
          <i className="uil uil-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/in/miguel-angel-castillo-rojas-frontend-developer/" target="_blank" rel="noreferrer" aria-label="Linkedin">
          <i className="uil uil-linkedin"></i>
        </a>
        <a href="https://github.com/MiguelCastillo98/" target="_blank" rel="noreferrer" aria-label="Git hub">
          <i className="uil uil-github-alt"></i>
        </a>
        <a href="mailto:miguel.ang.castillo.rojas@gmail.com" target="_blank" rel="noreferrer" aria-label="Gmail">
          <i className="uil uil-google"></i>
        </a>
      </div>
    </section>
  );
}