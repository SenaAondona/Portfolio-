const photos = Array(40).fill({
    original: "",
    thumbnail: ""
});
const phot = photos.map((value, i)=> {
    return {
        original: `img/photography/photo (${i+1}).jpg`,
        thumbnail: `img/photography/photo (${i+1}).jpg`
    }
});
export default phot;