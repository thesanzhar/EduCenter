var swiper1 = new Swiper(".reviewsSwiper", {
  loop: 1,
  spaceBetween: 30,
  breakpoints: {
    1200: {
      slidesPerView: 5,
    },
    1024: {
      slidesPerView: 4,
    },
    600: {
      slidesPerView: 3,
    },
    500: {
      slidesPerView: 2,
    },
  },
});

// Modal Window 1
var modal1 = document.getElementById("main__myModal");
var btn1 = document.getElementById("main__button");
var span1 = document.getElementsByClassName("main__modal_close")[0];

btn1.onclick = function() {
  modal1.style.display = "block";
}
span1.onclick = function() {
  modal1.style.display = "none";
}
window.onclick = function(event1) {
  if (event1.target == modal1) {
    modal1.style.display = "none";
  }
}


// Modal Window 2
$(document).ready(function() {

  var $videoSrc;  
  $('.video-btn').click(function() {
      $videoSrc = $(this).data( "src" );
  });
  console.log($videoSrc);
 
  $('#review_myModal').on('shown.bs.modal', function (e) {
  $("#video").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" ); 
  })

  $('#review_myModal').on('hide.bs.modal', function (e) {
      // a poor man's stop video
      $("#video").attr('src',$videoSrc); 
  }) 
});


// Step Form

var currentTab = 0;
showTab(currentTab);

function showTab(n) {
  var x = document.getElementsByClassName("services__form_tab");
  x[n].style.display = "block";
  if (n == 0) {
    document.getElementById("services__form_prevBtn").style.display = "none";
  } else {
    document.getElementById("services__form_prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("services__form_nextBtn").innerHTML = "Отправить";
  } else {
    document.getElementById("services__form_nextBtn").innerHTML = "Далее";
  }
  fixStepIndicator(n)
}

function nextPrev(n) {
  var x = document.getElementsByClassName("services__form_tab");
  if (n == 1 && !validateForm()) return false;
  x[currentTab].style.display = "none";
  currentTab = currentTab + n;
  if (currentTab >= x.length) {
    document.getElementById("services__steps_form").submit();
    return false;
  }
  showTab(currentTab);
}

function validateForm() {
  var x, y, i, valid = true;
  x = document.getElementsByClassName("services__form_tab");
  y = x[currentTab].getElementsByTagName("input");
  for (i = 0; i < y.length; i++) {
    if (y[i].value == "") {
      y[i].className += " services__invalid";
      valid = false;
    }
  }
  if (valid) {
    document.getElementsByClassName("services__step")[currentTab].className += " services__finish";
  }
  return valid;
}

function fixStepIndicator(n) {
  var i, x = document.getElementsByClassName("services__step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" services_active", "");
  }
  x[n].className += " services_active";
}

// Menu burger
const iconMenu = document.querySelector('.menu_burger');
if (iconMenu) {
    const menuBody = document.querySelector('.header__adaptive');
    iconMenu.addEventListener("click", function(e) {
        // document.body.classList.toggle('__lock');
        iconMenu.classList.toggle('__active');
        menuBody.classList.toggle('___active');
    })
}

// About Swiper

var swiper2 = new Swiper(".about2Swiper", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    loop: 1,
  },
});


// Phone mask
var element = document.getElementById('main__modal_phone');
var maskOptions = {
  mask: '+{7}(000)000-00-00'
};
var mask = IMask(element, maskOptions);