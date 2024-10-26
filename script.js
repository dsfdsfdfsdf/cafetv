// Function to load items from a text file and display them in the gallery
async function loadGalleryItems(file, containerId) {
    const response = await fetch(file);
    const data = await response.text();
    const lines = data.split('\n');
    
    const container = document.getElementById(containerId);
    for (let i = 0; i < lines.length; i += 3) {
        const imgSrc = lines[i].trim();
        const liveStreamUrl = lines[i + 1].trim();
        const title = lines[i + 2].trim();

        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.innerHTML = `
            <img src="${imgSrc}" alt="${title}" onclick="openPlayer('${liveStreamUrl}')">
            <div class="image-title">${title}</div>
        `;
        container.appendChild(item);
    }
}

// Function to open the player in a popup
function openPlayer(url) {
    const playerContainer = document.createElement('div');
    playerContainer.className = 'popup-player';
    playerContainer.innerHTML = `
        <div class="popup-content">
            <span class="close" onclick="closePlayer()">&times;</span>
            <iframe src="${url}" width="100%" height="100%"></iframe>
        </div>
    `;
    document.body.appendChild(playerContainer);
}

// Function to close the player popup
function closePlayer() {
    const playerContainer = document.querySelector('.popup-player');
    if (playerContainer) {
        document.body.removeChild(playerContainer);
    }
}
// Load all gallery items
loadGalleryItems('category1.txt', 'satellite-items');
loadGalleryItems('category2.txt', 'provincial-items');
loadGalleryItems('category3.txt', 'radio-items');
loadGalleryItems('category4.txt', 'religious-items');
