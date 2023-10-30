let lista_nome = ["Jesus","Carlos","Spessato","Gilmar"];
function atualizar_lista(){
    let nomes = "";
    if(lista_nome.length > 0){
        for(let i=0; i < lista_nome.length; i++){
            nomes += lista_nome[i] + "<br>";
        }
        document.getElementById("lista").innerHTML = nomes;
        return;
    }
    document.getElementById("lista").innerHTML = "Lista Vazia";
}

function inserir_ultimo() {
    let nome = document.getElementById("nome").value;
    if(nome != ""){
        lista_nome.push(nome);
        atualizar_lista();
    }
}
function inserir_primeiro() {
    let nome = document.getElementById("nome").value;
    if(nome != ""){
        lista_nome.unshift(nome);
        atualizar_lista();
    }
}
function deletar_primeiro() {
    if(lista_nome.length > 0){
        lista_nome.shift();
        atualizar_lista();
    }
}
function deletar_ultimo() {
    if(lista_nome.length > 0){
        lista_nome.pop();
        atualizar_lista();
    }
}
function deletar_lista() {
    lista_nome = [];
    atualizar_lista();
}
function ordenar_az() {
    if(lista_nome.length > 0){
        lista_nome.sort();
        atualizar_lista();
    }
}
function ordenar_za() {
    if(lista_nome.length > 0){
        lista_nome.sort();
        lista_nome.reverse();
        atualizar_lista();
    }
}
function deletar_nome(){
    let nome = document.getElementById("nome").value;
    if(nome != ""){
        for(let i=0; i < lista_nome.length;i++){
            if(nome == lista_nome[i]) lista_nome.splice(i,1);
        }
        atualizar_lista();
    }

}