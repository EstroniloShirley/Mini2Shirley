console.log(window.location.pathname);

// const API_KEY = '?api_key=1b45d7a780121390685537f1e267db4f';
const BASE_URL = 'https://api.escuelajs.co/api/v1';
const IMG_URL = 'https://i.imgur.com/0KlqHu9.jpeg';

const NP_URL = BASE_URL + '/products';

const searchURL = BASE_URL + '/search/movie' + API_KEY;
const form = document.getElementById('search-results');
const search = document.getElementById('search');

//NOW PLAYING
async function displaySlider() {
  // const { results } = await fetch(NP_URL);
  const response = await fetch(NP_URL);
  const { results } = await response.json();

  results.forEach((products) => {
    const div = document.createElement('div');
    div.classList.add('swiper-slide');

    div.innerHTML = `
              <a href="movie-details.html?id=${products.id}">
                  <img
                      src="https://image.tmdb.org/t/p/w500${products.images}"
                      alt="${products.images}"
                  />
              </a>
              <h4 class="swiper-rating">
                  <i class="fas fa-star text-secondary"></i> ${products.price} / 10
              </h4>
          `;

    document.querySelector('.swiper-wrapper').appendChild(div);
  });

  initSwiper();
}

function initSwiper() {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    freeMode: true,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    breakpoints: {
      500: {
        slidesPerView: 2,
      },
      700: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });
}

displaySlider();
