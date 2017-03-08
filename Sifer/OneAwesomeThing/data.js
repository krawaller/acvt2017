var adventure = {
  title: "very scary game",
  pages: {
    start: {
      title: "Min värsta fylla",
      description: "Du vaknar upp i ett övergivet sjukhus. Du ser en tänd lampa längst ner i korridoren.",
      image: "img/abandoned_hospital.jpg",
      options: [{text:"Sätt dig på den närmsta stolen", target:"page1"},{text:"Undersök rummet med den tända lampan",target:"page2"},{text:"Försök att sova", target:"page3"}]
    },
    page1: {
      title: "Obekväm bekvämlighet",
      description: "Stolen brakade ihop och skapade ett högt ljud som ekar i den tomma korridoren.",
      image: "img/broken_chair.jpg",
      options: [{text:"Få panik, spring",target:"page3"},{text:"Vänta lite...",target:"page3"}]
    },
    page2: {
      title: "Ett oväntat besök",
      description: "Ett stort skelettmonster har upptäckt dig.",
      image: "img/skeleton.jpg",
      options: [{text:"Fråga efter vägen ut",target:"page3"},{text:"Slå till monstret med ett avbrutet stolsben",target:"page3"}]
    },
    page3: {
      title: "Allt har blivit mörkt...",
      description: "Dina val har lett dig till döden. Varför är oklart. Finns det ett liv efter detta har du fortfarande en chans...",
      image: "img/death.jpg",
      options: [{text:"Börja om",target:"start"}]
    }
  }
}
