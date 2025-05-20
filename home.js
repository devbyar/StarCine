const toggleTheme = document.getElementById('chk');

// Aplica o tema salvo ao carregar
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.body.classList.remove('dark-mode');
    toggleTheme.checked = true;
  } else {
    document.body.classList.add('dark-mode');
    toggleTheme.checked = false;
  }
});

// Alterna tema ao clicar
toggleTheme.addEventListener('change', () => {
  if (toggleTheme.checked) {
    document.body.classList.remove('dark-mode'); // modo claro
    localStorage.setItem('theme', 'light');
  } else {
    document.body.classList.add('dark-mode'); // modo escuro
    localStorage.setItem('theme', 'dark');
  }
});

document.querySelectorAll('.carousel-wrapper').forEach(wrapper => {
  const carousel = wrapper.querySelector('.carousel');
  const leftBtn = wrapper.querySelector('.arrow.left');
  const rightBtn = wrapper.querySelector('.arrow.right');

  leftBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: -300, behavior: 'smooth' });
  });

  rightBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: 300, behavior: 'smooth' });
  });
});