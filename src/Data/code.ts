const photos = Array(7).fill(1);
const phot = photos.map((value, i)=> {
    return {
        original: `img/web/code-${value+i}.png`,
        thumbnail: `img/web/code-${value+i}.png`
    }
});
export default phot;