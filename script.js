document.addEventListener('DOMContentLoaded', () => {
  // 1. Скрытие интро-экрана по клику
  const introScreen = document.getElementById('intro-screen');
  if (introScreen) {
    introScreen.addEventListener('click', () => {
      introScreen.classList.add('fade-out');
    });
  }

  // 2. Открытие / закрытие бокового меню
  const menuBtn = document.getElementById('menu-btn');
  const closeBtn = document.getElementById('close-sidebar-btn');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');

  function openSidebar() {
    sidebar.classList.add('open');
    overlay.classList.add('active');
  }

  function closeSidebar() {
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
  }

  if (menuBtn) menuBtn.addEventListener('click', openSidebar);
  if (closeBtn) closeBtn.addEventListener('click', closeSidebar);
  if (overlay) overlay.addEventListener('click', closeSidebar);

  // 3. Переключение вкладок (Соцсети / Контакты)
  const navItems = document.querySelectorAll('.nav-item[data-tab]');
  const tabContents = document.querySelectorAll('.tab-content');

  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const tabName = item.getAttribute('data-tab');

      navItems.forEach(nav => nav.classList.remove('active'));
      item.classList.add('active');

      tabContents.forEach(content => {
        if (content.id === tabName) {
          content.classList.add('active');
        } else {
          content.classList.remove('active');
        }
      });

      closeSidebar();
    });
  });

  // 4. Эффект проседания (3D наклона) логотипа при наведении мыши
  const mainLogos = document.querySelectorAll('.main-big-logo');

  mainLogos.forEach(logo => {
    logo.addEventListener('mousemove', (e) => {
      const rect = logo.getBoundingClientRect();
      
      // Позиция курсора от центра (-0.5 до 0.5)
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      const maxRotate = 20;
      const rotateX = y * maxRotate; 
      const rotateY = x * -maxRotate;

      logo.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(-20px) scale(0.98)`;
    });

    logo.addEventListener('mouseleave', () => {
      logo.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)';
    });
  });
});