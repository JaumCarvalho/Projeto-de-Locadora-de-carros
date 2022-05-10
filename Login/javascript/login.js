const iemail = document.querySelector(".email");
const isenha = document.querySelector(".senha");
const botao= document.querySelector("button");
const formulario = document.querySelector("form");
function login(){
    fetch("http://localhost:8888/usuarios",
    {
        headers:{
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        method: "POST",
            body: JSON.stringify({
            email: iemail.value,
            senha: isenha.value
        })
    })
    .then(function (res){console.log(res)})
    .catch(function (res){console.log(res)})
    
}
formulario.addEventListener("submit", function(event){
    event.preventDefault();
    login();
    /*
    const dados={
        email:iemail.value,
        senha:isenha.value,
    }
    */
    console.log("os dados foram enviados para database com sucesso");
});