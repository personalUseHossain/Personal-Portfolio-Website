// Hamburger menu icon
let menuIcon = document.querySelector('.fa-bars');
let ul = document.querySelector('ul')

menuIcon.addEventListener('click', ()=>{
    if(menuIcon.classList == 'fa-solid fa-bars'){
        ul.style.right = '0%';
        menuIcon.classList.replace('fa-bars', 'fa-xmark')
    }
    else if(menuIcon.classList == 'fa-solid fa-xmark'){
        
        ul.style.right = '-100%';
        menuIcon.classList.replace('fa-xmark', 'fa-bars')
    }
})


// Type_Writer effect

let Type_Writer = new Typed('.typewriter', {
    strings: ['Hossain', 'Developer', 'Gamer'],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
})




let skills_section = document.querySelector('.Skills');
let project_section = document.querySelector('.Projects');
let education_section = document.querySelector('.Education');
let skillsbtn = document.getElementById('skills');
let projectbtn = document.getElementById('projects');
let educationbtn = document.getElementById('education');

project_section.style.display = 'none'
education_section.style.display = 'none'
skillsbtn.style.color = 'rgb(0, 132, 255)'



skillsbtn.addEventListener('click', ()=>{
    skillsbtn.style.color = 'rgb(0, 132, 255)'
    projectbtn.style.color = 'white'
    educationbtn.style.color = 'white'


    skills_section.style.display = 'grid';
    project_section.style.display = 'none';
    education_section.style.display = 'none';

})
projectbtn.addEventListener('click', ()=>{
    projectbtn.style.color = 'rgb(0, 132, 255)'
    skillsbtn.style.color = 'white'
    educationbtn.style.color = 'white'

    skills_section.style.display = 'none';
    project_section.style.display = 'grid';
    education_section.style.display = 'none';

})
educationbtn.addEventListener('click', ()=>{
    educationbtn.style.color = 'rgb(0, 132, 255)'
    skillsbtn.style.color = 'white'
    projectbtn.style.color = 'white'


    skills_section.style.display = 'none';
    project_section.style.display = 'none';
    education_section.style.display = 'flex';
})

 //Loading 

let loader = document.querySelector('.loader');

window.addEventListener('load', ()=>{
    loader.style.opacity = '0'
    loader.style.filter = 'blur(5px)'
   

})




