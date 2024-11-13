import React from 'react';
import Layout from '../components/Layout';

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
      <div className="min-h-screen bg-white pt-16">
        {/* Hero Section */}
        <div className="bg-gray-900 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold text-white text-center">
              Nos Services de Sécurité
            </h1>
            <p className="mt-4 text-xl text-gray-300 text-center max-w-3xl mx-auto">
              Des solutions de sécurité professionnelles adaptées à vos besoins spécifiques
            </p>
          </div>
        </div>

        {/* Services détaillés */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-8">
                  <div className="flex items-center">
                    <span className="text-4xl mr-4">{service.icon}</span>
                    <h2 className="text-2xl font-bold text-gray-900">{service.title}</h2>
                  </div>
                  <p className="mt-4 text-gray-600">{service.description}</p>
                  <ul className="mt-6 space-y-3">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <svg
                          className="h-5 w-5 text-blue-600 mr-3"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <a
                      href="#contact"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                    >
                      En savoir plus
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section CTA */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900">
                Besoin d'une solution personnalisée ?
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                Contactez nos experts pour une consultation gratuite
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
        </div>
      </div>
    </Layout>
  );
} 