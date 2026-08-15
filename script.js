const introScreen = document.getElementById('intro-screen');
const menuBtn = document.getElementById('menu-btn');
const closeSidebarBtn = document.getElementById('close-sidebar-btn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const navItems = document.querySelectorAll('.nav-item');
const tabContents = document.querySelectorAll('.tab-content');

// Интро
introScreen.addEventListener('click', () => {
  introScreen.classList.add('fade-out');
});

// Открытие / закрытие меню
function openMenu() {
  sidebar.classList.add('open');
  overlay.classList.add('active');
}

function closeMenu() {
  sidebar.classList.remove('open');
  overlay.classList.remove('active');
}

menuBtn.addEventListener('click', openMenu);
closeSidebarBtn.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);

// Переключение вкладок
navItems.forEach(item => {
  item.addEventListener('click', (e) => {
    if (item.classList.contains('dummy-link')) {
      e.preventDefault();
      alert('Раздел МЕРЧ находится в разработке!');
      return;
    }

    const targetTab = item.getAttribute('data-tab');
    if (targetTab) {
      e.preventDefault();

      navItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');

      tabContents.forEach(tab => {
        tab.classList.remove('active');
      });

      const activeSection = document.getElementById(targetTab);
      if (activeSection) {
        activeSection.classList.add('active');
      }

      closeMenu();
    }
  });
});