// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal, .timeline-item').forEach(el => observer.observe(el));

// Stagger children in grids
document.querySelectorAll('.skills-grid, .projects-grid, .edu-grid, .certs-grid').forEach(grid => {
  grid.querySelectorAll('.reveal').forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.08}s`;
  });
});

// Mobile hamburger menu
const hamburger = document.getElementById('nav-hamburger');
const navLinks = document.getElementById('nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });
  // Close on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });
}

// Terminal Emulator Animation
document.addEventListener('DOMContentLoaded', () => {
  const terminalBody = document.getElementById('terminal-body');
  const commands = [
    { type: 'input', text: 'Welcome-ToPortfolio -Name "Themba Kevin Ndlondlo"' },
    { type: 'output', text: 'Welcome to Themba Kevin Ndlondlo\'s IT Portfolio!', delay: 1000 },
    { type: 'input', text: 'Get-Skills', delay: 2000 },
    { type: 'output', text: 'Loading skills: Technical Support, Networking, Systems Admin, M365 & Dev...', delay: 1500 },
    { type: 'input', text: 'Get-Experience', delay: 2000 },
    { type: 'output', text: 'Fetching experience: 3+ years in IT Support, Service Desk Coordination, and Systems Administration.', delay: 1500 },
    { type: 'input', text: '', delay: 500 }
  ];

  let currentIndex = 0;

  function typeCommand() {
    if (currentIndex >= commands.length) {
      // Add blinking cursor at the end
      const cursorLine = document.createElement('div');
      cursorLine.className = 'terminal-line';
      cursorLine.innerHTML = '<span class="prompt">PS C:\\Users\\Visitor&gt;</span> <span class="blinking-cursor">|</span>';
      terminalBody.appendChild(cursorLine);
      return;
    }

    const command = commands[currentIndex];
    const line = document.createElement('div');
    line.className = 'terminal-line';

    if (command.type === 'input') {
      line.innerHTML = '<span class="prompt">PS C:\\Users\\Visitor&gt;</span> <span class="command"></span>';
      terminalBody.appendChild(line);
      const commandSpan = line.querySelector('.command');
      typeText(command.text, commandSpan, () => {
        currentIndex++;
        setTimeout(typeCommand, command.delay || 500);
      });
    } else if (command.type === 'output') {
      line.className = 'terminal-line output';
      line.innerHTML = '<span class="output-text"></span>';
      terminalBody.appendChild(line);
      const outputSpan = line.querySelector('.output-text');
      typeText(command.text, outputSpan, () => {
        currentIndex++;
        setTimeout(typeCommand, command.delay || 500);
      });
    }
  }

  function typeText(text, element, callback) {
    let index = 0;
    const speed = 30; // Typing speed in ms

    function type() {
      if (index < text.length) {
        element.textContent += text.charAt(index);
        index++;
        setTimeout(type, speed);
      } else {
        if (callback) callback();
      }
    }

    type();
  }

  // Start typing after a short delay
  setTimeout(typeCommand, 1000);
});