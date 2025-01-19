const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
    card.addEventListener('dragstart', () => {
        card.classList.add('dragging');
    });

    card.addEventListener('dragend', () => {
        card.classList.remove('dragging');
    });
});

document.addEventListener('dragover', (e) => {
    e.preventDefault();
    const draggingCard = document.querySelector('.dragging');
    const container = document.querySelector('.container');

    if (draggingCard) {
        const y = e.clientY;
        const allCards = [...container.querySelectorAll('.card:not(.dragging)')];

        const nextCard = allCards.find((card) => {
            const box = card.getBoundingClientRect();
            return y < box.top + box.height / 2;
        });

        if (nextCard) {
            container.insertBefore(draggingCard, nextCard);
        } else {
            container.appendChild(draggingCard);
        }
    }
});
