
// var mySlider = [
//     "./images/image2.jpg",
//     "./images/image1.jpg",
//     "./images/image3.png", 
// ]

// let image = document.querySelector('#slider img');
// let currentSlide = 0;
// image.src = mySlider[1];

// let right = document.querySelector('.right');
// let left = document.querySelector('.left');


// right.onclick = function() {
//     currentSlide++;
//     if(currentSlide > mySlider.length - 1){
//         currentSlide = 0;
//     }
//     image.src = mySlider[currentSlide];
// }


// left.onclick = function() {
//     currentSlide--;
//     if(currentSlide == -1) {
//         currentSlide = mySlider.length - 1;
//     }
//     image.src = mySlider[currentSlide];
// }


// function AutoPlay() {
//         currentSlide++;
//         if(currentSlide > mySlider.length - 1){
//             currentSlide = 0;
//         }
//         image.src = mySlider[currentSlide]; 
// }


// setInterval(AutoPlay,2000)



let buttons = document.querySelectorAll('.tab-menu button');
let text = document.querySelectorAll('.tab-text div');

for(let btn of buttons) {
    btn.addEventListener('click',function() {
        let active = document.querySelector('.active');

        active.classList.remove('active');
        this.classList.add('active');

        let index = this.getAttribute('data-index');

        for(let div of text) {
            if(div.getAttribute('data-index') === index) {
                div.classList.remove('d-none');
            }
            else{
                div.classList.add('d-none');
            }
        }

    })
}

