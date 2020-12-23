export const fetchImages = async (url) => {
    const res = await fetch(url);
    return res.json();
}