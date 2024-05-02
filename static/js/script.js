searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
  searchForm.classList.toggle('active');
}
// Selecciona el botón de usuario
let userBtn = document.querySelector('#user-btn');

// Selecciona el cuadro de usuario
let userForm = document.querySelector('.user');

// Agrega un evento de clic al botón de usuario
userBtn.onclick = () => {
  // Alternar la clase 'active' en el cuadro de usuario
  userForm.classList.toggle('active');
};

let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () =>{
  loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () =>{
  loginForm.classList.remove('active');
}

let registerForm = document.querySelector('.register-form-container');
let registerMayoristaForm = document.querySelector('.register-mayorista-form-container');
let passwordForm = document.querySelector('.')

document.querySelector('#register-btn').onclick = () =>{
  registerForm.classList.toggle('active');
}

document.querySelector('#close-register-btn').onclick = () =>{
 registerForm.classList.remove('active');
}

// Obtiene el enlace de registro dentro del formulario de inicio de sesión
const registerLinkLogin = document.getElementById('register-link');

// Agrega un evento de clic al enlace de registro dentro del formulario de inicio de sesión
registerLinkLogin.addEventListener('click', function(event) {
    // Evita el comportamiento predeterminado del enlace (evita que siga el enlace)
    event.preventDefault();
    // Oculta el formulario de inicio de sesión
    loginForm.classList.remove('active');
    // Muestra el formulario de registro
    registerForm.classList.add('active');
});

// Obtiene el enlace de registro dentro del formulario de inicio de sesión
const passwordLogin = document.getElementById('forgot-password-link');

// Agrega un evento de clic al enlace de registro dentro del formulario de inicio de sesión
passwordLogin.addEventListener('click', function(event) {
    // Evita el comportamiento predeterminado del enlace (evita que siga el enlace)
    event.preventDefault();
    // Oculta el formulario de inicio de sesión
    loginForm.classList.remove('active');
    // Muestra el formulario de registro
    registerForm.classList.add('active');
});


// Obtiene el enlace de registro dentro del formulario de inicio de sesión
const registerMayoristaLinkLogin = document.getElementById('register-mayorista');

// Agrega un evento de clic al enlace de registro dentro del formulario de inicio de sesión
registerMayoristaLinkLogin.addEventListener('click', function(event) {
    // Evita el comportamiento predeterminado del enlace (evita que siga el enlace)
    event.preventDefault();
    // Oculta el formulario de inicio de sesión
    loginForm.classList.remove('active');
    // Muestra el formulario de registro
    registerMayoristaForm.classList.add('active');
});

document.addEventListener('DOMContentLoaded', function() {
    // Obtener los elementos de los formularios y los botones para cerrar los formularios
    const loginForm = document.querySelector('.login-form-container');
    const registerNaturalForm = document.querySelector('.register-form-container');
    const registerMayoristaForm = document.querySelector('.register-mayorista-form-container');
    
    const closeLoginFormBtn = document.querySelector('#close-login-btn');
    const closeRegisterNaturalBtn = document.querySelector('#close-register-btn');
    const closeRegisterMayoristaBtn = document.querySelector('#close-register-mayorista-btn');
    
    // Agregar eventos de clic a los enlaces "Inicia sesión" en los formularios de registro
    document.querySelectorAll('#inico-sesion').forEach(link => {
        link.addEventListener('click', () => {
            loginForm.classList.add('active');
            registerNaturalForm.classList.remove('active');
            registerMayoristaForm.classList.remove('active');
        });
    });
    
    // Agregar eventos de clic a los botones para cerrar los formularios
    closeLoginFormBtn.addEventListener('click', () => {
        loginForm.classList.remove('active');
    });
    
    closeRegisterNaturalBtn.addEventListener('click', () => {
        registerNaturalForm.classList.remove('active');
    });
    
    closeRegisterMayoristaBtn.addEventListener('click', () => {
        registerMayoristaForm.classList.remove('active');
    });
});


window.onscroll = () =>{

  searchForm.classList.remove('active');

  if(window.scrollY > 80){
    document.querySelector('.header .header-2').classList.add('active');
  }else{
    document.querySelector('.header .header-2').classList.remove('active');
  }

}

window.onload = () =>{

  if(window.scrollY > 80){
    document.querySelector('.header .header-2').classList.add('active');
  }else{
    document.querySelector('.header .header-2').classList.remove('active');
  }

  fadeOut();

}

function loader(){
  document.querySelector('.loader-container').classList.add('active');
}

function fadeOut(){
  setTimeout(loader, 4000);
}

var swiper = new Swiper(".books-slider", {
  loop:true,
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

var swiper = new Swiper(".featured-slider", {
  spaceBetween: 10,
  loop:true,
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

var swiper = new Swiper(".arrivals-slider", {
  spaceBetween: 10,
  loop:true,
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

var swiper = new Swiper(".reviews-slider", {
  spaceBetween: 10,
  grabCursor:true,
  loop:true,
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

var swiper = new Swiper(".blogs-slider", {
  spaceBetween: 10,
  grabCursor:true,
  loop:true,
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

//Sliders - Banners
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

