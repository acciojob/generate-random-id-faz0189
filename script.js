
function makeid(l) {

	const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

	let finalresult = '';

	for (let i=0; i<l; i++){
		finalresult += char.charAt(Math.floor(Math.random()* char.length));
	      
	}
	return finalresult;
}
