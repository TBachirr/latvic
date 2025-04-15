import React, { useState, useRef, useEffect } from 'react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

// Configuration EmailJS
const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_nlmh3sw';
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_bjhq25o';
const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'jJnNE_qcXzT4AeXnp';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: false,
    message: ''
  });
  
  const [submitCount, setSubmitCount] = useState(0);
  const [lastSubmitTime, setLastSubmitTime] = useState(0);
  
  const form = useRef();

  // Nettoyage des données d'entrée pour prévenir les attaques XSS
  const sanitizeInput = (input) => {
    if (typeof input !== 'string') return '';
    return input
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#x27;')
      .replace(/\//g, '&#x2F;');
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };

    // Rate limiting - Empêcher les soumissions trop fréquentes
    const now = Date.now();
    if (now - lastSubmitTime < 10000) { // 10 secondes minimum entre les soumissions
      setStatus({
        submitting: false,
        success: false,
        error: true,
        message: 'Veuillez attendre quelques secondes avant de réessayer.'
      });
      return false;
    }

    // Validation du nom avec sécurité renforcée
    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est requis';
      isValid = false;
    } else if (formData.name.length > 100) {
      newErrors.name = 'Le nom est trop long (100 caractères maximum)';
      isValid = false;
    } else if (!/^[a-zA-ZÀ-ÿ\s'-]{2,}$/.test(formData.name)) {
      newErrors.name = 'Le nom contient des caractères non autorisés';
      isValid = false;
    }

    // Validation de l'email avec sécurité renforcée
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
      isValid = false;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = "Format d'email invalide";
      isValid = false;
    } else if (formData.email.length > 100) {
      newErrors.email = "L'email est trop long (100 caractères maximum)";
      isValid = false;
    }

    // Validation du téléphone (optionnel mais validé si présent)
    if (formData.phone.trim() && !/^[+]?[0-9\s-]{8,15}$/.test(formData.phone)) {
      newErrors.phone = "Format de numéro de téléphone invalide";
      isValid = false;
    }

    // Validation du sujet
    if (!formData.subject.trim()) {
      newErrors.subject = 'Le sujet est requis';
      isValid = false;
    } else if (formData.subject.length > 200) {
      newErrors.subject = 'Le sujet est trop long (200 caractères maximum)';
      isValid = false;
    }

    // Validation du message
    if (!formData.message.trim()) {
      newErrors.message = 'Le message est requis';
      isValid = false;
    } else if (formData.message.length > 5000) {
      newErrors.message = 'Le message est trop long (5000 caractères maximum)';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    // Limite le nombre de soumissions à 5 par session
    if (submitCount >= 5) {
      setStatus({
        submitting: false,
        success: false,
        error: true,
        message: 'Nombre maximum de soumissions atteint. Veuillez réessayer plus tard.'
      });
      return;
    }
    
    setStatus({ submitting: true, success: false, error: false, message: '' });
    
    // Nettoyer les données avant l'envoi
    const sanitizedData = {
      name: sanitizeInput(formData.name),
      email: sanitizeInput(formData.email),
      phone: sanitizeInput(formData.phone),
      subject: sanitizeInput(formData.subject),
      message: sanitizeInput(formData.message)
    };

    // Remplacer les valeurs des champs du formulaire par les données nettoyées
    const formElement = form.current;
    formElement.querySelector('[name="name"]').value = sanitizedData.name;
    formElement.querySelector('[name="email"]').value = sanitizedData.email;
    formElement.querySelector('[name="phone"]').value = sanitizedData.phone;
    formElement.querySelector('[name="subject"]').value = sanitizedData.subject;
    formElement.querySelector('[name="message"]').value = sanitizedData.message;
    
    emailjs.sendForm(
      EMAILJS_SERVICE_ID, 
      EMAILJS_TEMPLATE_ID, 
      form.current, 
      EMAILJS_PUBLIC_KEY
    )
      .then((result) => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
        setStatus({
          submitting: false,
          success: true,
          error: false,
          message: 'Message envoyé avec succès!'
        });
        // Mettre à jour le compteur de soumissions et le temps de la dernière soumission
        setSubmitCount(prev => prev + 1);
        setLastSubmitTime(Date.now());
      }, (error) => {
        console.error('Erreur:', error);
        setStatus({
          submitting: false,
          success: false,
          error: true,
          message: 'Une erreur est survenue. Veuillez réessayer.'
        });
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Limitation de la longueur des entrées pour prévenir les attaques par débordement
    const maxLengths = {
      name: 100,
      email: 100,
      phone: 20,
      subject: 200,
      message: 5000
    };
    
    const truncatedValue = value.slice(0, maxLengths[name] || 100);
    
    setFormData(prev => ({
      ...prev,
      [name]: truncatedValue
    }));
    
    // Réinitialiser l'erreur du champ modifié
    setErrors(prev => ({
      ...prev,
      [name]: ''
    }));
  };

  // Empêcher le stockage des données sensibles dans l'historique du navigateur
  useEffect(() => {
    return () => {
      if (window.history.replaceState) {
        window.history.replaceState(null, document.title, window.location.pathname);
      }
    };
  }, []);

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
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
              <span className="text-sm font-medium">Contactez-nous</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl font-extrabold text-white mb-6"
            >
              Parlons de votre <span className="text-red-600">sécurité</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Notre équipe d'experts est à votre écoute pour répondre à vos besoins
            </motion.p>
          </div>
        </div>

        {/* Section Formulaire et Contact */}
        <section className="relative py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Colonne de gauche - Informations */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="space-y-8 -mt-16">
                  {/* Logo en premier */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-red-600 to-gray-900 rounded-2xl opacity-10"
                    ></motion.div>
                    <motion.img
                      src="/images/logo.jpg"
                      alt="Localisation"
                      className="relative rounded-2xl w-full h-[400px] object-contain bg-white"
                    />
                  </motion.div>

                  {/* Info items */}
                  <div className="space-y-4">
                    {/* Téléphone et Email sur la même ligne */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Téléphone */}
                      <div className="flex items-center space-x-4 p-3 rounded-xl bg-white shadow-sm">
                        <div className="flex-shrink-0 w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center">
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
                      <div className="flex items-center space-x-4 p-3 rounded-xl bg-white shadow-sm">
                        <div className="flex-shrink-0 w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center">
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
                    <div className="flex items-center space-x-4 p-3 rounded-xl bg-white shadow-sm">
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
                  </div>
                </div>
              </motion.div>

              {/* Colonne de droite - Formulaire */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <motion.div
                  whileHover={{ rotate: 2 }}
                  className="absolute inset-0 bg-gradient-to-r from-red-600 to-gray-900 rounded-2xl transform rotate-1 opacity-10"
                ></motion.div>
                <motion.div
                  whileHover={{ rotate: -1 }}
                  className="relative bg-white rounded-2xl shadow-xl p-8 transform -rotate-1"
                >
                  {/* Message de statut */}
                  {status.success && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-500 text-green-700 rounded-lg flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {status.message}
                    </div>
                  )}
                  
                  {status.error && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-500 text-red-700 rounded-lg flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {status.message}
                    </div>
                  )}
                  
                  <form 
                    ref={form} 
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                    role="form"
                    aria-label="Formulaire de contact"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                      className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                    >
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
                          className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 transition-colors"
                          placeholder="John Doe"
                          aria-describedby={errors.name ? "name-error" : undefined}
                        />
                        {errors.name && (
                          <p id="name-error" className="mt-1 text-sm text-red-600">
                            {errors.name}
                          </p>
                        )}
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
                          className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 transition-colors"
                          placeholder="john@example.com"
                          aria-describedby={errors.email ? "email-error" : undefined}
                        />
                        {errors.email && (
                          <p id="email-error" className="mt-1 text-sm text-red-600">
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </motion.div>

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
                        className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 transition-colors"
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
                        className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 transition-colors"
                        placeholder="Comment pouvons-nous vous aider ?"
                        aria-describedby={errors.subject ? "subject-error" : undefined}
                      />
                      {errors.subject && (
                        <p id="subject-error" className="mt-1 text-sm text-red-600">
                          {errors.subject}
                        </p>
                      )}
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
                        className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 transition-colors"
                        placeholder="Décrivez votre besoin..."
                        aria-describedby={errors.message ? "message-error" : undefined}
                      />
                      {errors.message && (
                        <p id="message-error" className="mt-1 text-sm text-red-600">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <motion.button
                      type="submit"
                      disabled={status.submitting}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg text-white bg-red-600 hover:bg-red-700 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {status.submitting ? 'Envoi en cours...' : 'Envoyer le message'}
                      {!status.submitting && (
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      )}
                    </motion.button>
                  </form>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
} 