// import { response } from "express";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const MediumContext = createContext()

export default function MyContext ({children}) {
  const [user, setUser] = useState([]);
  const [login, setLogin] = useState([]);
  const [comment, setComment] = useState([]);
  const [like, setLike] = useState([]);
  const [register, setRegister] = useState([]);
  const [validate, setValidate] = useState(false);
  const [posts, setPosts] = useState([])
  const reversePosts = [...posts].reverse()
  const exportData ={
    user,
    setUser,
    posts,
    reversePosts,
    setPosts,
    login, 
    setLogin, 
    comment,
    setComment,
    like,
    setLike,
    register,
    setRegister,
    validate,
    setValidate
  }
  useEffect(() => {
    fetch("http://localhost:4002/users")
    .then((response) => response.json())
    .then((data) => {
      setUser(data)
    })

    fetch("http://localhost:4002/post")
    .then((resp) => resp.json())
    .then((data) => {
      setPosts(data)
    })
    // Comments
    fetch("http://localhost:4002/comments")
    .then((response) => response.json())
    .then((resp) => {
      setComment(resp)
    })

    // Likes
    fetch("http://localhost:4002/likes")
    .then((response) => response.json())
    .then((resp) =>{
    setLike(resp)
    })
  },[])
  
  
  return (
    <MediumContext.Provider value={exportData}>
      {children}
    </MediumContext.Provider>
  );
}