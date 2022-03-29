const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
const header = document.querySelector('.header');
const btnNav = document.querySelector('.btn-mobile-nav');
const mainNav = document.querySelector('.main-nav-list');
const ctaBTN = document.querySelectorAll('.btn--full');
const hero = document.querySelector('.section-hero');
const nav = document.querySelector('.main-nav-list');
const learnMoreBTN = document.querySelector('.btn--outline');
const logo = document.querySelectorAll('.logo');
const cta = document.querySelector('#cta');
const howItWorks = document.querySelector('#how-it-works');

// Footer Year
yearEl.textContent = currentYear;

// Mobile Nav
btnNav.addEventListener('click', function (e) {
  header.classList.toggle('nav-open');
});

// Smooth Scrooling

mainNav.addEventListener('click', function (e) {
  e.preventDefault();

  if (e.target.classList.contains('main-nav-link')) {
    const link = e.target.getAttribute('href');
    const sectionLink = document.querySelector(link);
    sectionLink.scrollIntoView({ behavior: 'smooth' });
    header.classList.remove('nav-open');
  }
});

[...ctaBTN].forEach(el =>
  el.addEventListener('click', function (e) {
    e.preventDefault();
    cta.scrollIntoView({ behavior: 'smooth' });
  })
);

learnMoreBTN.addEventListener('click', function (e) {
  e.preventDefault();
  howItWorks.scrollIntoView({ behavior: 'smooth' });
});

[...logo].forEach(el =>
  el.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  })
);

// Sticky Navbar
const navHeight = nav.getBoundingClientRect().height;

const headerCallback = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    header.classList.add('sticky');
    hero.classList.add('margin-top-lg');
  } else {
    header.classList.remove('sticky');
    hero.classList.remove('margin-top-lg');
  }
};

console.log(navHeight);

const headerOptions = {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
};

const heroObserver = new IntersectionObserver(headerCallback, headerOptions);
heroObserver.observe(hero);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
const checkFlexGap = function () {
  const flex = document.createElement('div');
  flex.style.display = 'flex';
  flex.style.flexDirection = 'column';
  flex.style.rowGap = '1px';

  flex.appendChild(document.createElement('div'));
  flex.appendChild(document.createElement('div'));

  document.body.appendChild(flex);
  const isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add('no-flexbox-gap');
};
checkFlexGap();

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/
