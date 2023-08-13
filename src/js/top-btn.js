const myButton = document.getElementById('myBtn');
let isScrolling = false;

myButton.addEventListener('click', scrollToTop);

window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myButton.style.display = 'block';
  } else {
    myButton.style.display = 'none';
  }
};

function scrollToTop() {
  if (!isScrolling) {
    isScrolling = true;
    let currentPosition =
      document.documentElement.scrollTop || document.body.scrollTop;
    if (currentPosition > 0) {
      window.requestAnimationFrame(scrollStep);
    } else {
      myButton.classList.add('red');
      isScrolling = false;
    }
  }
}

function scrollStep() {
  let currentPosition =
    document.documentElement.scrollTop || document.body.scrollTop;
  if (currentPosition > 0) {
    window.requestAnimationFrame(scrollStep);
    window.scrollTo(0, currentPosition - currentPosition / 10);
  } else {
    myButton.classList.add('red');
    isScrolling = false;
  }
}
