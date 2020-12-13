let dadosempresas=[
    {
        id:1,
        nome:"Restaurante teste",
        horario:"11h00 - 14h00",
        categoria:"Bares e Restaurantes",
        localizacao:"Rua abacaxi, 123",
        contatos:"(12)3456-7890",
        fotos:""
    },
    {
        id:2,
        nome:"Loja teste",
        horario:"08h00 - 16h00",
        categoria:"Supermercado e Comércio",
        localizacao:"Rua banana, 456",
        contatos:"(12)0987-6543",
        fotos:""
    }
]
localStorage.setItem("empresas", JSON.stringify(dadosempresas))