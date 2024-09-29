import React from 'react';
import BodyPartImage from '../../assets/icons/body-part.png';
import TargetImage from '../../assets/icons/target.png';
import EquipmentImage from '../../assets/icons/equipment.png';

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <div className='flex bg-slate-800 text-white rounded-es-[60px] mx-4 flex-wrap justify-center items-center p-8 py-14 gap-14 mt-14 lg:flex-nowrap'>
      <div className="image w-full flex justify-center">
        {/* Ensure gifUrl is a valid URL or fallback */}
        <img className='rounded-es-[60px] sm:w-[80%] sm:h-[70%]' src={gifUrl} alt="Exercise Gif" />
      </div>
      <div className='flex flex-col gap-8 px-2 sm:px-6'>
        {/* Ensure name is a valid string */}
        <h1 className='text-3xl font-semibold capitalize'>{name || 'Exercise Name'}</h1>
        <p className='text-justify'>
          Exercises keep you strong. {name || 'This exercise'} is one of the best exercises to target your {target || 'muscle group'}. It will help you improve your mood and gain energy.
        </p>
        {extraDetail.map((item, index) => (
          <div key={index} className='detail flex gap-6 capitalize items-center'>
            <img className='bg-white p-4 rounded-full' src={item.icon} alt="Icon" />
            <p className='font-medium'>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Detail;
