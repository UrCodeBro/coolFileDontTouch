var info = "Function search()";
var info2 = ". . .";
var info3 = ". . .";
var info4 = ". . .";
var info5 = "File Found";
var info6 = ". . .";
var info7 = "WARNING BREACH DETECTED!";
var info8 = "ACTIVATING FIREWALL!";
var info9 = "0%";
var info10 = "25%";
var info11 = "50%";
var info12 = "75%";
var info13 = "100%";
var info14 = "Goodbye.";
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
	window.location.assign("index.html");
}
async function myFunction() {
write(info_amount[0], id);
await sleep(3400);
write(info_amount[1], id);
await sleep(1000);
write(info_amount[2], id);
await sleep(1000);
write(info_amount[3], id);
await sleep(1000);
write(info_amount[4], id);
await sleep(2000);
write(info_amount[5], id);
alert('Yes! We can end this!-D');
await sleep(1000);
write(info_amount[6], id);
await sleep(4800);
write(info_amount[7], id);
await sleep(4000);
alert('No, no, no, no, no! Hurry! Try to find something to disable it!-D');
write(info_amount[8], id);
await sleep(400);
write(info_amount[9], id);
await sleep(600);
write(info_amount[10], id);
await sleep(600);
write(info_amount[11], id);
await sleep(600);
write(info_amount[12], id);
await sleep(800);
write(info_amount[13], id);
await sleep(2100);
leave();
}