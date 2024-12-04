document.addEventListener("DOMContentLoaded", function() {
  const themeToggle = document.getElementById('theme-toggle');
  const languageSwitcher = document.getElementById('language-switcher');
  const body = document.body;
  

  // Theme Toggling
  
  themeToggle.addEventListener('click', function() {
    body.classList.toggle('dark');
    const icon = themeToggle.querySelector('i');
    if (body.classList.contains('dark')) {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
      icon.classList.remove('#74C0FC')
      icon.classList.add('#FFD43B');
    } else {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
    }
  });
  document.getElementById('theme-toggle').addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
      });


  // Language Switching
  const textContent = {
    en: {
      greeting: 'Hello!',
      name: 'My name is Arda Canbakış',
      description: 'with a passion for learning new languages, extreme sports, DIY projects, and the great outdoors.',
      aboutMe: 'About Me',
      projects: 'My Projects',
      contactMe: 'Contact Me',
      projectDescriptions: [
        'A comprehensive web application with a React frontend and a Spring Boot backend, providing a complete management solution for any veterinary clinic.',
        'A responsive gym website with features like a BMI calculator, dynamic class schedules, and e-commerce functionality.',
        'A quiz app using Redux, Node.js, and React, featuring 10 questions with related images and a user-friendly design.',
        'A web application that lists various spaceships in the Star Wars universe and shows the details of a selected ship by using SWAPI (Star Wars API).'
      ],
      aboutDescription:'I am a versatile developer proficient in both front-end and back-end technologies. My passion for coding is matched only by my desire to learn and adapt to new challenges. I thrive in dynamic environments and am always ready to tackle complex problems with innovative solutions.',
      webDevelopmentDescription:'From concept to deployment, I offer comprehensive web development services to bring your vision to life. Whether you need a simple website or a complex web application, I have the skills and experience to deliver high-quality solutions.',
      uiUxDesignDescription:'Creating user-friendly and aesthetically pleasing interfaces is my specialty. I focus on crafting designs that provide a seamless user experience, ensuring that your users can navigate your site with ease and enjoy the process.',
      mobileAppDescription:'In today,s mobile-first world, having a responsive and functional mobile app is crucial. I develop mobile applications that are tailored to your needs, providing a smooth and engaging user experience on any device.'
    },
    tr: {
      greeting: 'Merhaba!',
      name: 'Benim adım Arda Canbakış',
      description: 'yeni diller öğrenmeye, ekstrem sporlara, DIY projelerine ve doğada vakit geçirmeye tutkuluyum.',
      aboutMe: 'Hakkımda',
      projects: 'Projelerim',
      contactMe: 'İletişim',
      projectDescriptions: [
        'Bir veteriner kliniği için eksiksiz bir yönetim çözümü sunan, React frontend ve Spring Boot backende sahip kapsamlı bir web uygulaması.',
        'BMI hesaplayıcı, dinamik ders programları ve e-ticaret işlevselliği gibi özelliklere sahip responsive bir spor salonu web sitesi.',
        'Redux, Node.js ve React kullanarak oluşturulmuş bir sınav uygulaması, ilgili resimlerle 10 soru ve kullanıcı dostu bir tasarım sunuyor.',
        'Star Wars evrenindeki çeşitli uzay gemilerini listeleyen ve seçilen bir geminin detaylarını SWAPI (Star Wars API) kullanarak gösteren bir web uygulaması.'
      ],
      aboutDescription:'Hem front-end hem de back-end teknolojilerinde yetkin, çok yönlü bir yazılımcıyım. Kodlama tutkum, yeni zorluklara öğrenme ve uyum sağlama arzumla yarışır. Karmaşık sorunlara yenilikçi çözümlerle yaklaşmaya hazırım.',
      webDevelopmentDescription:'Fikirden dağıtıma kadar, vizyonunuzu hayata geçirmek için kapsamlı web geliştirme hizmetleri sunuyorum. İster basit bir web sitesi ister karmaşık bir web uygulaması olsun, yüksek kaliteli çözümler sunmak için gerekli beceri ve deneyime sahibim.',
      uiUxDesignDescription:'Kullanıcı dostu ve estetik açıdan hoş arayüzler oluşturmak benim uzmanlık alanım. Kullanıcılarınızın sitenizde kolayca gezinebilmesini ve süreçten keyif almasını sağlayan tasarımlar yaratmaya odaklanıyorum.',
      mobileAppDescription:'Günümüzün mobil öncelikli dünyasında, duyarlı ve işlevsel bir mobil uygulamaya sahip olmak çok önemli. İhtiyaçlarınıza göre özel olarak hazırlanmış, herhangi bir cihazda sorunsuz ve etkileyici bir kullanıcı deneyimi sunan mobil uygulamalar geliştiriyorum.'
    },
    es: {
      greeting: '¡Hola!',
      name: 'Mi nombre es Arda Canbakış',
      description: 'con una pasión por aprender nuevos idiomas, deportes extremos, proyectos de bricolaje y la naturaleza.',
      aboutMe: 'Sobre Mí',
      projects: 'Mis Proyectos',
      contactMe: 'Contáctame',
      projectDescriptions: [
        'Una aplicación web integral con un frontend en React y un backend en Spring Boot, que proporciona una solución completa de gestión para cualquier clínica veterinaria.',
        'Un sitio web de gimnasio responsivo con características como un calculador de IMC, horarios de clases dinámicos y funcionalidad de comercio electrónico.',
        'Una aplicación de cuestionario utilizando Redux, Node.js y React, con 10 preguntas relacionadas con imágenes y un diseño fácil de usar.',
        'Una aplicación web que lista varias naves espaciales en el universo de Star Wars y muestra los detalles de una nave seleccionada utilizando SWAPI (Star Wars API).'
      ],
      aboutDescription: 'Soy un desarrollador versátil, con experiencia en tecnologías tanto de front-end como de back-end. Mi pasión por la programación solo es igualada por mi deseo de aprender y adaptarme a nuevos desafíos. Me desenvuelvo bien en entornos dinámicos y siempre estoy listo para abordar problemas complejos con soluciones innovadoras.',
      webDevelopmentDescription:'Desde el concepto hasta el despliegue, ofrezco servicios integrales de desarrollo web para dar vida a tu visión. Ya sea que necesites un sitio web simple o una aplicación web compleja, tengo las habilidades y la experiencia para ofrecer soluciones de alta calidad.',
      uiUxDesignDescription:'Crear interfaces fáciles de usar y estéticamente atractivas es mi especialidad. Me enfoco en diseñar experiencias de usuario fluidas, asegurando que tus usuarios puedan navegar por tu sitio con facilidad y disfruten del proceso.',
      mobileAppDescription:'En el mundo actual, priorizar el móvil es esencial. Desarrollo aplicaciones móviles que se adaptan a tus necesidades, proporcionando una experiencia de usuario fluida y atractiva en cualquier dispositivo.'
    },
  };

  languageSwitcher.addEventListener('change', function() {
    const selectedLanguage = languageSwitcher.value;
    document.getElementById('greeting').textContent = textContent[selectedLanguage].greeting;
    document.getElementById('name').textContent = textContent[selectedLanguage].name;
    document.getElementById('description').textContent = textContent[selectedLanguage].description;
    document.getElementById('aboutDescription').textContent = textContent[selectedLanguage].aboutDescription;
    document.getElementById('webDevelopmentDescription').textContent = textContent[selectedLanguage].aboutDescription;
    document.getElementById('uiUxDesignDescription').textContent = textContent[selectedLanguage].aboutDescription;
    document.getElementById('mobileAppDescription').textContent = textContent[selectedLanguage].aboutDescription;
    
    document.querySelector('.projects-container .projects-box:nth-child(1) p').textContent = textContent[selectedLanguage].projectDescriptions[0];
    document.querySelector('.projects-container .projects-box:nth-child(2) p').textContent = textContent[selectedLanguage].projectDescriptions[1];
    document.querySelector('.projects-container .projects-box:nth-child(3) p').textContent = textContent[selectedLanguage].projectDescriptions[2];
    document.querySelector('.projects-container .projects-box:nth-child(4) p').textContent = textContent[selectedLanguage].projectDescriptions[3];
    
  });

  // Toggle mobile menu
  const menuBtn = document.querySelector('#menu-btn');
  const navbar = document.querySelector('.navbar');

  menuBtn.addEventListener('change', () => {
    navbar.classList.toggle('active', menuBtn.checked);
  });

});
