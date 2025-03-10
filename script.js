function makeid(l) {

	const char = "ABCDEFGabcdefgh1234567";

	let finalresult = " ";

	for (let i=0; i<l; i++){
		finalresult + = char.charAt(Math.floor(Math.random()* char.length))
	      
	}
	return finalresult;
}

