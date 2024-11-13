import React, { useState, useEffect, useRef } from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

export default function Home() {
  const [counts, setCounts] = useState({
    years: 0,
    clients: 0,
    support: 0,
    satisfaction: 0
  });

  const statsRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          startCountAnimation();
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [hasAnimated]);

  const startCountAnimation = () => {
    const duration = 2000;
    const steps = 50;
    const stepDuration = duration / steps;

    const targetCounts = {
      years: 10,
      clients: 500,
      support: 24,
      satisfaction: 100
    };

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      
      setCounts({
        years: Math.min(Math.floor((targetCounts.years * currentStep) / steps), targetCounts.years),
        clients: Math.min(Math.floor((targetCounts.clients * currentStep) / steps), targetCounts.clients),
        support: Math.min(Math.floor((targetCounts.support * currentStep) / steps), targetCounts.support),
        satisfaction: Math.min(Math.floor((targetCounts.satisfaction * currentStep) / steps), targetCounts.satisfaction)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  };

  const services = [
    {
      title: "Protection Rapprochée",
      description: "Service de garde du corps professionnel pour votre sécurité personnelle",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Sécurité Préventive",
      description: "Anticipation et prévention des risques pour votre tranquillité",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
    {
      title: "Sécurité Événementielle",
      description: "Protection complète pour vos événements professionnels et privés",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: "Conseil et Sécurité",
      description: "Expertise et recommandations personnalisées en matière de sécurité",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: "Transport de Fonds",
      description: "Transport sécurisé de vos valeurs avec une équipe hautement qualifiée",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      ),
    },
    {
      title: "Télésurveillance",
      description: "Surveillance à distance 24/7 de vos locaux et biens",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="relative bg-gray-900 min-h-[90vh] flex items-center">
          {/* Background avec overlay amélioré */}
          <div className="absolute inset-0">
            <img
              className="w-full h-full object-cover"
              src="/security-bg.jpg"
              alt="Security background"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-gray-900/50"></div>
            {/* Effet de particules ou motif */}
            <div className="absolute inset-0 opacity-10" 
              style={{ 
                backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2V6h4V4H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
              }}
            ></div>
          </div>

          {/* Contenu */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
            <div className="space-y-12 lg:space-y-16">
              {/* Badge animé */}
              <div className="inline-flex items-center px-4 py-2 bg-blue-600/10 rounded-full text-blue-400 backdrop-blur-sm border border-blue-500/20 animate-pulse">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                <span className="text-sm font-medium">Leader en sécurité en Guinée</span>
              </div>

              {/* Titre principal avec animation */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
                  Votre sécurité,{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                    notre priorité
                  </span>
                </h1>
                <p className="mt-6 text-xl text-gray-300 max-w-3xl leading-relaxed">
                  LATVIC est leader dans le domaine de la sécurité en Guinée. Nous offrons des solutions 
                  complètes de protection pour les entreprises et les particuliers.
                </p>
              </div>

              {/* Boutons d'action */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:-translate-y-1"
                >
                  <span>Contactez-nous</span>
                  <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-lg text-white border-2 border-white/20 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-white/10"
                >
                  Découvrir nos services
                </a>
              </div>

              {/* Statistiques avec animation */}
              <div 
                ref={statsRef} 
                className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 mt-8 border-t border-white/10"
              >
                {[
                  { number: counts.years, suffix: "+", label: "Années d'expérience" },
                  { number: counts.clients, suffix: "+", label: "Clients satisfaits" },
                  { number: counts.support, suffix: "/7", label: "Support client" },
                  { number: counts.satisfaction, suffix: "%", label: "Taux de satisfaction" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-white">
                      {stat.number}{stat.suffix}
                    </div>
                    <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <a href="#services" className="text-white/50 hover:text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Services Section */}
        <section id="services" className="py-24 bg-gradient-to-b from-gray-900 to-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold text-white mb-4">
                Nos Services
              </h2>
              <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Des solutions de sécurité professionnelles adaptées à vos besoins
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Link
                  to="/services"
                  key={index}
                  className="group relative overflow-hidden bg-gray-800 rounded-2xl p-8 hover:bg-gray-700 transition-all duration-300"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-transparent rounded-bl-full transform translate-x-8 -translate-y-8"></div>
                  
                  <div className="relative z-10">
                    <div className="text-blue-400 mb-6 group-hover:scale-110 transform transition-transform duration-300">
                      {service.icon}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6">
                      {service.description}
                    </p>
                    
                    <div className="flex items-center text-blue-400 font-medium group-hover:translate-x-2 transition-transform duration-300">
                      <span>En savoir plus</span>
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1"
              >
                Découvrir tous nos services
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  Pourquoi choisir LATVIC ?
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Avec plus de 10 ans d'expérience dans le domaine de la sécurité en Guinée, 
                  nous sommes reconnus pour notre professionnalisme et notre expertise.
                </p>
                <div className="mt-8 space-y-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-lg text-gray-600">Personnel hautement qualifié</p>
                  </div>
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-lg text-gray-600">Disponibilité 24/7</p>
                  </div>
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-lg text-gray-600">Solutions sur mesure</p>
                  </div>
                </div>
              </div>
              <div className="mt-10 lg:mt-0">
                <img
                  className="rounded-lg shadow-lg"
                  src="/images/team.jpg"
                  alt="Notre équipe LATVIC"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Ce que nos clients disent
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                Découvrez les expériences de ceux qui nous font confiance
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-gray-50 rounded-lg p-8">
                <div className="flex items-center mb-4">
                  <img
                    className="h-12 w-12 rounded-full object-cover"
                    src="https://randomuser.me/api/portraits/women/32.jpg"
                    alt="Sophie Martin"
                  />
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900">Sophie Martin</h4>
                    <p className="text-gray-600">Directrice Générale, Tech Corp</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "L'équipe de LATVIC a assuré la sécurité de notre événement d'entreprise avec un professionnalisme exemplaire. Leur attention aux détails et leur réactivité ont été remarquables."
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-8">
                <div className="flex items-center mb-4">
                  <img
                    className="h-12 w-12 rounded-full object-cover"
                    src="https://randomuser.me/api/portraits/men/45.jpg"
                    alt="Jean Dubois"
                  />
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900">Jean Dubois</h4>
                    <p className="text-gray-600">Propriétaire, Hôtel Royal</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "Depuis que nous travaillons avec LATVIC pour la sécurité de notre hôtel, nous avons constaté une nette amélioration de la satisfaction de nos clients. Une équipe fiable et professionnelle."
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-8">
                <div className="flex items-center mb-4">
                  <img
                    className="h-12 w-12 rounded-full object-cover"
                    src="https://randomuser.me/api/portraits/women/68.jpg"
                    alt="Marie Koné"
                  />
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900">Marie Koné</h4>
                    <p className="text-gray-600">Responsable Sécurité, Banque GNF</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "Le service de transport de fonds de LATVIC est irréprochable. Leur équipe est toujours ponctuelle et hautement professionnelle. Une collaboration précieuse pour notre institution."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Contactez-nous
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                Notre équipe est à votre disposition pour répondre à vos questions
              </p>
            </div>
            <div className="mt-16 max-w-lg mx-auto">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Envoyer
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}