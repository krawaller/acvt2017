
var adventure = {
  title: "Some adventure title",
  pages: {
    startPage: {
      title: "Welcome to the worlds travel agency",
      description: "Where would you like to go? Press the link to travel ",
      image: "img\\sun1.jpg",
      options: [
        {text: "San José", target: "page2"},
        {text: "Heredia", target: "page3"}
      ]
    },
    page2: {
      title: "Welcome to the amazing town of San José!",
      description: "It is a great place to go ",
      image: "img\\san-jose-city-skyline.jpg",
      options: [
        {text: "Back", target: "startPage"}
      ]
    },
    page3: {
      title: "Welcome to the amazing town of Heredia!",
      description: "It is a great place to go ",
      image: "img\\basilio_martin_patino_elmundo.jpg",
      options: [
        {text: "Back", target: "startPage"}
      ]
    }
  }
};
