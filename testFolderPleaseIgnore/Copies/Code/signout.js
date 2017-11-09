var info = "Function signOut()";
var info2 = "Executing signOut()";
var info3 = ". . .";
var info4 = ". . .";
var info5 = ". . .";
var info6 = ". . .";
var info7 = "WARNING! UNKNOWN ERROR!";
var info8 = "ERROR! ABORTING signOut()";
var info9 = "ERROR!";
var info10 = "ERROR!";
var info11 = "ERROR!";
var info12 = "E̱̻͔̲̩̐̅̏ͥR̀R̡̫̬͓̱̀ͨ̀̽̏̎͛O̦̼͚̥̠͓̿ͬR̪̱̜͟!̊̈͊̈̏ͣͪ͞";
var info13 = "E̖̜͍̰͎̝͖̥ͭ̌͒̇Ř̢̩̓͘ͅR͕̫̻̦̎̓͜͟Ỏ̫̼̰̫̟͕̤͗̕R̸̷̢̙̜̹̝͚͚͕̓̈́͐͋̓ͅ!̵̝̻̪̗͕̗͇͛́́ͮ̽͆ͥͅ";
var info14 = "E̡͉̘̣͖̣̲̭͍̬̰ͨ̿̒̐̒ͯ̇R̵̶̨̨̟̮̣̲͆̿̋͒̑͊̓ͤͤ̊ͮͬ̿ͮ̒̑͘Ŗ̵̮͙͚̖̫̻̖̮͙̩̙͈̤̰̮̖̱͖̘͂̏ͩ̋ͨ̓ͨͮͯ̃̆̋͑͊̈́̑Ǫ̡̻͉͈̻ͨ̌̈́̿̈́͆͛ͥ̒͗͋͝R̸̢̛͈̙̞̹͔̤̜͈͖̮̺̹̦̺̙̪͙̾̽̔ͩ̃̀ͩ́̓̇ͥ͛̈͡!̨͚̹͈͕̮̟̝̻̪ͩͫ̉ͪ̎̿̽ͣ͐̓̈́͟͠";
var info_amount = [info, info2, info3, info4, info5, info6, info7, info8, info9, info10, info11, info12, info13, info14];
var string;
var id = 'type';
var j;
var next = false;
var num;
var o = 0;
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}
async function write(variable, elId) {
	next = false;
	var string_array = variable.split("");
	var check = String(elId);
	id = elId;
	console.log(check);
	console.log(variable);
	console.log(elId);
	var i = 0;
	await sleep(200);
	num = 200 + (string_array.length * 200);
	var br = document.createElement('br');
	var p = document.createElement('p');
	p.setAttribute("id", letters[o]);
	document.getElementById("signOut").appendChild(br);
	document.getElementById("signOut").appendChild(p);
	id = letters[o];
	o++;
	for (i; i < string_array.length; i++) {
		if (i < 1) {
			await sleep(200);
			string = string_array.slice(0,1);
			document.getElementById(elId).value = string.join("");
		} else {
		await sleep(200);
		string = string.concat(string_array.slice(i, i +1));;
		document.getElementById(elId).innerHTML = string.join(""); 
		};
	};
}
async function leave() {
	await sleep(500);
	document.getElementById("cant").style.display = "block";
	document.getElementById("signOut").style.display = "none";
	await sleep(1000);
	window.location.assign("profile.html");
}
async function myFunction() {
	for (i = 0; i < info_amount.length; i++) {
		write(info_amount[i], id);
		await sleep(3600);
	};
	await sleep(500);
	leave();
}
