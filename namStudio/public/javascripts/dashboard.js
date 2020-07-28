
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
    
    fetch("http://localhost:8000/api/cart")
    .then(response =>  response.json())
    .then(data => {
        if(data){
            let cart = document.getElementById('cart')
            cart.innerHTML = data.products.length
        }
    })
})

