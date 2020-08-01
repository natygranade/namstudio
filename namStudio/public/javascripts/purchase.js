window.addEventListener('load', function(){
    
    let purchase = document.getElementById('purchase')
    
    fetch("http://localhost:8000/api/users/logedUser")
    .then(response =>  response.json())
    .then(data => {
        if(data == null){
            purchase.addEventListener('click', function(e){
                e.preventDefault()
                alert("Por favor, loguearse antes de pagar.")
                
            }) 
        }
    })
    
})