import logo from '../assets/logo.png';

export function createHeroSection() {
  const section = document.createElement('div');
  section.className = 'hero-section';

  const nav = document.createElement('nav');
  nav.className = 'navbar';

  const logoContainer = document.createElement('div');
  logoContainer.className = 'logo-container';

  const logoImg = document.createElement('img');
  logoImg.src = logo;
  logoImg.alt = 'Edoara Logo';
  logoImg.className = 'logo-image';

  const logoText = document.createElement('span');
  logoText.className = 'logo-text';
  logoText.textContent = 'Edoara';

  logoContainer.appendChild(logoImg);
  logoContainer.appendChild(logoText);
  nav.appendChild(logoContainer);
  section.appendChild(nav);

  const heroContent = document.createElement('div');
  heroContent.className = 'hero-content';

  const mainTitle = document.createElement('h1');
  mainTitle.className = 'main-title';
  mainTitle.textContent = 'The Future of Learning';

  const subtitle = document.createElement('p');
  subtitle.className = 'subtitle';
  subtitle.textContent = 'All-in-One Curated Study Hub';

  heroContent.appendChild(mainTitle);
  heroContent.appendChild(subtitle);
  section.appendChild(heroContent);

  return section;
}
