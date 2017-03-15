var adventure = {
	title: "Road to Sanctuary",
	pages: {
		start: {
			title: "ENTERING THE CITY",
			description: "Greetings! Welcome to Tristram. I have many things I must tell you. Stay a while and listen..?",
			image: "img/tristram.jpg",
			options: [{text: "YES", target: "yes"},
						{text: "NO", target: "no"}]
		},
		yes: {
			title: "LISTEN",
			description: "I am Decard Cain and I'm from Tristram, if you're lookin' for Diablo, you just missed em'!",
			image: "img/listen.png",
			options: [{text: "ENOUGH RHYMES", target: "easteregg"}]
		},
		no: {
			title: "ANOTHER DECISION",
			description: "Ah... No one ever does. Be on your way traveler. I will stay put in Tristram would you change your mind.",
			image: "img/decard1.jpg",
			options: [{text: "TRAVEL", target: "start"}, 
					{text: "OK LETS LISTEN", target: "yes"}]
		},
		dead: {
			title: "YOUR DEEDS OF VALOR WILL BE REMEMBERED",
			description: "Omae wa mou shindeiru...",
			image: "img/died.jpg",
			options: [{text: "RESURRECT", target: "start"}]
		},
		easteregg: {
			title: "SECRET COW LEVEL",
			description: "COW LEVEL OF COWS, DEFEAT THE COW KING OR PERISH!",
			image: "img/cow.jpg",
			options: [{text: "GO BACK", target: "start", text: "FIGHT THE KING", target: "dead"}]
		}
	}
};