import React, { useRef, useEffect } from 'react';
import { Truck, Clock, CreditCard, MapPin } from 'lucide-react';

const DeliverySection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const deliveryMethods = [
    {
      id: 1,
      title: 'СДЭК',
      icon: Truck,
      description: 'Доставка до пункта выдачи'
    },
    {
      id: 2,
      title: 'Boxberry',
      icon: MapPin, 
      description: 'Доставка до пункта выдачи'
    },
    {
      id: 3,
      title: 'DPD',
      icon: Clock,
      description: 'Доставка до пункта выдачи'
    },
    {
      id: 4,
      title: 'Самовывоз',
      icon: CreditCard,
      description: 'Бесплатно из нашей мастерской',
      workingHours: 'с 8:00 до 20:00'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="delivery" className="delivery-section">
      <style>{`
        .delivery-section {
          padding: 6rem 0;
          background: #1a1a1a;
          color: #fff;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
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

        .delivery-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          margin-bottom: 2rem;
        }
        
        @media (max-width: 1200px) {
          .delivery-grid {
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          }
        }

        .delivery-card {
          background: #262626;
          border: 1px solid #333;
          border-radius: 16px;
          padding: 2rem;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .delivery-card.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .delivery-card:hover {
          transform: translateY(-10px);
          border-color: #444;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .delivery-card.highlight {
          background: linear-gradient(135deg, #0066cc, #0052a3);
          border-color: #0077ef;
        }

        .icon-wrapper {
          width: 64px;
          height: 64px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          transition: transform 0.3s ease;
          margin: 0 auto 1.5rem;
        }

        .delivery-card:hover .icon-wrapper {
          transform: scale(1.1) rotate(5deg);
        }

        .delivery-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #fff;
          margin-bottom: 1rem;
          text-align: center;
        }

        .delivery-description {
          color: #ccc;
          margin-bottom: 1.5rem;
          line-height: 1.5;
          text-align: center;
        }

        .delivery-info {
          display: flex;
          justify-content: center;
          padding-top: 1rem;
          margin-bottom: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .info-item {
          text-align: center;
        }

        .info-label {
          color: #999;
          font-size: 0.875rem;
          margin-bottom: 0.25rem;
        }

        .info-value {
          color: #fff;
          font-weight: 600;
        }

        .calc-button {
          width: 100%;
          padding: 0.8rem;
          background: var(--color-primary);
          color: #fff;
          border: none;
          border-radius: 8px;
          font-weight: 500;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .calc-button:hover {
          background: var(--color-accent);
        }

        @media (max-width: 768px) {
          .delivery-section {
            padding: 4rem 0;
          }

          .delivery-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .delivery-card {
            padding: 1.5rem;
          }
        }
      `}</style>

      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Доставка</h2>
        </div>

        <div className="delivery-grid">
          {deliveryMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <div
                key={method.id}
                ref={el => cardsRef.current[index] = el}
                className={`delivery-card ${method.highlight ? 'highlight' : ''}`}
                style={{
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <div className="icon-wrapper">
                  <Icon size={32} color="#fff" />
                </div>
                
                <h3 className="delivery-title">{method.title}</h3>
                <p className="delivery-description">{method.description}</p>
                
                {method.title !== 'Самовывоз' ? (
                  <button className="calc-button">Калькулятор доставки</button>
                ) : (
                  <div className="delivery-info">
                    <div className="info-item">
                      <div className="info-label">Часы работы</div>
                      <div className="info-value">{method.workingHours}</div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;