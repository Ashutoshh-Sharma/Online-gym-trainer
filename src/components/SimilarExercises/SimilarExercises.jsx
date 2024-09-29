import React from 'react';
import HorizontalScrollbar from '../../components/HorizontalScrollbar/HorizontalScrollbar';
import PuffLoader from 'react-spinners/PuffLoader'

function SimilarExercises({ targetMuscleExercises, equipmentExercises }) {
  const isLoadingTarget = targetMuscleExercises.length === 0;
  const isLoadingEquipment = equipmentExercises.length === 0;
  return (
    <div className="mt-10 p-4">
      <h1 className="text-2xl font-semibold mb-6">Exercises that target the same muscle group</h1>
      <div className="mb-8 relative">
        {isLoadingTarget ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <PuffLoader size={40} color={'#E22626'} />
          </div>
        ) : (
          <HorizontalScrollbar data={targetMuscleExercises} />
        )}
      </div>
      
      <h1 className="text-2xl font-semibold mb-6">Exercises that use the same equipment</h1>
      <div className="relative">
        {isLoadingEquipment ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <PuffLoader size={40} color={'#E22626'} />
          </div>
        ) : (
          <HorizontalScrollbar data={equipmentExercises} />
        )}
      </div>
    </div>
  );
}

export default SimilarExercises;
