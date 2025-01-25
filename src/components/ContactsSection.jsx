import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactsSection = () => {
  return (
    <section id="contacts" className="contacts-section">
      <style>{`
        .contacts-section {
          padding: 6rem 0;
          background: #1a1a1a;
          color: #fff;
          min-height: 100vh;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-title {
          font-size: clamp(2rem, 4vw, 2.5rem);
          color: #fff;
          margin-bottom: 1rem;
        }

        .contacts-wrapper {
          display: grid;
          grid-template-columns: 350px 3fr;
          gap: 2rem;
          height: 600px;
          max-width: 1800px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .contacts-card {
          background: #262626;
          border: 1px solid #333;
          border-radius: 16px;
          padding: 2.5rem;
          height: 100%;
        }

        .contacts-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          transition: all 0.3s ease;
        }

        .contact-item:hover {
          transform: translateX(5px);
          background: rgba(255, 255, 255, 0.1);
        }

        .contact-icon {
          background: var(--color-primary);
          width: 40px;
          height: 40px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }

        .contact-item:hover .contact-icon {
          transform: scale(1.1) rotate(5deg);
        }

        .contact-icon svg {
          color: #fff;
          width: 20px;
          height: 20px;
        }

        .contact-info {
          flex: 1;
        }

        .contact-label {
          color: #999;
          font-size: 0.875rem;
          margin-bottom: 0.25rem;
        }

        .contact-value {
          color: #fff;
          font-size: 1rem;
          line-height: 1.5;
        }

        .contact-link {
          color: #fff;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .contact-link:hover {
          color: var(--color-primary);
        }

        .map-container {
          position: relative;
          height: 100%;
          border-radius: 16px;
          overflow: hidden;
          width: 100%;
        }

        .map-container iframe {
          width: 100%;
          height: 100%;
          border: 0;
        }

        @media (max-width: 1200px) {
          .contacts-wrapper {
            grid-template-columns: 350px 2fr;
          }
        }

        @media (max-width: 992px) {
          .contacts-wrapper {
            grid-template-columns: 1fr;
            height: auto;
            gap: 1.5rem;
          }

          .map-container {
            height: 400px;
          }
        }

        @media (max-width: 768px) {
          .contacts-section {
            padding: 4rem 0;
          }

          .contacts-card {
            padding: 1.5rem;
          }

          .contact-item:hover {
            transform: none;
          }
        }
      `}</style>

      <div className="section-header">
        <h2 className="section-title">Контакты</h2>
      </div>

      <div className="contacts-wrapper">
        <div className="contacts-card">
          <div className="contacts-list">
            <div className="contact-item">
              <div className="contact-icon">
                <Phone />
              </div>
              <div className="contact-info">
                <div className="contact-label">Телефон</div>
                <a href="tel:+7999999999" className="contact-link contact-value">
                  +7 (999) 999-99-99
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <Mail />
              </div>
              <div className="contact-info">
                <div className="contact-label">Email</div>
                <a href="mailto:info@example.com" className="contact-link contact-value">
                  info@example.com
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <MapPin />
              </div>
              <div className="contact-info">
                <div className="contact-label">Адрес</div>
                <div className="contact-value">
                  г. Москва, ул. Примерная, д. 1
                </div>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <Clock />
              </div>
              <div className="contact-info">
                <div className="contact-label">Время работы</div>
                <div className="contact-value">
                  Пн-Пт: 10:00 - 19:00<br />
                  Сб: 11:00 - 17:00
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="map-container">
          <iframe 
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab696df2fc21545adbe50d3425866ebbea11fb5956ec7cf0467c5018b960509bc&amp;source=constructor" 
            title="Карта расположения"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;