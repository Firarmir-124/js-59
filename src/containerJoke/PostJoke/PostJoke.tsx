import React from 'react';

interface Props {
  category: string;
  joke: string;
}

const PostJoke:React.FC<Props> = ({category, joke}) => {
  return (
    <div className='card p-2' style={{width: '500px'}}>
      <h1>{category}</h1>
      <p>{joke}</p>
    </div>
  );
};

export default PostJoke;