const getUser = async () => {
    const userId = Math.ceil(Math.random()*10);
    const url = 'https://jsonplaceholder.typicode.com/users/'+userId;
    const res = await fetch(url);
    const user = await res.json();

    return user;
};
export default getUser;