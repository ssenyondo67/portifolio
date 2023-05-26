
const menu =document.getElementById('menu')

const closeMenu = ()=>{
    menu.classList.add("isNavHiden")
    document.getElementById('closeMenu').removeEventListener('click',closeMenu)
}
const openMenu = ()=>{
     menu.classList.remove("isNavHiden")
     document.getElementById('closeMenu').addEventListener('click',closeMenu);
}
document.getElementById('openMenu').addEventListener('click',openMenu);







