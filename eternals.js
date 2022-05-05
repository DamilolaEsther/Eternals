///var images = new Array();
///var img = "";
///images[0] = new Image();
///images[0].src = "Eternals.jpeg";
///
///const eimages = [
///    {
///        im: "Ikaris.jpg",
///    },
///]

(alert("A quick tip: Make Sure to Capitalize the first letter in the attribute you're looking for"));
const eternals = [
    {
        name: "Ikaris",
        att1: "Beams",
        att2: "Flight",
        att3: "Strength",
        att4: "Cosmic",
        att5: "",
        img:  "Ikaris.jpg",
        desc: "Ikaris is an Eternal who can fly and project cosmic energy beams from his eyes, and is determined to fulfill his purpose.the father of the Icarus, the character from Greek Mythology who flies too close to the sun with his magical wings. After his son died, Ikaris took his name and his original name has never been revealed. He has extreme physical abilities, even compared to other Eternals. He's faster, stronger, able to withstand intense temperatures and force. It's practically impossible to wear him out or injure him. Though he also possesses psychic abilities, he is not as adept as his counterparts in those areas. Ikaris and Sersi have been in love for many lifetimes, but the presence of the Black Knight in Eternals poses a problem for the couple. And as the end of the trailer suggests, he's not known for his humility."
    },
    {
        name: "Kingo",
        att1: "Projectiles",
        att2: "Sword",
        att3: "Reflex",
        att4: "Cosmic",
        att5: "Agility",
        img:  "Kingo.jpg",
        desc: "An Eternal who can project cosmic energy projectiles from his hands. Enamored with fame, Kingo becomes a popular Bollywood film star to blend in on Earth. While most Eternals try to lay low, Kingo has been living the high life, not as a god but as a star. In the movie, he's become famous as a Bollywood actor, while in the comics, he's historically been of Japanese descent and made a name for himself working in samurai films. Less is known about how Kingo will operate in the world of Zhao's Eternals because of this change. He may or may not still have his swords, but it seems he will still have the ability to emit cosmic energy from his hands."

    },
    {
        name: "Sprite",
        att1: "Illusions",
        att2: "Trickster",
        att3: "Playful",
        att4: "Cosmic",
        att5: "Gender Fluidity",
        img:  "Sprite.jpg",
        desc: "An Eternal who can project life-like illusions. Sprite has the physical appearance of a 12-year-old child, with McHugh calling her an " + "old soul" +" dissatisfied with humanity.Sprite might look like a 12 year old kid, but she's actually one of the most capable Eternals, and the third in the cast to be gender flipped for the film. Previously, Sprite has been depicted as a young, male, playful trickster who could skew good or evil. This Sprite retains the playfulness, but is more of an asset her with ability to project lifelike images that confuse her opponents. It's hard to tell from the trailer if the same will be true in the movie, but Sprite's nonchalant attitude toward humans and penchant for mischief have gotten the character in trouble in the past."

    },
    {
        name: "Gilgamesh",
        att1: "Strength",
        att2: "Kind",
        att3: "Exoskeleton",
        att4: "Cosmic",
        att5: "Stamina",
        img:  "Gilgamesh.jpeg",
        desc: "The strongest Eternal, with a deep connection to Thena.  He is a do-gooder demigod with superhuman strength and a fondness for Earth dwellers, in the same vein as Hercules. He's also a master of melee, and is resistant to attack thanks to a cosmic exoskeleton. Gilgamesh is not only the strongest, but the most affable of the Eternals. He often teams up with Thena and Sprite, though his absence from the group for some time earned him the moniker "+"The Forgotten One."

    },
    {
        name: "Thena",
        att1: "Scholar",
        att2: "Levitation",
        att3: "Teleportation",
        att4: "Cosmic",
        att5: "Telepathy",
        img:  "Thena.jpg",
        desc: "An elite warrior Eternal who can form any weapon out of cosmic energy and develops a close bond with Gilgamesh over the centuries. Born thousands of years ago with the name Azura, her father, Zuras, changed it to Thena as part of a treaty with Zeus and the Olympian gods so that Thena could serve as Athena's stand-in on Earth. Thena is both a scholar and a warrior, making her a valuable addition to the squad. Along with the standard Eternals' cosmic and psychic powers, she's an expert crafter and wielder of otherworldly weapons. But according to a potential plot leak, she's been having problems with her memory as of late and might have been exiled because of it, an issue which will heavily factor into Eternals' plot."
    },
]


const foundEternals = [];
let eAttribute;

function showInfo(attribute) {
    eAttribute = attribute;
    foundEternals.length = 0;
    eternals.forEach(eternalsList);
    console.log(eternals);
    console.log(foundEternals);
    console.log(attribute);
    displayInfo();
}

function eternalsList(age, index, arr) {
    if (arr[index].att1 == eAttribute) {
        updateEternals(index,arr)
    } else if (arr[index].att2 == eAttribute) {
        updateEternals(index, arr)
    } else if (arr[index].att3 == eAttribute) {
        updateEternals(index, arr)
    }
    else if (arr[index].att4 != null) {
        if (arr[index].att4 == eAttribute) {
            updateEternals(index, arr)
        }
    }
    else if (arr[index].att5 != null) {
        if (arr[index].att5 == eAttribute) {
            updateEternals(index, arr)
        }
    } else {
        return;
    }
}

function updateEternals(index,arr) {
    foundEternals.push(arr[index]);
    console.log(eternals[index]);
    console.log(eAttribute);
    console.log("Got 1");
    return (eternals[index]);
}

function displayInfo() {
    alert("Below is the list of eternals with the attribute: " + eAttribute);
    let display = document.querySelector(".foundEternalsInfo");
    let text = "<ul>";
    for (let i = 0; i < foundEternals.length; i++) {
        text += "<br>" + "<li>" + foundEternals[i].name +
            "<br>" + foundEternals[i].desc +
            "<br>" + '<img src = "' + foundEternals[i].img+'"style="width:150px" />' + "</li>";
    }
    text += "</ul>";
    display.innerHTML = text;
}

let edisplay = document.querySelector(".eternalsList");
let elist = "<ul>";
for (let i = 0; i < eternals.length; i++) {
    elist += "<br>" + "<li>" + eternals[i].name + "</li>";
}
elist += "</ul>";
edisplay.innerHTML = elist;