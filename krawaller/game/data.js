
var adventure = {
  title: "My amazing adventure",
  pages: {
    start: {
      title: "A VERY dark corridor",
      imgUrl: "http://media.moddb.com/images/games/1/29/28520/UDK_2014-01-06_21-25-18-90.png",
      babbel: "You are in a dark corridor, which extends into infinity. An ominous door is to your left.",
      options: [
        {text: "Open the door", target: "room"},
        {text: "Go forward", target: "deadEnd"}
      ]
    },
    deadEnd: {
      title: "A dead end",
      imgUrl: "https://cloud.graphicleftovers.com/13747/251328/dead-end-brick-hall.jpg",
      babbel: "Suddenly you reach the end of the corridor. There's no door, just a solid wall.",
      options: [
        {text: "Turn back", target: "start"}
      ]
    },
    room: {
      title: "A strange room",
      imgUrl: "https://s-media-cache-ak0.pinimg.com/originals/b2/31/19/b231194f015763076885c0d7eb647735.jpg",
      babbel: "You enter into a small room. There is absolutely nothing in here except for dampness and darkness.",
      options: [
        {text: "Go back", target: "start"}
      ]
    },
    // ....
  }
};