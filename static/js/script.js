searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
  searchForm.classList.toggle('active');
}

let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () =>{
  loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () =>{
  loginForm.classList.remove('active');
}

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
