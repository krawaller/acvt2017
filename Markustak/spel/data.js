var adventure = {
  title: "Some adventure title",
  pages: {
  	start: {
  		title: "ADVENTURE",
  		description: "Gandalf asks if you want to go on an adventure, what do you choose? orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo conseq",
  		image: "http://www.homebehindtheworldahead.com/wp-content/uploads/2014/09/going-on-an-adventure.jpg",
  		options:[
  		{text:"Kill Gandalf", target:"dead" },
  		{text: "Adventure? Yes please!", target: "adventure"},
  		{text: "No!", target: "no"}
  		]
  	},
  adventure: {
  		title: "DAMN ORC!",
  		description: "The orc kills you orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo conseq",
  		image: "https://cnet2.cbsistatic.com/img/zjg3pO-xU9stmkYwC5YFIQeoffw=/1170x0/2014/12/02/a69c9cbf-4402-449e-a77e-e5ef2aa15eb0/hobbit-lotr-desolation-orc.jpg",
  		options:[
  		{text:"Game OVER!", target:"start" }
  		]
  	},
  dead: {
  		title: "HE IS DEAD!!!!!",
  		description: "You killed Gandalf! orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo conseq",
  		image: "https://vickster51corner.files.wordpress.com/2014/12/gandalf_falling.jpg",
  		options:[
  		{text:"Game over", target:"start" }
  		]
  	},
  no: {
  		title: "GOOD TIMES!",
  		description: "You have a party with your friends instead! orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo conseq",
  		image: "http://cdn.timesofisrael.com/uploads/2013/12/The-Hobbit-movie-dwarves.jpg",
  		options:[
  		{text:"Game over", target:"start" }
  		]
 }
}
};