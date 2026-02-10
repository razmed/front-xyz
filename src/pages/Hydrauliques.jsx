import React from 'react';
import { FaWater, FaCogs, FaAward, FaLeaf, FaChartLine, FaTools, FaClipboardCheck, FaIndustry } from 'react-icons/fa';
import './Hydrauliques.css';

const Hydrauliques = () => {
  // Services d'expertise
  const expertiseCards = [
    {
      id: 1,
      icon: <FaWater />,
      title: "Installations de Traitement des Eaux",
      description: "Développement complet d'installations de traitement des eaux haute performance avec technologies de pointe."
    },
    {
      id: 2,
      icon: <FaCogs />,
      title: "Réseaux Hydrauliques Avancés",
      description: "Ingénierie spécialisée et mise en œuvre de réseaux hydrauliques sophistiqués intégrant des analyses avancées."
    },
    {
      id: 3,
      icon: <FaLeaf />,
      title: "Solutions Durables",
      description: "Solutions hydrauliques durables éprouvées sur le terrain, conformes aux normes environnementales mondiales."
    },
    {
      id: 4,
      icon: <FaTools />,
      title: "Conception à Réalisation",
      description: "Exécution complète de projets de la conception à la réalisation avec expertise approfondie."
    },
    {
      id: 5,
      icon: <FaChartLine />,
      title: "Optimisation des Performances",
      description: "Optimisation et surveillance des performances basées sur les données avec systèmes avancés."
    },
    {
      id: 6,
      icon: <FaClipboardCheck />,
      title: "Maintenance Préventive",
      description: "Systèmes avancés de maintenance préventive garantissant la pérennité des infrastructures."
    }
  ];

  // Projets réalisés
  const projectsRealisations = [
    {
      id: 1,
      icon: <FaIndustry />,
      location: "SAÏDAA/GOUSSA",
      title: "Station d'Épuration des Eaux Usées",
      description: "Ingénierie et construction d'une station d'épuration des eaux usées de grande capacité."
    },
    {
      id: 2,
      icon: <FaWater />,
      location: "OUARGLA",
      title: "Infrastructures de Traitement",
      description: "Développement d'infrastructures avancées de traitement des eaux avec technologies innovantes."
    },
    {
      id: 3,
      icon: <FaCogs />,
      location: "SIDI KHOUILED OUARGLA",
      title: "Usine de Traitement Moderne",
      description: "Mise en œuvre d'une usine moderne de traitement des eaux conforme aux standards internationaux."
    }
  ];

  return (
    <div className="Hydrauliques-page">
      {/* Section Hero */}
      <section 
        className="Hydrauliques-hero" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1581094271901-8022df4466f9?q=80&w=2070')"
        }}
      >
        <div className="Hydrauliques-hero-overlay"></div>
        <div className="Hydrauliques-hero-content">
          <div className="Hydrauliques-badge">QUALIFICATION CATÉGORIE 9</div>
          <h1 className="Hydrauliques-title">TRAVAUX HYDRAULIQUES</h1>
          <p className="Hydrauliques-subtitle-hero">Une Référence d'Excellence et de Durabilité</p>
          <div className="Hydrauliques-divider-hero"></div>
        </div>
      </section>

      {/* Section Excellence */}
      <section className="Hydrauliques-excellence-section">
        <div className="Hydrauliques-content-grid">
          <div className="Hydrauliques-text-box">
            <p className="Hydrauliques-label">SOLUTIONS HYDRAULIQUES AVANCÉES</p>
            <h2 className="Hydrauliques-section-title">Excellence en Ingénierie des Infrastructures Hydrauliques</h2>
            <p className="Hydrauliques-description-text">
              S'appuyant sur des décennies d'expertise spécialisée, <strong>SNTP</strong> démontre une solide maîtrise 
              dans le développement et la réalisation de solutions d'infrastructures hydrauliques.
            </p>
            <p className="Hydrauliques-description-text">
              Notre approche combine harmonieusement l'innovation technique avec la responsabilité environnementale, 
              établissant des références solides en gestion durable des ressources en eau.
            </p>
          </div>

          <div className="Hydrauliques-image-wrapper">
            <div className="Hydrauliques-image-container">
              <img 
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070" 
                alt="Infrastructure hydraulique SNTP" 
                className="Hydrauliques-img"
              />
              <div className="Hydrauliques-image-overlay">
                <div className="Hydrauliques-overlay-text">EXPERTISE CERTIFIÉE</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Notre Expertise */}
      <section className="Hydrauliques-expertise-section">
        <div className="Hydrauliques-expertise-container">
          <div className="Hydrauliques-expertise-header">
            <p className="Hydrauliques-label-white">CE QUE NOUS MAÎTRISONS</p>
            <h2 className="Hydrauliques-section-title-white">Notre Expertise</h2>
            <div className="Hydrauliques-divider-white"></div>
          </div>

          <div className="Hydrauliques-expertise-columns">
            <div className="Hydrauliques-expertise-column">
              <div className="Hydrauliques-column-icon">
                <FaLeaf />
              </div>
              <h3 className="Hydrauliques-column-title">Excellence en Ingénierie Environnementale</h3>
              <ul className="Hydrauliques-expertise-list">
                <li>Développement complet d'installations de traitement des eaux haute performance</li>
                <li>Ingénierie spécialisée et mise en œuvre de réseaux hydrauliques avancés</li>
                <li>Systèmes de traitement des eaux de haute précision intégrant des technologies de pointe</li>
                <li>Solutions hydrauliques durables éprouvées sur le terrain</li>
                <li>Infrastructures hydrauliques sophistiquées intégrant des analyses avancées</li>
              </ul>
            </div>

            <div className="Hydrauliques-expertise-column">
              <div className="Hydrauliques-column-icon">
                <FaChartLine />
              </div>
              <h3 className="Hydrauliques-column-title">Leadership Opérationnel</h3>
              <ul className="Hydrauliques-expertise-list">
                <li>Exécution complète de projets de la conception à la réalisation</li>
                <li>Solutions techniques optimisées en performance</li>
                <li>Alignement rigoureux avec les normes internationales environnementales</li>
                <li>Systèmes avancés de maintenance préventive</li>
                <li>Optimisation et surveillance des performances basées sur les données</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section Services */}
      <section className="Hydrauliques-services-section">
        <div className="Hydrauliques-services-header">
          <p className="Hydrauliques-label">NOS CAPACITÉS</p>
          <h2 className="Hydrauliques-section-title">Services Hydrauliques Avancés</h2>
          <div className="Hydrauliques-divider-center"></div>
        </div>

        <div className="Hydrauliques-services-grid">
          {expertiseCards.map(card => (
            <div key={card.id} className="Hydrauliques-service-card">
              <div className="Hydrauliques-service-icon">
                {card.icon}
              </div>
              <h3 className="Hydrauliques-service-title">{card.title}</h3>
              <p className="Hydrauliques-service-description">{card.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section Réalisations */}
      <section className="Hydrauliques-realisations-section">
        <div className="Hydrauliques-realisations-header">
          <p className="Hydrauliques-label-white">PROJETS D'ENVERGURE</p>
          <h2 className="Hydrauliques-section-title-white">Portfolio Sélectionné des Réalisations SNTP</h2>
          <p className="Hydrauliques-realisations-subtitle">Expertise en Infrastructures de Traitement des Eaux</p>
          <div className="Hydrauliques-divider-white"></div>
        </div>

        <div className="Hydrauliques-realisations-grid">
          {projectsRealisations.map(project => (
            <div key={project.id} className="Hydrauliques-realisation-card">
              <div className="Hydrauliques-realisation-icon">
                {project.icon}
              </div>
              <div className="Hydrauliques-realisation-location">{project.location}</div>
              <h3 className="Hydrauliques-realisation-title">{project.title}</h3>
              <p className="Hydrauliques-realisation-description">{project.description}</p>
              <div className="Hydrauliques-realisation-badge">PROJET RÉALISÉ</div>
            </div>
          ))}
        </div>
      </section>

      {/* Section CTA */}
      <section className="Hydrauliques-cta-section">
        <div className="Hydrauliques-cta-overlay"></div>
        <div className="Hydrauliques-cta-content">
          <div className="Hydrauliques-cta-icon">
            <FaAward />
          </div>
          <h2 className="Hydrauliques-cta-title">Partenaire de Vos Projets Hydrauliques</h2>
          <p className="Hydrauliques-cta-description">
            Confiez vos infrastructures hydrauliques à un leader certifié Catégorie 9. 
            Notre expertise garantit excellence technique et durabilité environnementale.
          </p>
          <a href="/contact" className="Hydrauliques-cta-btn">
            <span>Demander un Devis</span>
            <span className="Hydrauliques-cta-arrow">→</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Hydrauliques;
