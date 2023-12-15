const photos = Array(40).fill(1);
const phot = photos.map((value, i)=> {
    return {
        original: `img/photography/photo (${value+i+1}).jpg`,
        thumbnail: `img/photography/photo (${value+i+1}).jpg`
    }
});
export default phot;