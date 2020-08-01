
window.addEventListener('load', function (){
    
    fetch("http://localhost:8000/api/users/logedUser")
    .then(response =>  response.json())
    .then(data => {
        if(data){
            if(data.admin){
                let dashboard = document.getElementById('dashboard')
                
                dashboard.classList.remove("d-none")
                dashboard.setAttribute("href","/dashboard")
                
            }
        }
    })
    let cart = document.getElementById('cart')
    let addCart = document.getElementsByClassName('add-to-cart')
    
    fetch("http://localhost:8000/api/cart")
    .then(response =>  response.json())
    .then(data => {
        if(data){
            cart.innerHTML = data.products.length
        }
    })
    
    Array.from(addCart).forEach(add =>{
        add.addEventListener('click', function(){
            fetch("http://localhost:8000/api/cart")
            .then(response =>  response.json())
            .then(data => {
                if(data){
                    cart.innerHTML = data.products.length
                }
            })
        })
    })
})
