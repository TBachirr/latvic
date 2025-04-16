import React, { useState, useEffect, useRef } from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const [counts, setCounts] = useState({
    years: 0,
    clients: 0,
    support: 0,
    satisfaction: 0
  });

  const [selectedService, setSelectedService] = useState(null);
  const statsRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Close popup when escape key is pressed
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        setSelectedService(null);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  useEffect(() => {
    const currentStatsRef = statsRef.current; // Capture la référence actuelle
    
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
  
    if (currentStatsRef) {
      observer.observe(currentStatsRef);
    }
  
    return () => {
      if (currentStatsRef) { // Utilise la référence capturée
        observer.unobserve(currentStatsRef);
      }
    };
  }, [hasAnimated]);

  const startCountAnimation = () => {
    const duration = 2000;
    const steps = 50;
    const stepDuration = duration / steps;

    const targetCounts = {
      years: 35,
      clients: 200,
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
      details: [
        "Protection 24/7",
        "Agents hautement qualifiés",
        "Évaluation des risques personnalisée",
        "Discrétion absolue",
        "Coordination avec les services locaux"
      ]
    },
    {
      title: "Sécurité Préventive",
      description: "Anticipation et prévention des risques pour votre tranquillité",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
      details: [
        "Audit de sécurité complet",
        "Analyse des vulnérabilités",
        "Plans de contingence",
        "Formation du personnel",
        "Mise à jour régulière des protocoles"
      ]
    },
    {
      title: "Sécurité Événementielle",
      description: "Protection complète pour vos événements professionnels et privés",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      details: [
        "Planification sécuritaire",
        "Contrôle d'accès",
        "Surveillance périmétrique",
        "Gestion des foules",
        "Intervention rapide"
      ]
    },
    {
      title: "Conseil et Sécurité",
      description: "Expertise et recommandations personnalisées en matière de sécurité",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      details: [
        "Consultation stratégique",
        "Évaluation des besoins",
        "Recommandations sur mesure",
        "Suivi et ajustements",
        "Support continu"
      ]
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
      details: [
        "Véhicules blindés",
        "Équipes spécialisées",
        "Traçage GPS",
        "Assurance complète",
        "Protocoles stricts"
      ]
    },
    {
      title: "Télésurveillance",
      description: "Surveillance à distance 24/7 de vos locaux et biens",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      details: [
        "Monitoring constant",
        "Systèmes de pointe",
        "Intervention sur alarme",
        "Rapports détaillés",
        "Maintenance préventive"
      ]
    },
  ];

  const testimonials = [
    {
      company: "Menema Guinée",
      testimonial: "Depuis que nous travaillons avec LATVIC, la sécurité de nos locaux et de nos événements est assurée avec un professionnalisme exemplaire. Leur équipe fait preuve d'une rigueur et d'une disponibilité remarquables."
    },
    {
      company: "Pyramide Discothèque International",
      testimonial: "L'équipe de LATVIC a considérablement amélioré la sécurité de notre établissement. Leurs agents sont formés pour gérer tous types de situations avec professionnalisme, garantissant une ambiance sereine pour notre clientèle."
    },
    {
      company: "Espace Doreah Rosaki 224",
      testimonial: "LATVIC a su répondre à tous nos besoins en matière de sécurité événementielle. Leur personnel est courtois, efficace et parfaitement formé. Une collaboration précieuse pour notre espace."
    },
    {
      company: "Park Mr Touré",
      testimonial: "La sécurité de notre parc est entre de bonnes mains avec LATVIC. Leur présence discrète mais efficace rassure nos visiteurs et nous permet de nous concentrer sur notre cœur de métier."
    },
    {
      company: "Baldé Fafabhé Transport",
      testimonial: "Pour le transport sécurisé de nos marchandises de valeur, LATVIC est un partenaire incontournable. Leur service de protection est irréprochable et nous donne une tranquillité d'esprit totale."
    }
  ];

  // Timer pour le carousel de témoignages
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <Layout>
      <div className="min-h-screen bg-white">
        {/* Wrapper pour Hero + Services avec un seul fond */}
        <div className="bg-black">
          {/* Hero Section */}
          <div className="relative min-h-screen flex items-center overflow-hidden">
            {/* Cercles décoratifs du Hero - Ajout d'animations */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.2, scale: 1 }}
              transition={{ duration: 1 }}
              className="absolute top-0 left-0 w-72 h-72 bg-red-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.2, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="absolute top-0 right-0 w-72 h-72 bg-red-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"
            ></motion.div>

            <div className="relative w-full">
              {/* Contenu du Hero */}
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-40">
                <div className="space-y-12 lg:space-y-16">
                  {/* Badge animé */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center px-4 py-2 bg-red-600/10 rounded-full text-red-600 backdrop-blur-sm border border-red-600/20"
                  >
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                    <span className="text-sm font-medium">Leader en sécurité en Guinée</span>
                  </motion.div>

                  {/* Titre principal avec animation */}
                  <div className="space-y-4">
                    <motion.h1
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight"
                    >
                      Votre sécurité,{' '}
                      <motion.span
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-red-600"
                      >
                        notre priorité
                      </motion.span>
                    </motion.h1>
                    <motion.p
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      className="mt-6 text-xl text-gray-300 max-w-3xl leading-relaxed"
                    >
                      Créée en 2024, LATVIC s'appuie sur plus de 35 ans d'expérience cumulée de ses dirigeants dans le domaine de la sécurité
                      en Guinée.
                    </motion.p>
                  </div>

                  {/* Boutons d'action - Update avec Link au lieu de a */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 sm:gap-6"
                  >
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Link
                        to="/contact"
                        className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-lg text-white bg-gradient-to-r from-red-600 to-red-700 shadow-lg hover:from-red-700 hover:to-red-800 transition-all duration-300"
                      >
                        <span>Contactez-nous</span>
                        <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Link
                        to="/services"
                        className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-lg text-white border-2 border-white/20 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 shadow-lg hover:shadow-white/10"
                      >
                        Découvrir nos services
                      </Link>
                    </motion.div>
                  </motion.div>
                </div>
              </div>

              {/* Scroll indicator */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce"
              >
                <a href="#services" className="text-white/50 hover:text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </a>
              </motion.div>
            </div>
          </div>

          {/* Services Section - Mise à jour du background */}
          <section id="services" className="relative pt-24 pb-24 bg-gradient-to-b from-gray-50 to-gray-100">
            {/* Contenu des Services */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-20"
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Nos Services
                </h2>
                <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Des solutions de sécurité professionnelles adaptées à vos besoins
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div
                      onClick={() => setSelectedService(service)}
                      className="group relative overflow-hidden rounded-2xl p-8 transition-all duration-300 block cursor-pointer"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
                      
                      <div className="relative z-10">
                        <div className="text-red-600 mb-4 transform group-hover:translate-x-2 transition-transform duration-300">
                          {service.icon}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">
                          {service.title}
                        </h3>
                        <p className="text-gray-300 mb-6">
                          {service.description}
                        </p>
                        <div className="flex items-center text-red-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                          <span>En savoir plus</span>
                          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-16 text-center"
              >
                <Link
                  to="/services"
                  className="inline-flex items-center px-8 py-4 text-lg font-semibold rounded-full text-white bg-red-600 hover:bg-red-700 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Découvrir tous nos services
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </section>
        </div>

        {/* About Section */}
        <section id="about" className="py-24 bg-gradient-to-b from-gray-50 to-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* En-tête avec titre et description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-20"
            >
              <h2 className="text-4xl font-bold text-gray-900">
                Pourquoi choisir <span className="text-red-600">LATVIC</span> ?
              </h2>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="w-24 h-1 bg-red-600 mx-auto my-6 rounded-full origin-left"
              ></motion.div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-xl text-gray-600"
              >
                Une décennie d'excellence en sécurité, au service de votre tranquillité
              </motion.p>
            </motion.div>

            {/* Statistiques en bande */}
            <div ref={statsRef} className="relative mb-24">
              <motion.div
                initial={{ skewY: 0, opacity: 0 }}
                whileInView={{ skewY: -2, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black transform"
              ></motion.div>
              <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8 py-12 px-6">
                {[
                  { value: counts.years, label: "Années d'expertise", suffix: "+" },
                  { value: counts.clients, label: "Clients satisfaits", suffix: "+" },
                  { value: counts.support, label: "Jours par semaine", suffix: "/7" },
                  { value: counts.satisfaction, label: "Taux de satisfaction", suffix: "%" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <motion.div
                      initial={{ scale: 0.5 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                      viewport={{ once: true }}
                      className="text-5xl font-bold text-white mb-2"
                    >
                      {stat.value}{stat.suffix}
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                      viewport={{ once: true }}
                      className="text-gray-300 font-medium"
                    >
                      {stat.label}
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Avantages en grille */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  title: "Expertise Certifiée",
                  icon: (
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                  description: "Une équipe rigoureusement formée aux normes internationales de sécurité",
                  features: ["Formation continue", "Certifications internationales"]
                },
                {
                  title: "Réactivité Immédiate",
                  icon: (
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                  description: "Intervention rapide et efficace 24/7 sur l'ensemble du territoire",
                  features: ["Disponibilité 24/7", "Temps de réponse rapide"]
                },
                {
                  title: "Solutions Innovantes",
                  icon: (
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  ),
                  description: "Technologies de pointe et méthodes modernes de sécurisation",
                  features: ["Équipements dernière génération", "Solutions personnalisées"]
                }
              ].map((advantage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="w-16 h-16 mb-6 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center"
                    >
                      {advantage.icon}
                    </motion.div>
                    <motion.h3
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                      viewport={{ once: true }}
                      className="text-xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors"
                    >
                      {advantage.title}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                      viewport={{ once: true }}
                      className="text-gray-600 leading-relaxed mb-6"
                    >
                      {advantage.description}
                    </motion.p>
                    <motion.ul
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                      viewport={{ once: true }}
                      className="space-y-3 text-gray-600"
                    >
                      {advantage.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          whileHover={{ x: 5 }}
                          className="flex items-center"
                        >
                          <svg className="w-5 h-5 text-red-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section - NOUVELLE VERSION */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-gray-100 to-white relative overflow-hidden">
          {/* Éléments décoratifs */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-red-600/5 rounded-full"></div>
          <div className="absolute -bottom-40 -left-20 w-80 h-80 bg-red-600/5 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-28 bg-gray-50/70 -rotate-3"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            {/* En-tête */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16 md:mb-20"
            >
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="inline-flex items-center px-4 py-2 bg-red-50 rounded-full text-red-600 backdrop-blur-sm border border-red-100 mb-4"
              >
                <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                <span className="text-sm font-medium">Ce que nos clients disent</span>
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="mt-3 text-3xl md:text-4xl font-bold text-gray-900"
              >
                Ils nous <span className="text-red-600">font confiance</span>
              </motion.h2>
              
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="w-24 h-1 bg-red-600 mx-auto my-5 rounded-full origin-left"
              ></motion.div>
            </motion.div>

            {/* Nouvelle vue des témoignages - Style 3D carte pivotante */}
            <div className="relative">
              {/* Conteneur 3D avec perspective */}
              <div className="perspective-1000 mx-auto max-w-5xl">
                <div className="flex flex-col md:flex-row md:items-center justify-center gap-6 md:gap-10">
                  {/* Carte de témoignage principale */}
                  <motion.div
                    key={activeTestimonial}
                    initial={{ opacity: 0, rotateY: 90 }}
                    animate={{ opacity: 1, rotateY: 0 }}
                    exit={{ opacity: 0, rotateY: -90 }}
                    transition={{ type: "spring", stiffness: 70, damping: 20 }}
                    className="md:w-2/3 transform-gpu"
                  >
                    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100 relative">
                      {/* Icône décorative quotation mark */}
                      <div className="absolute top-4 right-6">
                        <svg 
                          width="40" 
                          height="40" 
                          viewBox="0 0 40 40" 
                          fill="none" 
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-red-100"
                        >
                          <path 
                            d="M18.6667 13.3333H12.0001C10.8334 13.3333 10.0001 14.1667 10.0001 15.3333V21.9999C10.0001 23.1666 10.8334 23.9999 12.0001 23.9999H16.6667C17.8334 23.9999 18.6667 23.1666 18.6667 21.9999V18.3333H14.0001V16.6666H18.6667V13.3333ZM28.6667 13.3333H22.0001C20.8334 13.3333 20.0001 14.1667 20.0001 15.3333V21.9999C20.0001 23.1666 20.8334 23.9999 22.0001 23.9999H26.6667C27.8334 23.9999 28.6667 23.1666 28.6667 21.9999V18.3333H24.0001V16.6666H28.6667V13.3333Z" 
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                      
                      {/* Effet de halo */}
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-red-400 rounded-2xl blur-sm opacity-20 -z-10"></div>
                      
                      {/* Contenu du témoignage */}
                      <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-gray-700 text-lg leading-relaxed mb-6 italic"
                      >
                        {testimonials[activeTestimonial].testimonial}
                      </motion.p>
                      
                      <div className="flex items-center">
                        {/* Avatar */}
                        <motion.div 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 120, delay: 0.3 }}
                          className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center text-white font-bold text-xl"
                        >
                          {testimonials[activeTestimonial].company.charAt(0)}
                        </motion.div>
                        
                        <div className="ml-4">
                          <motion.h4 
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.4 }}
                            className="text-lg font-bold text-gray-900"
                          >
                            {testimonials[activeTestimonial].company}
                          </motion.h4>
                          <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.5 }}
                            className="flex mt-1"
                          >
                            {[...Array(5)].map((_, i) => (
                              <motion.svg
                                key={i}
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.2, delay: 0.5 + (i * 0.1) }}
                                className="w-4 h-4 text-red-500 mr-1"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </motion.svg>
                            ))}
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Contrôles et aperçu */}
                  <div className="md:w-1/3">
                    {/* Carte miniature des autres témoignages */}
                    <div className="space-y-3 mb-8">
                      {testimonials.map((testimonial, index) => (
                        index !== activeTestimonial && 
                        <motion.button
                          key={index}
                          onClick={() => setActiveTestimonial(index)}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 0.7, y: 0 }}
                          whileHover={{ opacity: 1, scale: 1.02 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="w-full p-4 text-left bg-white rounded-lg shadow-md hover:shadow-lg border border-gray-100 transition-all duration-300"
                        >
                          <p className="text-gray-500 text-sm line-clamp-2">{testimonial.testimonial.substring(0, 100)}...</p>
                          <div className="mt-2 flex items-center">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center text-white text-xs font-bold">
                              {testimonial.company.charAt(0)}
                            </div>
                            <span className="ml-2 text-xs font-medium text-gray-900">{testimonial.company}</span>
                          </div>
                        </motion.button>
                      ))}
                    </div>
                    
                    {/* Contrôles de navigation */}
                    <div className="flex justify-center items-center space-x-4">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                        className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:text-red-600 hover:shadow-lg transition-all duration-300 focus:outline-none"
                        aria-label="Témoignage précédent"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </motion.button>
                      
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)}
                        className="w-12 h-12 rounded-full bg-red-600 shadow-md flex items-center justify-center text-white hover:bg-red-700 hover:shadow-lg transition-all duration-300 focus:outline-none"
                        aria-label="Témoignage suivant"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Indicateurs mobiles (visible uniquement sur mobile) */}
              <div className="md:hidden flex justify-center mt-8 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`transition-all duration-300 ${
                      activeTestimonial === index 
                        ? 'bg-red-600 w-6 h-2 rounded-md shadow-md' 
                        : 'bg-gray-300 w-2 h-2 rounded-full hover:bg-red-300'
                    }`}
                    aria-label={`Aller au témoignage ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 bg-black overflow-hidden">
          {/* Cercles décoratifs */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-red-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-red-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Besoin de nos services ?
            </h2>
            <p className="text-xl text-red-100 mb-10 max-w-2xl mx-auto">
              Notre équipe d'experts est à votre disposition pour répondre à toutes vos questions en matière de sécurité
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg text-white bg-red-600 hover:bg-red-700 transition-all duration-300 transform hover:-translate-y-1"
            >
              Contactez-nous
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </section>

        {/* Service Detail Modal */}
        <AnimatePresence>
          {selectedService && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedService(null)}
            >
              <motion.div 
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="bg-white rounded-2xl max-w-2xl w-full p-8 relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-900"
                  onClick={() => setSelectedService(null)}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                
                <div className="flex items-center mb-6">
                  <div className="bg-red-600 rounded-lg p-3 mr-4">
                    <div className="text-white">
                      {selectedService.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{selectedService.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-6">{selectedService.description}</p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Ce que nous proposons</h4>
                    <ul className="space-y-2">
                      {selectedService.details && selectedService.details.map((detail, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-5 h-5 text-red-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Notre approche</h4>
                    <p className="text-gray-600">
                      Nous adaptons notre approche à chaque client pour garantir une sécurité optimale 
                      et une tranquillité d'esprit totale. Nos experts évaluent vos besoins et 
                      élaborent un plan sur mesure.
                    </p>
                  </div>
                </div>
                
                <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:justify-between">
                  <Link 
                    to="/contact"
                    className="inline-flex items-center justify-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                  >
                    Contactez-nous
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                  <Link 
                    to="/services"
                    className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Tous nos services
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Layout>
  );
}