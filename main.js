let slider = document.querySelector(`.slider`);
let slide = document.querySelectorAll(`.slide`);
let left = document.querySelector(`#left`);
let right = document.querySelector(`#right`);

left.addEventListener(`click`, prevSlide);
right.addEventListener(`click`, nextSlide);

let sliderIndex = 0;
let length = slide.length;

// Control By Arrow

function prevSlide(){
    sliderIndex = (sliderIndex == 0) ? length -1 : sliderIndex - 1 ;
    slider.style.transform = `translateX(-${sliderIndex * 100}%)`;
    changeBG();
};

function nextSlide(){
    sliderIndex = (sliderIndex == length - 1) ? 0 : sliderIndex + 1;
    slider.style.transform = `translateX(-${sliderIndex * 100}%)`;
    changeBG();
};

// Control By Dot
let bottom = document.querySelector(`.bottom`);

for(let i = 1; i <= length; i++){
    let dot = document.createElement(`div`);
    dot.classList.add(`button`);
    bottom.appendChild(dot);
}

let buttons = document.querySelectorAll(`.button`);

function removeBG(){
    buttons.forEach((button) =>{
        button.style.backgroundColor = `transparent`;
    })
}

function changeBG(){
    removeBG();
    buttons[sliderIndex].style.backgroundColor = `white`;
}

buttons[0].style.backgroundColor = `white`;

buttons.forEach((button, index) =>{
    button.addEventListener(`click`, ()=>{
        removeBG();
        slider.style.transform = `translateX(-${index * 100}%)`;
        buttons[index].style.backgroundColor = `white`;
        sliderIndex = index;
    })
});

// Auto Slider

let autoSlide;

function startSlider(){
    autoSlide = setInterval(()=>{
        sliderIndex > length ? prevSlide() : nextSlide();
    },2000)
}
startSlider();

function stopSlider(){
    clearInterval(autoSlide);
}

slider.addEventListener(`mouseover`, stopSlider);
slider.addEventListener(`mouseout`, startSlider);
slider.addEventListener(`click`, startSlider);
left.addEventListener(`mouseover`, stopSlider);
left.addEventListener(`mouseout`, startSlider);
left.addEventListener(`click`, startSlider);
right.addEventListener(`mouseover`, stopSlider);
right.addEventListener(`mouseout`, startSlider);
right.addEventListener(`click`, startSlider);
buttons.forEach((button)=>{
    button.addEventListener(`mouseover`, stopSlider);
    button.addEventListener(`mouseout`, startSlider);
    button.addEventListener(`click`, startSlider);
})