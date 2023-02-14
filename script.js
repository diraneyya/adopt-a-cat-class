const animalsToAdopt = [
    {
        name: "Lucky",
        picture: "https://placekitten.com/200/287",
    },
    {
        name: "Symba",
        picture: "https://placekitten.com/200/139",
    },
    {
        name: "Léo",
        picture: "https://placekitten.com/200/90",
    },
    {
        name: "Milo",
        picture: "https://placekitten.com/200/194",
    },
    {
        name: "Charly",
        picture: "https://placekitten.com/200/179",
    },
];

// Deck container
const nodeDeck = document.querySelector(".deck");

function addCard(name, picture) {
    const nodeH4 = document.createElement("h4");
    nodeH4.innerText = name;
    
    const nodeImg = document.createElement("img");
    nodeImg.src = picture;

    const nodeContainer = document.createElement("div");
    nodeContainer.className = "card";

    nodeContainer.appendChild(nodeH4);
    nodeContainer.appendChild(nodeImg);

    nodeDeck.appendChild(nodeContainer);
}

function addSpecificCard(index) {
    addCard(
        animalsToAdopt[index].name, 
        animalsToAdopt[index].picture
    );
}

for (let i = 0; i < animalsToAdopt.length; ++i)
    addSpecificCard(i);