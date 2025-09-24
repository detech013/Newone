    
    
    // 모바일 헤더 사이드바
    (function () {
      const openBtn = document.getElementById('openSidebar');
      const closeBtn = document.getElementById('closeSidebar');
      const sidebar = document.getElementById('sidebar');

      // overlay 요소가 없다면 생성
      let overlay = document.getElementById('sidebarOverlay');
      if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'sidebarOverlay';
        overlay.className = 'sidebar-overlay';
        document.body.appendChild(overlay);
      }

      function openSide() {
        if (!sidebar) return;
        sidebar.classList.add('open');
        overlay.classList.add('show');
        document.body.classList.add('no-scroll');
        sidebar.setAttribute('aria-hidden', 'false');
      }
      function closeSide() {
        if (!sidebar) return;
        sidebar.classList.remove('open');
        overlay.classList.remove('show');
        document.body.classList.remove('no-scroll');
        sidebar.setAttribute('aria-hidden', 'true');
      }

      if (openBtn) openBtn.addEventListener('click', openSide);
      if (closeBtn) closeBtn.addEventListener('click', closeSide);
      overlay.addEventListener('click', closeSide);

      // Esc 키로도 닫기
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeSide();
      });
    })();

    // 제품 보여주는거
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    const totalSlides = slides.length;
    const itemsPerView = 2;
    let index = itemsPerView; // 처음 클론 때문에 offset

    function updateSlide() {
      const slideWidth = slider.querySelector('.slide').offsetWidth + 30; // gap 포함
      slider.style.transform = `translateX(${-index * slideWidth}px)`;
    }

    updateSlide();

    function moveSlide(step) {
      index += step;
      slider.style.transition = "transform 0.5s ease-in-out";
      updateSlide();
    }

    nextBtn.addEventListener('click', () => moveSlide(1));
    prevBtn.addEventListener('click', () => moveSlide(-1));

    slider.addEventListener('transitionend', () => {
      if (index >= totalSlides - itemsPerView) {
        index = itemsPerView;
        slider.style.transition = "none";
        updateSlide();
      }
      if (index <= 0) {
        index = totalSlides - itemsPerView * 2;
        slider.style.transition = "none";
        updateSlide();
      }
    });

    window.addEventListener('resize', updateSlide);