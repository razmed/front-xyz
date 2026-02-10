import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero/Hero';
import { FaBuilding, FaRoad, FaTruck, FaHardHat, FaCogs, FaChartLine, FaIndustry, FaCheckCircle, FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { getAllArticles } from '../services/articleService';
import './Home.css';

// Importez vos logos ici
import logo1 from './images/logo1.png';
import logo2 from './images/logo2.png';
import logo3 from './images/logo3.png';
import logo4 from './images/logo4.png';
import logo5 from './images/logo5.png';
import logo6 from './images/logo6.png';
import logo7 from './images/logo7.png';
import logo8 from './images/logo8.png';
import logo9 from './images/logo9.png';
import logo10 from './images/logo10.png';
import logo11 from './images/logo11.png';
import logo12 from './images/logo12.png';

// Images
import equipmentImage from './images/equipment-parc.jpg';
import careerImage from './images/career-bg.jpg';

const Home = () => {
  const { t } = useTranslation(['common', 'home']);
  const scrollerRef = useRef(null);
  const equipmentSectionRef = useRef(null);
  const newsCarouselRef = useRef(null);
  const autoPlayRef = useRef(null);
  const [isEquipmentVisible, setIsEquipmentVisible] = useState(false);
  const [currentNewsSlide, setCurrentNewsSlide] = useState(0);
  const [newsArticles, setNewsArticles] = useState([]);
  const [loadingNews, setLoadingNews] = useState(true);
  const [isHoveringNews, setIsHoveringNews] = useState(false);

  // Logos des entreprises partenaires
  const partnerLogos = [
    { id: 1, src: logo1, alt: 'CSTE' },
    { id: 2, src: logo2, alt: 'Sonelgaz' },
    { id: 3, src: logo3, alt: 'COSIDER' },
    { id: 4, src: logo4, alt: 'Sonatrach' },
    { id: 5, src: logo5, alt: 'Sonelgaz' },
    { id: 6, src: logo6, alt: 'ENTP' },
    { id: 7, src: logo7, alt: 'Partner 7' },
    { id: 8, src: logo8, alt: 'Partner 8' },
    { id: 9, src: logo9, alt: 'Partner 9' },
    { id: 10, src: logo10, alt: 'Partner 10' },
    { id: 11, src: logo11, alt: 'Partner 11' },
    { id: 12, src: logo12, alt: 'Partner 12' },
  ];

  // Données des moyens matériels
  const equipmentData = [
    { id: 1, category: 'Terrassement', count: 650 },
    { id: 2, category: 'Ouvrage d\'art', count: 80 },
    { id: 3, category: 'Chaussée', count: 300 },
    { id: 4, category: 'Bâtiment', count: 120 },
    { id: 5, category: 'Autres', count: 500 },
  ];

  const totalEquipment = equipmentData.reduce((sum, item) => sum + item.count, 0);
  const maxCount = Math.max(...equipmentData.map(item => item.count));

  // Calculer le nombre de slides (nombre d'articles - 2 car on affiche 3 à la fois)
  const totalSlides = newsArticles.length > 2 ? newsArticles.length - 2 : 1;

  // Charger les 5 derniers articles
  useEffect(() => {
    loadLatestNews();
  }, []);

  const loadLatestNews = async () => {
    try {
      setLoadingNews(true);
      const response = await getAllArticles({
        statut: 'publie',
        page: 1,
        limit: 5,
        sortBy: 'datePublication',
        sortOrder: 'DESC'
      });
      
      setNewsArticles(response.data || []);
    } catch (error) {
      console.error('❌ Erreur chargement actualités:', error);
      setNewsArticles([]);
    } finally {
      setLoadingNews(false);
    }
  };

  // Formater la date
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  // Obtenir le label du type de contenu
  const getTypeLabel = (item) => {
    if (item.typeContenu === 'mention_media') {
      return 'MENTION MÉDIAS';
    }
    return 'ACTUALITÉS ENTREPRISE';
  };

  // Animation du carrousel des logos
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    let scrollPosition = 0;
    const scrollSpeed = 1;
    const itemWidth = 250;
    const totalWidth = itemWidth * partnerLogos.length;

    const scroll = () => {
      scrollPosition += scrollSpeed;
      
      if (scrollPosition >= totalWidth) {
        scrollPosition = 0;
      }
      
      scroller.style.transform = `translateX(-${scrollPosition}px)`;
      requestAnimationFrame(scroll);
    };

    const animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, [partnerLogos.length]);

  // Observer pour détecter quand la section équipement est visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isEquipmentVisible) {
            setIsEquipmentVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (equipmentSectionRef.current) {
      observer.observe(equipmentSectionRef.current);
    }

    return () => {
      if (equipmentSectionRef.current) {
        observer.unobserve(equipmentSectionRef.current);
      }
    };
  }, [isEquipmentVisible]);

  // Auto-play du carrousel d'actualités (toutes les 2 secondes)
  useEffect(() => {
    if (!loadingNews && newsArticles.length > 0 && !isHoveringNews) {
      autoPlayRef.current = setInterval(() => {
        setCurrentNewsSlide((prev) => {
          return (prev + 1) % totalSlides;
        });
      }, 2000);

      return () => {
        if (autoPlayRef.current) {
          clearInterval(autoPlayRef.current);
        }
      };
    }
    
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [loadingNews, newsArticles.length, isHoveringNews, totalSlides]);

  // Navigation circulaire du carrousel d'actualités
  const handleNewsNext = () => {
    setCurrentNewsSlide((prev) => {
      return (prev + 1) % totalSlides;
    });
  };

  const handleNewsPrev = () => {
    setCurrentNewsSlide((prev) => {
      return (prev - 1 + totalSlides) % totalSlides;
    });
  };

  const handleNewsDot = (index) => {
    setCurrentNewsSlide(index);
  };

  // Arrêter l'auto-play au survol
  const handleNewsMouseEnter = () => {
    setIsHoveringNews(true);
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  };

  const handleNewsMouseLeave = () => {
    setIsHoveringNews(false);
  };

  return (
    <div className="Home-page">
      {/* Hero Section */}
      <Hero />

      {/* Stats Overlap Section */}
      <section className="Home-stats-overlap-section">
        <div className="container-fluid">
          <div className="Home-stats-overlap-grid">
            <div className="Home-stat-overlap-card">
              <FaChartLine className="Home-stat-overlap-icon" />
              <div className="Home-stat-overlap-content">
                <div className="Home-stat-overlap-number">50+</div>
                <div className="Home-stat-overlap-label">Années d'expérience</div>
              </div>
            </div>
            <div className="Home-stat-overlap-card">
              <FaBuilding className="Home-stat-overlap-icon" />
              <div className="Home-stat-overlap-content">
                <div className="Home-stat-overlap-number">1200+</div>
                <div className="Home-stat-overlap-label">Projets réalisés</div>
              </div>
            </div>
            <div className="Home-stat-overlap-card">
              <FaTruck className="Home-stat-overlap-icon" />
              <div className="Home-stat-overlap-content">
                <div className="Home-stat-overlap-number">200+</div>
                <div className="Home-stat-overlap-label">Engins modernes</div>
              </div>
            </div>
            <div className="Home-stat-overlap-card">
              <FaIndustry className="Home-stat-overlap-icon" />
              <div className="Home-stat-overlap-content">
                <div className="Home-stat-overlap-number">98%</div>
                <div className="Home-stat-overlap-label">Taux de satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="Home-about-preview-section">
        <div className="container-fluid">
          <div className="Home-about-preview-grid">
            <div className="Home-about-preview-image">
              <img src="/images/about-preview.jpg" alt="À propos SNTP" />
              <div className="Home-experience-badge">
                <div className="Home-experience-number">50+</div>
                <div className="Home-experience-text">Ans d'excellence</div>
              </div>
            </div>
            <div className="Home-about-preview-content">
              <h3 className="Home-section-subtitle">À PROPOS DE SNTP</h3>
              <h2 className="Home-section-title">Leader National des Travaux Publics</h2>
              <div className="Home-section-divider"></div>
              <p className="Home-about-preview-text">
                <strong>SNTP (Société Nationale des Travaux Publics)</strong> façonne le paysage infrastructurel algérien.
                Acteur historique et leader national, nous conjuguons expertise technique, innovation et engagement social
                pour bâtir des ouvrages qui résistent au temps et servent l'intérêt public.
              </p>
              <ul className="Home-about-features-list">
                <li>
                  <FaCheckCircle className="Home-check-icon" />
                  <span>Infrastructure routière de classe mondiale</span>
                </li>
                <li>
                  <FaCheckCircle className="Home-check-icon" />
                  <span>Équipement moderne et performant</span>
                </li>
                <li>
                  <FaCheckCircle className="Home-check-icon" />
                  <span>Respect des normes internationales</span>
                </li>
                <li>
                  <FaCheckCircle className="Home-check-icon" />
                  <span>Équipe d'experts qualifiés</span>
                </li>
              </ul>
              <Link to="/about" className="Home-btn-primary">
                En savoir plus
                <FaArrowRight className="Home-btn-arrow" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Ils nous font confiance */}
      <section className="Home-partners-section">
        <div className="container-fluid">
          <div className="Home-section-header-center">
            <h3 className="Home-section-subtitle">NOS RÉFÉRENCES</h3>
            <h2 className="Home-section-title">Ils nous font confiance</h2>
            <div className="Home-section-divider-center"></div>
          </div>

          <div className="Home-partners-carousel-wrapper">
            <div className="Home-partners-carousel-container">
              <div className="Home-partners-carousel-track" ref={scrollerRef}>
                {partnerLogos.map((logo) => (
                  <div key={`first-${logo.id}`} className="Home-partner-logo-item">
                    <img src={logo.src} alt={logo.alt} />
                  </div>
                ))}
                {partnerLogos.map((logo) => (
                  <div key={`second-${logo.id}`} className="Home-partner-logo-item">
                    <img src={logo.src} alt={logo.alt} />
                  </div>
                ))}
                {partnerLogos.map((logo) => (
                  <div key={`third-${logo.id}`} className="Home-partner-logo-item">
                    <img src={logo.src} alt={logo.alt} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: Moyens Matériels */}
      <section className="Home-equipment-section" ref={equipmentSectionRef}>
        <div className="container-fluid">
          <div className="Home-section-header-center">
            <h3 className="Home-section-subtitle">NOTRE PARC</h3>
            <h2 className="Home-section-title">Moyens Matériels</h2>
            <div className="Home-section-divider-center"></div>
            <p className="Home-section-description">
              Un parc moderne de plus de 1 650 engins pour répondre à tous vos besoins en travaux publics
            </p>
          </div>

          <div className="Home-equipment-content">
            <div className="Home-equipment-bars-container">
              {equipmentData.map((equipment, index) => {
                const percentage = (equipment.count / maxCount) * 100;
                const animationDelay = index * 0.15;

                return (
                  <div key={equipment.id} className="Home-equipment-bar-wrapper">
                    <div className="Home-equipment-bar-header">
                      <div className="Home-equipment-bar-label">
                        <span className="Home-equipment-category">{equipment.category}</span>
                      </div>
                      <div className="Home-equipment-bar-value">
                        <span className="Home-equipment-count">
                          {isEquipmentVisible ? `+${equipment.count}` : '0'}
                        </span>
                        <span className="Home-equipment-unit">engins</span>
                      </div>
                    </div>
                    <div className="Home-equipment-bar-track">
                      <div
                        className={`Home-equipment-bar-fill ${isEquipmentVisible ? 'animate' : ''}`}
                        style={{
                          width: isEquipmentVisible ? `${percentage}%` : '0%',
                          animationDelay: `${animationDelay}s`
                        }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="Home-equipment-image-wrapper">
              <div className="Home-equipment-image-container">
                <img src={equipmentImage} alt="Parc d'engins SNTP" className="Home-equipment-main-image" />
                <div className="Home-equipment-image-overlay">
                  <div className="Home-equipment-total-badge">
                    <div className="Home-equipment-total-label">Total des engins</div>
                    <div className="Home-equipment-total-number">
                      {isEquipmentVisible ? `+${totalEquipment.toLocaleString()}` : '0'}
                    </div>
                    <div className="Home-equipment-total-text">engins disponibles</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: Quality of Our People - Vidéo Background */}
      <section className="Home-people-video-section">
        <div className="Home-people-video-bg">
          <video 
            className="Home-people-video" 
            autoPlay 
            loop 
            muted 
            playsInline
          >
            <source src="/videos/people-background.mp4" type="video/mp4" />
            <img src="/images/people-fallback.jpg" alt="Notre équipe" />
          </video>
          <div className="Home-people-video-overlay"></div>
        </div>
        
        <div className="container-fluid">
          <div className="Home-people-content-grid">
            <div className="Home-people-left">
              <h2 className="Home-people-title">
                DEFINED BY THE<br />QUALITY OF OUR PEOPLE
              </h2>
            </div>
            
            <div className="Home-people-right">
              <p className="Home-people-description">
                Our people bring technical excellence, ingenuity, drive, creativity, and 
                experience to help our customers achieve their bold visions. We succeed 
                through partnership and a shared desire to make a difference. Motivated by 
                tomorrow's challenges, we push the limits of what's possible.
              </p>
              <Link to="/projects" className="Home-people-btn">
                <span className="Home-people-btn-icon">
                  <FaArrowRight />
                </span>
                <span className="Home-people-btn-text">Découvrir nos projets</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: Carrière chez SNTP */}
      <section className="Home-career-section">
        <div className="Home-career-image-bg">
          <img src={careerImage} alt="Carrière chez SNTP" className="Home-career-bg-img" />
          <div className="Home-career-overlay"></div>
        </div>
        <div className="container-fluid">
          <div className="Home-career-content">
            <div className="Home-career-accent-line"></div>
            <h2 className="Home-career-title">Carrières chez SNTP</h2>
            <p className="Home-career-description">
              Depuis plus de 50 ans, les employés de SNTP contribuent à offrir aux collectivités des infrastructures durables, 
              des moyens de transport sécuritaires et des ouvrages d'art exceptionnels. Chez SNTP, les équipes sont fières de 
              leur travail, car il a un impact réel. Vous ferez partie d'équipes performantes, apprendrez aux côtés d'experts 
              de l'industrie et aurez accès à des ressources et opportunités exceptionnelles pour développer votre carrière.
            </p>
            <Link to="/nous-rejoindre" className="Home-career-btn">
              Carrières chez SNTP
              <FaArrowRight className="Home-career-btn-arrow" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION: Notre Actualité */}
      {!loadingNews && newsArticles.length > 0 && (
        <section 
          className="Home-news-section"
          onMouseEnter={handleNewsMouseEnter}
          onMouseLeave={handleNewsMouseLeave}
        >
          <div className="container-fluid">
            <div className="Home-news-header">
              <h2 className="Home-news-title">Notre Actualité</h2>
              <div className="Home-news-navigation">
                <div className="Home-news-dots">
                  {Array.from({ length: totalSlides }).map((_, index) => (
                    <button
                      key={index}
                      className={`Home-news-dot ${currentNewsSlide === index ? 'active' : ''}`}
                      onClick={() => handleNewsDot(index)}
                      aria-label={`Aller au groupe ${index + 1}`}
                    />
                  ))}
                </div>
                <div className="Home-news-arrows">
                  <button 
                    className="Home-news-arrow-btn Home-news-prev" 
                    onClick={handleNewsPrev}
                    aria-label="Groupe précédent"
                  >
                    <FaChevronLeft />
                  </button>
                  <button 
                    className="Home-news-arrow-btn Home-news-next" 
                    onClick={handleNewsNext}
                    aria-label="Groupe suivant"
                  >
                    <FaChevronRight />
                  </button>
                </div>
              </div>
            </div>

            <div className="Home-news-carousel-wrapper">
              <div 
                className="Home-news-carousel-track"
                ref={newsCarouselRef}
                style={{
                  transform: `translateX(-${currentNewsSlide * (100 / 3)}%)`,
                  transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              >
                {newsArticles.map((article) => (
                  <div key={article.id} className="Home-news-card">
                    <div className="Home-news-card-image">
                      <img 
                        src={article.imageUrl || '/images/default-news.jpg'} 
                        alt={article.titre || 'Article SNTP'}
                        loading="lazy"
                        onError={(e) => {
                          e.target.src = '/images/default-news.jpg';
                        }}
                      />
                    </div>
                    <div className="Home-news-card-content">
                      <div className="Home-news-card-category">{getTypeLabel(article)}</div>
                      <h3 className="Home-news-card-title">{article.titre}</h3>
                      <div className="Home-news-card-meta">
                        <span className="Home-news-card-location">SNTP</span>
                        <span className="Home-news-card-separator">|</span>
                        <span className="Home-news-card-date">{formatDate(article.datePublication)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="Home-news-cta">
              <Link to="/blog" className="Home-news-btn">
                Voir toutes les actualités
                <FaArrowRight className="Home-news-btn-arrow" />
              </Link>
            </div>
          </div>
        </section>
      )}
      {/* SECTION: Contactez-nous */}
<section className="Home-contact-section">
  <div className="container-fluid">
    <div className="Home-contact-content">
      <h2 className="Home-contact-title">Une Question ? Un Projet ?</h2>
      <p className="Home-contact-subtitle">Contactez-Nous</p>
      <p className="Home-contact-text">
        Notre équipe d'experts est à votre écoute pour répondre à toutes vos questions 
        et vous accompagner dans la réalisation de vos projets d'infrastructures.
      </p>
      <Link to="/about-us" className="Home-btn-white-contact">
        Contactez-nous
        <FaArrowRight />
      </Link>
    </div>
  </div>
</section>

      
    </div>
  );
};

export default Home;
