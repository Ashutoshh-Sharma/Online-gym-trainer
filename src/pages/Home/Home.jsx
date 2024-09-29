import React, { useState } from 'react';
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import SearchExercises from '../../components/SearchExercises/SearchExercises';
import Exercises from '../../components/Exercises/Exercises';

function Home() {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  return (
    <>
      <HeroBanner />
      <SearchExercises 
        setExercises={setExercises} 
        bodyPart={bodyPart} 
        setBodyPart={setBodyPart} 
      />
      <Exercises 
        setExercises={setExercises} 
        bodyPart={bodyPart} 
        exercises={exercises} 
      />
    </>
  );
}

export default Home;
