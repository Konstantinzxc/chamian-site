// CHAMIAN site
document.addEventListener('DOMContentLoaded', function () {
  var burger = document.getElementById('burger');
  var nav = document.getElementById('mainNav');
  if (burger && nav) {
    burger.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  var jump = document.getElementById('brandJump');
  if (jump) {
    jump.addEventListener('change', function () {
      if (jump.value) location.hash = jump.value;
    });
  }

  document.querySelectorAll('.gallery-wrap').forEach(function (wrap) {
    var gal = wrap.querySelector('.gallery');
    var step = function () {
      var img = gal.querySelector('img');
      return img ? img.getBoundingClientRect().width : 400;
    };
    wrap.querySelector('.prev').addEventListener('click', function () {
      gal.scrollBy({ left: -step(), behavior: 'smooth' });
    });
    wrap.querySelector('.next').addEventListener('click', function () {
      gal.scrollBy({ left: step(), behavior: 'smooth' });
    });
  });
});
