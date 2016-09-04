function validaInfo() { 
    if (document.formulario.login.value == "") {
       document.formulario.login.focus();
       document.formulario.login.style.borderColor="#ff0000";
       document.getElementById("msg_erro").style.visibility = "visible";      
       return false;
    }else{
        document.formulario.login.style.borderColor="transparent";
        document.getElementById("msg_erro").style.visibility = "hidden"; 
    }
    
    if (document.formulario.senha.value == ""){
        document.formulario.senha.focus();
        document.formulario.senha.style.borderColor="#ff0000";
        document.getElementById("msg_erro").style.visibility = "visible"; 
        return false;
    }else{
        document.formulario.login.style.borderColor="transparent";
    }
}