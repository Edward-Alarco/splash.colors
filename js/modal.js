const closebtn = document.querySelector('.modal .close-modal')
const modal = document.getElementsByClassName('modal')[0]
const buttonActivator = document.querySelector('#btnInfo')


buttonActivator.addEventListener('click',function(){
    modal.style.display = 'flex'
})

closebtn.addEventListener('click',function(){
    modal.style.display = 'none'
})