import React, { Component } from 'react';
import Comments from './Comments';
import Gallery from './Gallery';
import Related_movie from './Related_movie';
import Reviews from './Reviews';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

import { db } from '../userAuthorization/firebase'
import { collection, addDoc, Timestamp, query, onSnapshot, where, getDocs } from 'firebase/firestore'

function Content(props) {
    // const [body, setBody] = useState("");
    const [comments, setComments] = useState([])
    const [commentId, setCommentId] = useState(null)
    // let comment_id = ""
    let { id, movie_id } = useParams();
    
   const addComment = async (body)=>{

    console.log("hello",body);
    const doc = { body: body, user_id: 0, movie_id: props.movieInfo.id, created: Timestamp.now() }
    console.log(doc);
    try {
         addDoc(collection(db, 'comments'),doc).then(() =>{
             
            setComments([...comments,comments])
        })
        console.log("comment created");
    } catch (err) {
        console.log(err)
    }
   }
            useEffect(()=>{
                console.log("useEffect");
                if (id) {
                    fetchComments(id)
                } else if (movie_id) {
                    fetchComments(movie_id)

                }
            },[id,movie_id])
    
    console.log(commentId);


    const handleSubmit = async (e) => {
       
    }
    const fetchComments = (id)=>{
        const q = query(collection(db, 'comments'), where('movie_id', "==", Number(id)));

        onSnapshot(q, (querySnapshot) => {
            console.log(querySnapshot);
            if (querySnapshot.empty) {
                console.log("empty");
            }
            console.log(querySnapshot);
              let  results=[]
            querySnapshot.docs.forEach((doc) => {
                setComments()
                console.log('doc',doc.data());
                results.push({ ...doc.data(), id: doc.id })
            })
            setComments(results)
        })
    }

    

    console.log('comments',comments);




    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-lg-8 col-xl-8">
                    {/* <!-- content tabs --> */}
                    <div className="tab-content" id="myTabContent">
                        {props.commentsState && <Comments  addComment={addComment} handleSubmit={handleSubmit}  comments={comments} />}
                        {props.reviewsState && <Reviews />}
                        {props.galleryState && <Gallery />}
                    </div>
                    {/* <!-- end content tabs --> */}
                </div>
                {/* <!-- sidebar --> */}
                <Related_movie />
                {/* <!-- end sidebar --> */}
            </div>
        </div>
    );

}

export default Content
