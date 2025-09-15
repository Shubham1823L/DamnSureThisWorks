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



// Adding bgGradient change functionality to hero area
function heroGradientChanger() {
    let heroWrapper = document.querySelector(".heroWrapper")
    longCards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            heroWrapper.setAttribute("style", "--hero-gradient:rgb(42, 5, 5)")
        })
        card.addEventListener("mouseleave", () => {
            heroWrapper.setAttribute("style", "--hero-gradient:rgba(56, 66, 71, 1)")
        })
    });
}
// heroGradientChanger()



// Adding running transition to txt in longCard
longCards.forEach(card => {
    let txtSpan = card.querySelector(".lCardRight").getElementsByTagName("span")[1]
    let spanLength = parseFloat(getComputedStyle(txtSpan).width)
    card.setAttribute("style", `--b:${2*(spanLength + 10)}px;
    --a:-${spanLength + 10}px;`)


   

});
