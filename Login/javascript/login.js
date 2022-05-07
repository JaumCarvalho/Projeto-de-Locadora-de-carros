const iemail = document.getElementsByName("email");
const isenha = document.getElementsByName("senha");
const ilogin = document.getElementById("cadastrar")

if(ilogin.onclick == true){
    function login(){
        fetch("http://localhost:8800/usuarios",
        {
            headers:{
                "Accept": "application/json",
                "Content": "application/json"
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
}