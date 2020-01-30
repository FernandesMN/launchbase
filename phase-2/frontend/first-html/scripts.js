const modalOverlay = document.querySelector('.modal-overlay');
const modal = document.querySelector('.modal');
const cards = document.querySelectorAll('.card');

for (let card of cards) {
    card.addEventListener("click", function() {
        const courseID = card.getAttribute("id");
        modalOverlay.classList.add('active');
        modalOverlay.querySelector('iframe').src = `https://rocketseat.com.br/${courseID}`;
    });
};

document.querySelector('.close-modal').addEventListener("click", function() {
    modalOverlay.classList.remove('active');
    modalOverlay.querySelector('iframe').src = "";
});

document.querySelector('.maximize-modal').addEventListener("click", function() {
    if (!modal.classList.contains("maximize-modal")) {
        modal.classList.add("maximize-modal")
    } else {
        modal.classList.remove("maximize-modal");
    }
});