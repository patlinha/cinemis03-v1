function abrirDetalhesFilme() {
    document.getElementById('detalhesFilme').classList.remove('detalhesFilme-ininativo');
    document.getElementById('detalhesFilme').classList.add('detalhesFilme-inativo');
}

function fecharDetalhesFilme() {
    document.getElementById('detalhesFilme').classList.remove('detalhesFilme-inativo');
    document.getElementById('detalhesFilme').classList.add('detalhesFilme-inativo');
}

export function inicializarDetalhesFilme() {
    const btnfecharDetalhesFilme = document.getElementById('fechar-detalhesFilme');
    const btnAbrirDetalhesFilme = document.getElementById('abrir-detalhesFilme');
    btnfecharDetalhesFilme.addEventListener('click', fecharDetalhesFilme);
    btnAbrirDetalhesFilme.addEventListener('click', abrirDetalhesFilme);
}