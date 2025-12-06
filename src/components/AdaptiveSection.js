import adaptive from '../assets/adaptive.png';

export function createAdaptiveSection() {
  const section = document.createElement('section');
  section.className = 'bento-section adaptive-section';

  const container = document.createElement('div');
  container.className = 'bento-container adaptive-container';

  const heading = document.createElement('h2');
  heading.className = 'features-heading adaptive-heading';
  heading.textContent = 'Adaptive';

  const grid = document.createElement('div');
  grid.className = 'bento-grid adaptive-grid';

  const topRow = document.createElement('div');
  topRow.className = 'bento-top-row';

  const card = document.createElement('div');
  card.className = 'bento-card scroll-animate';

  const cardIcon = document.createElement('div');
  cardIcon.className = 'card-icon';

  const img = document.createElement('img');
  img.src = adaptive;
  img.alt = 'Unique Icon';

  cardIcon.appendChild(img);
  card.appendChild(cardIcon);
  topRow.appendChild(card);

  grid.appendChild(topRow);

  container.appendChild(heading);
  container.appendChild(grid);
  section.appendChild(container);

  return section;
}
