var adventure = {
  title: "Weapon of choice",
  pages: {
    start: {
      title: "Chose your weapon",
      text: "For this adventure, you will need to decide what weapons to aid you in the quest. Chose wisely, as your choice will determine how the forthcoming events will play out. What weapon will you choose?",
      image: "img/bow.png",
      options: [
        {text: "A sword", target: "sword"},
        {text: "A bow", target: "bow"},
        {text: "Nothing, I will rely on sheer strength and agility", target: "fists"}
      ]
    },
      sword: {
        title: "Your first fight",
        text: "You thought you had more time to prepare? Ha! Time waits for no one! As soon as you picked up your weapon, an ogre bursts out from the darkness. What will you do?",
        image: "img/ogre.png",
        options: [
           {text: "Using your weapon, strike at the ogres head", target: "defeat"},
           {text: "Using your weapon, strike at the ogres knee", target: "victory"},
           {text: "Dash for the space between the ogres legs, and punch him in the groin", target: "defeat"}
        ]
      },
      bow: {
        title: "Your first fight",
        text: "You thought you had more time to prepare? Ha! Time waits for no one! As soon as you picked up your weapon, an ogre bursts out from the darkness. What will you do?",
        image: "img/ogre.png",
        options: [
           {text: "Using your weapon, strike at the ogres head", target: "victory"},
           {text: "Using your weapon, strike at the ogres knee", target: "defeat"},
           {text: "Dash for the space between the ogres legs, and punch him in the groin", target: "defeat"}
         ]
      },
      fists: {
        title: "Your first fight",
        text: "You thought you had more time to prepare? Ha! Time waits for no one! As soon as you picked up your weapon, an ogre bursts out from the darkness. What will you do?",
        image: "img/ogre.png",
        options: [
           {text: "Using your weapon, strike at the ogres head", target: "defeat"},
           {text: "Using your weapon, strike at the ogres knee", target: "defeat"},
           {text: "Dash for the space between the ogres legs, and punch him in the groin", target: "victory"}
         ]
      },
      victory: {
        title: "Victory",
        text: "Good job! You used the situational advantage of your weapon, and defeated the ogre",
        image: "http://www.syncrpg.com/sam/data/tokenImages/Devin_Night/allfreezippedpacks/Ogre_dead_28.png",
        options: [
          {text: "Loot the ogre", target: "loot"},
          {text: "Quickly run out of the room, before more ogres arrive", target: "none"}
        ]
      },
      defeat: {
        title: "Defeat!",
        text: "You suck! Due to not considering what advantages your weapon offers, you have made a stupid decision and died. Would you like to play again?",
        image: "img/skull.png",
        options: [
          {text: "Yes", target: "start"},
          {text: "No", target: "gameover"},
          {text: "", target: ""}
        ]
      },
      gameover: {
        title: "GAME OVER",
        text: "",
        image: "",
        options: [
          {text: ""},
          {text: ""}
        ]
      },
      loot: {
        title: "A moldy cheese",
        text: "Not sure what you expected to find in a filty corpse of an ogre, but you did dig out a moldy cheese from the ogres ragged cloths. As you are about to put the cheese into your bag, you hear a faint sound coming from a dark corner of the room. It is too faint to be an ogre. What would you like to do?",
        image: "img/moldycheese.jpg",
        options: [
          {text: "Investigate the sound", target: "goblin"},
          {text: "Leg it", target: "legit"}
        ]
      }
  }
};
