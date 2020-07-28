window.addEventListener('load', function(){

    let remove = document.getElementsByClassName('remove')

    Array.from(remove).forEach(remove =>{
        remove.addEventListener('click', function(e){
console.log(e.target.value)
            fetch('/cart', {
                method: 'DELETE',
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
})