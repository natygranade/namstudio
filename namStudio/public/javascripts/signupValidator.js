window.addEventListener('load', function(){

let form = document.getElementById('signup-form')

form.email.addEventListener('keydown', function(e){
    e.target.classList.add("is-invalid")
    form.submit.setAttribute("disabled", "")
      if(e.target.value.length > 5){
        e.target.classList.replace("is-invalid", "is-valid")
        form.submit.removeAttribute("disabled")
 }
})
form.password.addEventListener('keydown', function(e){
    e.target.classList.add("is-invalid")
    form.submit.setAttribute("disabled", "")
    if(e.target.value.length > 3 && e.target.value.length < 9){
        e.target.classList.replace("is-invalid", "is-valid")
        form.submit.removeAttribute("disabled")
 }
})

form.passwordRepeat.addEventListener('keydown', function(e){
    e.target.classList.add("is-invalid")
    form.submit.setAttribute("disabled", "")
    if(e.target.value.length  > 3 && e.target.value.length < 9){
        e.target.classList.replace("is-invalid", "is-valid")
        form.submit.removeAttribute("disabled")
 }
})

form.name.addEventListener('keydown', function(e){
    e.target.classList.add("is-invalid")
    form.submit.setAttribute("disabled", "")
    if(e.target.value.length > 4){
        e.target.classList.replace("is-invalid", "is-valid")
        form.submit.removeAttribute("disabled")
 }
})

})