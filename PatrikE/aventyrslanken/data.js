var adventure = {
    title: "Äventyrslänken",
    pages: {
        start: {
            title: "Äventyrslänken - stugan",
            imgURL: "http://st.depositphotos.com/1029636/3620/i/950/depositphotos_36206987-stock-photo-spooky-cabin.jpg",
            babbel: "Du ser en läskig stuga i skogen. Vad väljer du att göra?",
            options: [
            {text: "Gå in i stugan", target: "stega"},
            {text: "Gå till höger", target: "stegb"},
            {text: "Ta en fikarast", target: "stegc"}
            ]
        },
        stega: {
            title: "Äventyrslänken - Super Mario",
            imgURL: "https://i.ytimg.com/vi/aHYf5FBuecI/maxresdefault.jpg",
            babbel: "Inne i stugan stöter du på Super Mario - skumt. Han verkar vara en trevlig prick. Vad väljer du att göra nu?",
            options: [
            {text: "Fråga Mario var slottet finns", target: "tobecontinued"},
            {text: "Hoppa in i ett rör", target: "tobecontinued"},
            {text: "Ta en fikarast", target: "tobecontinued"}
            ]
        },
        stegb: {
            title: "Äventyrslänken - Rymdraket",
            imgURL: "https://s-media-cache-ak0.pinimg.com/736x/c9/c7/be/c9c7be1f8fc089dfb10fda7de9ff6288.jpg",
            babbel: "Hoppsan, här var det en rymdraket. Kul! Vad väljer du att göra",
            options: [
            {text: "Åka med rymdraketen", target: "tobecontinued"},
            {text: "Gå tillbaka till stugan", target: "tobecontinued"},
            {text: "Ta en fikarast", target: "tobecontinued"}
            ]
        },
        stegc: {
            title: "Äventyrslänken - Fika",
            imgURL: "http://www.varsomhelst.nu/wp-content/uploads/2011/08/fika-kanelbulle.jpg",
            babbel: "Du tar en fikarast med kaffe och bulle - smaskigt. Vad väljer du att göra nu?",
            options: [
            {text: "Ringa en vän", target: "tobecontinued"},
            {text: "Fråga publiken", target: "tobecontinued"},
            {text: "Byta fråga", target: "tobecontinued"}
            ]
        },
        tobecontinued: {
            title: "Äventyrslänken - to be continued",
            imgURL: "http://rypeapp.com/blog/wp-content/uploads/2016/02/2015-10-21-1445410698-8403632-futurecontinued.jpg",
            babbel: "Nu händer det något riktigt spännande. Men exakt vad som händer får du veta först i nästa avsnitt...",
            options: [
            {text: "Börja om", target: "start"},
            ]
        }
    }
};