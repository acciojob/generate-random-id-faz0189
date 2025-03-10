function makeid(l) {

	const char = "ABCDEFGabcdefgh1234567"

	let finalresult = " ";

	for (let i=0; i<char.length; i++){
		finalresult + = char.charAt(Math.floor(Math.random()* chars.length))
	      
	}
	return finalresult;
}

