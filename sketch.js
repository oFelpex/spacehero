//variável tela
var tela = 1;
//variáveis para as imagens da nave no menu e o background roxo no menu
var nmenu;
var bmenu;
//variável para a imagem da mira
var mira;
var opcao = 1;
//variáveis para o disparo
var estadoDisparo = false;
var vivo = true;
var acertou = false;
//variáveis para saber se a pessoa acertou o meteoro
var xscore;
var yscore;
var xShot;
var yShot;
var xdShot;
var ydShot;
var cxShot;
var cyShot;
//variavel de pontuação
var score = 0;
//variáveis para o texto caindo junto dos meteoros
var xText;
var yText;
let n=[];
let n1, n2, n3, n4;
var randomResult;
var result;
var correto;
//Criei variáveis para poder trabalhar com o gif do personagem e das estrelas.
var gif_loadImg, gif_person;
var gif_loadStars, gif_stars;
var gif_loadBgame, gif_bgame;
var gif_loadGStars, gif_bgstars;
var gif_loadNave, gif_nave;
//vetor para criar as estrelas em movimento durante o jogo
let drop = [];
//vetores para criar os meteoros em movimento durante o jogo
let dropM = [];
let meteor = [];
let meteorEx = [];
let ybgame = 0;
let ynave = 500;
//função preload() é usada para carregar arquivos externos, no caso carreguei duas fontes de texto, uma imagem que é a de nave e o chão do menu, e um gif que é o pergonagem.

function preload() {
  //carregar fontes
  fontLogo = loadFont('millestones.ttf');
  fontPixel = loadFont('vcr_osd_mono.ttf');
  //carregar gif do personagem
  gif_loadImg = loadImage('person_menu.gif');
  gif_person = createImg('person_menu.gif');
  //carregar gif das estrelas do menu
  gif_loadStars = loadImage('stars.gif');
  gif_stars = createImg('stars.gif');
  //carregar gif do planeta de fundo no jogo
  gif_loadBgame = loadImage('background_game.gif');
  gif_bgame = createImg('background_game.gif');
  //carregar gif das estrelas de fundo no jogo
  gif_loadGStars = loadImage('background_stars.gif');
  gif_bgstars = createImg('background_stars.gif');
  gif_loadGStars2 = loadImage('background_stars.gif');
  gif_bgstars2 = createImg('background_stars.gif');
  //carregar gif do tiro (shot)
  gif_loadShot = loadImage('shot.gif');
  gif_shot = createImg('shot.gif');
  gif_loadShot2 = loadImage('shot.gif');
  gif_shot2 = createImg('shot.gif');
  //carregar imagem da nave do menu
  nmenu = loadImage('nave_menu.png');
  //carregar imagem do gradiente do menu
  bmenu = loadImage('background_menu.png');
  //carregar imagem da mira que segue o mouse
  mira = loadImage('mira.png');
  //carregar imagens dos meteoros
  meteor1 = loadImage('meteor1.png');
  meteor2 = loadImage('meteor2.png');
  meteor3 = loadImage('meteor3.png');
  meteor4 = loadImage('meteor4.png');
  meteor = [meteor1, meteor2, meteor3, meteor4];
  
  meteorEx1Load = loadImage('meteor_ex1.gif');
  meteorEx1 = createImg('meteor_ex1.gif');
  meteorEx2Load = loadImage('meteor_ex2.gif');
  meteorEx2 = createImg('meteor_ex2.gif');
  meteorEx = [meteorEx1, meteorEx2];
  //carregar gif da nave do jogo
  loadNave = loadImage('nave.gif');
  nave = createImg('nave.gif');
}

function setup() {
  createCanvas(720, 480);
  for(var i = 0; i < 100; i++){
    drop[i] = new Drop();
  }
  for(var j = 0; j < 100; j++){
    dropM[j] = new DropM();
    n1 = parseInt(random(0, 10));
    n2 = parseInt(random(0, 10));
    n3 = n1 + n2;
    n4 = n3 + parseInt(random(0, 5));
    n = [n3, n4];
    randomResult = random(n);
    result = randomResult;
  }
}

function draw() {
  if(tela == 1){
    menu();
  }
  if(tela == 2){
    jogo();
  }
  if(tela == 3){
    instru();
  }
  if(tela == 4){
    gameOver();
  }
}

