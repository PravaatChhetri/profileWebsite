function fadeInOnScroll() {
    const elements = document.querySelectorAll('.animate__animated');
  
    elements.forEach((element) => {
      if (isElementInViewport(element)) {
        element.classList.add('animate__fadeIn');
        element.classList.remove('hide');
      }
    });
  }
  
  function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
  
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  window.addEventListener('scroll', fadeInOnScroll);
  function fadeInOnScroll() {
    const elements = document.querySelectorAll('.animate__animated');
  
    elements.forEach((element) => {
      if (isElementInViewport(element)) {
        element.classList.add('animate__fadeIn');
        element.classList.remove('hide');
      }
    });
  }
  
  function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
  
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  window.addEventListener('scroll', fadeInOnScroll);
  