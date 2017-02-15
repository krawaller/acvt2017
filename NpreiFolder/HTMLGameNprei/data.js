var adventure = {
	title: "Road to Sanctuary",
	pages: {
		start: {
			title: "ENTERING THE CITY",
			description: "Greetings! Welcome to Tristram. I have many things I must tell you. Stay a while and listen..?",
			image: "img/tristram.jpg",
			options: [
			{text: "YES", target: "yes"},
			{text: "NO", target: "no"}
			]
		},
		yes: {
			title: "LISTEN",
			description: "I am Decard Cain and I'm from Tristram, if you're lookin' for Diablo, you just missed em'!",
			image: "img/listen.png",
			options: [{text: "ENOUGH RHYMES", target: "no"}]
		},
		no: {
			title: "ANOTHER DECISION",
			description: "Ah... No one ever does. Be on your way traveler. I will stay put in Tristram would you change your mind.",
			image: "img/decard1.jpg",
			options: [{text: "TRAVEL", target: "start"}, {text: "OK LETS LISTEN", target: "yes"}]
		}
	}
};