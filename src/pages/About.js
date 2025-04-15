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
      icon: (
        <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
    },
    {
      title: "Intégrité",
      description: "Nous agissons avec honnêteté et éthique dans toutes nos interactions.",
      icon: (
        <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Innovation",
      description: "Nous adoptons les dernières technologies pour améliorer nos services.",
      icon: (
        <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: "Professionnalisme",
      description: "Notre équipe est formée aux plus hauts standards de l'industrie.",
      icon: (
        <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    }
  ];

  const team = [
    {
      name: "Konate Kaba",
      role: "PDG",
      image: "/images/logo.jpg",
      description: "Entrepreneur et homme d'affaires, ancien PDG de mongo-gui sarlu et kaba konate et frère"
    },
    {
      name: "Aboubacar Latige Camara",
      role: "Directeur Général",
      image: "/images/logo.jpg",
      description: "17 ans d'expérience en sécurité, ancien coordinateur général de AGS Africa Group Securite"
    },
    {
      name: "Victor Oliano",
      role: "Directeur Général Adjoint",
      image: "/images/logo.jpg",
      description: "17 ans d'expérience en sécurité, ancien chef d'équipe d'intervention et coordinateur de zone"
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