$("#loginButton").click(function (e) {
    e.preventDefault()
    let email = $("#exampleInputEmail1").val();
    let senha = $("#exampleInputPassword1").val();
    
    const empresas = JSON.parse(localStorage.getItem("empresas"));

    empresas.forEach((empresa) => {
        if(empresa.emailEmpresa == email && empresa.senhaEmpresa == senha) {
            window.location.href="ReabreMinas.html";
            localStorage.setItem("empresaLogada", JSON.stringify(empresa))
        }
    })

    console.log({
        email,
        senha,
    });
    console.log(empresas)
})