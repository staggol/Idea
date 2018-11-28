// Сетка из картинок \ MASONRY 
$(document).ready(function () {
    var sizer = '.sizer4';

    var container = $('#gallery');

    container.imagesLoaded(function() {
        container.masonry({
          itemSelector: '.item-masonry',
          columnWidth: sizer,
          percentPosition: true
        });
    });
});


//BURGER MENU

document.addEventListener('DOMContentLoaded', function () {

  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {

        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});

// Якорные ссылки

function slowScroll(id) {
	var offset = 0;
	$('html, body').animate ({
		scrollTop: $(id).offset ().top - offset
	}, 500);
	return false;
}

//Кнопка для перехода наверх

$('body').append('<button class="btn-up">');


$('.btn-up').click(function() {
  $('body').animate({'scrollTop': 0}, 1000);
  $('html').animate({'scrollTop': 0}, 1000);
});

$(window).scroll(function() {
  if ($(window).scrollTop() > 500) {
    $('.btn-up').addClass('active');
  }else {
    $('.btn-up').removeClass('active');
  }
});


// СЛАЙДЕР 

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dots");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i=0; i<slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i=0; i<dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += "active";
}