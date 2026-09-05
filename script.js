const translations = {
  es: {
    navWhy: "Por qué importa", navAction: "Qué hacemos", navDonate: "Donar", eyebrow: "Conservación · Borneo",
    heroTitle: "Un pequeño felino.<br /><em>Un gran desconocido.</em>", heroText: "El gato de Borneo vive en silencio en uno de los bosques más importantes del planeta. Ayúdanos a conocerlo para poder protegerlo.", heroCta: "Apoyar el proyecto <span aria-hidden=\"true\">↗</span>", heroLink: "Conoce la historia <span aria-hidden=\"true\">↓</span>", imageCaption: "Bosques de Borneo",
    sectionWhy: "POR QUÉ IMPORTA", whyTitle: "Proteger lo que todavía<br /><em>estamos aprendiendo a ver.</em>", whyText: "El gato de Borneo (<i>Catopuma badia</i>) es endémico de la isla y uno de los felinos más raros y menos estudiados del mundo. Cada fragmento de información puede cambiar lo que sabemos sobre su hábitat, sus amenazas y su futuro.", whyCta: "Cómo colaboramos <span aria-hidden=\"true\">↗</span>", statOne: "isla donde vive", statTwo: "preguntas por responder", statThree: "formas de ayudar",
    sectionAction: "UNA RED PARA EL BOSQUE", actionTitle: "La conservación<br /><em>se construye en equipo.</em>", actionText: "Saving Borneo Cat nace para conectar conocimiento, tecnología y personas que quieren que este felino tenga una oportunidad.", cardOneTitle: "Investigar", cardOneText: "Crear herramientas para reunir, ordenar y compartir información sobre la especie.", cardTwoTitle: "Conectar", cardTwoText: "Acercar a investigadores, organizaciones y comunidades que ya están trabajando en Borneo.", cardThreeTitle: "Activar", cardThreeText: "Convertir el interés de personas como tú en recursos para la conservación.",
    donateEyebrow: "Tu ayuda cuenta", donateTitle: "Haz espacio<br /><em>para lo desconocido.</em>", donateText: "Tu contribución ayuda a poner en marcha las primeras herramientas y alianzas del proyecto. Toda colaboración, grande o pequeña, abre una puerta.", donateButton: "Donar con Stripe <span aria-hidden=\"true\">↗</span>", donateNote: "El pago se procesa de forma segura a través de Stripe. Gracias por apoyar la protección del gato de Borneo.", footerText: "Por un futuro donde conocer a una especie también signifique protegerla."
  },
  en: {
    navWhy: "Why it matters", navAction: "What we do", navDonate: "Donate", eyebrow: "Conservation · Borneo",
    heroTitle: "A small cat.<br /><em>A great unknown.</em>", heroText: "The Borneo cat moves quietly through one of the most important forests on Earth. Help us learn about it so we can protect it.", heroCta: "Support the project <span aria-hidden=\"true\">↗</span>", heroLink: "Read the story <span aria-hidden=\"true\">↓</span>", imageCaption: "Borneo forests",
    sectionWhy: "WHY IT MATTERS", whyTitle: "Protect what we are still<br /><em>learning how to see.</em>", whyText: "The Borneo cat (<i>Catopuma badia</i>) is endemic to the island and one of the rarest, least-studied felines in the world. Every new piece of information can change what we know about its habitat, threats and future.", whyCta: "How we collaborate <span aria-hidden=\"true\">↗</span>", statOne: "island it calls home", statTwo: "questions to answer", statThree: "ways to help",
    sectionAction: "A NETWORK FOR THE FOREST", actionTitle: "Conservation<br /><em>is built together.</em>", actionText: "Saving Borneo Cat exists to connect knowledge, technology and people who want this small feline to have a chance.", cardOneTitle: "Research", cardOneText: "Build tools to gather, organise and share information about the species.", cardTwoTitle: "Connect", cardTwoText: "Bring closer the researchers, organisations and communities already working in Borneo.", cardThreeTitle: "Activate", cardThreeText: "Turn the interest of people like you into resources for conservation.",
    donateEyebrow: "Your help matters", donateTitle: "Make room<br /><em>for the unknown.</em>", donateText: "Your contribution helps launch the project's first tools and partnerships. Every collaboration, large or small, opens a door.", donateButton: "Donate with Stripe <span aria-hidden=\"true\">↗</span>", donateNote: "Your payment is securely processed through Stripe. Thank you for supporting Borneo cat conservation.", footerText: "For a future where learning about a species also means protecting it."
  }
};

const languageToggle = document.querySelector("[data-language-toggle]");
let currentLanguage = "es";

function setLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = translations[language][element.dataset.i18n];
    if (value) element.innerHTML = value;
  });
  languageToggle.innerHTML = language === "es" ? "EN <span>·</span> ES" : "ES <span>·</span> EN";
  languageToggle.setAttribute("aria-label", language === "es" ? "Switch to English" : "Cambiar a español");
}

languageToggle.addEventListener("click", () => setLanguage(currentLanguage === "es" ? "en" : "es"));