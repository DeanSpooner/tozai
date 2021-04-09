let title = document.getElementById('title');
let button = document.getElementById('startButton');
let viewport = document.getElementById('viewport');
let tracks = document.createElement('img');
tracks.id = 'tracks';
tracks.src = 'images/tracks.png';
let train = document.createElement('img');
train.id = 'train';
train.src = 'images/train.png';
let platform = document.createElement('img');
platform.id = 'platform';
platform.src = 'images/platform.png';
let goButton = document.createElement('button');
goButton.id = 'goButton';
goButton.textContent = 'GO!';
let backButton = document.createElement('button');
backButton.id = 'backButton';
backButton.textContent = 'BACK!'

swapElements = () => {
    title.classList.toggle('fadeOut');
    button.classList.toggle('fadeOut');
    setTimeout(function () {
        title.remove();
        button.remove();
    }, 600);
    viewport.appendChild(tracks);
    viewport.appendChild(platform);
    viewport.appendChild(train);
    viewport.appendChild(goButton);
    viewport.appendChild(backButton);
}



document.getElementById('startButton').addEventListener("click", swapElements);