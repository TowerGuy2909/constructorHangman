
function Word(word){
	this.lettersArray = [];
	var splitWord = word.spilt('');
	for (var i = 0; i < splitWord.length; i++){
		var currentLetter = splitWord[i];
		this.lettersArray.push(new Letter(currentLetter));
	}
	this.showWord = function(){
		var	myAnswer = '';
		for (var i = 0; i < this.lettersArray.length; i++){
			myAnswer = myAnswer + this.lettersArray[i].toString();
		}
		return myAnswer;
	}
}