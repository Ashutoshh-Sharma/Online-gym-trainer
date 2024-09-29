import React from 'react';
import { Link } from 'react-router-dom';

function ExerciseCard({ exercise, bodyPart }) {
    const isSelected = bodyPart === exercise.bodyPart; // Check if the current exercise's bodyPart matches the selected bodyPart

    return (
        <div
            className={`flex flex-col items-center justify-center gap-20 px-4 py-10 w-[300px] rounded-es-[60px] cursor-pointer bg-white 
                        ${isSelected ? 'border-t-4 border-red-500' : 'border-t-2 border-black'} transition-all duration-100`}
        >
            <Link to={`/exercise/${exercise.id}`} >
                <div className='flex justify-center'>
                    <img className='h-60' src={exercise.gifUrl} alt={exercise.name} loading='lazy' />
                </div>
                <div className='flex gap-4 text-white p-4 '>
                    <button className='p-2 capitalize rounded-full bg-red-300'>{exercise.bodyPart}</button>
                    <button className='p-2 capitalize rounded-full bg-yellow-400'>{exercise.target}</button>
                </div>
                <h1 className='text-xl capitalize px-6'>{exercise.name}</h1>
            </Link>
        </div>
    );
}

export default ExerciseCard;
