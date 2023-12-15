const photos = Array(5).fill({
    original: "",
    thumbnail: ""
});
const phot = photos.map((value, i)=> {
    return {
        original: `img/code/code (${i+1}).jpg`,
        thumbnail: `img/code/code (${i+1}).jpg`
    }
});
export default phot;