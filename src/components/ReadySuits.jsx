import React, { useState, useRef, useEffect } from 'react';
import { ShoppingBag, Eye } from 'lucide-react';
import snow_maiden from '../assets/images/suits/snow_maiden.jpg';

const placeholderSVG = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='1067' viewBox='0 0 800 1067'%3E%3Crect width='800' height='1067' fill='%23262626'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%23666' font-size='24'%3EНет фото%3C/text%3E%3C/svg%3E`;

function ReadySuits() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const suits = [
    {
      id: 1,
      name: "Купальник 'Снегурочка'",
      category: "figure-skating",
      price: 15000,
      height: "130-139 см.",
      images: [snow_maiden],
      available: true,
      tags: ['Новинка']
    },
    {
      id: 2,
      name: "Купальник 'Виктория'",
      category: "figure-skating",
      price: 17000,
      height: "125-129 см.",
      images: [placeholderSVG],
      available: true
    },
    {
      id: 3,
      name: "Купальник 'Лилия'",
      category: "gymnastics",
      price: 16000,
      height: "до 124 см.",
      images: [placeholderSVG],
      available: false
    },
    {
      id: 4,
      name: "Купальник 'Снежинка'",
      category: "figure-skating",
      price: 18500,
      height: "140-154 см.",
      images: [placeholderSVG],
      available: false
    },
    {
      id: 5,
      name: "Купальник 'Феникс'",
      category: "acrobatics",
      price: 16500,
      height: "от 155 см.",
      images: [placeholderSVG],
      available: true
    }
  ];

  const filteredSuits = suits.filter(suit => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'available') return suit.available;
    if (activeFilter === 'sold') return !suit.available;
    if (activeFilter === suit.category) return true;
    
    if (activeFilter.startsWith('height-')) {
      if (!suit.available) return false;
      
      const heightRange = activeFilter.split('-')[1];
      switch (heightRange) {
        case '124': return suit.height === 'до 124 см.';
        case '129': return suit.height === '125-129 см.';
        case '139': return suit.height === '130-139 см.';
        case '154': return suit.height === '140-154 см.';
        case '155': return suit.height === 'от 155 см.';
        default: return false;
      }
    }
    
    return false;
  });

  return (
    <section ref={sectionRef} id="our-works" className="ready-suits-section">
      <style>{`
        .ready-suits-section {
          padding: 6rem 0;
          background: var(--color-secondary);
          color: var(--color-white);
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-title {
          font-size: clamp(2rem, 4vw, 2.5rem);
          margin-bottom: 1rem;
          color: #fff;
        }

        .filters-container {
          max-width: 600px;
          margin: 0 auto 3rem;
          padding: 0 1rem;
          position: relative;
        }

        .filter-select {
          width: 100%;
          padding: 1rem;
          font-size: 1rem;
          color: #fff;
          background-color: #1a1a1a;
          border: 1px solid #333;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 1rem center;
          background-size: 1.5rem;
          padding-right: 3rem;
        }

        .filter-select option {
          background: #1a1a1a;
          color: #fff;
          padding: 1rem;
        }

        .filter-select optgroup {
          background: #1a1a1a;
          color: #fff;
          font-weight: bold;
        }

        .suits-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1.5rem;
          padding: 0 2rem;
          max-width: 1800px;
          margin: 0 auto;
        }

        .suit-card {
          background: #1a1a1a;
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.3s ease;
          position: relative;
          border: 1px solid #333;
        }

        .suit-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }

        .suit-image-container {
          position: relative;
          padding-top: 133%;
          overflow: hidden;
        }

        .suit-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
          background: #262626;
        }

        .suit-card:hover .suit-image {
          transform: scale(1.05);
        }

        .tags-container {
          position: absolute;
          top: 1rem;
          left: 1rem;
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          z-index: 2;
        }

        .tag {
          background: var(--color-primary);
          color: #fff;
          padding: 0.4rem 0.8rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 500;
        }

        .tag.sold {
          background: #00e6ff;
          color: #1a1a1a;
        }

        .suit-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .suit-card:hover .suit-overlay {
          opacity: 1;
        }

        .quick-view-btn {
          background: var(--color-primary);
          color: #fff;
          border: none;
          padding: 0.8rem 1.5rem;
          border-radius: 30px;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          transform: translateY(20px);
          transition: all 0.3s ease;
        }

        .suit-card:hover .quick-view-btn {
          transform: translateY(0);
        }

        .suit-content {
          padding: 1rem;
          background: #1a1a1a;
          color: #fff;
        }
        
        .suit-title {
          font-size: 1.2rem;
          color: #fff;
          margin-bottom: 0.75rem;
          font-weight: 600;
        }

        .suit-details {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .suit-details.sold {
          justify-content: flex-start;
        }

        .suit-size {
          color: #ccc;
          font-size: 0.9rem;
        }

        .suit-price {
          color: #fff;
          font-weight: 600;
          font-size: 1.2rem;
        }

        .suit-action-btn {
          width: 100%;
          padding: 0.8rem;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 500;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .buy-btn {
          background: var(--color-primary);
          color: #fff;
        }

        .buy-btn:hover {
          background: var(--color-accent);
        }

        .order-btn {
          background: #00e6ff;
          color: #1a1a1a;
          font-weight: 600;
        }

        .order-btn:hover {
          background: #00ccff;
        }

        .order-btn svg {
          color: #1a1a1a;
        }

        @media (max-width: 1600px) {
          .suits-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        @media (max-width: 1200px) {
          .suits-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 992px) {
          .suits-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .ready-suits-section {
            padding: 4rem 0;
          }

          .suits-grid {
            grid-template-columns: 1fr;
            padding: 0 1rem;
            gap: 1.5rem;
          }
        }
      `}</style>

      <div className="section-header">
        <h2 className="section-title">Наши работы</h2>
      </div>

      <div className="filters-container">
        <select
          className="filter-select"
          value={activeFilter}
          onChange={(e) => setActiveFilter(e.target.value)}
        >
          <option value="all">Все купальники</option>
          <option value="available">В наличии</option>
          <option value="sold">Продано</option>
          <optgroup label="Рост">
            <option value="height-124">до 124 см.</option>
            <option value="height-129">125-129 см.</option>
            <option value="height-139">130-139 см.</option>
            <option value="height-154">140-154 см.</option>
            <option value="height-155">от 155 см.</option>
          </optgroup>
          <optgroup label="Категории">
            <option value="gymnastics">Художественная гимнастика</option>
            <option value="figure-skating">Фигурное катание</option>
            <option value="acrobatics">Спортивная акробатика</option>
          </optgroup>
        </select>
      </div>

      <div className="suits-grid">
        {filteredSuits.map(suit => (
          <article key={suit.id} className="suit-card">
            <div className="suit-image-container">
              <div className="tags-container">
                {suit.tags && suit.tags.map((tag, index) => (
                  <span key={index} className="tag">{tag}</span>
                ))}
                {!suit.available && (
                  <span className="tag sold">Продано</span>
                )}
              </div>
              <img 
                src={suit.images[0]} 
                alt={suit.name}
                className="suit-image"
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = placeholderSVG;
                }}
              />
              <div className="suit-overlay">
                <button className="quick-view-btn">
                  <Eye size={18} />
                  Быстрый просмотр
                </button>
              </div>
            </div>

            <div className="suit-content">
              <h3 className="suit-title">{suit.name}</h3>
              <div className={`suit-details ${!suit.available ? 'sold' : ''}`}>
                <span className="suit-size">Рост: {suit.height}</span>
                {suit.available && (
                  <span className="suit-price">
                    {suit.price.toLocaleString('ru-RU')} ₽
                  </span>
                )}
              </div>
              {suit.available ? (
                <button className="suit-action-btn buy-btn">
                  <ShoppingBag size={18} />
                  Купить
                </button>
              ) : (
                <button className="suit-action-btn order-btn">
                  <ShoppingBag size={18} />
                  Заказать
                </button>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ReadySuits;