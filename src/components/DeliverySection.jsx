import React, { useRef, useEffect } from 'react';
import { Truck, Clock, CreditCard, MapPin } from 'lucide-react';

const DeliverySection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const deliveryMethods = [
    {
      id: 1,
      title: 'Курьерская доставка',
      icon: Truck,
      description: 'Доставка до двери в пределах МКАД',
      price: 'от 500 ₽',
      time: '1-2 дня',
      highlight: true
    },
    {
      id: 2,
      title: 'Почта России',
      icon: MapPin,
      description: 'Доставка по всей России',
      price: 'от 300 ₽',
      time: '5-7 дней'
    },
    {
      id: 3,
      title: 'СДЭК',
      icon: Clock,
      description: 'Доставка до пункта выдачи',
      price: 'от 400 ₽',
      time: '3-5 дней'
    },
    {
      id: 4,
      title: 'Самовывоз',
      icon: CreditCard,
      description: 'Бесплатно из нашей мастерской',
      price: 'Бесплатно',
      time: 'В любое время'
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
        }

        .delivery-card:hover .icon-wrapper {
          transform: scale(1.1) rotate(5deg);
        }

        .delivery-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #fff;
          margin-bottom: 1rem;
        }

        .delivery-description {
          color: #ccc;
          margin-bottom: 1.5rem;
          line-height: 1.5;
        }

        .delivery-info {
          display: flex;
          justify-content: space-between;
          padding-top: 1rem;
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

        .info-box {
          background: #262626;
          border: 1px solid #333;
          border-radius: 16px;
          padding: 2rem;
        }

        .info-box-title {
          font-size: 1.25rem;
          color: #fff;
          text-align: center;
          margin-bottom: 2rem;
          font-weight: 600;
        }

        .important-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }

        .important-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          color: #ccc;
        }

        .important-marker {
          width: 8px;
          height: 8px;
          background: var(--color-primary);
          border-radius: 50%;
          flex-shrink: 0;
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

          .info-box {
            padding: 1.5rem;
          }

          .important-list {
            grid-template-columns: 1fr;
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
                
                <div className="delivery-info">
                  <div className="info-item">
                    <div className="info-label">Стоимость</div>
                    <div className="info-value">{method.price}</div>
                  </div>
                  <div className="info-item">
                    <div className="info-label">Срок</div>
                    <div className="info-value">{method.time}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="info-box">
          <h3 className="info-box-title">Важная информация</h3>
          <div className="important-list">
            <div className="important-item">
              <div className="important-marker"></div>
              <span>Доставка осуществляется после полной готовности изделия</span>
            </div>
            <div className="important-item">
              <div className="important-marker"></div>
              <span>Стоимость доставки зависит от региона и выбранного способа</span>
            </div>
            <div className="important-item">
              <div className="important-marker"></div>
              <span>При заказе от 40 000 ₽ доставка по России бесплатная</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;