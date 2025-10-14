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