import React, { useEffect } from 'react';
import './SNTPEngineering.css';

const SNTPEngineering = () => {
  // Images - À remplacer par vos chemins réels
  const logoSntp = 'https://via.placeholder.com/200x80/C1121F/ffffff?text=SNTP+ENGINEERING';
  const heroImage = 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80';
  const engineerImage = '/images/engineers-team.jpg';
  const teamImage = 'https://via.placeholder.com/600x400/1B263B/ffffff?text=Team';

  // Icônes placeholder
  const iconConception = 'https://via.placeholder.com/70x70/C1121F/ffffff?text=Icon1';
  const iconRealisation = 'https://via.placeholder.com/70x70/C1121F/ffffff?text=Icon2';
  const iconRoutiere = 'https://via.placeholder.com/70x70/C1121F/ffffff?text=Icon3';
  const iconFerroviaire = 'https://via.placeholder.com/70x70/C1121F/ffffff?text=Icon4';
  const iconOuvrages = 'https://via.placeholder.com/70x70/C1121F/ffffff?text=Icon5';
  const iconAeroportuaire = 'https://via.placeholder.com/70x70/C1121F/ffffff?text=Icon6';

  useEffect(() => {
    // Animation au scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.SNTPEngineering-fade-in-section');
    animatedElements.forEach(el => observer.observe(el));

    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const handleContactClick = () => {
    const contactSection = document.querySelector('#contact-section');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const handleMapClick = () => {
    window.open('https://maps.app.goo.gl/dhqcMh8Gc3VEP9FM7', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="SNTPEngineering-page">
      {/* ==================== HERO SECTION ==================== */}
      <section className="SNTPEngineering-hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="SNTPEngineering-hero-overlay"></div>
        <div className="SNTPEngineering-hero-content">
          <div className="SNTPEngineering-hero-logo">
            <img src={logoSntp} alt="SNTP Engineering Logo" />
          </div>
          <h1 className="SNTPEngineering-hero-title">SNTP ENGINEERING</h1>
          <p className="SNTPEngineering-hero-subtitle">
            <span className="highlight-text">EXPERTISE INTÉGRÉE,</span> SOLUTIONS PRÊTES POUR L'AVENIR
          </p>
          <p className="SNTPEngineering-hero-description">
            Dirigée par une équipe de professionnels chevronnés et expérimentés, SNTP Engineering incarne notre engagement envers l'excellence en ingénierie. Cette unité stratégique renforce notre capacité à concevoir et à livrer des infrastructures de classe mondiale qui façonnent l'avenir de l'Algérie.
          </p>
        </div>
      </section>

      {/* ==================== NOTRE EXPERTISE ==================== */}
      <section className="SNTPEngineering-main-title-section SNTPEngineering-fade-in-section">
        <h2 className="SNTPEngineering-section-main-title">NOTRE EXPERTISE</h2>
        <div className="SNTPEngineering-title-underline"></div>
      </section>

      {/* ==================== CONCEPTION & INGÉNIERIE ==================== */}
      <section className="SNTPEngineering-values-section SNTPEngineering-fade-in-section">
        <div className="SNTPEngineering-container">
          <h2 className="SNTPEngineering-section-main-title">CONCEPTION & INGÉNIERIE</h2>
          <div className="SNTPEngineering-title-underline"></div>

          <div className="SNTPEngineering-values-grid">
            <div className="SNTPEngineering-value-card">
              <h3 className="SNTPEngineering-value-title">Solutions techniques de pointe</h3>
            </div>
            <div className="SNTPEngineering-value-card">
              <h3 className="SNTPEngineering-value-title">Optimisation de la valeur du projet</h3>
            </div>
            <div className="SNTPEngineering-value-card">
              <h3 className="SNTPEngineering-value-title">Méthodologies d'ingénierie avancées</h3>
            </div>
            <div className="SNTPEngineering-value-card">
              <h3 className="SNTPEngineering-value-title">Capacités de modélisation de nouvelle génération</h3>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== COMPÉTENCES CLÉS ==================== */}
      <section className="SNTPEngineering-domains-section SNTPEngineering-fade-in-section">
        <div className="SNTPEngineering-container">
          <h2 className="SNTPEngineering-section-main-title">COMPÉTENCES CLÉS</h2>
          <div className="SNTPEngineering-title-underline"></div>

          <div className="SNTPEngineering-domains-grid">
            <div className="SNTPEngineering-domain-card">
              <div className="SNTPEngineering-domain-icon">
                <img src={iconRoutiere} alt="Infrastructure Icon" />
              </div>
              <ul className="SNTPEngineering-domain-list">
                <li>Infrastructure routière et de transport</li>
                <li>Ingénierie structurelle complexe</li>
                <li>Systèmes ferroviaires et infrastructure</li>
              </ul>
            </div>

            <div className="SNTPEngineering-domain-card">
              <div className="SNTPEngineering-domain-icon">
                <img src={iconOuvrages} alt="Structure Icon" />
              </div>
              <ul className="SNTPEngineering-domain-list">
                <li>Installations portuaires et maritimes</li>
                <li>Développement d'infrastructure aéroportuaire</li>
                <li>Ingénierie de l'eau et de l'environnement</li>
              </ul>
            </div>

            <div className="SNTPEngineering-domain-card">
              <div className="SNTPEngineering-domain-icon">
                <img src={iconFerroviaire} alt="Industrial Icon" />
              </div>
              <ul className="SNTPEngineering-domain-list">
                <li>Complexes industriels et logistiques</li>
                <li>Infrastructure urbaine et services publics</li>
                <li>Solutions environnementales durables</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== ÉQUIPE HAUTEMENT QUALIFIÉE ==================== */}
      <section className="SNTPEngineering-main-title-section SNTPEngineering-fade-in-section">
        <h2 className="SNTPEngineering-section-main-title">ÉQUIPE HAUTEMENT QUALIFIÉE</h2>
        <div className="SNTPEngineering-title-underline"></div>
      </section>

      <section className="SNTPEngineering-values-section SNTPEngineering-fade-in-section">
        <div className="SNTPEngineering-container">
          <div className="SNTPEngineering-values-grid">
            <div className="SNTPEngineering-value-card">
              <h3 className="SNTPEngineering-value-title">Spécialistes en ingénierie multidisciplinaire</h3>
            </div>
            <div className="SNTPEngineering-value-card">
              <h3 className="SNTPEngineering-value-title">Experts en conception technique</h3>
            </div>
            <div className="SNTPEngineering-value-card">
              <h3 className="SNTPEngineering-value-title">Chefs de projet expérimentés</h3>
            </div>
            <div className="SNTPEngineering-value-card">
              <h3 className="SNTPEngineering-value-title">Unité de support technique avancé</h3>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== TECHNOLOGIE & INNOVATION ==================== */}
      <section className="SNTPEngineering-main-title-section SNTPEngineering-fade-in-section">
        <h2 className="SNTPEngineering-section-main-title">TECHNOLOGIE & INNOVATION</h2>
        <div className="SNTPEngineering-title-underline"></div>
      </section>

      <section className="SNTPEngineering-values-section SNTPEngineering-fade-in-section">
        <div className="SNTPEngineering-container">
          <div className="SNTPEngineering-values-grid">
            <div className="SNTPEngineering-value-card">
              <h3 className="SNTPEngineering-value-title">Plateformes de conception leader de l'industrie</h3>
            </div>
            <div className="SNTPEngineering-value-card">
              <h3 className="SNTPEngineering-value-title">BIM avancé et modélisation 3D</h3>
            </div>
            <div className="SNTPEngineering-value-card">
              <h3 className="SNTPEngineering-value-title">Solutions d'optimisation</h3>
            </div>
            <div className="SNTPEngineering-value-card">
              <h3 className="SNTPEngineering-value-title">Gestion intégrée du cycle de vie</h3>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PROPOSITION DE VALEUR ==================== */}
      <section className="SNTPEngineering-transform-section SNTPEngineering-fade-in-section">
        <div className="SNTPEngineering-container">
          <h2 className="SNTPEngineering-transform-title">PROPOSITION DE VALEUR</h2>
          <div className="SNTPEngineering-title-underline"></div>
        </div>
      </section>

      {/* ==================== MAÎTRISE COMPLÈTE ==================== */}
      <section className="SNTPEngineering-values-section SNTPEngineering-fade-in-section">
        <div className="SNTPEngineering-container">
          <h2 className="SNTPEngineering-section-main-title">MAÎTRISE COMPLÈTE</h2>
          <div className="SNTPEngineering-title-underline"></div>

          <div className="SNTPEngineering-values-grid">
            <div className="SNTPEngineering-value-card">
              <h3 className="SNTPEngineering-value-title">Études préliminaires</h3>
            </div>
            <div className="SNTPEngineering-value-card">
              <h3 className="SNTPEngineering-value-title">Conception détaillée avancée</h3>
            </div>
            <div className="SNTPEngineering-value-card">
              <h3 className="SNTPEngineering-value-title">Suivi de l'exécution</h3>
            </div>
            <div className="SNTPEngineering-value-card">
              <h3 className="SNTPEngineering-value-title">Optimisation continue de la performance</h3>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PERFORMANCE & ASSURANCE QUALITÉ ==================== */}
      <section className="SNTPEngineering-domains-section SNTPEngineering-fade-in-section">
        <div className="SNTPEngineering-container">
          <h2 className="SNTPEngineering-section-main-title">PERFORMANCE & ASSURANCE QUALITÉ</h2>
          <div className="SNTPEngineering-title-underline"></div>

          <div className="SNTPEngineering-values-grid">
            <div className="SNTPEngineering-value-card">
              <h3 className="SNTPEngineering-value-title">Cycles de conception accélérés</h3>
            </div>
            <div className="SNTPEngineering-value-card">
              <h3 className="SNTPEngineering-value-title">Optimisation de l'efficacité des coûts</h3>
            </div>
            <div className="SNTPEngineering-value-card">
              <h3 className="SNTPEngineering-value-title">Solutions d'ingénierie durables</h3>
            </div>
            <div className="SNTPEngineering-value-card">
              <h3 className="SNTPEngineering-value-title">Garantie d'excellence technique</h3>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SYNERGIE ==================== */}
<section className="SNTPEngineering-values-section SNTPEngineering-fade-in-section">
  <div className="SNTPEngineering-container">
    <h2 className="SNTPEngineering-section-main-title">SYNERGIE</h2>
    <div className="SNTPEngineering-title-underline"></div>

    <div className="SNTPEngineering-values-grid">
      <div className="SNTPEngineering-value-card">
        <h3 className="SNTPEngineering-value-title">Notre unité d'ingénierie maximise l'efficacité de la société SNTP </h3>
      </div>
      <div className="SNTPEngineering-value-card">
        <h3 className="SNTPEngineering-value-title">Compatibilité à 100% avec nos unités de production</h3>
      </div>
      <div className="SNTPEngineering-value-card">
        <h3 className="SNTPEngineering-value-title">Optimisation de projet de bout en bout</h3>
      </div>
    </div>
  </div>
</section>


      {/* ==================== AVANTAGES CONCURRENTIELS ==================== */}
      <section className="SNTPEngineering-main-title-section SNTPEngineering-fade-in-section">
        <h2 className="SNTPEngineering-section-main-title">AVANTAGES CONCURRENTIELS</h2>
        <div className="SNTPEngineering-title-underline"></div>
      </section>

      {/* ==================== EXCELLENCE INTÉGRÉE ==================== */}
      <section className="SNTPEngineering-values-section SNTPEngineering-fade-in-section">
        <div className="SNTPEngineering-container">
          <h2 className="SNTPEngineering-section-main-title">EXCELLENCE INTÉGRÉE</h2>
          <div className="SNTPEngineering-title-underline"></div>

          <div className="SNTPEngineering-values-grid">
            <div className="SNTPEngineering-value-card">
              <h3 className="SNTPEngineering-value-title">Synergie stratégique avec les unités opérationnelles SNTP</h3>
            </div>
            <div className="SNTPEngineering-value-card">
              <h3 className="SNTPEngineering-value-title">Optimisation transversale par collaboration interne</h3>
            </div>
            <div className="SNTPEngineering-value-card">
              <h3 className="SNTPEngineering-value-title">Intégration directe avec les laboratoires de qualité</h3>
            </div>
            <div className="SNTPEngineering-value-card">
              <h3 className="SNTPEngineering-value-title">Délais de livraison de projet améliorés</h3>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== EXPERTISE TECHNIQUE ==================== */}
      <section className="SNTPEngineering-domains-section SNTPEngineering-fade-in-section">
        <div className="SNTPEngineering-container">
          <h2 className="SNTPEngineering-section-main-title">EXPERTISE TECHNIQUE</h2>
          <div className="SNTPEngineering-title-underline"></div>

          <div className="SNTPEngineering-values-grid">
            <div className="SNTPEngineering-value-card">
              <h3 className="SNTPEngineering-value-title">Solutions d'ingénierie pour environnements difficiles</h3>
            </div>
            <div className="SNTPEngineering-value-card">
              <h3 className="SNTPEngineering-value-title">Implémentation BIM avancée (Niveau 2)</h3>
            </div>
            <div className="SNTPEngineering-value-card">
              <h3 className="SNTPEngineering-value-title">Logiciels géotechniques et structurels spécialisés</h3>
            </div>
            <div className="SNTPEngineering-value-card">
              <h3 className="SNTPEngineering-value-title">Modélisation hydraulique et routière avancée</h3>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== MÉTHODOLOGIE & PROCESSUS ==================== */}
      <section className="SNTPEngineering-transform-section SNTPEngineering-fade-in-section">
        <div className="SNTPEngineering-container">
          <h2 className="SNTPEngineering-transform-title">MÉTHODOLOGIE & PROCESSUS</h2>
          <div className="SNTPEngineering-title-underline"></div>
        </div>
      </section>

      {/* ==================== APPROCHE SYSTÉMATIQUE ==================== */}
      <section className="SNTPEngineering-domains-section SNTPEngineering-fade-in-section">
        <div className="SNTPEngineering-container">
          <h2 className="SNTPEngineering-section-main-title">APPROCHE SYSTÉMATIQUE</h2>
          <div className="SNTPEngineering-title-underline"></div>

          <div className="SNTPEngineering-domains-grid">
            <div className="SNTPEngineering-domain-card">
              <div className="SNTPEngineering-domain-icon">
                <img src={iconConception} alt="Approche Icon" />
              </div>
              <ul className="SNTPEngineering-domain-list">
                <li>Analyse approfondie des contraintes sur le terrain</li>
                <li>Évaluation de faisabilité multi-critères</li>
                <li>Développement de conception collaborative</li>
                <li>Optimisation technique et économique</li>
                <li>Documentation d'ingénierie détaillée</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== GESTION DE LA QUALITÉ ==================== */}
      <section className="SNTPEngineering-domains-section SNTPEngineering-fade-in-section">
        <div className="SNTPEngineering-container">
          <h2 className="SNTPEngineering-section-main-title">GESTION DE LA QUALITÉ</h2>
          <div className="SNTPEngineering-title-underline"></div>

          <div className="SNTPEngineering-domains-grid">
            <div className="SNTPEngineering-domain-card">
              <div className="SNTPEngineering-domain-icon">
                <img src={iconRealisation} alt="Qualité Icon" />
              </div>
              <ul className="SNTPEngineering-domain-list">
                <li>Examen systématique par comité technique</li>
                <li>Validation croisée des études</li>
                <li>Conformité aux normes internationales</li>
                <li>Processus d'amélioration continue</li>
                <li>Solutions environnementales durables</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== VISION 2026-2030 ==================== */}
      <section className="SNTPEngineering-main-title-section SNTPEngineering-fade-in-section">
        <h2 className="SNTPEngineering-section-main-title">VISION 2026-2030</h2>
        <div className="SNTPEngineering-title-underline"></div>
      </section>

      <section className="SNTPEngineering-values-section SNTPEngineering-fade-in-section">
        <div className="SNTPEngineering-container">
          <div className="SNTPEngineering-values-grid">
            <div className="SNTPEngineering-value-card">
              <h3 className="SNTPEngineering-value-title">Centre d'excellence en ingénierie d'infrastructure</h3>
            </div>
            <div className="SNTPEngineering-value-card">
              <h3 className="SNTPEngineering-value-title">Capacités BIM et de simulation avancées</h3>
            </div>
            <div className="SNTPEngineering-value-card">
              <h3 className="SNTPEngineering-value-title">Capacité d'ingénierie renforcée</h3>
            </div>
            <div className="SNTPEngineering-value-card">
              <h3 className="SNTPEngineering-value-title">Transformation numérique complète</h3>
            </div>
            <div className="SNTPEngineering-value-card">
              <h3 className="SNTPEngineering-value-title">Innovation technique continue</h3>
            </div>
            <div className="SNTPEngineering-value-card">
              <h3 className="SNTPEngineering-value-title">Développement de solutions durables</h3>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CHIFFRES CLÉS ==================== */}
      <section className="SNTPEngineering-domains-section SNTPEngineering-fade-in-section">
        <div className="SNTPEngineering-container">
          <h2 className="SNTPEngineering-section-main-title">CHIFFRES CLÉS</h2>
          <div className="SNTPEngineering-title-underline"></div>

          <div className="SNTPEngineering-values-grid">
            <div className="SNTPEngineering-value-card">
              <h3 className="SNTPEngineering-value-title">Plus de 20 ingénieurs spécialisés</h3>
            </div>
            <div className="SNTPEngineering-value-card">
              <h3 className="SNTPEngineering-value-title">10+ disciplines techniques couvertes</h3>
            </div>
            <div className="SNTPEngineering-value-card">
              <h3 className="SNTPEngineering-value-title">Performance technique optimisée</h3>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CONTACT SECTION ==================== */}
      <section id="contact-section" className="SNTPEngineering-contact-section SNTPEngineering-fade-in-section">
        <div className="SNTPEngineering-container">
          <h2 className="SNTPEngineering-contact-title">Contactez-Nous</h2>

          <div className="SNTPEngineering-contact-layout">
            {/* Google Map */}
            <div className="SNTPEngineering-contact-map-container">
              <iframe
                className="SNTPEngineering-google-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3196.8931374877826!2d3.0181877!3d36.7638889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fb31d1e1d1d1d%3A0x1d1d1d1d1d1d1d1d!2sVilla%208%20Bois%20des%20Cars%203%2C%20Dely%20Ibrahim!5e0!3m2!1sen!2sdz!4v1234567890123!5m2!1sen!2sdz"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation SNTP Engineering"
              ></iframe>
            </div>

            {/* Contact Info */}
            <div className="SNTPEngineering-contact-info-wrapper">
              <div className="SNTPEngineering-contact-grid">
                <div className="SNTPEngineering-contact-item">
                  <h3 className="SNTPEngineering-contact-label">Adresse</h3>
                  <p className="SNTPEngineering-contact-info">
                    Villa 8 Bois des Cars 3, Dely Ibrahim<br />
                    Alger, Algérie
                  </p>
                </div>

                <div className="SNTPEngineering-contact-item">
                  <h3 className="SNTPEngineering-contact-label">Téléphone</h3>
                  <p className="SNTPEngineering-contact-info">
                    <a href="tel:+213123456789">+213 (0) 23 XX XX XX</a>
                  </p>
                </div>

                <div className="SNTPEngineering-contact-item">
                  <h3 className="SNTPEngineering-contact-label">Email</h3>
                  <p className="SNTPEngineering-contact-info">
                    <a href="mailto:engineering@sntp.dz">engineering@sntp.dz</a>
                  </p>
                </div>
              </div>

              <button 
                className="SNTPEngineering-cta-button SNTPEngineering-primary-button SNTPEngineering-map-button" 
                onClick={handleMapClick}
              >
                <svg className="button-icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                Ouvrir dans Google Maps
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SNTPEngineering;