function menu() {
  if(tela == 1){
    gif_shot.position(-3000, -3000);
    gif_shot.size(0);
    gif_shot2.position(-3000, -3000);
    gif_shot2.size(0);
    nave.position(-3000, -3000);
    nave.size(0);
    gif_bgstars.position(-3000, -3000);
    gif_bgstars.size(0);
    gif_bgstars2.position(-3000, -3000);
    gif_bgstars2.size(0);
    gif_bgame.position(-3000, -3000);
    gif_bgame.size(0);
    gif_stars.position(0, 0);
    gif_stars.size(720, 480);
    meteorEx1.position(-3000, -3000);
    meteorEx2.position(-3000, -3000);
    image(bmenu, 1, 1, 720, 480);
    image(nmenu, 1, 200, 520, 280);
    gif_person.position(60, 350);
    gif_person.size(110, 120);
    stroke(255);
    line(40, 115, 435, 115);
    noFill();
    rect(535, 260, 110, 55, 20, 15, 10, 5); 
    rect(495, 330, 190, 55, 20, 15, 10, 5);
    fill(250);
    textFont(fontLogo);
    textSize(90);
    text("SPACE HERO", 55, 100);
    textFont(fontPixel);
    textSize(25);
    text("Jogar", 555, 300);
    text("Como jogar", 515, 370);
    image(mira, mouseX-41, mouseY-30, 100, 100);
    keyPressedMenu();
    mousePressedMenu();
  }
}

function mousePressedMenu() {
  if(mouseX > 535 && mouseX < 645 && mouseY > 260 && mouseY < 315){
    stroke(255);
    fill(100);
    rect(535, 260, 110, 55, 20, 15, 10, 5);  
    textFont(fontPixel);
    textSize(28);
    fill(255);
    text("Jogar", 548, 300);
    image(mira, mouseX-41, mouseY-30, 100, 100); 
      if(mouseIsPressed){
        vivo = true;
        opcao = 2;
        ybgame = 0;
        ynave = 500;
        tela = 2;
      }
    }if(mouseX > 495 && mouseX < 685 && mouseY > 330 && mouseY < 385){
    stroke(255);
    fill(100);
    rect(495, 330, 190, 55, 20, 15, 10, 5);
    textFont(fontPixel);
    textSize(28);
    fill(255);
    text("Como jogar", 508, 370);
    image(mira, mouseX-41, mouseY-30, 100, 100);  
      if(mouseIsPressed){
        opcao = -1;
        tela = 3;
    }
  }
}

function keyPressedMenu(){
  if(tela == 1 && key=="ArrowUp" || key=="w"){
    stroke(255);
    fill(100);
    rect(535, 260, 110, 55, 20, 15, 10, 5);  
    textFont(fontPixel);
    textSize(28);
    fill(255);
    text("Jogar", 548, 300);
    opcao = 1;
    }
  if(tela == 1 && key=="ArrowDown" || key=="s"){
    stroke(255);
    fill(100);
    rect(495, 330, 190, 55, 20, 15, 10, 5);
    textFont(fontPixel);
    textSize(28);
    fill(255);
    text("Como jogar", 508, 370);
    opcao = 2;
  }
  if(opcao == 2 && key=="Enter"){
    tela = 3;
  }
  if(opcao == 1 && key=="Enter"){
    ybgame = 0;
    ynave = 500;
    tela = 2;
  }
}

function instru() {
  if(tela == 3){
    background(55);
    gif_person.position(-300, -300);
    gif_stars.position(-3000, -3000);
    textFont(fontPixel);
    textSize(25);
    fill(255);
    text("Bem vindo(a) ao\n", 245, 70);
    textFont(fontLogo);
    textSize(70);
    text("SPACE HERO\n", 210, 150);
    textFont(fontPixel);
    textSize(25);
    text("  Aqui você é um heroi do espaço\n    tentando salvar o planeta\n    de um ataque de asteróides\nque estão vindo em direção à Terra.\n    Resolva a conta matemática\ne dê um tiro certeiro no asteroide\n   que exibe o resultado correto.", 110, 200);
    textFont(fontPixel);
    textSize(25);
    text("Voltar", 310, 440);
    noFill();
    stroke(255);
    rect(290, 402, 125, 55, 20, 15, 10, 5);
    image(mira, mouseX-41, mouseY-30, 100, 100);
    if(mouseX > 290 && mouseX < 415 && mouseY > 402 && mouseY < 457){
      fill(100);
      rect(290, 402, 125, 55, 20, 15, 10, 5);
      fill(255);
      textFont(fontPixel);
      textSize(28);
      text("Voltar", 305, 440);
      image(mira, mouseX-41, mouseY-30, 100, 100);
        if(mouseIsPressed){
          opcao = 1;
          tela = 1;
      }
    }
  }
  keyPressedInstru();
}  

