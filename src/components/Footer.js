export function createFooter() {
  const footer = document.createElement('footer');
  footer.className = 'footer';

  const container = document.createElement('div');
  container.className = 'footer-container';

  const content = document.createElement('div');
  content.className = 'footer-content';

  const copyright = document.createElement('p');
  copyright.className = 'footer-copyright';
  copyright.textContent = '© 2025 Edoara. All rights reserved.';

  content.appendChild(copyright);
  container.appendChild(content);
  footer.appendChild(container);

  return footer;
}
