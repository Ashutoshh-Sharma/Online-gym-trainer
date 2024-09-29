import React, { useState, useEffect } from 'react';
import PuffLoader from 'react-spinners/PuffLoader';

function ExerciseVideos({ exerciseVideos, name }) {
  const [loading, setLoading] = useState(true); // State for loading

  useEffect(() => {
    // Simulate a delay to show loader
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust timeout as needed for actual data fetching

    return () => clearTimeout(timer); // Clean up timer on unmount
  }, [exerciseVideos]);


  if (loading) {
    return (
      <div className="p-4 mt-20 flex justify-center items-center">
        <PuffLoader size={100} color={'#E22626'} />
      </div>
    );
  }

  if (!exerciseVideos.length) {
    return <p className="p-4 mt-20">No videos found for this exercise.</p>;
  }

  return (
    <div className='p-4 mt-20'>
      <h2 className='text-3xl font-semibold'>Watch <span className='text-red-500 capitalize'>{name}</span> exercise videos</h2>
      <div className='flex flex-wrap gap-16 mt-10 justify-center items-center'>
        {exerciseVideos?.slice(0, 6).map((item, index) => (
          <a key={index} href={`https://www.youtube.com/watch?v=${item.video.videoId}`} target="_blank" rel="noopener noreferrer">
            <div className='flex w-[350px] h-[400px] flex-col gap-2 bg-gray-800 text-white rounded-es-[60px] overflow-hidden'>
              <div className='w-full h-[240px]'>
                <img className='w-full h-[240px] object-cover transition-transform duration-300 ease-in-out transform hover:scale-110' 
                     src={item.video.thumbnails[0].url} 
                     alt={item.video.title} 
                />
              </div>
              <div className='flex flex-col gap-2 pt-4 pb-6 px-6'>
                <p className='text-lg font-bold'>{item.video.title}</p>
                <p className='text-md'>{item.video.channelName}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default ExerciseVideos;