function keyPressedInstru(){
  if(tela == 3 && key=="ArrowDown" || key=="s" || key=="ArrowUp" || key=="w"){
    fill(100);
    rect(290, 402, 125, 55, 20, 15, 10, 5);
    fill(255);
    textFont(fontPixel);
    textSize(28);
    text("Voltar", 305, 440);
    opcao = -1;
    image(mira, mouseX-41, mouseY-30, 100, 100);
  }
  if(opcao == -1 && key=="Enter" || key=="Escape"){
    tela = 1;
  }
}

function jogo() {
  console.log(correto);
  if(tela == 2){
  vivo = true;
    background(0);
    if(key=="Escape"){
    opcao = 1;
    vivo = false;
    setup();
    tela = 4;
  } 
  for(var i = 0; i < 50; i++){
    drop[i].show();
    drop[i].update();
  }
  if(vivo == true){
     for(var j = 0; j < 1; j++){
    dropM[j].show();
    dropM[j].update();
    }
  }
    image(gif_bgame, 0, ybgame);
    ybgame = ybgame + 0.2;
    gif_bgame.size(720, 480);
    gif_person.position(-300, -300);
    gif_stars.position(-3000, -3000);
    image(mira, mouseX-41, mouseY-30, 100, 100);
    if(ynave>340){
      ynave--;
    }
    nave.position(mouseX-65, ynave);
    nave.size(130, 130);
    textFont(fontPixel);
    textSize(20);
    text("Pontos: "+score, 550, 60);
  shot();
  contas();
  }
}

function Drop() {
  this.x = random(0, width);
  this.y = random(0, height);
  this.size = random(0.5, 3);
  this.show = function() {
    noStroke();
    fill(250);
    ellipse(this.x, this.y, this.size, this.size);
  }
  this.update = function() {
    this.y = this.y + 0.15;
    if(this.y > height){
      this.y = random(-100, 0);
    }
  }
}

function DropM() {
  let randomMeteor = random(meteor);
  this.x = random(90, width-200);
  this.y = random(-500, -70);
  this.size = random(0.5, 3);
  this.show = function() {
    image(randomMeteor, cxShot = this.x, cyShot = this.y, 120, 120);
    if(acertou == true && correto == true){
      this.x = random(90, width-200);
      this.y = random(-200, -70);
      this.size = random(0.5, 3);
  }
  }
  this.update = function() {
    this.y = this.y + 1;
    if(this.x>mouseX-65 && this.x<mouseX+65 && this.y>280){
      opcao = 1;
      vivo = false;  
      setup();
      tela = 4;
    }
    if(score>10){
      this.y = this.y + 0.2;
    }
    if(score>30){
      this.y = this.y + 0.2;
    }
    if(score>50){
      this.y = this.y + 0.2;
    }
    if(score>80){
      this.y = this.y + 0.2;
    }
    if(score>100){
      this.y = this.y + 0.2;
    }
    if(score>120){
      this.y = this.y + 0.2;
    }
    if(score>150){
      this.y = this.y + 0.2;
    }
    if(score>200){
      this.y = this.y + 0.3;
    }
    if(score>250){
      this.y = this.y + 0.3;
    }
    if(score>300){
      this.y = this.y + 0.4;
    }
    if(score>350){
      this.y = this.y + 0.4;
    }
    if(score>400){
      this.y = this.y + 0.5;
    }
    if(score>450){
      this.y = this.y + 0.5;
    }
    if(score>500){
      this.y = this.y + 0.6;
    }
//if para fazer o sistema de game over com o meteoro correto acertando a terra
      if(this.y > 490 && correto == false){
        score = score+5;
        yText = this.y = random(-200, -70);
        xText = this.x = random(90, width-200);
        randomMeteor = random(meteor);
        n1 = parseInt(random(0, 10));
        n2 = parseInt(random(-10, 10));
        n3 = n1 + n2;
        n4 = n3 + parseInt(random(0, 5));
        n = [n3, n4];
        randomResult = random(n);
        result = parseInt(randomResult);
      }
      if(acertou == true){
        n1 = parseInt(random(0, 10));
        n2 = parseInt(random(-10, 10));
        n3 = n1 + n2;
        n4 = n3 + parseInt(random(0, 5));
        n = [n3, n4];
        randomResult = random(n);
        result = parseInt(randomResult);
      }
    }
  }

