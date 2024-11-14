import React, { useState } from 'react';
import Layout from '../components/Layout';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <div className="relative bg-black py-24 overflow-hidden">
          {/* Cercles décoratifs */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-red-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-red-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Badge animé */}
            <div className="inline-flex items-center px-4 py-2 bg-red-600/10 rounded-full text-red-600 backdrop-blur-sm border border-red-600/20 animate-pulse mb-8">
              <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
              <span className="text-sm font-medium">Contactez-nous</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
              Parlons de votre <span className="text-red-600">sécurité</span>
            </h1>
            <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
              Notre équipe d'experts est à votre écoute pour répondre à vos besoins
            </p>
          </div>
        </div>

        {/* Section Formulaire et Contact */}
        <section className="relative py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Colonne de gauche - Informations */}
              <div>
                <div className="space-y-8">
                  {/* Info items */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Téléphone */}
                    <div className="flex items-center space-x-4 group p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300">
                      <div className="flex-shrink-0 w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-red-600 text-sm font-medium">Téléphone</p>
                        <p className="text-gray-900 font-medium">+224 XX XX XX XX</p>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-center space-x-4 group p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300">
                      <div className="flex-shrink-0 w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-red-600 text-sm font-medium">Email</p>
                        <p className="text-gray-900 font-medium">contact@latvic.com</p>
                      </div>
                    </div>
                  </div>

                  {/* Localisation */}
                  <div className="flex items-center space-x-4 group p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300">
                    <div className="flex-shrink-0 w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-red-600 text-sm font-medium">Adresse</p>
                      <a 
                        href="https://www.google.com/maps/place/Conakry,+Guinée" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-gray-900 font-medium hover:text-red-600 transition-colors flex items-center group"
                      >
                        Conakry, Guinée
                        <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                      <p className="text-sm text-gray-500 mt-1">
                        Cliquez pour ouvrir dans Google Maps
                        <svg className="w-4 h-4 inline-block ml-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </p>
                    </div>
                  </div>

                  {/* Image avec effet */}
                  <div className="mt-12 relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-gray-900 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                    <img
                      src="/images/logo.jpg"
                      alt="Localisation"
                      className="relative rounded-2xl w-full h-[400px] object-contain bg-white transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>

              {/* Colonne de droite - Formulaire */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-gray-900 rounded-2xl transform rotate-1 opacity-10"></div>
                <div className="relative bg-white rounded-2xl shadow-xl p-8 transform -rotate-1">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                          Nom complet *
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors"
                        placeholder="+224 XX XX XX XX"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                        Sujet *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors"
                        placeholder="Comment pouvons-nous vous aider ?"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors"
                        placeholder="Décrivez votre besoin..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg text-white bg-red-600 hover:bg-red-700 transition-all duration-300 transform hover:-translate-y-1"
                    >
                      Envoyer le message
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
} 