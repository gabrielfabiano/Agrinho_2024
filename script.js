alert('Utilize a lupa de pesquisa para navegar pela pagína.')
function toggleChat() {
    const chatBox = document.getElementById('chat-box');
    if (chatBox.style.display === 'none' || chatBox.style.display === '') {
        chatBox.style.display = 'block';
    } else {
        chatBox.style.display = 'none';
    }
}

function processInput() {
    const input = document.getElementById('user-input').value.toLowerCase();
    const sectionsAndHeaders = document.querySelectorAll('section, h1, h2');
    let found = false;

    sectionsAndHeaders.forEach(element => {
        if (element.id.toLowerCase() === input) {
            element.scrollIntoView({ behavior: 'smooth' });
            found = true;
        }
    });

    if (!found) {
        alert('Erro. Verifique se a palavra foi escrita corretamente e sem espaço.');
    }
}


function showAvailableSections() {
    const sectionsAndHeaders = document.querySelectorAll('section, h1, h2');
    let ids = '';

    sectionsAndHeaders.forEach(element => {
        if (element.id) {
            ids += `${element.id}\n`;
        }
    });

    alert(`Titulos e seções disponíveis:\n${ids}`);
}


document.getElementById('search-button').addEventListener('click', processInput);
document.getElementById('show-alert-button').addEventListener('click', showAvailableSections);
document.getElementById('chat-toggle').addEventListener('click', toggleChat);