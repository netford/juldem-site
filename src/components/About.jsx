import React, { useRef, useEffect } from 'react';
import { Award, Brush, Users } from 'lucide-react';
import { halfBlock } from '../assets/images';

const About = () => {
 const sectionRef = useRef(null);
 const itemsRef = useRef([]);

 useEffect(() => {
   const observer = new IntersectionObserver(
     (entries) => {
       entries.forEach((entry) => {
         if (entry.isIntersecting) {
           entry.target.classList.add('visible');
         }
       });
     },
     {
       threshold: 0.1
     }
   );

   itemsRef.current.forEach((item) => {
     if (item) observer.observe(item);
   });

   return () => observer.disconnect();
 }, []);

 const features = [
  {
    icon: Award,
    title: 'Опыт и профессионализм',
    description: 'Мастерская по пошиву спортивных купальников Юлии Дёминой основана в 2017 году. За 7 с лишним лет мы стали профессионалами в создании костюмов для художественной гимнастики, спортивной акробатики и фигурного катания. С 2024 года работаем под брендом "JULDEM".',
    detail: 'Идеальный крой купальника позволяет спортсмену забыть о костюме и полностью погрузиться в выступление.'
  },
  {
    icon: Brush,
    title: 'Передовые технологии',
    description: 'В нашем арсенале — передовые технологии: аэрография, инкрустация стразами и 3D-дизайн.',
    detail: 'Это позволяет воплощать любые идеи, создавая уникальные модели, которые не только впечатляют визуально, но и полностью соответствуют всем требованиям к соревновательным костюмам.'
  },
  {
    icon: Users,
    title: 'Клиенты и достижения',
    description: 'Работаем со спортсменами всех уровней из России и зарубежья. В нашем портфолио — сотни довольных клиентов, от начинающих до профессиональных спортсменов.',
    detail: 'Помимо индивидуальных заказов всегда в наличии имеется коллекция готовых моделей.'
  }
];

 return (
   <section ref={sectionRef} id="about" className="about-section">
     <style>{`
       .about-section {
         padding: 6rem 0;
         background: #1a1a1a;
         overflow: hidden;
       }

       .section-header {
         text-align: center;
         margin-bottom: 4rem;
       }

       .section-title {
         font-size: clamp(2rem, 4vw, 2.5rem);
         color: #fff;
         margin-bottom: 1rem;
         font-weight: var(--font-weight-bold);
       }

       .about-container {
         display: grid;
         grid-template-columns: 1fr 400px;
         gap: 4rem;
         max-width: 1200px;
         margin: 0 auto;
         padding: 0 2rem;
       }

       .features-list {
         display: flex;
         flex-direction: column;
         gap: 2rem;
       }

       .feature-card {
         background: #262626;
         border: 1px solid #333;
         border-radius: 16px;
         padding: 2rem;
         box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
         transform: translateY(40px);
         opacity: 0;
         transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
       }

       .feature-card.visible {
         transform: translateY(0);
         opacity: 1;
       }

       .feature-card:hover {
         transform: translateY(-10px);
         box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
         border-color: #444;
       }

       .feature-header {
         display: flex;
         align-items: center;
         gap: 1rem;
         margin-bottom: 1.5rem;
       }

       .icon-wrapper {
         width: 56px;
         height: 56px;
         border-radius: 16px;
         background: var(--color-primary);
         display: flex;
         align-items: center;
         justify-content: center;
         transition: transform 0.3s ease;
       }

       .feature-card:hover .icon-wrapper {
         transform: scale(1.1) rotate(5deg);
       }

       .icon-wrapper svg {
         width: 28px;
         height: 28px;
         color: var(--color-white);
       }

       .feature-title {
        font-size: 1.5rem;
        color: #fff;
        margin: 0;
        font-weight: var(--font-weight-bold);
      }

       .feature-description {
         color: #ccc;
         line-height: 1.6;
         margin-bottom: 1rem;
       }

       .feature-detail {
         color: #999;
         font-size: 0.95rem;
         line-height: 1.5;
         padding-left: 1rem;
         border-left: 3px solid var(--color-primary);
       }

       .image-container {
         position: relative;
       }

       .about-image {
         width: 100%;
         height: auto;
         border-radius: 20px;
         box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
         transform: translateY(40px);
         opacity: 0;
         transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
       }

       .about-image.visible {
         transform: translateY(0);
         opacity: 1;
       }

       @media (max-width: 1200px) {
         .about-container {
           grid-template-columns: 1fr 350px;
           gap: 3rem;
         }
       }

       @media (max-width: 992px) {
         .about-container {
           grid-template-columns: 1fr;
         }

         .image-container {
           order: -1;
           max-width: 600px;
           margin: 0 auto 3rem;
         }
       }

       @media (max-width: 768px) {
         .about-section {
           padding: 4rem 0;
         }

         .section-header {
           margin-bottom: 3rem;
         }

         .feature-card {
           padding: 1.5rem;
         }
       }
     `}</style>

     <div className="section-header">
       <h2 className="section-title">О нас</h2>
     </div>

     <div className="about-container">
       <div className="features-list">
         {features.map((feature, index) => {
           const Icon = feature.icon;
           return (
             <div
               key={index}
               ref={el => itemsRef.current[index] = el}
               className="feature-card"
             >
              <div className="feature-header">
                <div className="icon-wrapper">
                  <Icon />
                </div>
                <h3 className="feature-title" style={{ color: '#fff' }}>{feature.title}</h3>
              </div>
               <p className="feature-description">{feature.description}</p>
               <p className="feature-detail">{feature.detail}</p>
             </div>
           );
         })}
       </div>

       <div className="image-container">
         <img
           ref={el => itemsRef.current[3] = el}
           src={halfBlock}
           alt="Спортивные купальники"
           className="about-image"
         />
       </div>
     </div>
   </section>
 );
};

export default About;