var adventure = {
	title: "The Keyboard",
	pages: {
		start: {
			title: "Make your choice!",
			description: "You are at your keyboard, looking at the letters, typing your name in your mind... then you have to make a choice! Where do you want to place your focus?",
			image: "img/keyboard_original.png",
			options: 
				[
					{text: "The number pad", target: "numberpart"},
					{text: "The letter part", target: "letterpart"},
					{text: "The navigation part  (INSERT, HOME, PAGE UP etc)", target: "navpart"}
				]
		},
		numberpart: {
			title: "This is where the heart is",
			description: "Mentally type in your phone number, your home number, or your mobile phone number which you charged over night (ajabaja) in your... where do you want to go?",
			image: "img/numpad.png",
			options: 
				[
					{text: "Full keyboard", target: "start"},
					{text: "ESC", target: "escpart"},
					{text: "The navigation part  (INSERT, HOME, PAGE UP etc)", target: "navpart"}
				]
		},
		letterpart: {
			title: "Who do you want to call?",
			description: "You did in fact want to write your name, I suppose. Do that mentally and think about what someone would have to do to call you. Now, where do you want to go?",
			image: "img/letters.png",
			options: 
				[
					{text: "ESC", target: "escpart"},
					{text: "The navigation part  (INSERT, HOME, PAGE UP etc)", target: "navpart"},
					{text: "The number pad", target: "numberpart"}
				]
		},
		navpart: {
			title: "Feeling tired of playing",
			description: "You have had lots of fun and starting to feel sleepy... also running out of html pages... risking falling down the edge of the earth... what to do?",
			image: "img/nav.png",
			options: 
				[
					{text: "Full keyboard", target: "start"},
					{text: "The number pad", target: "numberpart"},
					{text: "ESC", target: "escpart"}
				]
		},
		escpart: {
			title: "You made your choice!",
			description: "Oh, so you're done playing this game? You made your choice!",
			image: "img/esc.png",
			options: 
				[
					{text: "ESC", target: "escpart"}
				]
		},
	}
}