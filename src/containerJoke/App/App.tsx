import React, {useEffect, useState} from 'react';
import {BlogPost} from "../../types";
import PostJoke from "../PostJoke/PostJoke";

const url = 'https://v2.jokeapi.dev/joke/Programming';

function App() {
  const [posts, setPosts] = useState<BlogPost>();

  const getJoke = async () => {
    const response = await fetch(url)

    if (response.ok) {
      const newJoke:BlogPost = await response.json();
      setPosts(newJoke)
    }

  };

  useEffect(() => {

    getJoke().catch(console.error)

  }, []);

  return (
    <div className="App mt-5">
      <div className="container-fluid">
        <section className="blockJoke">
          <PostJoke category={posts?.category || posts?.setup || ''} joke={posts?.joke || posts?.setup || ''}/>
        </section>
        <button className='btn btn-primary mt-2' onClick={getJoke}>Новая шутка</button>
      </div>
    </div>
  );
}

export default App;
