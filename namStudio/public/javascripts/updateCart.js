window.addEventListener('load', function(){

 let total = document.getElementById('total')


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
})

