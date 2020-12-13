const form = document.querySelector("#form");

async function readFile(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    return new Promise((res, rej) => {
        reader.onload = (event) => res(event.target.result);
        reader.onerror = (error) => rej(error);
    });
}

async function handleSubmit(event) {
    event.preventDefault();
    const empresas = JSON.parse(localStorage.getItem("empresas"));
    localStorage.setItem("empresas", JSON.stringify([...(empresas ?? []), {
        nomeEmpresa: this.nomeEmpresa.value,
        emailEmpresa: this.emailEmpresa.value,
        senhaEmpresa: this.senhaEmpresa.value,
        horarioInicio: this.horarioInicio.value,
        horarioFinal: this.horarioFinal.value,
        categoria: this.categoria.value,
        localizacao: this.localizacao.value,
        contatos: this.contatos.value,
        foto: await readFile(this.foto.files[0]),
    }]))
    alert("Conta criada com sucesso. Voltando a página principal.");
    window.location.href="ReabreMinas.html";
}

form.addEventListener('submit', handleSubmit);