function shot() {
  xShot = mouseX;
  yShot = 360;
  if(mouseIsPressed && estadoDisparo == false){
    xdShot = xShot;
    ydShot = yShot;
    estadoDisparo = true;
  }
  if(estadoDisparo){
    gif_shot.position(xdShot-10, ydShot);
    gif_shot.size(50, 50);
    gif_shot2.position(xdShot-40, ydShot);
    gif_shot2.size(50, 50);
    ydShot=ydShot-8;
    if(xdShot > cxShot && xdShot < cxShot+120 && ydShot > cyShot && ydShot < cyShot+50){
      score=score+5;
      yscore = score;
      acertou = true;
      let randomMeteorEx = random(meteorEx);
      let dx = (xdShot + cxShot-90)/2
      let dy = (ydShot + cyShot-75)/2
      randomMeteorEx.position(dx, dy);
      randomMeteorEx.size(150, 150);
      xdShot=-1000;
    }else{
      acertou = false;
    }
    if(ydShot < -80 ){
      estadoDisparo = false;
      let randomMeteorEx = random(meteorEx);
      randomMeteorEx.position(-3000, -3000);
    }
  }
}

function contas() {
  xText = cxShot;
  yText = cyShot;
  fill(255);
  textFont(fontPixel);
  textSize(25);
  if(n2>=0){
  text(n1+"+"+n2+"\n="+result, xText+30, yText+55);
  }else{
    if(n2<0){
      text(n1+""+n2+"\n="+result, xText+30, yText+55);
    }
  }
  if(n1+n2==result){
    correto = true;
  }else if(n1+n2!=result){
    correto = false;
  }
  if(correto == true && yText > 490){
      opcao = 1;
      vivo = false;
      setup();
      tela = 4;
    }
  if(correto == false && acertou == true){
      opcao = 1;
      vivo = false;  
      setup();
      tela = 4;
    }
}

function gameOver() {
  if(tela==4){
    image(mira, mouseX-41, mouseY-30, 100, 100);
    nave.position(-3000, -3000);
    gif_shot.position(-3000, -3000);
    gif_shot2.position(-3000, -3000);
    meteorEx1.position(-3000, -3000);
    meteorEx2.position(-3000, -3000);
    background(75, 140, 140);
    textSize(50);
    fill(250);
    text('Fim de jogo!', 185, 100);
    text('Você errou.', 200, 170);
    text('Pontuação total: '+score, 90, 300);
    textFont(fontPixel);
    textSize(25);
    text("Voltar", 310, 440);
    noFill();
    stroke(255);
    rect(290, 402, 125, 55, 20, 15, 10, 5);
    image(mira, mouseX-41, mouseY-30, 100, 100);
    if(mouseX > 290 && mouseX < 415 && mouseY > 402 && mouseY < 457){
      fill(100);
      rect(290, 402, 125, 55, 20, 15, 10, 5);
      fill(255);
      textFont(fontPixel);
      textSize(28);
      text("Voltar", 305, 440);
      image(mira, mouseX-41, mouseY-30, 100, 100);
        if(mouseIsPressed){
          score = 0;
          opcao = 1;
          tela = 1;
        }
      }
    }
  keyPressedGameOver();
  }

function keyPressedGameOver() {
  if(tela == 4 && key=="ArrowDown" || key=="s" || key=="ArrowUp" || key=="w"){
    fill(100);
    rect(290, 402, 125, 55, 20, 15, 10, 5);
    fill(255);
    textFont(fontPixel);
    textSize(28);
    text("Voltar", 305, 440);
    opcao = -1;
    image(mira, mouseX-41, mouseY-30, 100, 100);
  }
  if(opcao == -1 && key=="Enter" || key=="Escape"){
    score = 0;
    tela = 1;
  }
}
