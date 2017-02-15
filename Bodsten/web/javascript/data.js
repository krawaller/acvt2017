var adventure = {
  title: "Exploration Quest",
  pages: {
    start: {
      title: "Starting point",
      description: "Choose your next step, carefully!",
      image: "img/bild1.jpg",
      options: [
      {text:"Go sail", target: "sail"},
      {text:"Go ski", target: "ski"}
      ]
    },

    ski: {
      title: "Nice day for a ski!",
      description: "Choose your next step, carefully!",
      image: "img/bild2.jpg",
      options: [
      {text:"Go sail", target: "sail"},
      {text:"Go home", target: "start"}
      ]

    },
    sail: {
      title: "Good winds for sailing!",
      description: "Choose your next step, carefully!",
      image: "img/bild3.jpg",
      options: [
      {text:"Go ski", target: "ski"},
      {text:"Go home", target: "start"}
      ]
    },
  }
};




/*var exploration = {
title: "Onlinebookgame",
pages: {
  start: {
    title:
    imgurl:
    introtext:
    options: [
    {text:"Segla", target: "sail"},
    {text:"Åka skidor", target: "ski"}
    ]
  },

  ski: {

  },
  sail: {

  }
},
}
}*/
