// слайдер на главной странице - блок преимущества
var slideIndex = 1;
showSlides(slideIndex);

// показывает следующй слайд
function plusSlide() {
    showSlides(slideIndex += 1);
}

// показывает предыдущий слайд
function minusSlide() {
    showSlides(slideIndex -= 1);  
}

// Устанавливает текущий слайд
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// слайдер
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slider-item");
    var dots = document.getElementsByClassName("current");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Слайдер сервис
function layer(a){
    l=getElementsByClass('show',null,'div');
    for(var i=0;i<l.length;i++)l[i].style.display=(i==a?'block':'none');
    l=getElementsByClass('show ',null,'button');
    for(var i=0;i<l.length;i++){
        l[i].className=(i==a?'show act':'show ');
    }
}

/* универсальная функция получения всех DOM объектов заданного класса */
function getElementsByClass(searchClass,node,tag){
    var classElements=new Array();
    if ( node == null ) node=document;
    else if(typeof(node)!="object")node=document.getElementById(node); if(!node)return;
    if ( tag == null ) tag='*';
    var els=node.getElementsByTagName(tag);
    var elsLen=els.length;
    var pattern=new RegExp("(^|\\s)"+searchClass+"(\\s|$)");
    for (i=0, j=0; i < elsLen; i++) {
           if ( pattern.test(els[i].className) ) {
                classElements[j]=els[i];
               j++;
          }
    }
    return classElements;
}

