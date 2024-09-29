import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import ExerciseCard from '../ExerciseCard/ExerciseCard';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import PuffLoader from 'react-spinners/PuffLoader';

function Exercises({ exercises, bodyPart, setExercises }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true); // State for loading
  const exercisesPerPage = 9;

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = Array.isArray(exercises)
    ? exercises.slice(indexOfFirstExercise, indexOfLastExercise)
    : [];

  useEffect(() => {
    const fetchExerciseData = async () => {
      setLoading(true); // Set loading to true while fetching
      let exerciseData = [];

      try {
        if (bodyPart === 'all') {
          exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=1300', exerciseOptions);
        } else {
          exerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=1300`, exerciseOptions);
        }

        if (!Array.isArray(exerciseData)) {
          throw new Error('Fetched data is not an array');
        }

        setExercises(exerciseData);
      } catch (error) {
        console.error('Error fetching exercise data:', error);
        setExercises([]); // Set to an empty array on error to prevent crashes
      } finally {
        setLoading(false); // Set loading to false when done
      }
    };

    fetchExerciseData();
  }, [bodyPart, setExercises]);

  return (
    <div id="exercises" className="mt-10 p-6 flex flex-col gap-10">
      <h1 className="text-2xl font-semibold">Showing Results</h1>
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <PuffLoader size={100} color={'#E22626'} />
        </div>
      ) : (
        <>
          <div className="card flex flex-wrap justify-center gap-20">
            {currentExercises.length > 0 ? (
              currentExercises.map((exercise, index) => (
                <ExerciseCard key={index} exercise={exercise} />
              ))
            ) : (
              <p>No exercises found.</p>
            )}
          </div>
          <div className="flex justify-center">
            {exercises.length > exercisesPerPage && (
              <Pagination
                count={Math.ceil(exercises.length / exercisesPerPage)}
                defaultPage={1}
                variant="outlined"
                size="large"
                page={currentPage}
                onChange={paginate}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Exercises;
