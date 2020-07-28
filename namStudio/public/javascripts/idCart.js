
window.addEventListener('load', function(){

    let addCart = document.getElementById('add-to-cart')
 
addCart.addEventListener('click', function(){

           fetch('/cart', {
                method: 'post',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    product_id: this.parentElement.dataset.productId
                })
            }).then(response => response.json())

            .then(json => console.log(json))
        })     
    })

