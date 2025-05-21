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

const obras = [
  {
    nome: "Jujutsu Kaisen",
    imagem: "assets-melhores-avaliados/Jujutsu Kaisen  2020 ‧ Büyü ‧ 2 sezon 1.png",
    nota: 5
  },
  {
    nome: "Game of Thrones",
    imagem: "assets-melhores-avaliados/Game of Thrones (2011).png",
    nota: 5
  },
  {
    nome: "Oppenheimer",
    imagem: "assets-melhores-avaliados/Oppenheimer.png",
    nota: 4
  },
  {
    nome: "O Menino e a Garça",
    imagem: "assets-melhores-avaliados/The Boy And The Heron(Studio Ghibli,2023).png",
    nota: 4
  },
  {
    nome: "Mickey 17",
    imagem: "assets-melhores-avaliados/baixados.png",
    nota: 3
  },
  {
    nome: "Stranger Things",
    imagem: "assets-melhores-avaliados/baixados (9).png",
    nota: 4
  }
];

const container = document.getElementById('ranking-list');

obras.forEach((obra, index) => {
  const item = document.createElement('div');
  item.classList.add('ranking-item');

  item.innerHTML = `
    <div class="ranking-number">${index + 1}</div>
    <img src="${obra.imagem}" alt="${obra.nome}" class="ranking-image">
    <div class="ranking-info">
      <div class="ranking-title">${obra.nome}</div>
      <div class="stars">${'★'.repeat(obra.nota)}${'☆'.repeat(5 - obra.nota)}</div>
    </div>
  `;

  container.appendChild(item);
});

const chk = document.getElementById('chk');
const rankingSection = document.getElementById('ranking-section');

chk.addEventListener('change', () => {
  rankingSection.classList.toggle('light');
});