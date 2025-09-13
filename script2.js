// Adding transition on hover to play button
function showPlayButton(cards) {
    cards.forEach(card => {
        let playButton = card.querySelector(".playButtonBase")
        card.addEventListener("mouseenter", () => {
            playButton.classList.toggle("showPlayButton")
            
        })
        card.addEventListener("mouseleave", () => {
            playButton.classList.toggle("showPlayButton")

        })
    });
}

let longCards = document.querySelectorAll(".longCard")
showPlayButton(longCards)

let heroPlaylistsCards = document.querySelectorAll(".heroCardWrapper")
showPlayButton(heroPlaylistsCards)