import React, { useRef, useEffect } from 'react';
import { Ruler, Crown } from 'lucide-react';

const PricesSection = () => {
 const cards = [
   {
     icon: Ruler,
     height: "до 124",
     price: "20 000",
     isHighlighted: false
   },
   {
     icon: Ruler, 
     height: "125-129",
     price: "25 000",
     isHighlighted: false
   },
   {
     icon: Crown,
     height: "130-139",
     price: "30 000", 
     isHighlighted: true
   },
   {
     icon: Ruler,
     height: "140-154",
     price: "35 000",
     isHighlighted: false
   },
   {
     icon: Ruler,
     height: "от 155",
     price: "40 000",
     isHighlighted: false
   }
 ];

 return (
   <section id="prices" className="prices-section">
     <style>{`
       .prices-section {
         padding: 6rem 0;
         background: #1a1a1a;
         min-height: 100vh;
       }

       .container {
        max-width: 1200px;  // Уменьшаем с 1400px до 1200px
        width: 100%;
        margin: 0 auto;
        padding: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
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

       .section-subtitle {
         font-size: clamp(1rem, 2vw, 1.25rem);
         color: #ccc;
         max-width: 600px;
         margin: 0 auto;
       }

       .prices-grid {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 1.5rem;
        margin-bottom: 3rem;
      }
      
      .price-card {
        width: 100%;
      }

       .price-card {
         background: #262626;
         border: 1px solid #333;
         border-radius: 16px;
         padding: 2rem;
         height: 500px;
         display: flex;
         flex-direction: column;
         position: relative;
       }

       .price-card.highlighted {
         background: linear-gradient(135deg, #0066cc, #0052a3);
         border-color: #0077ef;
       }

       .price-card:hover {
         transform: translateY(-10px);
         box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
         border-color: #444;
       }

       .icon-wrapper {
         width: 80px;
         height: 80px;
         margin: 0 auto 1.5rem;
         background: rgba(255, 255, 255, 0.1);
         border-radius: 16px;
         display: flex;
         align-items: center;
         justify-content: center;
         transition: transform 0.3s ease;
       }

       .price-card:hover .icon-wrapper {
         transform: scale(1.1) rotate(5deg);
       }

       .icon-wrapper svg {
         width: 40px;
         height: 40px;
         color: #fff;
       }

       .height-range {
         font-size: 1.25rem;
         color: #fff;
         text-align: center;
         white-space: nowrap;
         margin-bottom: 1rem;
       }

       .price-value {
         font-size: 2rem;
         font-weight: 700;
         color: #fff;
         text-align: left;
         white-space: nowrap;
         margin-bottom: 1.5rem;
         padding-bottom: 1.5rem;
         border-bottom: 1px solid rgba(255, 255, 255, 0.1);
       }

       .additional-info {
         margin-bottom: auto;
       }

       .additional-title {
         font-weight: 600;
         color: #fff;
         margin-bottom: 1rem;
       }

       .additional-list {
         list-style: none;
         padding: 0;
         margin: 0;
         color: #ccc;
       }

       .additional-list li {
         margin-bottom: 0.75rem;
       }

       .price-button {
         display: flex;
         align-items: center;
         justify-content: center;
         width: 100%;
         padding: 1rem;
         border: none;
         border-radius: 8px;
         font-size: 1rem;
         font-weight: 500;
         cursor: pointer;
         transition: all 0.3s ease;
         margin-top: 1.5rem;
       }

       .price-card:not(.highlighted) .price-button {
         background: var(--color-primary);
         color: #fff;
       }

       .price-card:not(.highlighted) .price-button:hover {
         background: var(--color-accent);
       }

       .price-card.highlighted .price-button {
         background: #fff;
         color: var(--color-primary);
       }

       @media (max-width: 1200px) {
         .prices-grid {
           grid-template-columns: repeat(3, 1fr);
         }
       }

       @media (max-width: 768px) {
         .prices-grid {
           grid-template-columns: 1fr;
         }
       }
     `}</style>

     <div className="container">
       <div className="section-header">
         <h2 className="section-title">Цены</h2>
         <p className="section-subtitle">
           Стоимость изготовления купальника на заказ
         </p>
       </div>

       <div className="prices-grid">
         {cards.map((card, index) => {
           const Icon = card.icon;
           return (
             <div
               key={index}
               className={`price-card ${card.isHighlighted ? 'highlighted' : ''}`}
             >
               <div className="icon-wrapper">
                 <Icon />
               </div>
               
               <div className="height-range">
                 Рост {card.height} см
               </div>
               
               <div className="price-value">
                 от {card.price}₽
               </div>

               <div className="additional-info">
                 <div className="additional-title">Дополнительно</div>
                 <ul className="additional-list">
                   <li>Рукав — 2 500 ₽ (1 шт)</li>
                   <li>Юбка — 4 000 ₽</li>
                 </ul>
               </div>

               <button className="price-button">
                 Заказать
               </button>
             </div>
           );
         })}
       </div>
     </div>
   </section>
 );
};

export default PricesSection;