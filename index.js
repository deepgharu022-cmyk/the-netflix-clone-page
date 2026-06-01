const popularMovies = [
  {
    title: 'Stranger Things',
    year: '2016',
    genre: 'Sci-Fi Thriller',
    src: 'https://via.placeholder.com/320x480?text=Stranger+Things'
  },
  {
    title: 'The Crown',
    year: '2016',
    genre: 'Historical Drama',
    src: 'https://via.placeholder.com/320x480?text=The+Crown'
  },
  {
    title: 'Money Heist',
    year: '2017',
    genre: 'Crime Drama',
    src: 'https://via.placeholder.com/320x480?text=Money+Heist'
  },
  {
    title: 'Squid Game',
    year: '2021',
    genre: 'Survival',
    src: 'https://via.placeholder.com/320x480?text=Squid+Game'
  }
];

const trendingMovies = [
  {
    title: 'Glass Onion',
    year: '2022',
    genre: 'Mystery',
    src: 'https://via.placeholder.com/320x480?text=Glass+Onion'
  },
  {
    title: 'The Gray Man',
    year: '2022',
    genre: 'Action',
    src: 'https://via.placeholder.com/320x480?text=The+Gray+Man'
  },
  {
    title: 'Red Notice',
    year: '2021',
    genre: 'Action Comedy',
    src: 'https://via.placeholder.com/320x480?text=Red+Notice'
  },
  {
    title: 'Enola Holmes',
    year: '2020',
    genre: 'Adventure',
    src: 'https://via.placeholder.com/320x480?text=Enola+Holmes'
  }
];

const watchAgainMovies = [
  {
    title: 'Bird Box',
    year: '2018',
    genre: 'Horror',
    src: 'https://via.placeholder.com/320x480?text=Bird+Box'
  },
  {
    title: 'The Irishman',
    year: '2019',
    genre: 'Crime Drama',
    src: 'https://via.placeholder.com/320x480?text=The+Irishman'
  },
  {
    title: 'Roma',
    year: '2018',
    genre: 'Drama',
    src: 'https://via.placeholder.com/320x480?text=Roma'
  },
  {
    title: 'The Kissing Booth',
    year: '2018',
    genre: 'Romantic Comedy',
    src: 'https://via.placeholder.com/320x480?text=The+Kissing+Booth'
  }
];

function createMovieCard(movie) {
  const card = document.createElement('article');
  card.className = 'movie-card';
  card.innerHTML = `
    <img src="${movie.src}" alt="${movie.title}" />
    <div class="movie-card-overlay"></div>
    <div class="movie-info">
      <h3>${movie.title}</h3>
      <p>${movie.year} • ${movie.genre}</p>
    </div>
  `;
  return card;
}

function renderMovies(rowId, movies) {
  const row = document.getElementById(rowId);
  if (!row) return;
  movies.forEach(movie => row.appendChild(createMovieCard(movie)));
}

renderMovies('popular-row', popularMovies);
renderMovies('trending-row', trendingMovies);
renderMovies('watch-row', watchAgainMovies);

const signupForm = document.getElementById('signup-form');
const emailInput = document.getElementById('email-input');
const siteHeader = document.querySelector('.header');

signupForm.addEventListener('submit', event => {
  event.preventDefault();
  const email = emailInput.value.trim();

  if (!email || !email.includes('@')) {
    alert('Please enter a valid email address.');
    return;
  }

  alert(`Thanks! We will email membership details to ${email}`);
  signupForm.reset();
});

window.addEventListener('scroll', () => {
  siteHeader.classList.toggle('scrolled', window.scrollY > 30);
});
