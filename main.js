var typed = new Typed('#element', {
    strings: ['<i>FrontEnd Developer</i>', ' <i>MERN Developer</i>', ' <i>Competitive Programmer</i>'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.navbar').classList.toggle('active');
});

document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.navbar').classList.remove('active');
    });
});

window.addEventListener('scroll', () => {
    const topButton = document.querySelector('.top');
    if (window.scrollY > 500) {
        topButton.classList.add('active');
    } else {
        topButton.classList.remove('active');
    }
});
