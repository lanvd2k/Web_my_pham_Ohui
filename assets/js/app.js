// Code phần slider
var slider = document.querySelector('.slider')
var sliderImages = document.querySelectorAll('.slider img')

var prevBtn = document.querySelector('#prevBtn')
var nextBtn = document.querySelector('#nextBtn')

var counter = 1
var size = sliderImages[0].clientWidth;

slider.style.transform = 'translateX(' + (-size * counter) + 'px)'

nextBtn.addEventListener('click', () => {
    if(counter >= sliderImages.length - 1) return
    slider.style.transition = 'transform 0.5s ease-in-out'
    counter++
    slider.style.transform = 'translateX(' + (-size * counter) + 'px)'
})

prevBtn.addEventListener('click', () => {
    if(counter <= 0) return
    slider.style.transition = 'transform 0.5s ease-in-out'
    counter--
    slider.style.transform = 'translateX(' + (-size * counter) + 'px)'
})

slider.addEventListener('transitionend', () => {
    if (sliderImages[counter].id === 'lastClone') {
        slider.style.transition = 'none'
        counter = sliderImages.length - 2
        slider.style.transform = 'translateX(' + (-size * counter) + 'px)'
    }

    if (sliderImages[counter].id === 'firstClone') {
        slider.style.transition = 'none'
        counter = sliderImages.length - counter
        slider.style.transform = 'translateX(' + (-size * counter) + 'px)'
    }
})

//Bấm vào đăng ký hoặc đăng nhập
var regis = document.querySelectorAll('.header__navbar-item--strong')[0];
var login = document.querySelectorAll('.header__navbar-item--strong')[1];
var modal = document.querySelector('.modal')
var formRegis = document.querySelectorAll('.auth-form')[0]
var formLogin = document.querySelectorAll('.auth-form')[1]
var overLay = document.querySelector('.modal__overlay')

regis.addEventListener('click', ()=> {
    modal.style.display = 'flex'
    formLogin.style.display = 'none'
    overLay.style.display = 'block'
    formRegis.style.display = 'block'
})

login.addEventListener('click', ()=> {
    modal.style.display = 'flex'
    formRegis.style.display = 'none'
    overLay.style.display = 'block'
    formLogin.style.display = 'block'
})

//Chuyển đổi giữa đăng ký và đăng nhập
var switchBtn1 = formRegis.querySelector('.auth-form__switch-btn')
var switchBtn2 = formLogin.querySelector('.auth-form__switch-btn')

switchBtn1.addEventListener('click', ()=> {
    formRegis.style.display = 'none'
    formLogin.style.display = 'block'
})

switchBtn2.addEventListener('click', ()=> {
    formRegis.style.display = 'block'
    formLogin.style.display = 'none'
})

//Nút trở lại
var btnBack = document.querySelectorAll('.auth-form__controls-back')

btnBack[0].addEventListener('click', ()=> {
    modal.style.display = 'none'
    overLay.style.display = 'block'
    formLogin.style.display = 'none'
    formRegis.style.display = 'none'
})

btnBack[1].addEventListener('click', ()=> {
    modal.style.display = 'none'
    overLay.style.display = 'block'
    formLogin.style.display = 'none'
    formRegis.style.display = 'none'
})

//Khi bấm vào nút đăng ký trong form đăng ký
// var btnFormRegis = formRegis.querySelector('.btn-regis')
// btnFormRegis.addEventListener('click', ()=> {
//     formRegis.style.display = 'none'
//     formLogin.style.display = 'block'
// })


//Khi bấm vào nút đăng nhập trong form đăng nhập
// var btnFormLogin = formLogin.querySelector('.btn-login')
// var userName = document.querySelector('.header__navbar-item.header__navbar-user')

// btnFormLogin.addEventListener('click', ()=> {
//     userName.style.display = 'flex'
//     modal.style.display = 'none'
//     regis.style.display = 'none'
//     login.style.display = 'none'
// })

//Khi bấm vào nút đăng xuất
var btnLogout = document.querySelector('.header__navbar-user-item.header__navbar-user-item--separate')

btnLogout.addEventListener('click', ()=> {
    regis.style.display = 'flex'
    login.style.display = 'flex'
    userName.style.display = 'none'
})