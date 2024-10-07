// Identifica o tamanho da janela e define a altura do app
function setScreenHeight() {
    document.body.style.height = `${window.innerHeight}px`;
}
// Identifica mudancas na resolucao da janela e redefine a altura do app
window.addEventListener('resize', setScreenHeight);
// Define a altura inicial do app
setScreenHeight();
