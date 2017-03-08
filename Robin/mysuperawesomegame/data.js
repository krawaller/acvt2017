var adventure = {
  title: "The super awesome game.",
  pages: {
    start: {
    	title: "The super awesome game.",
   	 	subTitle: "It all starts here",
    	imageUrl: "https://img.clipartfest.com/e6f26ea1424dc47a0acc4d5d61f1aef4_start-here-start-here-clipart_288-129.png",
    	description: "This is a super awesome game, do you wanna play?",
    	whatYouWannaDo: "What you wanna do?",
    	options: [
	      {text:"Yes!",target:"hospitalRoom"},
	      {text:"No!", target:"start"}
	    ]
	},
	hospitalRoom: {
		title: "The super awesome game.",
   	 	subTitle: "Hospitalroom",
    	imageUrl: "http://il6.picdn.net/shutterstock/videos/4970057/thumb/1.jpg",
    	description: "You just woke up in a hospital bed with no memory of how or when you ended up there.",
    	whatYouWannaDo: "What you wanna do?",
    	options: [
	      {text:"Sleep some more", target:"hospitalRoom"},
	      {text:"Turn on the tv", target:"televisionBrodcast"},
	      {text:"Open the door", target:"hospitalCorridor"}
	    ]
	},
	televisionBrodcast: {
		title: "The super awesome game.",
   	 	subTitle: "Television brodcast",
    	imageUrl: "https://media.giphy.com/media/JGxy3K45MXXLG/giphy.gif",
    	description: "The tv seems to be working, but nothing is broadcasting.",
    	whatYouWannaDo: "What you wanna do?",
    	options: [
	      {text:"Get to bed and sleep some more", target:"hospitalRoom"},
	      {text:"Open the door", target:"hospitalCorridor"}
	    ]
	},
	hospitalCorridor: {
		title: "The super awesome game.",
   	 	subTitle: "Hospital corridor",
    	imageUrl: "https://s-media-cache-ak0.pinimg.com/736x/6d/f5/49/6df5494eeaa40d015d86eb7476a40a4b.jpg",
    	description: "You are standing in a dark corridor, it seems that no one is here and havent been for some time.",
    	whatYouWannaDo: "What you wanna do?",
    	options: [
	      {text:"Go back in to the room you came from", target:"hospitalRoom"}
	    ]
	}
  }
};