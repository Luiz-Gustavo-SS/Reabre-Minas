function meuPerfil() {
    empresa = JSON.parse(localStorage.getItem("empresaLogada"));
    if (empresa) {
        $("#espacoEmpresas").html("")
        $("#espacoEmpresas").append(
            `<form id="form">
            <div>
                <label for="nomeEmpresa">Nome da empresa:</label>
                <input type="text" name="nomeEmpresa" id="nomeEmpresa" value="${empresa.nomeEmpresa}">
            </div>
            <div>
                <label for="emailEmpresa">Email da empresa:</label>
                <input type="email" name="emailEmpresa" id="emailEmpresa" value="${empresa.emailEmpresa}">
            </div>
            <div>
                <label for="senhaEmpresa">Senha:</label>
                <input type="password" name="senhaEmpresa" id="senhaEmpresa">
            </div>
            <div>
                <label for="horarioInicio">Inicio do Funcionameto:</label>
                <input type="time" name="horarioInicio" id="horarioInicio" value="${empresa.horarioInicio}">
            </div>
            <div>
                <label for="horarioFinal">Final do Funcionameto:</label>
                <input type="time" name="horarioFinal" id="horarioFinal" value="${empresa.horarioFinal}">
            </div>
            <div>
                <label for="categoria">Categoria da empresa:</label>
                <select name="categoria" id="categoria" value="${empresa.categoria}">
                    <option value="Bares e Restaurantes">Bares e Restaurantes</option>
                    <option value="Esporte e Lazer">Esporte e Lazer</option>
                    <option value="farmacias">Farmácias</option>
                    <option value="Supermecados e Comércio">Supermecados e Comércio</option>
                    <option value="Outros">Outros</option>
                </select>
            </div>
            <div>
                <label for="localizacao">Localização da empresa:</label>
                <input type="text" name="localizacao" id="localizacao" value="${empresa.localizacao}">
            </div>
            <div>
                <label for="contatos">Contatos da empresa:</label>
                <input type="text" name="contatos" id="contatos" value="${empresa.contatos}">
            </div>
            <div>
                <label for="foto">Foto da empresa:</label>
                <input type="file" name="foto" id="foto" value="${empresa.foto}">
            </div>
            <div>
                <button type="submit">Enviar</button>
                <button type="button" class="cancelar"><a href="Login.html">Cancelar</a></button>
            </div>
        </form>`
        )
    }
    console.log(empresa)
 
}
