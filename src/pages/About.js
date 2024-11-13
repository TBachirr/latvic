import React from 'react';
import Layout from '../components/Layout';

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
      <div className="min-h-screen bg-white pt-16">
        {/* Hero Section */}
        <div className="relative bg-gray-900 py-16">
          <div className="absolute inset-0">
            <img
              className="w-full h-full object-cover opacity-30"
              src="/images/logo.jpg"
              alt="LATVIC team"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold text-white text-center">
              À Propos de LATVIC
            </h1>
            <p className="mt-4 text-xl text-gray-300 text-center max-w-3xl mx-auto">
              Plus de 10 ans d'expertise dans la sécurité en Guinée
            </p>
          </div>
        </div>

        {/* Histoire Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900">
                  Notre Histoire
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Fondée en 2013, LATVIC est née de la vision de créer une entreprise de sécurité 
                  qui place l'excellence et l'innovation au cœur de ses services. Au fil des années, 
                  nous avons développé une expertise unique dans le domaine de la sécurité en Guinée.
                </p>
                <p className="mt-4 text-lg text-gray-600">
                  Aujourd'hui, nous sommes fiers d'être reconnus comme un leader dans notre secteur, 
                  servant des clients prestigieux et contribuant à la sécurité de notre communauté.
                </p>
              </div>
              <div className="mt-8 lg:mt-0">
                <img
                  className="rounded-lg shadow-lg w-full h-[400px] object-cover"
                  src="/images/logo.jpg"
                  alt="Histoire de LATVIC"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Valeurs Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900">
                Nos Valeurs
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                Les principes qui guident nos actions quotidiennes
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 text-center"
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900">
                Notre Équipe
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                Des professionnels dévoués à votre sécurité
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
              {team.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="relative">
                    <img
                      className="w-48 h-48 rounded-full mx-auto object-cover"
                      src={member.image}
                      alt={member.name}
                    />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-medium">{member.role}</p>
                    <p className="mt-2 text-gray-600">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900">
                Rejoignez-nous
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                Découvrez les opportunités de carrière chez LATVIC
              </p>
              <div className="mt-8">
                <a
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  Contactez-nous
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
} 