document.getElementById('startButton').addEventListener("click", function () {
    let title = document.getElementById('title');
    title.style.opacity = '0';
    this.parentElement.removeChild(title);
});