// Unplash API
const count = 10;
const apiKey = 'lV_fWIdtwx4bkQd2VPrYi39S3Bh-0JweUhZHXMsmqKI';
const orient = 'portrait';

const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}&orientation=${orient}`;


// Get photos from Unplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
    } catch (error) {
        console.error(error);
    }
}


// On Load 
getPhotos();