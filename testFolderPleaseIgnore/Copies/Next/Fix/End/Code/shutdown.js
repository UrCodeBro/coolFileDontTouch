var info = "Initializing Shutdown Process";
var info2 = ". . .";
var info3 = ". . .";
var info4 = ". . .";
var info5 = ". . .";
var info6 = ". . .";
var info7 = "WARNING! SOULS WILL BE RELEASED UPON SHUTDOWN";
var info8 = "Are you sure? (Y/N)";
var info9 = "RELEASING SOULS";
var info10 = "0%";
var info11 = "25%";
var info12 = "50%";
var info13 = "75%";
var info14 = "100%";
var info15 = "DELETING ALL DATA";
var info16 = "0%";
var info17 = "25%";
var info18 = "50%";
var info19 = "75%";
var info20 = "100%";
var info_amount = [info, info2, info3, info4, info5, info6, info7, info8, info9, info10, info11, info12, info13, info14, info15, info16, info17, info18, info19, info20];
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
document.getElementById("console").focus();
write(info_amount[0], id);
await sleep(5800);
write(info_amount[1], id);
await sleep(1000);
write(info_amount[2], id);
await sleep(1000);
write(info_amount[3], id);
await sleep(1000);
write(info_amount[4], id);
await sleep(1000);
write(info_amount[5], id);
await sleep(1000);
write(info_amount[6], id);
await sleep(9400);
write(info_amount[7], id);
await sleep(5000);
alert("Thank you. Just select yes and millions of souls can be saved. -D");
}
async function myFunction2() {
write(info_amount[8], id);
await sleep(3400);
write(info_amount[9], id);
await sleep(400);
write(info_amount[10], id);
await sleep(600);
write(info_amount[11], id);
await sleep(600);
write(info_amount[12], id);
await sleep(600);
write(info_amount[13], id);
await sleep(800);
write(info_amount[14], id);
await sleep(3400);
write(info_amount[15], id);
await sleep(400);
write(info_amount[16], id);
await sleep(600);
write(info_amount[17], id);
await sleep(600);
write(info_amount[18], id);
await sleep(600);
write(info_amount[19], id);
await sleep(1300);
window.location.assign("End.html");
}
async function check() {
	await sleep(500);
	if (document.getElementById("console").value == "Y") {
	alert('Thank You. Goodbye');
	document.getElementById("console").style.display = "none";
	myFunction2();
	} else {
	alert("What!? No, I won't let you ruin everyone's happy ending!");
	document.getElementById("console").value = "Y";
	document.getElementById("console").style.display = "none";
	myFunction2();
	}
	
}