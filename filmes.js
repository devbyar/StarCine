function toggleUserMenu() {
    const dropdown = document.getElementById("userDropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
  }

  // Fecha o menu se clicar fora dele
  window.addEventListener("click", function (event) {
    const menu = document.getElementById("userDropdown");
    const toggle = document.querySelector(".user-menu-toggle");

    if (!toggle.contains(event.target)) {
      menu.style.display = "none";
    }
  });


// Dropdown de Categoria
document.addEventListener("DOMContentLoaded", function () {
  const dropBtn = document.querySelector(".dropbtn");
  const dropContent = document.querySelector(".dropdown-content");

  dropBtn.addEventListener("click", function (e) {
    e.stopPropagation(); // Evita que o clique feche imediatamente
    dropContent.classList.toggle("show-dropdown");
  });

  document.addEventListener("click", function () {
    dropContent.classList.remove("show-dropdown");
  });
});


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


  function toggleDropdown() {
    document.getElementById("dropdown-content").classList.toggle("show-dropdown");
  }

  function toggleUserDropdown() {
    document.getElementById("dropdown-content-user").classList.toggle("show-dropdown");
  }

  // Fechar dropdowns ao clicar fora
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn') && !event.target.closest('.dropdown')) {
      document.getElementById("dropdown-content").classList.remove("show-dropdown");
    }
    if (!event.target.closest('.dropdown-user')) {
      document.getElementById("dropdown-content-user").classList.remove("show-dropdown");
    }
  }

  // Alternar modo claro/escuro
  document.getElementById('mode-toggle').addEventListener('change', function () {
    document.body.classList.toggle('dark-mode');
  });