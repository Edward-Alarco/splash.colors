const closebtn = document.querySelector('.modal .close-modal')
const modal = document.getElementsByClassName('modal')[0]
const buttonActivator = document.querySelector('#btnInfo')


buttonActivator.addEventListener('click',function(){
    modal.style.display = 'flex'
})

closebtn.addEventListener('click',function(){
    modal.style.display = 'none'
})

const color = document.getElementsByClassName('buttonColorContenedor')
const modalCopy = document.getElementsByClassName('copiado')[0]


for (let i = 0; i < color.length; i++) {
    color[i].addEventListener('click',function(){
        modalCopy.style.display = 'flex'
        setTimeout(()=>modalCopy.style.display = 'none',2000)
    })
}