const empresas = JSON.parse(localStorage.getItem("empresas"))
console.log(empresas)


if (empresas) {
    const espacoEmpresas = document.querySelector('#espacoEmpresas');
    espacoEmpresas.innerHTML = empresas.map(empresa => `
<div>
    <p>${empresa.nomeEmpresa}</p>
    <p>${empresa.horarioInicio}</p>
    <p>${empresa.horarioFinal}</p>
    <p>${empresa.categoria}</p>
    <p>${empresa.localizacao}</p>
    <img src="${empresa.foto}">
</div>
`)
}