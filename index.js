let title = document.getElementById('title');
let button = document.getElementById('startButton');
let viewport = document.getElementById('viewport');
let tracks = document.createElement('img');
tracks.id = 'tracks';
tracks.classList = 'main';
tracks.src = 'images/tracks.png';
let platform2 = document.createElement('img');
platform2.id = 'platform2';
platform2.src = 'images/platform2.png';
platform2.classList = 'main';
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
goButton.textContent = 'GO! 行こう！';
goButton.classList = 'main';
let backButton = document.createElement('button');
backButton.id = 'backButton';
backButton.textContent = 'BACK!　逆行しよう！';
backButton.classList = 'main';
let info = document.createElement('div');
info.id = 'info';
info.classList = 'main';

let currentPlatform = 0;

const stations = [{
    name: 'Nakano',
    jpName: '中野'
},
{
    name: 'Ochiai',
    jpName: '落合'
},
{
    name: 'Takadanobaba',
    jpName: '高田馬場'
},
{
    name: 'Waseda',
    jpName: '早稲田'
},
{
    name: 'Kagurazaka',
    jpName: '神楽坂'
},
{
    name: 'Īdabashi',
    jpName: '飯田橋'
},
{
    name: 'Kudanshita',
    jpName: '九段下'
},
{
    name: 'Takebashi',
    jpName: '竹橋'
},
{
    name: 'Ōtemachi',
    jpName: '大手町'
},
{
    name: 'Nihombashi',
    jpName: '日本橋'
},
{
    name: 'Kayabachō',
    jpName: '茅場町'
},
{
    name: 'Monzennakachō',
    jpName: '門前仲町'
},
{
    name: 'Kiba',
    jpName: '木場'
},
{
    name: 'Tōyōchō',
    jpName: '東陽町'
},
{
    name: 'Minamisunamachi',
    jpName: '南砂町'
},
{
    name: 'Nishikasai',
    jpName: '西葛西'
},
{
    name: 'Kasai',
    jpName: '葛西'
},
{
    name: 'Urayasu',
    jpName: '浦安'
},
{
    name: 'Minamigyōtoku',
    jpName: '南行徳'
},
{
    name: 'Gyōtoku',
    jpName: '行徳'
},
{
    name: 'Myōden',
    jpName: '妙典'
},
{
    name: 'Barakinakayama',
    jpName: '原木中山'
},
{
    name: 'Nishifunabashi',
    jpName: '西船橋'
}
]

swapElements = () => {
    //     title.classList.toggle('fadeOut');
    //     button.classList.toggle('fadeOut');
    $(title).fadeOut(600);
    $(button).fadeOut(600);
    setTimeout(function () {
        title.remove();
        button.remove();
        viewport.appendChild(tracks);
        viewport.appendChild(platform2);
        viewport.appendChild(platform);
        viewport.appendChild(train);
        viewport.appendChild(info);
        viewport.appendChild(goButton);
        viewport.appendChild(backButton);
        $(info).text('This is station T' + (currentPlatform + 1) + ', ' + stations[currentPlatform].name + '. これは' + stations[currentPlatform].jpName + '駅 T' + (currentPlatform + 1) + ' です。').fadeIn(500);
        $('.main').hide().fadeIn(600);
    }, 600);
}

goForward = () => {
    if (currentPlatform === 22) {
        $(info).text('Cannot go further forward! もっとす進むことができません！');
    } else {
        $(info).fadeOut(500).delay(2000);
        $(platform).animate({ left: '-160px' }, 2000);
        $(platform).hide().animate({ left: '100%' }, 0);
        $(platform).show().animate({ left: '40%' }, 2000);
        currentPlatform += 1;
        $(info).text('This is station T' + (currentPlatform + 1) + ', ' + stations[currentPlatform].name + '. これは' + stations[currentPlatform].jpName + '駅 T' + (currentPlatform + 1) + ' です。').fadeIn(500);
    }
}

goBack = () => {
    if (currentPlatform === 0) {
        $(info).text('Cannot go further back! もっと逆行することできません！');
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