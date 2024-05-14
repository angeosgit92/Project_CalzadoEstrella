// Selección del formulario de búsqueda
const searchForm = document.querySelector('.search-form');

// Asignación de evento al botón de búsqueda
document.querySelector('#search-btn').onclick = () => {
  searchForm.classList.toggle('active');
}

// Selección del botón de usuario
const userBtn = document.querySelector('#user-btn');

// Selección del cuadro de usuario
const userForm = document.querySelector('.user');

// Asignación de evento al botón de usuario
userBtn.onclick = () => {
  // Alternar la clase 'active' en el cuadro de usuario
  userForm.classList.toggle('active');
};

// Selección del formulario de inicio de sesión
const loginForm = document.querySelector('.login-form-container');

// Asignación de evento al botón de inicio de sesión
document.querySelector('#login-btn').onclick = () => {
  loginForm.classList.toggle('active');
}

// Asignación de evento al botón de cierre del formulario de inicio de sesión
document.querySelector('#close-login-btn').onclick = () => {
  loginForm.classList.remove('active');
}

// Selección del formulario de registro
const registerForm = document.querySelector('.register-form-container');
const registerMayoristaForm = document.querySelector('.register-mayorista-form-container');

// Asignación de evento al botón de registro
document.querySelector('#register-btn').onclick = () => {
  registerForm.classList.toggle('active');
}

// Asignación de evento al botón de cierre del formulario de registro
document.querySelector('#close-register-btn').onclick = () => {
  registerForm.classList.remove('active');
}

// Obtención del enlace de registro dentro del formulario de inicio de sesión
const registerLinkLogin = document.getElementById('register-link');

// Asignación de evento al enlace de registro dentro del formulario de inicio de sesión
registerLinkLogin.addEventListener('click', (event) => {
  event.preventDefault();
  loginForm.classList.remove('active');
  registerForm.classList.add('active');
});

// Obtención del enlace de registro dentro del formulario de inicio de sesión
const passwordLogin = document.getElementById('forgot-password-link');

// Asignación de evento al enlace de registro dentro del formulario de inicio de sesión
passwordLogin.addEventListener('click', (event) => {
  event.preventDefault();
  loginForm.classList.remove('active');
  registerForm.classList.add('active');
});

// Obtención del enlace de registro dentro del formulario de inicio de sesión
const registerMayoristaLinkLogin = document.getElementById('register-mayorista');

// Asignación de evento al enlace de registro dentro del formulario de inicio de sesión
registerMayoristaLinkLogin.addEventListener('click', (event) => {
  event.preventDefault();
  loginForm.classList.remove('active');
  registerMayoristaForm.classList.add('active');
});

// Asignación de eventos al enlace "Inicia sesión" en los formularios de registro
document.querySelectorAll('#inico-sesion').forEach(link => {
  link.addEventListener('click', () => {
    loginForm.classList.add('active');
    registerForm.classList.remove('active');
    registerMayoristaForm.classList.remove('active');
  });
});

// Selección del botón de cierre del formulario de registro
const closeLoginFormBtn = document.querySelector('#close-login-btn');
const closeRegisterNaturalBtn = document.querySelector('#close-register-btn');
const closeRegisterMayoristaBtn = document.querySelector('#close-register-mayorista-btn');

// Asignación de eventos al botón de cierre del formulario de inicio de sesión
closeLoginFormBtn.addEventListener('click', () => {
  loginForm.classList.remove('active');
});

// Asignación de eventos al botón de cierre del formulario de registro
closeRegisterNaturalBtn.addEventListener('click', () => {
  registerForm.classList.remove('active');
});

// Asignación de eventos al botón de cierre del formulario de registro mayorista
closeRegisterMayoristaBtn.addEventListener('click', () => {
  registerMayoristaForm.classList.remove('active');
});

// Evento de desplazamiento de la ventana
window.onscroll = () => {
  searchForm.classList.remove('active');

  if (window.scrollY > 80) {
    document.querySelector('.header .header-2').classList.add('active');
  } else {
    document.querySelector('.header .header-2').classList.remove('active');
  }
}

// Evento al cargar la ventana
window.onload = () => {
  if (window.scrollY > 80) {
    document.querySelector('.header .header-2').classList.add('active');
  } else {
    document.querySelector('.header .header-2').classList.remove('active');
  }

  fadeOut();
}

// Función de carga
function loader() {
  document.querySelector('.loader-container').classList.add('active');
}

// Función de desvanecimiento
function fadeOut() {
  setTimeout(loader, 4000);
}

// Inicialización de Swiper para el slider de libros
var swiperBooks = new Swiper(".books-slider", {
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// Inicialización de Swiper para el slider destacado
var swiperFeatured = new Swiper(".featured-slider", {
  spaceBetween: 10,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

// Inicialización de Swiper para el slider de llegadas
var swiperArrivals = new Swiper(".arrivals-slider", {
  spaceBetween: 10,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// Inicialización de Swiper para el slider de reseñas
var swiperReviews = new Swiper(".reviews-slider", {
  spaceBetween: 10,
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// Inicialización de Swiper para el slider de blogs
var swiperBlogs = new Swiper(".blogs-slider", {
  spaceBetween: 10,
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// Inicialización de Swiper para el slider de banners
document.addEventListener('DOMContentLoaded', function() {
  const left = document.querySelector('.fa-chevron-left');
  const right = document.querySelector('.fa-chevron-right');
  const slider = document.querySelector('.slider');
  const images = document.querySelectorAll('.img-normalizada');

  let slideNumber = 0;
  const length = images.length;

  // Crear botones de navegación
  const bottom = document.querySelector('.bottom');
  for (let i = 0; i < length; i++) {
    const div = document.createElement('div');
    div.className = 'button';
    bottom.appendChild(div);
  };
  const buttons = document.querySelectorAll('.button');

  // Función para restablecer el color de los botones
  const resetBg = () => {
    buttons.forEach((button) => {
      button.style.backgroundColor = 'transparent';
    });
  };

  // Función para cambiar el color del botón activo
  const changeColor = () => {
    resetBg();
    buttons[slideNumber].style.backgroundColor = 'white';
  };

  // Event listeners para los botones
  buttons.forEach((button, i) => {
    button.addEventListener('click', () => {
      slideNumber = i;
      slider.style.transform = `translateX(-${slideNumber * 400}px)`; // Ajusta según el ancho de las imágenes
      changeColor();
    });
  });

  // Event listeners para los botones de chevron
  right.addEventListener('click', () => {
    slideNumber = (slideNumber + 1) % length;
    slider.style.transform = `translateX(-${slideNumber * 400}px)`; // Ajusta según el ancho de las imágenes
    changeColor();
  });

  left.addEventListener('click', () => {
    slideNumber = (slideNumber - 1 + length) % length;
    slider.style.transform = `translateX(-${slideNumber * 400}px)`; // Ajusta según el ancho de las imágenes
    changeColor();
  });
});
