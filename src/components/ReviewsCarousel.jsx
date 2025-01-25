import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ReviewsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const trackRef = useRef(null);

  const reviews = [
    {
      id: 1,
      author: "Наталья К.",
      text: "Юля, спасибо за срочность - управились за 6 дней! Сразу видно профессионала - когда хотели добавить длинные свисающие ленты на купальник, объяснила, что по новым правилам в 2024 они запрещены на соревнованиях. Сэкономила время и деньги. Сидит идеально!"
    },
    {
      id: 2,
      author: "Светлана А.",
      text: "Мастер от бога! За 5 дней сшила купальник для выступления. Особенно ценно, что учла все особенности - у дочки асимметрия плеч, но благодаря правильному крою этого совершенно не заметно. На первых же соревнованиях получили комплименты от судей за костюм."
    },
    {
      id: 3,
      author: "Ольга М.",
      text: "Восторг! Горели со сроками, Юля сделала костюм за 8 дней. Когда я хотела блестящую отделку, объяснила что она даёт блики при софитах и может помешать судьям. Сделали матовый декор, смотрится шикарно. Отдельное спасибо за рекомендации по поводу эластичности ткани для поддержки спины при прогибах."
    },
    {
      id: 4,
      author: "Марина В.",
      text: "За три года сшили у Юли уже 4 купальника. Каждый раз как часы - ровно неделя от замеров до готового изделия. Понимает все нюансы: для скручиваний посоветовала особый крой рукавов, для прыжков - специальные швы, чтобы ничего не мешало. Всё-таки опыт мастера, который сам выступал - это бесценно."
    },
    {
      id: 5,
      author: "Анна К.",
      text: "Срочно понадобился купальник для показательных. Юля сделала за 4 дня! При этом качество идеальное, всё продумано до мелочей. Теперь только к ней."
    }
  ];

  const extendedReviews = [...reviews, ...reviews, ...reviews];

  const moveToIndex = (index) => {
    setTransitionEnabled(true);
    setActiveIndex(index);
  };

  const handleNext = () => {
    if (activeIndex >= extendedReviews.length - 3) {
      setTransitionEnabled(false);
      setActiveIndex(0);
      setTimeout(() => {
        setTransitionEnabled(true);
        setActiveIndex(1);
      }, 0);
    } else {
      moveToIndex(activeIndex + 1);
    }
  };

  const handlePrev = () => {
    if (activeIndex <= 0) {
      setTransitionEnabled(false);
      setActiveIndex(extendedReviews.length - 4);
      setTimeout(() => {
        setTransitionEnabled(true);
        setActiveIndex(extendedReviews.length - 5);
      }, 0);
    } else {
      moveToIndex(activeIndex - 1);
    }
  };

  return (
    <section id="reviews" className="reviews-section">
      <style>{`
        .reviews-section {
          padding: 6rem 0;
          background: #1a1a1a;
          color: #fff;
          position: relative;
        }

        .container {
          position: relative;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 60px;
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

        .carousel-container {
          position: relative;
          margin: 0 -60px;
          padding: 0 60px;
        }

        .carousel {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          overflow: hidden;
        }

        .carousel-track {
          display: flex;
          gap: 2rem;
          transition: transform 0.5s ease-in-out;
          transform: translateX(calc(-${activeIndex} * (400px + 2rem)));
          width: fit-content;
        }

        .review-card {
          flex: 0 0 400px;
          opacity: 1;
        }

        .review-content {
          background: #262626;
          border: 1px solid #333;
          border-radius: 16px;
          padding: 2rem;
          height: 100%;
          transition: all 0.3s ease;
        }

        .review-content:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          border-color: #444;
        }

        .review-header {
          margin-bottom: 1rem;
        }

        .review-author {
          font-size: 1.25rem;
          font-weight: 600;
          color: #fff;
        }

        .review-text {
          color: #ccc;
          line-height: 1.6;
          margin: 0;
        }

        .carousel-button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: var(--color-primary);
          border: none;
          color: #fff;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          z-index: 10;
          opacity: 0.7;
        }

        .carousel-button:hover {
          background: var(--color-accent);
          transform: translateY(-50%) scale(1.1);
          opacity: 1;
        }

        .prev-button {
          left: 0;
        }

        .next-button {
          right: 0;
        }

        @media (max-width: 1400px) {
          .review-card {
            flex: 0 0 350px;
          }
          
          .carousel-track {
            transform: translateX(calc(-${activeIndex} * (350px + 2rem)));
          }
        }

        @media (max-width: 992px) {
          .container {
            padding: 0 40px;
          }
          
          .carousel-container {
            margin: 0 -40px;
            padding: 0 40px;
          }
        }

        @media (max-width: 768px) {
          .reviews-section {
            padding: 4rem 0;
          }

          .container {
            padding: 0 30px;
          }

          .carousel-container {
            margin: 0 -30px;
            padding: 0 30px;
          }

          .review-card {
            flex: 0 0 300px;
          }

          .carousel-track {
            transform: translateX(calc(-${activeIndex} * (300px + 2rem)));
          }

          .review-content {
            padding: 1.5rem;
          }

          .carousel-button {
            width: 40px;
            height: 40px;
          }
        }
      `}</style>

      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Отзывы</h2>
        </div>

        <div className="carousel-container">
          <button 
            className="carousel-button prev-button"
            onClick={handlePrev}
            aria-label="Предыдущий отзыв"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="carousel">
            <div 
              ref={trackRef}
              className="carousel-track"
              style={{ 
                transition: transitionEnabled ? 'transform 0.5s ease-in-out' : 'none'
              }}
            >
              {extendedReviews.map((review, index) => (
                <div key={`${review.id}-${index}`} className="review-card">
                  <div className="review-content">
                    <div className="review-header">
                      <div className="review-author">{review.author}</div>
                    </div>
                    <p className="review-text">{review.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            className="carousel-button next-button"
            onClick={handleNext}
            aria-label="Следующий отзыв"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;