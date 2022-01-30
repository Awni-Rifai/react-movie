import React, { Component } from 'react';
import Comments from './Comments';
import Gallery from './Gallery';
import Related_movie from './Related_movie';
import Reviews from './Reviews';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

import { db } from '../userAuthorization/firebase'
import { collection, addDoc, Timestamp, query, onSnapshot, where, getDocs, orderBy } from 'firebase/firestore'

function Content(props) {
    const [createComment, setCreateComment] = useState(false);
    const [comments, setComments] = useState([])
    const [commentId, setCommentId] = useState(null)
    // let comment_id = ""
    let { id, movie_id } = useParams();
    
   const addComment = async (body)=>{

    console.log("start add comment",body);
    const doc = { body: body, user_id: 0, movie_id: props.movieInfo.id, created: Timestamp.now() }
    console.log(doc);
    try {
         addDoc(collection(db, 'comments'),doc).then(() =>{
            setCreateComment(true)
        })
        console.log("comment created");
    } catch (err) {
        console.log(err)
    }
   }
            useEffect(()=>{
                console.log("useEffect");
                if (id) {
                    console.log("fetch started" );
                    fetchComments(id)
                    
                } else if (movie_id) {
                    fetchComments(movie_id)

                }

            },[id,movie_id])
    
    console.log(commentId);


    const handleSubmit = async (e) => {
       
    }
    const fetchComments = (id)=>{
        const q = query(collection(db, 'comments') ,where('movie_id', "==", Number(id)) );

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
            console.log("results",results);
            function compare( a, b ) {
                if ( a.created < b.created ){
                  return -1;
                }
                if ( a.created > b.created ){
                  return 1;
                }
                return 0;
              }
              
            
              
            setComments(results.sort( compare ))
            setCreateComment(false)
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
