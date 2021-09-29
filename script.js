const sideBarToggle=document.querySelector('.sidebar-toggle');
const closeBtn=document.querySelector('.close-btn')
const sideBar=document.querySelector('.sidebar')
sideBarToggle.addEventListener('click',()=>{
    if(!(sideBar.classList.contains('show-sidebar'))){
        sideBar.classList.add('show-sidebar')
    }
})
closeBtn.addEventListener('click',()=>{
    sideBar.classList.remove('show-sidebar')
})