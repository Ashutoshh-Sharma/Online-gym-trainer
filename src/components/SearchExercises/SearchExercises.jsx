import React, { useState, useEffect, useRef } from 'react';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from '../HorizontalScrollbar/HorizontalScrollbar';

function SearchExercises({ setBodyPart, bodyPart, setExercises }) {
    const [search, setSearch] = useState('');
    const [bodyParts, setBodyParts] = useState([]);
    const [selectedBodyPart, setSelectedBodyPart] = useState(null);

    const exercisesRef = useRef(null); // Ref for the exercises section

    useEffect(() => {
        const fetchExerciseData = async () => {
            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
            setBodyParts(['all', ...bodyPartsData]);
        };
        fetchExerciseData(); 
    }, []);
    
    const handleSearch = async () => {
        if (search) {
            const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=1300', exerciseOptions);

            const searchedExercises = exerciseData.filter(
                (exercise) => exercise.name.toLowerCase().includes(search) || exercise.target.toLowerCase().includes(search) || exercise.equipment.toLowerCase().includes(search) || exercise.bodyPart.toLowerCase().includes(search)
            );
            setSearch('');
            setExercises(searchedExercises);

            // Scroll to the exercises section
            if (exercisesRef.current) {
                window.scrollTo({
                    top: exercisesRef.current.offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    };

    return (
        <div className='flex flex-col gap-10 justify-center items-center p-6 sm:gap-16'>
            <h1 className='text-center text-3xl font-semibold sm:text-4xl lg:text-5xl xl:text-6xl'>Awesome Exercises You <br />
                Should Know</h1>
            <div className='flex'>
                <input className='h-14 w-[190px] outline-none border-none rounded-s-md px-6 sm:w-[450px] sm:text-xl lg:text-2xl lg:w-[700px] lg:h-16 xl:w-[800px]' 
                       type="text" 
                       placeholder='Search Exercises' 
                       value={search} 
                       onChange={(e) => setSearch(e.target.value.toLowerCase())} />
                <button className='h-14 w-24 text-white bg-red-500 rounded-e-md hover:bg-red-700 sm:w-40 sm:text-xl lg:text-2xl lg:h-16 lg:w-44 xl:w-48' 
                        onClick={handleSearch}>Search</button>
            </div>
            <div className="horizontal w-full flex justify-center items-center">
                <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} />
            </div>
            <div ref={exercisesRef} className='w-full mt-20'>
                {/* Exercises section */}
                {/* You might want to render the list of exercises here */}
            </div>
        </div>
    );
}

export default SearchExercises;
