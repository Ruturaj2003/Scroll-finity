// Unplash API
const count = 10;
const apiKey = 'lV_fWIdtwx4bkQd2VPrYi39S3Bh-0JweUhZHXMsmqKI';
const orient = 'portrait';
const imageContainer = document.getElementById(
    'image-container'
);
const loader = document.getElementById('loader');

const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}&orientation=${orient}`;

let photosArray = [];

// Helper Function to Set Attributes on Dom Elements
function setAttribute(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

// Create Elements For Links & Photos, Add to DOM
function displayPhotos() {
    photosArray.forEach((photo) => {
        // Create <a> to link to Unsplash
        const item = document.createElement('a');
        // item.setAttribute('href', photo.links.html);
        // item.setAttribute('target', '_blank');
        setAttribute(item, {
            href: photo.links.html,
            target: '_blank',
        });

        // Create <img>
        const img = document.createElement('img');
        // img.setAttribute('src', photo.urls.regular);
        // img.setAttribute('alt', photo.alt_description);
        // img.setAttribute('title', photo.alt_description)

        setAttribute(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description

        })
        // Put Both in Image Container
        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}

// Get photos from Unplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        console.log(photosArray);
        displayPhotos();
    } catch (error) {
        console.error(error);
    }
}

// Check to see if near bottom of page
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000) {
        getPhotos()
    }
})


// On Load
getPhotos();
