export const apiConnection = () => {
    const connection = fetch(`https://ghibliapi.vercel.app/films`)
    .then((res) => res.json())
    .then((data) => {
        return data;
    });
    return connection;
}