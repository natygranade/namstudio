
window.addEventListener('load',function(){

let zoom = document.getElementById('zoom')
let img = document.getElementsByClassName('carousel-inner')[0]

zoom.addEventListener('change',function(){
    img.style.backgroundSize = this.value +  "%"
   
})

let cwLink = document.getElementsByClassName('cwLink')

Array.from(cwLink).forEach(cw =>{
    cw.addEventListener('click', function(){
console.log(this.dataset.img)
img.style.backgroundImage =' url(' +this.dataset.img + ')'
    })
    
})




})

// elementos a ponerles una clase y un data-img="..."
// a todos los elementos agregarles un evento
// cuando clickea
// lees el atributo el.dataset.img
// sobre el contenedor cambias la imagen de fondo
