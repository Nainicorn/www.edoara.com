import featuresLineArt from '../assets/features-line-art.jpg';
import globeLineArt from '../assets/globe-line-art.jpg';
import infiniteLineArt from '../assets/infinite-line-art.PNG';
import billionLineArt from '../assets/billion-line-art.PNG';

const stats = [
  {
    icon: featuresLineArt,
    alt: 'Features Icon',
    number: '20+',
    label: 'features'
  },
  {
    icon: globeLineArt,
    alt: 'Global Impact Icon',
    number: 'global',
    label: 'impact'
  },
  {
    icon: infiniteLineArt,
    alt: 'Infinite Potential Icon',
    number: 'infinite',
    label: 'potential'
  },
  {
    icon: billionLineArt,
    alt: 'EdTech Market Icon',
    number: 'edtech',
    label: 'market'
  }
];

export function createStatsSection() {
  const section = document.createElement('section');
  section.className = 'stats-section';

  const container = document.createElement('div');
  container.className = 'stats-container';

  stats.forEach((stat, index) => {
    const item = document.createElement('div');
    item.className = `stat-item scroll-animate stagger-${index + 1}`;

    const icon = document.createElement('div');
    icon.className = 'stat-icon';
    const img = document.createElement('img');
    img.src = stat.icon;
    img.alt = stat.alt;
    icon.appendChild(img);

    const number = document.createElement('div');
    number.className = 'stat-number';
    number.textContent = stat.number;

    const label = document.createElement('div');
    label.className = 'stat-label';
    label.textContent = stat.label;

    item.appendChild(icon);
    item.appendChild(number);
    item.appendChild(label);
    container.appendChild(item);
  });

  section.appendChild(container);
  return section;
}
