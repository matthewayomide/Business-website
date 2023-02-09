const prev = document.querySelector('.left_arrow');
const next = document.querySelector('.right_arrow');
const slides = document.querySelectorAll('testimonial_card');
const auto = true;
let index = 0;
const intervalTime = 3000;
let slideInterval;

function nextSlide (){
    //get the current class
    const current = document.querySelector('.current')
    //Remove current from the active testimonial
    current.classList.remove('current');
    //add  current to the next sibilng testimonial card
    
  
}


function prevSlide (){
    //grt current slide
    const current = document.querySelector('current');
    // Remove current from the active testimonial card
    current.classList.remove('current');
    //add current to previous testimonial card
    if(current.previousElementSibling){
         current.previousElementSibling.classList.add('current');
    }
    else{
        //leave add the current class to the last testimonial
        slides[slides.length - 1].classList.add('current');
    }
}

//Buttons
next.addEventListener('click', () =>{
    nextSlide();
})

prev.addEventListener('click',() =>{
    prevSlide();
   
    });

    if(auto){
        //Run next slide at interval time
        slideInterval= setInterval(nextSlide, intervalTime);
    }