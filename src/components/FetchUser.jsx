import React, { useCallback, useEffect, useState } from 'react'
import getPosts from './helpers/getPost';
import getUser from './helpers/getUser';
import style from "./Style"

//const initalUser = {
//    name: "",
//    email: ""
//}

//const initalPosts = [
//    { id: 1, title: "Post 1"},
//    { id: 2, title: "Post 2"},
//]

function FetchUser() {

    const [user, setUser] = useState({});
    const [ posts, setPosts ] = useState([])

    const updateUser = () => {
        getUser()
            .then((newUser) =>{
                setUser(newUser);
            });
    };
    const updatePosts = useCallback(() => {
        getPosts(user.id)
            .then((newPosts) =>{
                setPosts(newPosts);
            })
    },[user.id]);
    useEffect(() => {
        updateUser();
        return () => {
        }
    }, [])
    useEffect(() => {
        if(user?.id){
            updatePosts();
        }
        return () => {
        }
    }, [user,updatePosts])
    return (
        <div style={style.component}>
            <h2>{user.name}</h2>
            <h2>{user.email}</h2>
            <button style={style.button} onClick={updateUser}>Another User</button>

            <br/>

            <h2>Posts - user: {user.id}</h2>
                <ul>
                    {posts.map(post =>(
                        <li key={post.id}>{post.title}</li>
                    ))}
                </ul>
        </div>
    )
}

export default FetchUser;
