export function createPersonalizationSpotlight() {
  const section = document.createElement('section');
  section.className = 'spotlight-section personalization-section';

  const overlay = document.createElement('div');
  overlay.className = 'spotlight-overlay';

  const container = document.createElement('div');
  container.className = 'spotlight-container';

  const text = document.createElement('h2');
  text.className = 'spotlight-text center-justified scroll-animate-fade';
  text.textContent = 'Designed around personalization';

  container.appendChild(text);
  section.appendChild(overlay);
  section.appendChild(container);

  return section;
}

export function createExperienceSpotlight() {
  const section = document.createElement('section');
  section.className = 'spotlight-section experience-section';

  const overlay = document.createElement('div');
  overlay.className = 'spotlight-overlay';

  const container = document.createElement('div');
  container.className = 'spotlight-container';

  const text = document.createElement('h2');
  text.className = 'spotlight-text center-justified scroll-animate-fade';
  text.textContent = 'A learning experience that feels natural, intuitive and genuinely effective';

  container.appendChild(text);
  section.appendChild(overlay);
  section.appendChild(container);

  return section;
}
