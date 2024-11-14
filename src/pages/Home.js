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
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
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
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
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
        <div className="relative bg-black min-h-[90vh] flex items-center">
          {/* Background avec overlay amélioré */}
          <div className="absolute inset-0">
            <img
              className="w-full h-full object-cover opacity-40"
              src="/security-bg.jpg"
              alt="Security background"
            />
            <div className="absolute inset-0 bg-black"></div>
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
              <div className="inline-flex items-center px-4 py-2 bg-[#FF0000]/10 rounded-full text-[#FF0000] backdrop-blur-sm border border-[#FF0000]/20 animate-pulse">
                <span className="w-2 h-2 bg-[#FF0000] rounded-full mr-2"></span>
                <span className="text-sm font-medium">Leader en sécurité en Guinée</span>
              </div>

              {/* Titre principal avec animation */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
                  Votre sécurité,{' '}
                  <span className="text-[#FF0000]">
                    notre priorité
                  </span>
                </h1>
                <p className="mt-6 text-xl text-gray-300 max-w-3xl leading-relaxed">
                  Depuis plus de 10 ans, LATVIC assure la sécurité des entreprises et particuliers 
                  en Guinée avec un taux de satisfaction client de 100%.
                </p>
              </div>

              {/* Boutons d'action */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-lg text-white bg-gradient-to-r from-[#FF0000] to-[#FF0000] shadow-lg hover:from-[#FF0000] hover:to-[#FF0000] transition-all duration-300 hover:-translate-y-1">
                  <span>Contactez-nous</span>
                  <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
                <a href="#services" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-lg text-white border-2 border-white/20 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-white/10">
                  Découvrir nos services
                </a>
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
        <section id="services" className="py-24 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold text-white mb-4">
                Nos Services
              </h2>
              <div className="w-24 h-1 bg-[#FF0000] mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Des solutions de sécurité professionnelles adaptées à vos besoins
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Link
                  to="/services"
                  key={index}
                  className="group relative overflow-hidden bg-gray-950 rounded-2xl p-8 hover:bg-gray-900 transition-all duration-300"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#FF0000]/10 to-transparent rounded-bl-full transform translate-x-8 -translate-y-8"></div>
                  
                  <div className="relative z-10">
                    <div className="text-[#FF0000] mb-6 group-hover:scale-110 transform transition-transform duration-300">
                      {service.icon}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#FF0000] transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-6">
                      {service.description}
                    </p>
                    
                    <div className="flex items-center text-[#FF0000] font-medium group-hover:translate-x-2 transition-transform duration-300">
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
                className="inline-flex items-center px-8 py-4 text-lg font-semibold rounded-full text-white bg-[#FF0000] hover:bg-[#FF0000]/90 transition-all duration-300 transform hover:-translate-y-1"
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
        <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* En-tête avec titre et description */}
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl font-bold text-gray-900">
                Pourquoi choisir <span className="text-[#FF0000]">LATVIC</span> ?
              </h2>
              <div className="w-24 h-1 bg-[#FF0000] mx-auto my-6 rounded-full"></div>
              <p className="text-xl text-gray-600">
                Une décennie d'excellence en sécurité, au service de votre tranquillité
              </p>
            </div>

            {/* Statistiques en bande */}
            <div ref={statsRef} className="relative mb-24">
              <div className="absolute inset-0 bg-black transform -skew-y-2"></div>
              <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8 py-12 px-6">
                <div className="text-center">
                  <div className="text-5xl font-bold text-white mb-2">{counts.years}+</div>
                  <div className="text-gray-300 font-medium">Années d'expertise</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-white mb-2">{counts.clients}+</div>
                  <div className="text-gray-300 font-medium">Clients satisfaits</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-white mb-2">{counts.support}/7</div>
                  <div className="text-gray-300 font-medium">Jours par semaine</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-white mb-2">{counts.satisfaction}%</div>
                  <div className="text-gray-300 font-medium">Taux de satisfaction</div>
                </div>
              </div>
            </div>

            {/* Avantages en grille */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Expertise */}
              <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                <div className="w-16 h-16 mb-6 bg-[#FF0000] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#FF0000] transition-colors">
                  Expertise Certifiée
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Une équipe rigoureusement formée aux normes internationales de sécurité
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-[#FF0000] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Formation continue
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-[#FF0000] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Certifications internationales
                  </li>
                </ul>
              </div>

              {/* Réactivité */}
              <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                <div className="w-16 h-16 mb-6 bg-[#FF0000] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#FF0000] transition-colors">
                  Réactivité Immédiate
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Intervention rapide et efficace 24/7 sur l'ensemble du territoire
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-[#FF0000] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Disponibilité 24/7
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-[#FF0000] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Temps de réponse rapide
                  </li>
                </ul>
              </div>

              {/* Innovation */}
              <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                <div className="w-16 h-16 mb-6 bg-[#FF0000] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#FF0000] transition-colors">
                  Solutions Innovantes
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Technologies de pointe et méthodes modernes de sécurisation
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-[#FF0000] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Équipements dernière génération
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-[#FF0000] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Solutions personnalisées
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* En-tête */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Témoignages</span>
              <h2 className="mt-3 text-4xl font-bold text-gray-900 sm:text-4xl">
                La confiance de nos clients
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto my-6 rounded-full"></div>
              <p className="text-xl text-gray-600">
                Découvrez les expériences de ceux qui nous font confiance au quotidien
              </p>
            </div>

            {/* Grille de témoignages */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Témoignage 1 */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF0000] to-[#4A5568] rounded-2xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300"></div>
                <div className="relative bg-white p-8 rounded-2xl shadow-lg transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300">
                  <div className="flex items-center mb-6">
                    <img
                      className="h-14 w-14 rounded-full object-cover ring-4 ring-blue-50"
                      src="https://randomuser.me/api/portraits/women/32.jpg"
                      alt="Sophie Martin"
                    />
                    <div className="ml-4">
                      <h4 className="text-lg font-bold text-gray-900">Sophie Martin</h4>
                      <p className="text-blue-600">Directrice Générale, Tech Corp</p>
                    </div>
                  </div>
                  <svg className="w-10 h-10 text-blue-100 absolute top-6 right-6" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    "L'équipe de LATVIC a assuré la sécurité de notre événement d'entreprise avec un professionnalisme exemplaire. Leur attention aux détails et leur réactivité ont été remarquables."
                  </p>
                  <div className="flex items-center text-blue-600">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Témoignage 2 */}
              <div className="relative group mt-8 md:mt-0">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF0000] to-[#4A5568] rounded-2xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300"></div>
                <div className="relative bg-white p-8 rounded-2xl shadow-lg transform rotate-1 group-hover:rotate-2 transition-transform duration-300">
                  <div className="flex items-center mb-6">
                    <img
                      className="h-14 w-14 rounded-full object-cover ring-4 ring-blue-50"
                      src="https://randomuser.me/api/portraits/men/45.jpg"
                      alt="Jean Dubois"
                    />
                    <div className="ml-4">
                      <h4 className="text-lg font-bold text-gray-900">Jean Dubois</h4>
                      <p className="text-blue-600">Propriétaire, Hôtel Royal</p>
                    </div>
                  </div>
                  <svg className="w-10 h-10 text-blue-100 absolute top-6 right-6" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    "Depuis que nous travaillons avec LATVIC pour la sécurité de notre hôtel, nous avons constaté une nette amélioration de la satisfaction de nos clients. Une équipe fiable et professionnelle."
                  </p>
                  <div className="flex items-center text-blue-600">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Témoignage 3 */}
              <div className="relative group mt-8 md:mt-0">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF0000] to-[#4A5568] rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                <div className="relative bg-white p-8 rounded-2xl shadow-lg transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300">
                  <div className="flex items-center mb-6">
                    <img
                      className="h-14 w-14 rounded-full object-cover ring-4 ring-blue-50"
                      src="https://randomuser.me/api/portraits/women/68.jpg"
                      alt="Marie Koné"
                    />
                    <div className="ml-4">
                      <h4 className="text-lg font-bold text-gray-900">Marie Koné</h4>
                      <p className="text-blue-600">Responsable Sécurité, Banque GNF</p>
                    </div>
                  </div>
                  <svg className="w-10 h-10 text-blue-100 absolute top-6 right-6" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    "Le service de transport de fonds de LATVIC est irréprochable. Leur équipe est toujours ponctuelle et hautement professionnelle. Une collaboration précieuse pour notre institution."
                  </p>
                  <div className="flex items-center text-blue-600">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 bg-gradient-to-br from-gray-900 to-blue-900 overflow-hidden">
          {/* Cercles décoratifs */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Besoin de nos services ?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Notre équipe d'experts est à votre disposition pour répondre à toutes vos questions en matière de sécurité
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1"
            >
              Contactez-nous
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}