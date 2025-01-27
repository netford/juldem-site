import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ReviewsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isSwiping, setIsSwiping] = useState(false);
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

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsSwiping(true);
  };

  const onTouchMove = (e) => {
    if (!isSwiping) return;
    setTouchEnd(e.targetTouches[0].clientX);
    e.preventDefault();
  };

  const onTouchEnd = () => {
    if (!isSwiping) return;
    
    setIsSwiping(false);
    
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe && activeIndex < reviews.length - 1) {
      setActiveIndex(prev => prev + 1);
    }
    
    if (isRightSwipe && activeIndex > 0) {
      setActiveIndex(prev => prev - 1);
    }
  };

  const handleNext = () => {
    if (activeIndex < reviews.length - 1) {
      setActiveIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex(prev => prev - 1);
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
          overflow: hidden;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 20px;
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
          width: 100%;
          max-width: 600px;
          margin: 0 auto;
          overflow: hidden;
        }

        .carousel-track {
          display: flex;
          transition: transform 0.3s ease-out;
          margin: 0 auto;
        }

        .review-card {
          flex: 0 0 100%;
          min-width: 100%;
          padding: 0;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .review-content {
          background: #262626;
          border: 1px solid #333;
          border-radius: 16px;
          padding: 2rem;
          width: calc(100% - 40px);
          max-width: 500px;
          margin: 0 auto;
          min-height: 300px;
          display: flex;
          flex-direction: column;
        }

        .review-header {
          margin-bottom: 1.5rem;
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
          flex: 1;
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

        .carousel-button:disabled {
          background: #666;
          cursor: not-allowed;
          opacity: 0.5;
        }

        .carousel-button:disabled:hover {
          transform: translateY(-50%);
        }

        .prev-button {
          left: 20px;
        }

        .next-button {
          right: 20px;
        }

        @media (max-width: 768px) {
          .reviews-section {
            padding: 4rem 0;
          }

          .carousel-container {
            max-width: 100%;
          }

          .carousel-button {
            display: none;
          }
          
          .carousel-track {
            transform: translateX(-${activeIndex * 100}%);
            touch-action: pan-y pinch-zoom;
          }

          .review-content {
            padding: 1.5rem;
            width: calc(100% - 48px);
            max-width: none;
            min-height: 300px;
            margin: 0 24px;
          }

          .review-text {
            font-size: 1rem;
            line-height: 1.6;
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
            disabled={activeIndex === 0}
            aria-label="Предыдущий отзыв"
          >
            <ChevronLeft size={24} />
          </button>

          <div 
            ref={trackRef}
            className="carousel-track"
            style={{
              transform: `translateX(-${activeIndex * 100}%)`,
            }}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {reviews.map((review) => (
              <div key={review.id} className="review-card">
                <div className="review-content">
                  <div className="review-header">
                    <div className="review-author">{review.author}</div>
                  </div>
                  <p className="review-text">{review.text}</p>
                </div>
              </div>
            ))}
          </div>

          <button 
            className="carousel-button next-button"
            onClick={handleNext}
            disabled={activeIndex === reviews.length - 1}
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