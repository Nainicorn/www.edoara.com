import { createHeroSection } from './components/Hero.js';
import { createBentoSection } from './components/BentoFeatures.js';
import { createPersonalizationSpotlight, createExperienceSpotlight } from './components/SpotlightSection.js';
import { createStatsSection } from './components/StatsSection.js';
import { createAdaptiveSection } from './components/AdaptiveSection.js';
import { createFoundersSection } from './components/FoundersSection.js';
import { createFooter } from './components/Footer.js';
import { setupSmoothScrolling, setupSpotlightEffect, setupScrollAnimations } from './components/interactions.js';
import './style.css';

const app = document.getElementById('app');

// Render all sections
app.appendChild(createHeroSection());
app.appendChild(createBentoSection());
app.appendChild(createPersonalizationSpotlight());
app.appendChild(createStatsSection());
app.appendChild(createExperienceSpotlight());
app.appendChild(createAdaptiveSection());
app.appendChild(createFoundersSection());
app.appendChild(createFooter());

// Setup interactions
setupSmoothScrolling();
setupSpotlightEffect();
setupScrollAnimations();
