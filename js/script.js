let icons = document.querySelector('.icons');
let nav = document.querySelector('nav')
let bar =document.querySelector('.icons i.fa-bars');
let lists = document.querySelector('.lists');
let menu = document.querySelector('#menu');
let logo = document.querySelector('nav .logo');
icons.onclick = function(){
    lists.classList.toggle('active-list');
    logo.classList.toggle('close_logo');
}

// OnScroll 
onscroll = function(){
    // Btn Scroll Top
    if(scrollY >= 100){
        // to add bg for navbar
        nav.classList.add('add-bg')
    }else{
        // to remove bg for navbar
        nav.classList.remove('add-bg')
    }
}