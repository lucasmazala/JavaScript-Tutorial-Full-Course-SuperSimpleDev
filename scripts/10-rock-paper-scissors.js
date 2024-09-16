let score = JSON.parse(localStorage.getItem('score')) || {
	wins: 0,
	losses: 0,
	ties: 0
}; // if the first check is falsy, it does the second. ||

updateScoreElement();

function playGame(playerMove){
	const computer = pickComputerMove();
	let result = ''
	
	if(playerMove === 'rock'){
		if(computer ==='scissors'){ 
			result = 'You win';
		} else if(computer ==='paper'){ 
			result = 'You lose'
		} else{
			result = 'Tie'
		}

	}else if(playerMove === 'paper'){
		if(computer ==='rock'){
			result = 'You win';
		} else if(computer ==='scissors'){ 
			result = 'You lose'
		} else{
			result = 'Tie'
		}

	}else if(playerMove === 'scissors'){
		if(computer ==='paper'){
			result = 'You win';
		} else if(computer ==='rock'){ 
			result = 'You lose'
		} else{
			result = 'Tie'
		}
	}

	if(result === 'You win'){
		score.wins += 1;
	} else if(result === 'You lose'){
		score.losses += 1;
	} else if(result=== 'Tie'){
		score.ties += 1;
	}

	//localStorage only supports string format. Here we are converting score to string. 
	localStorage.setItem('score', JSON.stringify(score));

	document.querySelector('.js-result').innerHTML = result;

	document.querySelector('.js-moves').innerHTML = 
		`You picked <img src="images/${playerMove}-emoji.png" class="move-icon"> 
		Computer picked <img src="images/${computer}-emoji.png" class="move-icon">`;

	updateScoreElement();
	
 }

 function updateScoreElement(){
			document.querySelector('.js-score')
					.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, 
					Ties: ${score.ties}`
 }

function pickComputerMove(){
	const dict = {0: 'rock', 1: 'paper', 2: 'scissors'};
	computer = Math.floor(Math.random() * 3);
	return dict[computer]
}