/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/
var scores, activePlayer, currentScore, dice;
function init(){
    scores = [0 , 0];
    activePlayer = 0;
    currentScore = 0;

    document.querySelector('.dice').style.display = 'none'
    document.querySelector('#current-0').textContent = '0';
    document.querySelector('#current-1').textContent = '0';
    document.querySelector('#score-0').textContent = '0';
    document.querySelector('#score-1').textContent = '0';



}
init()


document.querySelector('.btn-roll').addEventListener('click', function(){
    document.querySelector('.dice').style.display = 'block'
    dice = Math.floor( Math.random() * 6) + 1 ;
    document.querySelector('.dice').src = 'dice-'+ dice + '.png';
    
    if (dice !==1){
        currentScore += dice;
        document.querySelector('#current-' + activePlayer ).textContent = currentScore;

    }else{
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0 ;
        currentScore = 0;
        document.querySelector('#current-0').textContent = currentScore;
        document.querySelector('#current-1').textContent = currentScore;
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

    }

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   

    
    

})

document.querySelector('.btn-hold').addEventListener('click', function() {
    // add current score to the global score
    scores[activePlayer] += currentScore;
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    document.querySelector('.dice').style.display = 'none'
    //check if any player has won the game
    if (scores[activePlayer] >= 100){
        document.querySelector('#name-' +activePlayer ).innerHTML = '<h3> Winner </h3>';
        // init()
        // document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        document.querySelector('.btn-roll').style.display ='none';
        document.querySelector('.btn-hold').style.display = 'none';
        document.querySelector('.dice').style.display = 'none'
        

    }else{
        //next player
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0 ;
        currentScore = 0;
        document.querySelector('#current-0').textContent = currentScore;
        document.querySelector('#current-1').textContent = currentScore;
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

    }
   

})

document.querySelector('.btn-new').addEventListener('click', function(){
    init()
    document.querySelector('.btn-roll').style.display ='block';
    document.querySelector('.btn-hold').style.display = 'block';
    document.querySelector('#name-0').textContent ='Player 1'
    document.querySelector('#name-1').textContent ='Player 2'
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
})