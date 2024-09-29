// BodyPart.jsx
import React from 'react';
import Icon from '../../assets/icons/gym.png';

function BodyPart({ item, setBodyPart, bodyPart }) {
    // Check if setBodyPart is a function
    if (typeof setBodyPart !== 'function') {
        console.error('setBodyPart is not a function:', setBodyPart);
        return null; // Return nothing if setBodyPart is not a function
    }

    const isSelected = bodyPart === item; // Compare string directly or check object properties if needed

    return (
        <div
            className={`flex flex-col items-center justify-center gap-10 cursor-pointer bg-white w-[250px] h-[280px] rounded-es-[60px] 
                        ${isSelected ? 'border-t-4 border-red-500' : 'border-t-2 border-black'} transition-all duration-100`}
            onClick={() => setBodyPart(item)} // Set the selected body part on click
        >
            <img className='w-10 h-10' src={Icon} alt="dumbell" />
            <h1 className='capitalize font-semibold'>{item.name || item}</h1> {/* Access properties if item is an object */}
        </div>
    );
}

export default BodyPart;
