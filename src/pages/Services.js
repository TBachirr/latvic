import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    {
      title: "Protection Rapprochée",
      description: "Service de garde du corps professionnel pour votre sécurité personnelle",
      icon: "🛡️",
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
      icon: "⚠️",
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
      icon: "🎯",
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
      icon: "💡",
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
      icon: "💰",
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
      icon: "📹",
      details: [
        "Monitoring constant",
        "Systèmes de pointe",
        "Intervention sur alarme",
        "Rapports détaillés",
        "Maintenance préventive"
      ]
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-white">
        {/* Hero Section avec fond noir et cercles décoratifs */}
        <div className="relative bg-black py-24 overflow-hidden">
          {/* Cercles décoratifs */}
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

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Badge animé */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 bg-red-600/10 rounded-full text-red-600 backdrop-blur-sm border border-red-600/20 mb-8"
            >
              <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
              <span className="text-sm font-medium">Solutions de sécurité professionnelles</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl font-extrabold text-white mb-6"
            >
              Nos Services de <span className="text-red-600">Sécurité</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Des solutions adaptées à vos besoins spécifiques, avec une expertise reconnue en Guinée
            </motion.p>
          </div>
        </div>

        {/* Services détaillés */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Cercle décoratif */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                  className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-600/20 to-transparent rounded-bl-full"
                ></motion.div>
                
                <div className="relative z-10">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                    className="flex items-center mb-6"
                  >
                    <motion.span
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="text-4xl mr-4 group-hover:scale-110 transition-transform duration-300"
                    >
                      {service.icon}
                    </motion.span>
                    <h2 className="text-2xl font-bold text-white group-hover:text-red-600 transition-colors">
                      {service.title}
                    </h2>
                  </motion.div>
                  
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                    viewport={{ once: true }}
                    className="text-gray-300 mb-8"
                  >
                    {service.description}
                  </motion.p>
                  
                  <motion.ul
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                    viewport={{ once: true }}
                    className="space-y-4"
                  >
                    {service.details.map((detail, idx) => (
                      <motion.li
                        key={idx}
                        whileHover={{ x: 5 }}
                        className="flex items-center text-gray-400"
                      >
                        <svg className="h-5 w-5 text-red-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {detail}
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section CTA */}
        <section className="relative py-24 bg-black overflow-hidden">
          {/* Cercles décoratifs */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="absolute top-0 left-0 w-72 h-72 bg-red-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="absolute top-0 right-0 w-72 h-72 bg-red-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"
          ></motion.div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-white mb-6"
            >
              Besoin d'une solution personnalisée ?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-red-100 mb-10 max-w-2xl mx-auto"
            >
              Nos experts sont à votre disposition pour une consultation gratuite
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg text-white bg-red-600 hover:bg-red-700 transition-all duration-300 transform hover:-translate-y-1"
              >
                Contactez-nous
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
} 