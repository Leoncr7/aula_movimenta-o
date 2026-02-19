const canvas = document.getElementById("jogoCanvas")
const ctx = canvas.getContext("2d")

//config. personagens
let player = {
    x: 360,
    y: 0,
    tamanho: 40,
    velocidade: 5,
    cor: "blue"
};

//monitor de teclas
let teclas = {};
window.addEventListener("keydown", (e) => teclas [e.key] = true);
window.addEventListener("keyup", (e) => teclas [e.key] = false);

function atualizar(){
 //monvimentação no eixo X
if(teclas["ArrowLeft"]) player.x -= player.velocidade;
if(teclas["ArrowRight"]) player.x += player.velocidade;
//monvimentação no eixo Y
if(teclas["ArrowUp"]) player.y -= player.velocidade;
if(teclas["ArrowDown"]) player.y += player.velocidade;
}

//Limpar a tela e criar o personagem
function desenhar(){
ctx.clearRect(0,0, canvas.width, canvas.height);  
ctx.fillStyle = player.cor;
ctx.fillRect (player.x,player.y, player.tamanho, player.tamanho);
}

function loop(){
    atualizar();
    desenhar();
    requestAnimationFrame(loop);
}
loop();