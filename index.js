var wordList = ["mango", "banana", "orange", "strawberry", "pineapple"];
var word = '';
function chosenWord(){
	var randomPick  = Math.floor(Math.random()*wordList.length);
	word = wordList[randomPick];
}