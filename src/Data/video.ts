const photos = Array(9).fill(1);
const phot = photos.map((value, i)=> {
    return {
        src: `img/videos/Video_${value+i+1}.mp4`,
        poster: `img/videos/Video_${value+i+1}.jpg`,
        // imgAlt: "Image not found"
    }
});
export default phot;