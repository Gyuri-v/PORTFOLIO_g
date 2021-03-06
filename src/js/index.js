
$(document).ready(function(){

    
    //main_slide
    $(".slider_box").slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });
    
    
    //skill progressbar
    
    $(window).scroll(function(){
        $('.skillbar').each( function(i){
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if( bottom_of_window > bottom_of_element
              && bottom_of_window < bottom_of_element+50 ){
                $('.ps_c.circle').circleProgress({
                    value: 0.9,
                    fill: "#9aacd6"
                  }).on('circle-animation-progress', function(event, progress) {
                    $(this).find('strong').html(Math.round(90 * progress) + '<i>%</i>');
                  });

                $('.ai_c.circle').circleProgress({
                    value: 0.9,
                    fill: "#f5d888"
                  }).on('circle-animation-progress', function(event, progress) {
                    $(this).find('strong').html(Math.round(90 * progress) + '<i>%</i>');
                  });

                $('.html_c.circle').circleProgress({
                    value: 0.9,
                    fill: "#eda5ad"
                  }).on('circle-animation-progress', function(event, progress) {
                    $(this).find('strong').html(Math.round(90 * progress) + '<i>%</i>');
                  });

                $('.js_c.circle').circleProgress({
                    value: 0.7,
                    fill: "#aa89bd"
                  }).on('circle-animation-progress', function(event, progress) {
                    $(this).find('strong').html(Math.round(70 * progress) + '<i>%</i>');
                  });
            }
        });
        
    });
    
});

    
//work 팝업 js
function openModal() {
  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

var slideIndex=1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("workimg_content");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length){slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display="none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active","");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}
