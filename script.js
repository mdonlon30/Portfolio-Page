const carousels = document.querySelectorAll('.caro');

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    var windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    var windowWidth = (window.innerWidth || document.documentElement.clientWidth);
    var vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
    var horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);
    return (vertInView && horInView);
  }
  

function handleCarouselVisibility() {
    carousels.forEach(c => {
        if (isElementInViewport(c)) {
            c.classList.add('fade-in');
        } else {
            c.classList.remove('fade-in');
        }
    });
}

document.addEventListener('DOMContentLoaded', handleCarouselVisibility);
document.addEventListener('scroll', handleCarouselVisibility);



