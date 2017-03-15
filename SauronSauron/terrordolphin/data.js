
var adventure = {
  title: "Terror Dolphin",
  pages: {
    start: {
      title: "You are Wayne, a terrorist dolphin ",
      image: "http://republicbuzz.com/wp-content/uploads/2015/09/20150906/140015_freedolphin.jpg",
      babbel: "Your human terrorist friend Jonas asks you to join him to the terrorist store to buy some nice to have bombs",
      options: [
      {text:"You just want to go home instead", target: "page2"}, 
      {text: "Yeah! You need some throwing knifes for the weekend", target:"page3"}
      ]
    },
    page2: {
    	title: "Bears on a shark on a unicorn ",
    	image: "https://s-media-cache-ak0.pinimg.com/originals/01/c4/06/01c4068d8e297ea7bb146b36355f10bc.jpg",
      babbel: "On your way home you glance over your shoulder and see some bears with automatic weapons riding a shark riding a unicorn. The unicorn really wants to go to space with you just to relax, the shark is going to the dinosaur party and wants you to join him.",
      options: [
      {text:"Follow the unicorn to space", target:"page4"}, 
      {text:" Dinosaur party WOW!!", target:"page5"}
      ]
    },
    page3:{
    title: "The pirate lazer dolphin",
    image: "http://images.earthtouchnews.com/media/1945391/murderous-dolphin_2016_04_18.jpg",
      babbel: "On your way to the store, a pirate lazer dolphin jumps out of the water and LAZERS your brain",
      options: [
      {text:"You are dead", target:"start"}
      ]
    },
    page4: {
    	title: "Relaxing in space",
    	image: "https://pbs.twimg.com/media/A1WTy4ICYAELxY7.jpg:large",
      babbel: "You really wanted to just chill in space but some asshole human with his robot unicorn killed you.",
      options: [
      {text:"You are dead", target:"start"}
      ]
    },
    page5: {
    	title: "Party pooper drunk dinosaur ",
    	image: "http://cs6.pikabu.ru/images/big_size_comm/2014-03_1/13939519886338.jpg",
      	babbel: "As always the dinosaur party flippes out and a drunk velociraptor stars playing with dynamite. The last thing you hear is BOOOOM",
      	options: [
      	{text:"Everyone dies, including you", target:"start"}
      	]
    }
  }
};