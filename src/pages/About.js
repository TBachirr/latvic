import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

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

  return (
    <Layout>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="relative min-h-[60vh] bg-black flex items-center overflow-hidden">
          {/* Cercles décoratifs */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-red-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-red-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Badge animé */}
            <div className="inline-flex items-center px-4 py-2 bg-red-600/10 rounded-full text-red-600 backdrop-blur-sm border border-red-600/20 animate-pulse mb-8">
              <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
              <span className="text-sm font-medium">Notre histoire et nos valeurs</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
              À Propos de <span className="text-red-600">LATVIC</span>
            </h1>
            <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
              Plus de 10 ans d'expertise dans la sécurité en Guinée
            </p>
          </div>
        </div>

        {/* Histoire Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-8">
                  Notre Histoire
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Fondée en 2013, LATVIC est née de la vision de créer une entreprise de sécurité 
                  qui place l'excellence et l'innovation au cœur de ses services.
                </p>
                <p className="text-lg text-gray-600">
                  Aujourd'hui, nous sommes fiers d'être reconnus comme un leader dans notre secteur, 
                  servant des clients prestigieux et contribuant à la sécurité de notre communauté.
                </p>
              </div>
              <div className="mt-12 lg:mt-0">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-gray-900 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                  <img
                    className="relative rounded-2xl shadow-xl w-full h-[400px] object-cover transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300"
                    src="/images/logo.jpg"
                    alt="Histoire de LATVIC"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Valeurs Section */}
        <section className="py-24 bg-black relative overflow-hidden">
          {/* Cercles décoratifs */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-red-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-red-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Nos Valeurs
              </h2>
              <p className="text-xl text-gray-300">
                Les principes qui guident nos actions quotidiennes
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-red-600/20 to-transparent rounded-bl-full"></div>
                  <div className="relative z-10 text-center">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{value.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-red-600 transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-gray-400">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Notre Équipe
              </h2>
              <p className="text-xl text-gray-600">
                Des professionnels dévoués à votre sécurité
              </p>
            </div>
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
              {team.map((member, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-gray-900 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                  <div className="relative bg-white p-8 rounded-2xl shadow-lg transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300">
                    <img
                      className="w-32 h-32 rounded-full mx-auto object-cover ring-4 ring-red-50"
                      src={member.image}
                      alt={member.name}
                    />
                    <div className="mt-6 text-center">
                      <h3 className="text-xl font-bold text-gray-900">
                        {member.name}
                      </h3>
                      <p className="text-red-600 font-medium mt-1">{member.role}</p>
                      <p className="mt-4 text-gray-600">{member.description}</p>
                    </div>
                  </div>
                </div>
              ))}
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
              Rejoignez Notre Équipe
            </h2>
            <p className="text-xl text-red-100 mb-10 max-w-2xl mx-auto">
              Découvrez les opportunités de carrière chez LATVIC
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
      </div>
    </Layout>
  );
} 