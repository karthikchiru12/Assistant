var intent = [
    ["hi","hello"],
    ["hey"],
    ["nothing"],
    ["yes"],
    ["what is algovis","algovis"],
    ["what are you"],
    ["who created you"],
    ["i love you"],
    ["what"],
	["how to pass exams"],
	["where are you"],
	["what do you do"],
	["who use you"],
	["how to mix pulihora"]
];
var reply = [
    ["hello, welcome to algovis"],
    ["hey hi...!. Whats up ?"],
    ["Wanna see some cool stuff ?"],
    ["Goto https://chiranjeevikarthik.me/Algovis/"],
    ["Algovis is a project which aims at developing visualizations for algorithms in a way that imitates classroom teaching."],
    ["A dumb reply machine designed to mock AI and AI enthusiasts!. Dont worry you are dumb."],
    ["I created myself...(atleast thats what i think)"],
    ["what do you mean by you ?... you is you saying that you is you but what you think that is you is not you the you think"],
    ["just kidding...!"],
	["Just ask suraj, he knows everything"],
	["In a pile of metal bricks, the things you call hard disks"],
	["stay in memory as long as you use me and go to sleep in hard disk when you close this window"],
	["dumb people like you"],
	["Just ask pavan, he knows"]
];
var unknown = ["sorry! what ?","Virus downloaded.....!"];
document.querySelector("#input").addEventListener("keypress", function(e){
	var key = e.which || e.keyCode;
	if(key === 13){ //Enter button
		var input = document.getElementById("input").value;
		document.getElementById("user").innerHTML = input;
		output(input);
	}
});
function output(input){
	try{
		var product = input + "=" + eval(input);
	} catch(e){
		var text = (input.toLowerCase()).replace(/[^\w\s\d]/gi, ""); //remove all chars except words, space and 
		text = text.replace(/ a /g, " ").replace(/i feel /g, "").replace(/whats/g, "what is").replace(/please /g, "").replace(/ please/g, "");
		if(compare(intent, reply, text)){
			var product = compare(intent, reply, text);
		} else {
			var product = unknown[Math.floor(Math.random()*unknown.length)];
		}
	}
	document.getElementById("chatbot").innerHTML = product;
	speak(product);
	document.getElementById("input").value = ""; //clear input value
}
function compare(arr, array, string){
	var item;
	for(var x=0; x<arr.length; x++){
		for(var y=0; y<array.length; y++){
			if(arr[x][y] == string){
				items = array[x];
				item =  items[Math.floor(Math.random()*items.length)];
			}
		}
	}
	return item;
}
function speak(string){
	var utterance = new SpeechSynthesisUtterance();
	utterance.voice = speechSynthesis.getVoices().filter(function(voice){return voice.name == "Agnes";})[0];
	utterance.text = string;
	utterance.lang = "en-US";
	utterance.volume = 1; //0-1 interval
	utterance.rate = 1;
	utterance.pitch = 1; //0-2 interval
	speechSynthesis.speak(utterance);
}