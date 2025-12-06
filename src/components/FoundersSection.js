import logo from '../assets/logo.png';

export function createFoundersSection() {
  const section = document.createElement('section');
  section.className = 'founders-section';

  const container = document.createElement('div');
  container.className = 'founders-container';

  const content = document.createElement('div');
  content.className = 'founders-content scroll-animate-left';

  const heading = document.createElement('h2');
  heading.textContent = "Founder's Note:";

  const paragraphs = [
    'Edoara is a curated study platform that serves as an all-in-one hub where anyone can learn anything.',
    'Users can choose any subject and customize how they want to learn it. Whether they prefer videos, diagrams, readings, or note-taking, Edoara adapts to a users individual learning style. Beyond simple customization, Edoara includes purpose-built, unique features. Learning should feel intuitive, efficient, and most importantly effective. All content on Edoara will be carefully curated from reliable, high-quality sources and delivered through a clean, user-friendly interface.',
    'I\'m excited to be building something that has the potential to truly transform the ed-tech space.',
    '— Naina Koujala'
  ];

  content.appendChild(heading);

  paragraphs.forEach(text => {
    const p = document.createElement('p');
    p.className = 'founders-text';
    p.textContent = text;
    content.appendChild(p);
  });

  const imageDiv = document.createElement('div');
  imageDiv.className = 'founders-image scroll-animate-right';

  const img = document.createElement('img');
  img.src = logo;
  img.alt = 'Edoara Logo';
  img.className = 'founders-logo';

  imageDiv.appendChild(img);

  container.appendChild(content);
  container.appendChild(imageDiv);
  section.appendChild(container);

  return section;
}
