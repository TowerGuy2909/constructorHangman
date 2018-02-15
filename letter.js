
function Letter(underlyingCharacter){
	
	this.underlyingCharacter = underlyingCharacter;
	//create a boolean that shows if guessed or not
	this.isGuessed = false;
	//create a function that if true or "guessed" shows the charater
	//otherwise show a place holder
	this.toString = function(){
		if (this.isGuessed === true) {
			// Console the letter
			return this.underlyingCharacter;
		} else {
			// Console a dash
			return "*";
		}
	}
	this.characterCheck = function(guess){
		if (guess === this.underlyingCharacter){
			this.isGuessed = true;
		}
	}
}

// DELETE THIS

// Testing

// var letterA = new Letter('a');
// console.log('Not guessed:', letterA.toString());
// letterA.isGuessed = true;
// console.log('Guessed', letterA.toString());
