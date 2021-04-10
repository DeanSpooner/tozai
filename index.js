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

let currentPlatform = 0;

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

goForward = () => {
    if (currentPlatform === 19) {
        console.log('Cannot go further forward!');
    } else {
        $(platform).animate({ left: '-160px' }, 2000);
        $(platform).hide().animate({ left: '100%' }, 0);
        $(platform).show().animate({ left: '40%' }, 2000);
        currentPlatform += 1;
    }
}

goBack = () => {
    if (currentPlatform === 0) {
        console.log('Cannot go further back!');
    } else {
        $(platform).animate({ left: '100%' }, 2000);
        $(platform).hide().animate({ left: '-160px' }, 0);
        $(platform).show().animate({ left: '40%' }, 2000);
        currentPlatform -= 1;
    }
}

button.addEventListener("click", swapElements);

goButton.addEventListener('click', goForward);

backButton.addEventListener('click', goBack);
