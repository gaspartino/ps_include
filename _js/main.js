function mudaFoto (foto) {
    document.getElementById("icone").src= foto;
}

curAudio= new Audio;
curMusica= "";

function tocar () {
    document.body.onmouseover = function(evt) {
        var evt = window.event
        var musica = evt.target.id
        newAudio = new Audio("../_audio/"+ musica +".mp3")

        if(curAudio.paused){
            newAudio.play();
        } else {
            if(curMusica != musica) {
                curAudio.pause();
                newAudio.play();
            } else {
                curAudio.pause();
            }
        }
        curAudio= newAudio;
        curMusica= musica;
    }
}

const clicked = ()=> {
    document.body.onclick = function(evt) {
        var evt = window.event //window.event for IE
        var jogo = evt.target.id
        var gif = document.getElementById("gif")
        var descr = document.querySelector("div#info p")
        if(jogo == "nfs") {
            gif.style= "background-image: url(../_fotos/nfsHeatG.gif);  background-position-x: center; background-size: 100.9%;"
            gif.innerHTML= ""
            descr.innerText= "Need for Speed Heat é um jogo de corrida, onde local dos rachas em alta velocidade é a cidade fictícia de Palm City, baseada no estado da Flórida. É uma metrópole que conta com um clima bem tropical, com o forte calor e as pancadas de chuva influenciando a vestimenta e o comportamento dos personagens. Nessa cidade, as corridas de rua são quase um esporte local, com várias equipes de diversas categorias e culturas se enfrentando por todos os cantos."
        
        }else if(jogo == "rdr2"){
            gif.style= "background-image: url(../_fotos/rdr2G.gif);  background-position-x: center; background-size: 100.9%;"
            gif.innerHTML= ""
            descr.innerText= "Red Dead Redemption 2 se passa em 1899 e segue a história de Arthur Morgan, um membro da guangue de bandidos  de Dutch Van der Linde. Depois de tudo dar errado durante um roubo em uma cidade do oeste chamada Blackwater, Arthur Morgan e a gangue Van der Linde são forçados a fugir. Com agentes federais e os melhores caçadores de recompensa em seu encalço, a gangue precisa roubar, assaltar e lutar para sobreviver no impiedoso coração dos Estados Unidos. Conforme divisões profundas ameaçam despedaçar a gangue, Arthur deve fazer uma escolha entre os seus próprios ideais e a lealdade à gangue que criou."
        
        }else if(jogo == "hellblade"){
            gif.style= "background-image: url(../_fotos/hellBladeG.gif);  background-position-x: center; background-size: 100.9%;"
            gif.innerHTML= ""
            descr.innerText= "Hellblade é um jogo de ação e tem uma história baseada na mitologia nórdica e mitologia celta, foca-se em Senua, sobre a viagem que ela embarca para o submundo de Helheim, para salvar a alma de seu amado (Dilion), nessa viagem Senua encontrará e enfrentará seu passados e seus traumas, consequentemente lidando com eles."
        
        }else if(jogo == "ds3"){
            gif.style= "background-image: url(../_fotos/darkSouls3G.gif);  background-position-x: center; background-size: 100.9%;"
            gif.innerHTML= ""
            descr.innerText= "Lothric é a cidade onde os Lordes das Cinzas se encontram, esses que têm seus deveres como herdeiros da Chama, responsáveis pela manutenção ou extinção da mesma. Entretanto, quando o dever chamou tais Lordes, cada um fugiu para uma parte do mundo, renunciando e negando seu trabalho. Porém, um Inacesos do cemitério, nasceu das cinzas por mais uma vez, para trazer cada lorde em seu devido trono, dando um destino à chama. Em suma, cabe ao Inaceso (o jogador), recolher a alma e cinza de todos os Lordes e as posicionar em seus devidos tronos, para decidir o destino das chamas pela última vez."

        }else if(jogo == "fh4"){
            gif.style= "background-image: url(../_fotos/forzaHorizon4G.gif);  background-position-x: center; background-size: 100.9%;"
            gif.innerHTML= ""
            descr.innerText= "Forza Horizon 4 é um jogo de corrida com um mapa fictício do Reino Unido. É um dos primeiros jogos a apresentar um sistema dinâmico das quatro estações do ano; Verão, Primavera, Outono e Inverno. Cada estação dentro do jogo durará um semana do nosso calendário real, ou seja a cada uma semana a estação é alterada subsequente, caso o jogador entre em modo cooperativo ou multiplayer de outros jogadores, a estação será sincronizada de acordo com o host. Cada estação tem um impacto diferente na jogabilidade. Algumas áreas do jogo serão acessadas apenas no inverno, como por exemplo, os rios e lagos."

        }else{
            gif.style= "background-image: url(../_fotos/lisTrueColorsG.png);  background-position-x: center; background-size: 100.9%;"
            gif.innerHTML= ""
            descr.innerText= "Alex Chen, uma jovem asiático-americana que cresceu em uma família adotiva e teve uma infância conturbada, reúne-se com seu irmão Gabe oito anos depois, quando ele a incentiva a voltar para casa. Depois que Gabe é morto em um acidente misterioso, Alex resolve investigar a verdade por trás do ocorrido usando seu poder de empatia psíquica que lhe permite ler e manipular fortes emoções, com o custo potencial de ser 'infectada' pelas emoções. Ao longo do caminho, Alex conhece muitos cidadãos da pitoresca cidade montanhosa de Haven Springs, no Colorado, incluindo dois potenciais interesses amorosos, Ryan e Steph."
        }
    }
}
