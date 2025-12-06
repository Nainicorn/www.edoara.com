import uniqueBento from '../assets/unique-bento.png';
import feedbackBento from '../assets/feedback-bento.png';
import healthyBento from '../assets/healthy-bento.png';
import editableBento from '../assets/editable-bento.png';
import structuredBento from '../assets/structured-bento.png';

const features = [
  {
    id: 1,
    image: uniqueBento,
    alt: 'Unique Icon',
    title: 'unique features',
    description: 'Innovative tools like simulations, gamification, real-world examples, video walkthrough lessons, simple story podcasts, and the Rubber Ducky Method'
  },
  {
    id: 2,
    image: feedbackBento,
    alt: 'Feedback Intelligence Icon',
    title: 'feedback intelligence',
    description: 'AI used thoughtfully to offer guidance, error analysis, progress tracking, and feedback helping students learn through understanding'
  },
  {
    id: 3,
    image: healthyBento,
    alt: 'Healthy Habits Icon',
    title: 'healthy habits',
    description: 'Balanced system combining Pomodoro, spaced repetition, Feynman Technique, active recall. wellness-focused activity breaks, and motivational messages for productivity without burnout'
  },
  {
    id: 4,
    image: editableBento,
    alt: 'Editable Elements Icon',
    title: 'editable elements',
    description: 'Flexible workspace where users can annotate, highlight, draw, take notes, and interact directly with readings and course content; customizable bulletin board with editable sticky notes, flashcards, and more'
  },
  {
    id: 5,
    image: structuredBento,
    alt: 'Structures Overview Icon',
    title: 'structured overview',
    description: 'Expert-curated content, personalized TO-DO lists, and a modular dashboard create a clear, organized path guiding users through any subject'
  }
];

export function createBentoSection() {
  const section = document.createElement('section');
  section.className = 'bento-section';

  const container = document.createElement('div');
  container.className = 'bento-container';

  const heading = document.createElement('h2');
  heading.className = 'features-heading';
  heading.textContent = 'Features';

  const grid = document.createElement('div');
  grid.className = 'bento-grid';

  // Top row (2 cards)
  const topRow = document.createElement('div');
  topRow.className = 'bento-top-row';

  for (let i = 0; i < 2; i++) {
    const card = createBentoCard(features[i]);
    topRow.appendChild(card);
  }

  // Bottom row (3 cards)
  const bottomRow = document.createElement('div');
  bottomRow.className = 'bento-bottom-row';

  for (let i = 2; i < 5; i++) {
    const card = createBentoCard(features[i]);
    bottomRow.appendChild(card);
  }

  grid.appendChild(topRow);
  grid.appendChild(bottomRow);

  container.appendChild(heading);
  container.appendChild(grid);
  section.appendChild(container);

  return section;
}

function createBentoCard(feature) {
  const card = document.createElement('div');
  card.className = `bento-card scroll-animate stagger-${feature.id}`;

  const cardIcon = document.createElement('div');
  cardIcon.className = 'card-icon';

  const img = document.createElement('img');
  img.src = feature.image;
  img.alt = feature.alt;

  cardIcon.appendChild(img);

  const cardContent = document.createElement('div');
  cardContent.className = 'card-content';

  const title = document.createElement('h3');
  title.className = 'card-title';
  title.textContent = feature.title;

  const description = document.createElement('p');
  description.className = 'card-description';
  description.textContent = feature.description;

  cardContent.appendChild(title);
  cardContent.appendChild(description);

  card.appendChild(cardIcon);
  card.appendChild(cardContent);

  return card;
}
