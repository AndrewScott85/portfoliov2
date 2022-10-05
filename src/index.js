// import glide from "./@glidejs/glide";

const glide = new Glide('.glide',{
    type: 'carousel',
    animationDuration: 1000,
    focusAt: '1',
    startAt: 1,
    perView: 1,
    peek: 20,
    perTouch: 1,
});

glide.mount();
