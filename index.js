let title = document.getElementById('title');
let button = document.getElementById('startButton');
let viewport = document.getElementById('viewport');
let tracks = document.createElement('img');
tracks.id = 'tracks';
tracks.classList = 'main';
tracks.src = 'images/tracks.png';
let train = document.createElement('img');
train.id = 'train';
train.src = 'images/train.png';
train.classList = 'main';
let platform = document.createElement('img');
platform.id = 'platform';
platform.src = 'images/platform.png';
platform.classList = 'main';
let goButton = document.createElement('button');
goButton.id = 'goButton';
goButton.textContent = 'GO!';
goButton.classList = 'main';
let backButton = document.createElement('button');
backButton.id = 'backButton';
backButton.textContent = 'BACK!';
backButton.classList = 'main';

swapElements = () => {
    //     title.classList.toggle('fadeOut');
    //     button.classList.toggle('fadeOut');
    $(title).fadeOut(600);
    $(button).fadeOut(600);
    setTimeout(function () {
        title.remove();
        button.remove();
        viewport.appendChild(tracks);
        viewport.appendChild(platform);
        viewport.appendChild(train);
        viewport.appendChild(goButton);
        viewport.appendChild(backButton);
        $('.main').hide().fadeIn(600);
    }, 600);
}

button.addEventListener("click", swapElements);
