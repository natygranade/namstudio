window.addEventListener('load', function(){
    
    let total = document.getElementById('total')
    let removeButton = document.getElementsByClassName('remove')
    
    fetch("http://localhost:8000/api/cart/products")
    .then(response =>  response.json())
    .then(data => {
        
        let amount = []
        for(let i=0;i<data.length;i++){
            amount.push(data[i].price)
        }
        let sum = amount.reduce((a,b)=> a+b)
        
        total.innerHTML = 'USD' + sum
        
    })
    Array.from(removeButton).forEach(button =>{
        button.addEventListener('click', function(e){
            this.parentElement.parentElement.remove()
        })
    })  
    
    
})

