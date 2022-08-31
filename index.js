const vagas = []

function listarVagas() {
    const vagasEmTexto = vagas.reduce(function (textoFinal, vaga, indice) {
        //1. nome, (x candidatos)
        textoFinal += indice + ". "
        textoFinal += vaga.nome
        textoFinal += " (" + vaga.candidatos.length + " candidatos)\n"
        return textoFinal
    }, "")

    alert(vagasEmTexto)
}

function novaVaga () {
    const nome = prompt("Informe um nome para a vaga: ")
    const descricao = prompt("Informe uma descrição: ")
    const dataLimite = prompt("Informe uma data limite (dd/mm/aaaa) para a vaga")

    const confirmacao = confirm("Deseja criar uma nova vaga com essas informações?" + "\nNome: " + nome + "\nDescrição: " + descricao + "\nData limite: " + dataLimite)

    if(confirmacao) {
        const novaVaga = { nome, descricao, dataLimite, candidatos: [] } // abreviacao de : nome: nome, descricao: desc...
        vagas.push(novaVaga) //push, no caso, vai colocar os arquivos de novaVaga em vagas
        alert("Vaga criada com sucesso")
    }

}

function exibirVaga() {
    const indice = prompt("Informe o indice da vaga que deseja exibir")
    const vaga = vagas[indice]

    if(indice > vagas.length || indice < 0) {
        alert("Indice invalido")
        return
    } 

    const candidatosEmTexto = vaga.candidatos.reduce(function (textoFinal, candidato){
        return textoFinal + "\n " + candidato
    }, "")
    alert(
        "Vaga nº: " + indice + "\nNome: " + vaga.nome + "\nDescricao: " + vaga.descricao + "\nData limite: " + vaga.dataLimite + "\nQuantidade de candidatos: " + vaga.candidatos.length + "\nCandidatos inscritos: " + candidatosEmTexto
    )
}

function inscreverCandidato() {
    const candidato = prompt("Informe o nome do candidato: ")
    const indice = prompt("Informe o indice da vaga para qual candidato deseja se inscrever")
    const vaga = vagas[indice]

    const confirmacao = confirm("Deseja inscrever o candidato " + candidato + " na vaga: " + indice + "?\n" + "\nNome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData limite: " + vaga.dataLimite) 

    if(confirmacao) {
        vaga.candidatos.push(candidato)
        alert("Inscrição realizada com sucesso")
    }
}

function excluirVaga() {
    const indice = prompt("Informe o indice da vaga que deseja ser excluida: ")
    const vaga = vagas[indice]

    const confirmacao = confirm("Tem certeza que deseja excluir essa vaga? " + indice + "?\n" + "\nNome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData limite: " + vaga.dataLimite)

    if(confirmacao) {
        vagas.splice(indice, 1)
        alert("A vaga foi removida com sucesso")
    }
}

function exibirMenu () {
    const opcao = prompt("Cadastro de Vagas de Emprego: " + "\n\nEscolha uma das opções abaixo..." + "\n1.Listar vagas disponiveis" + "\n2.Criar nova vaga" + "\n3.Exibir uma vaga" + "\n4.Inscrever um candidato" + "\n5.Excluir uma vaga" + "\n6.Sair" )

    return opcao
}
function executar() {
    let opcao = ""

    do {
    opcao = exibirMenu()

    switch(opcao) {
        case "1":
            listarVagas()
            break
        case "2":
            novaVaga()
            break
        case "3":
            exibirVaga()
            break
        case "4":
            inscreverCandidato()
            break
        case "5":
            excluirVaga()
            break
        case "6":
            alert("Saindo do Sistema de Vagas...")
            break
        default: 
        alert("Opção inválida, por favor tente novamente!")
    }

    } while(opcao != "6")
}

executar()