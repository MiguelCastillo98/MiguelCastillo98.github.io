function Portfolio() {
  return (
    <>
      <section className="portfolio" id="portfolio">
        <div className="max-width">
          <h2 className="title">{t('MyWork')}</h2>
          <div className="proyectos">
            <ProjectItem 
              imgSrc="./images/logo-header-ladrillera-melendez.png" 
              altText="Ladrillera melendez" 
              linkUrl="https://www.ladrilleramelendez.com.co" 
            />
            <ProjectItem 
              imgSrc="./images/staybooked.png" 
              altText="Staybooked services" 
              linkUrl="https://staybookedservices.com" 
            />
            <ProjectItem 
              imgSrc="./images/MECS LOGO-01 - FONDO_BLANCO.jpg" 
              altText="Miami executive car service" 
              linkUrl="https://www.miamiexecutivecarservice.com" 
            />
          </div>
        </div>
      </section>

      <section className="portfolio projects">
        <div className="max-width">
          <h2 className="title">{t('MyWork')}</h2>
          <div className="proyectos">
            <ProjectItem 
              imgSrc="./images/Apex.png" 
              altText="Apex intro" 
              linkUrl="https://www.youtube.com/watch?v=HEpdLEfJnYs" 
            />
            <ProjectItem 
              imgSrc="./images/MECS LOGO-01 - FONDO_BLANCO.jpg" 
              altText="Miami executive car service figma" 
              linkUrl="https://www.www.figma.com/design/fhOO3pHhR2j5wn4fMNMMZW/CarService?node-id=0-1&m=dev" 
            />
            <ProjectItem 
              imgSrc="./images/TARJETAS Y LOGOS.png" 
              altText="Mi carrito diferente" 
              linkUrl="https://www.canva.com/design/DAFfXWy0e2g/T0EkZwHSEoINxSxi0xgEYA/edit" 
            />
          </div>
        </div>
      </section>
    </>
  );
}