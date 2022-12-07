const icons=document.querySelector(".icons");
const header=document.querySelector('.header');
const main=document.querySelector('.main');
const sliders=document.querySelectorAll(".img_slide");
const goPrev = document.querySelector(".fa-angles-left")
const goNext = document.querySelector(".fa-angles-right")
let count=0;

icons.addEventListener("click", ()=>{
    header.classList.toggle("active");
    main.classList.toggle("event");
});

function reset() {
    for (let i = 0; i < sliders.length; i++) {
        sliders[i].style.display = "none";
    }
}

// function startSlide() {
//     reset();
//     sliders[0].style.display = "block";
// }

function slideLeft() {
    reset();
    sliders[count - 1].style.display = "block";
    count--;
}

function slideRight() {
    reset();
    sliders[count + 1].style.display = "block";
    count++;
}
goPrev.addEventListener("click", function () {
    if (count === 0) {
      count = sliders.length;
    }
    slideLeft();
});


goNext.addEventListener("click", function () {
    if (count === sliders.length - 1) {
      count = -1;
    }
    slideRight();
});