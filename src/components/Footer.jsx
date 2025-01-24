import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <style>{`
        .footer {
          background-color: #1a1a1a;
          color: #fff;
          padding: 2rem 0;
          margin-top: auto;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .footer-content {
          text-align: center;
        }

        .footer-logo {
          font-size: 1.5rem;
          font-weight: bold;
          color: #fff;
          margin-bottom: 1rem;
        }

        .footer-links {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-bottom: 1.5rem;
        }

        .footer-link {
          color: #ccc;
          text-decoration: none;
          transition: all 0.3s ease;
          position: relative;
          padding: 0.25rem 0;
        }

        .footer-link:hover {
          color: #fff;
          transform: translateX(5px);
        }

        .footer-info {
          font-size: 0.9rem;
          color: #888;
          margin-bottom: 1rem;
        }

        .footer-info p {
          margin: 0.5rem 0;
        }

        .copyright {
          font-size: 0.9rem;
          color: #666;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .copyright-icon {
          font-size: 1.1rem;
        }

        @media (max-width: 768px) {
          .footer-links {
            flex-direction: column;
            gap: 1rem;
          }

          .footer-link {
            display: inline-block;
            padding: 0.5rem 0;
          }
        }
      `}</style>

      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">JULDEM</div>
          
          <nav className="footer-links">
            <a href="#main" className="footer-link">Главная</a>
            <a href="#about" className="footer-link">О нас</a>
            <a href="#our-works" className="footer-link">Наши работы</a>
            <a href="#prices" className="footer-link">Цены</a>
            <a href="#delivery" className="footer-link">Доставка</a>
            <a href="#contacts" className="footer-link">Контакты</a>
          </nav>

          <div className="footer-info">
            <p>Индивидуальный пошив спортивных купальников</p>
            <p>г. Москва, ул. Примерная, д. 1</p>
            <p>Тел.: +7 (999) 999-99-99</p>
          </div>

          <div className="copyright">
            <span className="copyright-icon">©</span>
            <span>2017-{currentYear} JULDEM. Все права защищены.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;