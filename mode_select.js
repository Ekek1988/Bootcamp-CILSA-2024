document.getElementById('dark-mode').addEventListener('click', function() {
    const body = document.body;
    const currentMode = body.classList.contains('light-mode');
    
    if (currentMode) {
        body.classList.remove('light-mode');
        this.textContent = 'Modo Claro';
    } else {
        body.classList.add('light-mode');
        this.textContent = 'Modo Oscuro';
    }
});