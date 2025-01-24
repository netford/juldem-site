import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Play, Star, Quote } from 'lucide-react';

const ReviewsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const trackRef = useRef(null);

  const originalReviews = [
    {
      id: 1,
      author: "Мария С.",
      club: "Спартак",
      date: "20.01.2024",
      rating: 5,
      text: "Прекрасное качество! Купальник идеально сидит и очень комфортный. Отдельное спасибо за оперативность изготовления."
    },
    {
      id: 2,
      author: "Елена В.",
      club: "Динамо",
      date: "25.01.2024",
      rating: 5,
      text: "Очень довольна результатом! Все детали проработаны идеально, стразы надёжно закреплены. Дочь в восторге!"
    },
    {
      id: 3,
      author: "Ольга М.",
      club: "Олимпия",
      date: "28.01.2024",
      rating: 5,
      text: "Спасибо за профессиональный подход! Купальник получился именно таким, как мы хотели. Будем заказывать ещё!"
    },
    {
      id: 4,
      author: "Анна К.",
      club: "Триумф",
      date: "30.01.2024",
      rating: 5,
      text: "Отличная работа! Купальник сделан качественно, все швы аккуратные, сидит великолепно. Рекомендую!"
    }
  ];

  // Создаем массив с дублированными отзывами для бесконечной прокрутки
  const reviews = [...originalReviews, ...originalReviews, ...originalReviews];

  const moveToIndex = (index) => {
    setTransitionEnabled(true);
    setActiveIndex(index);
  };

  const handleNext = () => {
    if (activeIndex >= reviews.length - 3) {
      // Если достигли конца, незаметно перемещаемся в начало
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
      // Если достигли начала, незаметно перемещаемся в конец
      setTransitionEnabled(false);
      setActiveIndex(reviews.length - 4);
      setTimeout(() => {
        setTransitionEnabled(true);
        setActiveIndex(reviews.length - 5);
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
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
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
          margin: 0 80px;
        }

        .carousel {
          overflow: hidden;
        }

        .carousel-track {
          display: flex;
          gap: 2rem;
          transition: ${transitionEnabled ? 'transform 0.5s ease-in-out' : 'none'};
          transform: translateX(calc(-${activeIndex} * (350px + 2rem)));
        }

        .review-card {
          flex: 0 0 350px;
          opacity: 1;
        }

        .review-content {
          background: #262626;
          border: 1px solid #333;
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.3s ease;
          height: 100%;
        }

        .review-content:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          border-color: #444;
        }

        .video-preview {
          position: relative;
          padding-bottom: 40%;
          background: #000;
          cursor: pointer;
          overflow: hidden;
          max-height: 180px;
        }

        .video-preview img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .video-preview:hover img {
          transform: scale(1.05);
        }

        .play-button {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 48px;
          height: 48px;
          background: var(--color-primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .video-preview:hover .play-button {
          transform: translate(-50%, -50%) scale(1.1);
          background: var(--color-accent);
        }

        .review-info {
          padding: 1.25rem;
        }

        .review-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.75rem;
        }

        .review-author {
          font-size: 1.25rem;
          font-weight: 600;
          color: #fff;
        }

        .review-meta {
          color: #ccc;
          font-size: 0.9rem;
        }

        .rating {
          display: flex;
          gap: 0.25rem;
          margin: 0.5rem 0;
        }

        .star {
          color: #ffd700;
        }

        .review-text {
          color: #ccc;
          line-height: 1.5;
          font-size: 0.9rem;
          height: 4.5em;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
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
        }

        .carousel-button:hover {
          background: var(--color-accent);
          transform: translateY(-50%) scale(1.1);
        }

        .prev-button {
          left: -60px;
        }

        .next-button {
          right: -60px;
        }

        @media (max-width: 1200px) {
          .carousel-container {
            margin: 0 60px;
          }
        }

        @media (max-width: 768px) {
          .reviews-section {
            padding: 4rem 0;
          }

          .carousel-container {
            margin: 0 50px;
          }

          .review-card {
            flex: 0 0 300px;
          }

          .carousel-track {
            transform: translateX(calc(-${activeIndex} * (300px + 2rem)));
          }

          .carousel-button {
            width: 40px;
            height: 40px;
          }

          .prev-button {
            left: -45px;
          }

          .next-button {
            right: -45px;
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
            <div ref={trackRef} className="carousel-track">
              {reviews.map((review, index) => (
                <div 
                  key={`${review.id}-${index}`} 
                  className="review-card"
                >
                  <div className="review-content">
                    <div className="video-preview">
                      <img src="/api/placeholder/600/400" alt={`Отзыв от ${review.author}`} />
                      <div className="play-button">
                        <Play size={24} color="#fff" />
                      </div>
                    </div>
                    <div className="review-info">
                      <div className="review-header">
                        <div>
                          <div className="review-author">{review.author}</div>
                          <div className="review-meta">
                            {review.club} • {review.date}
                          </div>
                        </div>
                      </div>
                      <div className="rating">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} size={16} className="star" fill="#ffd700" />
                        ))}
                      </div>
                      <p className="review-text">{review.text}</p>
                    </div>
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