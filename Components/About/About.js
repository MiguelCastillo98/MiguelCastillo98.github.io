function About() {
  const [activeTab, setActiveTab] = React.useState('Skills');

  return (
    <section className="about" id="about">
      <div className="max-width">
        <h2 className="title">{t('About-title')}</h2>
        <div className="about-content">
          <div className="column left">
            <img className="img-about" src="./images/Me1.jpg" alt="Miguel Castillo's picture" />
          </div>
          <div className="column right">
            <div className="text-1"><span className="typing"></span></div>
            <p>
              {t('Mydescription2')}
            </p>
            
            <div className="tab-titles">
              <p 
                className={`tab-links ${activeTab === 'Skills' ? 'active-link' : ''}`} 
                onClick={() => setActiveTab('Skills')}
              >
                {t('Skills')}
              </p>
              <p 
                className={`tab-links ${activeTab === 'Education' ? 'active-link' : ''}`} 
                onClick={() => setActiveTab('Education')}
              >
                {t('Education')}
              </p>
            </div>

            <div className={`tab-contents ${activeTab === 'Skills' ? 'active-tab' : ''}`} id="Skills" style={{ display: activeTab === 'Skills' ? 'block' : 'none' }}>
              <ul>
                <li>
                  <span>UI/UX</span>
                  <p>{t('UI/UX-skills')}</p>
                </li>
                <li>
                  <span>Frontend Web Development</span>
                  <p>{t('Frontend-skills')}</p>
                </li>
                <li>
                  <span>Content creation</span>
                  <p>{t('Content-skills')}</p>
                </li>
              </ul>
            </div>

            <div className={`tab-contents ${activeTab === 'Education' ? 'active-tab' : ''}`} id="Education" style={{ display: activeTab === 'Education' ? 'block' : 'none' }}>
              <ul>
                <li>
                  <span>2022 - Actual</span>
                  <p>{t('Study2')}</p>
                </li>
                <li>
                  <span>2015 - 2022</span>
                  <p>{t('Study1')}</p>
                </li>
              </ul>
            </div>

            <a id="btnDescargar" href="./Document/Miguel Castillo Frontend Resume.pdf" download>
              {t('btnDescargar')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}