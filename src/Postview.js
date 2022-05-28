import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Post from './Post/Post';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import RadarIcon from '@mui/icons-material/Radar';
import axios from 'axios';


const Postview = () => {
  const [posts, setPosts] = useState([]);

  const setPostsAsync = async () => {
    axios.get('https://instaclone-client.herokuapp.com/api/v1/post')
      .then(response => {
        console.log("server", response.data)

        setPosts(response.data)

      })
  }

  useEffect(() => {
    setPostsAsync();
  }, []);
  return (
    <div>
      <div className='header-container'>
        <div className='left-side' ><span><RadarIcon /></span>Instaclone</div>
        <Link to="/login">
          <div className='right-side'><PhotoCameraIcon /></div>
        </Link>
      </div>
      <div className="Postview">

        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Postview;
