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

function addCard() {
    const cardHTML = `
    <div class="card">
        <h4>Lucky</h4>
        <img src="https://placekitten.com/200/287" alt="">
    </div>`;

    nodeDeck.innerHTML += cardHTML;
}
