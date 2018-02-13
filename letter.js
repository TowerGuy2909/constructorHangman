function Letter(underlyingCharacter, isGuessed, reveal){
	this.underlyingCharacter = underlyingCharacter;
	this.isGuessed = false;
	this.reveal = function(){
		if (this.isGuessed === true){
			this.underlyingCharacter.show();
		} else {
			this.underlyingCharacter.hide();
		}
	}
	this.characterCheck = function(){
		if (process.argv[2] === this.underlyingCharacter){
			this.isGuessed === true;
		}
	}
}