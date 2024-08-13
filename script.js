function showDetails(car) {
    // Oculta o cabeçalho, a lista de carros e a seção "Sobre Nós"
    document.querySelector('header').style.display = 'none'; // Oculta o cabeçalho
    document.getElementById('car-list').style.display = 'none'; // Oculta a lista de carros
    document.getElementById('about-us').style.display = 'none'; // Oculta a seção "Sobre Nós"
    document.getElementById('car-details').style.display = 'block'; // Mostra os detalhes do carro

    // Oculta todas as seções de detalhes
    const details = document.getElementsByClassName('car-details-content');
    for (let i = 0; i < details.length; i++) {
        details[i].style.display = 'none';
    }

    // Exibe a seção de detalhes do carro selecionado
    document.getElementById(car + '-details').style.display = 'block';
    
    
    window.scrollTo(0, 0);
}

function showCarList() {
    // Mostra o cabeçalho e a lista de carros
    document.querySelector('header').style.display = 'block'; // Mostra o cabeçalho
    document.getElementById('car-list').style.display = 'block'; // Mostra a lista de carros
    document.getElementById('about-us').style.display = 'block'; // Mostra a seção "Sobre Nós"
    document.getElementById('car-details').style.display = 'none'; // Esconde os detalhes do carro
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.nav a[href="#home"]').addEventListener('click', function(event) {
        event.preventDefault(); 
        window.scrollTo(0, 0); 
    });
});
