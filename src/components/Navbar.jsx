import React, { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'

const Navbar = () => {
 const [isOpen, setIsOpen] = useState(false)
 const [isScrolled, setIsScrolled] = useState(false)

 useEffect(() => {
   const handleScroll = () => {
     setIsScrolled(window.scrollY > 50)
   }
   window.addEventListener('scroll', handleScroll)
   return () => window.removeEventListener('scroll', handleScroll)
 }, [])

 // Разный рендер для мобильной и десктопной версии
 const renderDesktopNav = () => (
   <div className="nav-container">
     <div className="nav-left">
       <img src="/src/assets/images/logo.png" alt="JULDEM" className="logo" />
     </div>

     <div className="nav-center">
       <div className="nav-links">
         <a href="#main" className="nav-link">Главная</a>
         <a href="#about" className="nav-link">О нас</a>
         <a href="#our-works" className="nav-link">Наши работы</a>
         <a href="#prices" className="nav-link">Цены</a>
         <a href="#how-to-order" className="nav-link">Как заказать</a>
         <a href="#delivery" className="nav-link">Доставка</a>
         <a href="#contacts" className="nav-link">Контакты</a>
       </div>
     </div>

     <div className="nav-right">
       <a href="tel:+79196853312" className="phone-link">
         <Phone size={18} />
         +7 (919) 685-33-12
       </a>
     </div>
   </div>
 )

 const renderMobileNav = () => (
   <>
     <div className="nav-container mobile">
       <div className="nav-left">
         <img src="/src/assets/images/logo.png" alt="JULDEM" className="logo" />
       </div>

       <div className="nav-center">
         <a href="tel:+79196853312" className="phone-link">
           <Phone size={18} />
           +7 (919) 685-33-12
         </a>
       </div>

       <div className="nav-right">
         <button 
           className="burger" 
           onClick={() => setIsOpen(!isOpen)}
           aria-label="Открыть меню"
         >
           {isOpen ? <X size={24} /> : <Menu size={24} />}
         </button>
       </div>
     </div>

     <div className={`nav-links mobile ${isOpen ? 'active' : ''}`}>
       <a href="#main" className="nav-link" onClick={() => setIsOpen(false)}>Главная</a>
       <a href="#about" className="nav-link" onClick={() => setIsOpen(false)}>О нас</a>
       <a href="#our-works" className="nav-link" onClick={() => setIsOpen(false)}>Наши работы</a>
       <a href="#prices" className="nav-link" onClick={() => setIsOpen(false)}>Цены</a>
       <a href="#how-to-order" className="nav-link" onClick={() => setIsOpen(false)}>Как заказать</a>
       <a href="#delivery" className="nav-link" onClick={() => setIsOpen(false)}>Доставка</a>
       <a href="#contacts" className="nav-link" onClick={() => setIsOpen(false)}>Контакты</a>
     </div>
   </>
 )

 return (
   <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
     <style>{`
       .navbar {
         position: fixed;
         top: 0;
         left: 0;
         right: 0;
         background: rgba(38, 38, 38, 0.95);
         backdrop-filter: blur(10px);
         z-index: 1000;
         transition: all 0.3s ease;
       }

       .navbar.scrolled {
         box-shadow: 0 2px 10px rgba(0,0,0,0.3);
       }

       .nav-container {
         max-width: 1400px;
         margin: 0 auto;
         padding: 0 2rem;
         height: 80px;
         display: grid;
         grid-template-columns: 200px 1fr auto;
         align-items: center;
         gap: 2rem;
       }

       .nav-left, .nav-right {
         display: flex;
         align-items: center;
       }

       .nav-right {
         gap: 2rem;
       }

       .nav-center {
         justify-self: center;
         width: 100%;
       }

       .logo {
         height: 50px;
         width: auto;
       }

       .nav-links {
         display: flex;
         gap: 2rem;
         align-items: center;
         background: transparent;
         color: white;
         justify-content: center;
       }

       .nav-link {
         color: white !important;
         text-decoration: none;
         font-size: 1rem;
         transition: color 0.3s ease;
         position: relative;
       }

       .nav-link:after {
         content: '';
         position: absolute;
         width: 100%;
         height: 2px;
         bottom: -4px;
         left: 0;
         background: var(--color-primary);
         transform: scaleX(0);
         transform-origin: right;
         transition: transform 0.3s ease;
       }

       .nav-link:hover:after {
         transform: scaleX(1);
         transform-origin: left;
       }

       .nav-link:hover {
         color: var(--color-primary) !important;
       }

       .phone-link {
         display: flex;
         align-items: center;
         gap: 0.5rem;
         color: white !important;
         text-decoration: none;
         font-weight: 500;
         transition: color 0.3s ease;
       }

       .phone-link:hover {
         color: var(--color-primary) !important;
       }

       .burger {
         display: none;
         background: none;
         border: none;
         color: #fff;
         cursor: pointer;
         padding: 0.5rem;
         transition: all 0.3s ease;
       }

       .burger:hover {
         color: var(--color-primary);
         transform: scale(1.1);
       }

       /* Мобильные стили */
       @media (max-width: 1024px) {
         .burger {
           display: block;
         }

         /* Скрываем десктопную версию */
         .nav-container:not(.mobile) {
           display: none;
         }

         /* Показываем мобильную версию */
         .nav-container.mobile {
           display: grid;
           grid-template-columns: 1fr 1fr 1fr;
           gap: 0;
         }

         .mobile .nav-left {
           justify-content: flex-start;
         }

         .mobile .nav-right {
           justify-content: flex-end;
         }

         .mobile .nav-center {
           display: flex;
           justify-content: center;
           align-items: center;
         }

         .mobile .logo {
           height: 40px;
         }

         /* Мобильное меню */
         .nav-links.mobile {
           position: fixed;
           top: 80px;
           left: 0;
           right: 0;
           background: #262626;
           flex-direction: column;
           padding: 2rem;
           gap: 1.5rem;
           transform: translateY(-100%);
           transition: transform 0.3s ease;
           opacity: 0;
           visibility: hidden;
         }

         .nav-links.mobile.active {
           transform: translateY(0);
           opacity: 1;
           visibility: visible;
         }
       }

       @media (min-width: 1025px) {
         /* Скрываем мобильную версию */
         .nav-container.mobile,
         .nav-links.mobile {
           display: none;
         }
       }
     `}</style>

     {renderDesktopNav()}
     {renderMobileNav()}
   </nav>
 )
}

export default Navbar