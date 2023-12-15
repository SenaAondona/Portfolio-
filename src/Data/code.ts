const photos = Array(5).fill(1);
const phot = photos.map((value, i)=> {
    return {
        original: `img/code/code (${value+i+1}).jpg`,
        thumbnail: `img/code/code (${value+i+1}).jpg`
    }
});
export default phot;