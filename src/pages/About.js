import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function About() {
  const values = [
    {
      title: "Excellence",
      description: "Nous nous engageons à fournir des services de sécurité de la plus haute qualité.",
      icon: "⭐",
    },
    {
      title: "Intégrité",
      description: "Nous agissons avec honnêteté et éthique dans toutes nos interactions.",
      icon: "🤝",
    },
    {
      title: "Innovation",
      description: "Nous adoptons les dernières technologies pour améliorer nos services.",
      icon: "💡",
    },
    {
      title: "Professionnalisme",
      description: "Notre équipe est formée aux plus hauts standards de l'industrie.",
      icon: "👔",
    }
  ];

  const team = [
    {
      name: "Jean Dupont",
      role: "Directeur Général",
      image: "/images/logo.jpg",
      description: "20 ans d'expérience dans la sécurité"
    },
    {
      name: "Marie Martin",
      role: "Directrice des Opérations",
      image: "/images/logo.jpg",
      description: "Expert en gestion de la sécurité"
    },
    {
      name: "Pierre Dubois",
      role: "Chef de la Formation",
      image: "/images/logo.jpg",
      description: "Ancien instructeur militaire"
    }
  ];

  const portfolioImages = [
    {
      title: "Protection VIP",
      description: "Service de protection rapprochée par notre équipe d'élite",
      image: "/images/team.jpg"
    },
    {
      title: "Sécurité Événementielle",
      description: "Sécurisation professionnelle de vos événements",
      image: "/images/logo.jpg"
    },
    {
      title: "Formation Spécialisée",
      description: "Notre équipe lors d'une session de formation tactique",
      image: "/images/team.jpg"
    },
    {
      title: "Services Corporate",
      description: "Protection des installations et du personnel",
      image: "/images/logo.jpg"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="relative min-h-[60vh] bg-black flex items-center overflow-hidden">
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
              <span className="text-sm font-medium">Notre histoire et nos valeurs</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl font-extrabold text-white mb-6"
            >
              À Propos de <span className="text-red-600">LATVIC</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Plus de 10 ans d'expertise dans la sécurité en Guinée
            </motion.p>
          </div>
        </div>

        {/* Histoire Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-4xl font-bold text-gray-900 mb-8"
                >
                  Notre Histoire
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-lg text-gray-600 mb-6"
                >
                  Fondée en 2024, LATVIC est née de la vision de créer une entreprise de sécurité 
                  qui place l'excellence et l'innovation au cœur de ses services.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-lg text-gray-600"
                >
                  Aujourd'hui, nous sommes fiers d'être reconnus comme un leader dans notre secteur, 
                  servant des clients prestigieux et contribuant à la sécurité de notre communauté.
                </motion.p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mt-12 lg:mt-0"
              >
                <div className="relative group">
                  <motion.div
                    whileHover={{ rotate: 2 }}
                    className="absolute inset-0 bg-gradient-to-r from-red-600 to-gray-900 rounded-2xl transform rotate-1 transition-transform duration-300"
                  ></motion.div>
                  <motion.img
                    whileHover={{ rotate: -2 }}
                    className="relative rounded-2xl shadow-xl w-full h-[400px] object-cover transform -rotate-1 transition-transform duration-300"
                    src="/images/logo.jpg"
                    alt="Histoire de LATVIC"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Valeurs Section */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Nos Valeurs
              </h2>
              <p className="text-xl text-gray-600">
                Les principes qui guident nos actions quotidiennes
              </p>
            </motion.div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="relative z-10 text-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="text-4xl mb-4"
                    >
                      {value.icon}
                    </motion.div>
                    <motion.h3
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                      viewport={{ once: true }}
                      className="text-xl font-bold text-white mb-4 group-hover:text-red-600 transition-colors"
                    >
                      {value.title}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                      viewport={{ once: true }}
                      className="text-gray-400"
                    >
                      {value.description}
                    </motion.p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Notre Équipe
              </h2>
              <p className="text-xl text-gray-600">
                Des professionnels dévoués à votre sécurité
              </p>
            </motion.div>
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <motion.div
                    whileHover={{ rotate: 2 }}
                    className="absolute inset-0 bg-gradient-to-r from-red-600 to-gray-900 rounded-2xl transform rotate-1 transition-transform duration-300"
                  ></motion.div>
                  <motion.div
                    whileHover={{ rotate: -2 }}
                    className="relative bg-white p-8 rounded-2xl shadow-lg transform -rotate-1 transition-transform duration-300"
                  >
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="w-32 h-32 rounded-full mx-auto object-cover ring-4 ring-red-50"
                      src={member.image}
                      alt={member.name}
                    />
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                      viewport={{ once: true }}
                      className="mt-6 text-center"
                    >
                      <h3 className="text-xl font-bold text-gray-900">
                        {member.name}
                      </h3>
                      <p className="text-red-600 font-medium mt-1">{member.role}</p>
                      <p className="mt-4 text-gray-600">{member.description}</p>
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-24 bg-black relative overflow-hidden">
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
            className="absolute bottom-0 right-0 w-72 h-72 bg-red-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"
          ></motion.div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Nos Réalisations
              </h2>
              <p className="text-xl text-gray-300">
                Quelques moments marquants avec nos clients prestigieux
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Slider
                dots={false}
                infinite={true}
                speed={800}
                slidesToShow={1}
                slidesToScroll={1}
                autoplay={true}
                autoplaySpeed={5000}
                pauseOnHover={true}
                arrows={true}
                className="portfolio-slider"
                fade={true}
              >
                {portfolioImages.map((item, index) => (
                  <div key={index} className="relative px-4 py-8">
                    <div className="relative max-w-5xl mx-auto">
                      {/* Fond décoratif */}
                      <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-gray-900/20 rounded-3xl transform rotate-1"></div>
                      
                      {/* Contenu principal */}
                      <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-hidden shadow-2xl">
                        <div className="flex flex-col lg:flex-row">
                          {/* Image */}
                          <div className="lg:w-2/3 relative overflow-hidden">
                            <div className="aspect-[16/9]">
                              <motion.img
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.4 }}
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            {/* Overlay gradient subtil */}
                            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
                          </div>

                          {/* Texte */}
                          <div className="lg:w-1/3 p-8 lg:p-12 flex flex-col justify-center">
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6 }}
                              viewport={{ once: true }}
                            >
                              <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                              <p className="text-gray-300 text-lg leading-relaxed">{item.description}</p>
                              <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="mt-8 px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300"
                              >
                                En savoir plus
                              </motion.button>
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
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
              Rejoignez Notre Équipe
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-red-100 mb-10 max-w-2xl mx-auto"
            >
              Découvrez les opportunités de carrière chez LATVIC
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