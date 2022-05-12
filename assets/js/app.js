const success = document.querySelector("#success");
const warning = document.querySelector("#warning");
const info = document.querySelector("#info");
const question = document.querySelector("#question");
const error = document.querySelector("#error");
success.addEventListener("click", () => {
    name = `FB : Renz Abellanosa Aggabao`
    Swal.fire({

        icon: 'success',
        title: 'Success icon',
        text: `${name}`,
    }) 
})
warning.onclick = () => {
    name = `FB : Renz Abellanosa Aggabao`
    Swal.fire({

        icon: 'warning',
        title: 'Warning icon',
        text: `${name}`
    }) 
}
question.onclick = () => {
    name = `FB : Renz Abellanosa Aggabao`
    Swal.fire({

        icon: 'question',
        title: 'Question icon',
        text: `${name}`
    }) 
}
info.onclick = () => {
    name = `FB : Renz Abellanosa Aggabao`
    Swal.fire({

        icon: 'info',
        title: 'Info icon',
        text: `${name}`
    }) 
}
error.onclick = () => {
    name = `FB : Renz Abellanosa Aggabao`
    Swal.fire({

        icon: 'error',
        title: 'Error icon',
        text: `${name}`
    }) 
}