// datafil
var adventure = {
	title: "Cissis spel",
	pages: {
		startsida: {
			title: "FRI-NALLY",
			imgUrl:"img/FRI-NALLY.jpg",
			babbel:"The day you have been waiting for is here.<br>It´s <strong> FINALLY </strong> Friday !! <br>The question is: <em> What do you want to do? </em>",
			options: [
			{text:"Go crazy",target: "sida2"},
			{text:"Take a chill",target:"sida3"},
			{text:"Be surprised",target: "sida4"}
			]
		},

		sida2: { // nyckel för sida
			title:"STUDIO 54",
			imgUrl:"img/studio-54.jpg",
			babbel: "You're going <strong> DANCING </strong> tonight.<br> It's at <strong> Studio 54 </strong> it's happening !!<br>What are you in the mood for afterwords?", 
			options: [
			{text:"Take a chill", target: "sida3"},
			{text: "Be surprised", target: "sida4"}
			]
		},

		sida3: {
			title: "Sofa Chill",
			imgUrl:"img/netflix.jpg",
			babbel: "You're watching <strong> NETFLIX. </strong><br>No that's to boring.... !!<br> Change your mind!",
			options: [
			{text:"Go crazy", target: "sida2"},
			{text:"Be surprised", target: "sida4" }
			]
		}, 
			sida4: {
			title: "SKETCH is your Surprise",
			imgUrl:"img/sketch.jpg",
			babbel: "You're having <strong> FOOD </strong> at SKETCH.<br>Nom <strong> NOM </strong> Nom !!<br> What are you in the mood for afterwords?",
			options: [
			{text:"Go crazy", target: "sida2"},
			{text:"Take a chill", target: "sida3" }
			]

		}
	}
};