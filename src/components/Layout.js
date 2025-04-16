import React, { useState, useLayoutEffect, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SecurityMonitor from './SecurityMonitor';

export default function Layout({ children }) {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });

    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    return () => {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'auto';
      }
    };
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      // Si on dépasse la hauteur de la section d'accueil (environ 100vh)
      if (window.scrollY > window.innerHeight) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Intégrer le moniteur de sécurité */}
      <SecurityMonitor />
      
      {/* Navbar - Changement des couleurs */}
      <nav className="bg-black fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link to="/" className="text-white text-xl font-bold">
                  LATVIC
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link to="/" className="text-white hover:bg-[#FF0000] px-3 py-2 rounded-md transition-colors duration-300">Accueil</Link>
                  <Link to="/services" className="text-gray-300 hover:bg-[#FF0000] hover:text-white px-3 py-2 rounded-md transition-colors duration-300">Services</Link>
                  <Link to="/about" className="text-gray-300 hover:bg-[#FF0000] hover:text-white px-3 py-2 rounded-md transition-colors duration-300">À propos</Link>
                  <Link to="/contact" className="text-gray-300 hover:bg-[#FF0000] hover:text-white px-3 py-2 rounded-md transition-colors duration-300">Contact</Link>
                </div>
              </div>
            </div>
            {/* Menu mobile */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-[#FF0000] focus:outline-none transition-colors duration-300"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Menu mobile déroulant */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" className="text-white block px-3 py-2 rounded-md hover:bg-[#FF0000] transition-colors duration-300">Accueil</Link>
              <Link to="/services" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md hover:bg-[#FF0000] transition-colors duration-300">Services</Link>
              <Link to="/about" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md hover:bg-[#FF0000] transition-colors duration-300">À propos</Link>
              <Link to="/contact" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md hover:bg-[#FF0000] transition-colors duration-300">Contact</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      {children}

      {/* Footer */}
      <footer className="bg-black">
        {/* Section principale */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
            {/* À propos */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center">
                <span className="text-white text-2xl font-bold border-b-2 border-red-600 pb-2">LATVIC</span>
              </div>
              <p className="text-gray-300 leading-relaxed text-base">
                Leader en sécurité privée en Guinée, nous nous engageons à fournir des solutions de sécurité innovantes et fiables. Créée en 2024, LATVIC s'appuie sur l'expertise de ses dirigeants qui cumulent plus de 35 ans d'expérience dans le secteur.
              </p>
              <div className="flex space-x-4 pt-2">
                <a href="https://www.facebook.com/profile.php?id=61572401944230" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-red-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61572401944230" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-red-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61572401944230" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-red-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61572401944230" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-red-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Liens rapides */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6 border-b-2 border-red-600 pb-2 inline-block">Liens rapides</h3>
              <ul className="space-y-4">
                <li>
                  <Link to="/" className="text-gray-300 hover:text-red-500 transition-colors flex items-center group">
                    <svg className="w-4 h-4 mr-2 text-red-600 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-gray-300 hover:text-red-500 transition-colors flex items-center group">
                    <svg className="w-4 h-4 mr-2 text-red-600 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Nos services
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-300 hover:text-red-500 transition-colors flex items-center group">
                    <svg className="w-4 h-4 mr-2 text-red-600 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    À propos
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-300 hover:text-red-500 transition-colors flex items-center group">
                    <svg className="w-4 h-4 mr-2 text-red-600 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6 border-b-2 border-red-600 pb-2 inline-block">Contact</h3>
              <ul className="space-y-4">
                <li className="flex items-start group">
                  <svg className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-300">Conakry, Guinée<br />Ratoma, Kobayah</span>
                </li>
                <li className="flex items-start group">
                  <svg className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-300">latvicprotection@gmail.com</span>
                </li>
                <li className="flex items-start group">
                  <svg className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-300">625-46-23-35/626-66-19-68</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Barre de copyright */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} LATVIC. Tous droits réservés.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="https://www.facebook.com/profile.php?id=61572401944230" className="text-gray-400 hover:text-red-500 text-sm transition-colors">
                  Mentions légales
                </a>
                <a href="https://www.facebook.com/profile.php?id=61572401944230" className="text-gray-400 hover:text-red-500 text-sm transition-colors">
                  Politique de confidentialité
                </a>
                <a href="https://www.facebook.com/profile.php?id=61572401944230" className="text-gray-400 hover:text-red-500 text-sm transition-colors">
                  CGV
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bouton retour en haut */}
        {showScrollToTop && (
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
            className="fixed bottom-8 right-8 bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none"
            aria-label="Retour en haut"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        )}
      </footer>
    </div>
  );
} 