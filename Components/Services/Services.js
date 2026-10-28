function Services() {
  return (
    <section className="services" id="services">
      <div className="max-width">
        <h2 className="title">{t('MyServices')}</h2>
        <div className="serv-content">
          <ServiceCard 
            icon="brush" 
            title={t('UI/UX-Service')} 
            description={t('UI/UX-Service-description')} 
          />
          <ServiceCard 
            icon="code" 
            title={t('Web Development-Service')} 
            description={t('Web Development-Service-description')} 
          />
          <ServiceCard 
            icon="imagesmode" 
            title={t('Content-Service')} 
            description={t('Content-Service-description')} 
          />
        </div>
      </div>

      <div className="botonsito">
        <a href="https://youtu.be/IQvDtQA1AiE" target="_blank" rel="noreferrer">
          <i className="uil uil-youtube"></i>Portfolio
        </a>
      </div>
    </section>
  );
}