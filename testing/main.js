document.addEventListener('DOMContentLoaded', () => {
    // Save button functionality
    const saveButtons = document.querySelectorAll('.save-btn');
    saveButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.textContent = button.textContent === '☆' ? '★' : '☆';
        });
    });

    // Generate mock data for listings
    const sections = ['for-sale', 'housing', 'events'];
    sections.forEach(section => {
        const container = document.querySelector(`.${section} .grid-container`);
        const items = generateMockItems(section);
        items.forEach(item => {
            container.appendChild(createItemCard(item));
        });
    });
});

function generateMockItems(section) {
    const items = [];
    const count = 5;
    
    for(let i = 0; i < count; i++) {
        const item = {
            image: `${section}-${i}.jpg`,
            title: section === 'for-sale' ? 'Lorem ipsum' : 'Lorem ipsum',
            price: section === 'for-sale' ? '$45' : 
                   section === 'housing' ? '$4500 monthly' : 
                   '27-30 December',
            location: 'East Village',
            time: 'Posted 2 days ago'
        };
        items.push(item);
    }
    return items;
}

function createItemCard(item) {
    const card = document.createElement('div');
    card.className = 'item-card';
    card.innerHTML = `
        <div class="item-image">
            <img src="${item.image}" alt="${item.title}">
            <button class="save-btn">☆</button>
        </div>
        <div class="item-details">
            <div class="price-title">
                <span class="title">${item.title}</span>
                <span class="price">${item.price}</span>
            </div>
            <p class="location">${item.location}</p>
            <p class="time">${item.time}</p>
        </div>
    `;
    return card;
}
