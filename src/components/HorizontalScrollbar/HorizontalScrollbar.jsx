import React, { useRef } from 'react';
import BodyPart from '../BodyPart/BodyPart';
import ExerciseCard from '../../components/ExerciseCard/ExerciseCard'; 
import leftarrow from '../../assets/icons/left-arrow.png';
import rightarrow from '../../assets/icons/right-arrow.png';

function HorizontalScrollbar({ data = [], bodyPart, setBodyPart }) {
    const scrollRef = useRef(null);

    const handleScroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = direction === 'left' ? -300 : 300; // Adjust scroll amount as needed
            scrollRef.current.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className='relative flex items-center overflow-hidden px-6'>
            {/* Scroll Buttons */}
            <button
                onClick={() => handleScroll('left')}
                className='absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700 transition-colors duration-300 z-10'
                aria-label="Scroll Left"
            >
                <img src={leftarrow} alt="Scroll Left" className='w-6 h-6' />
            </button>

            {/* Scroll Container */}
            <div
                className='flex overflow-x-hidden gap-4 p-4 scroll-smooth'
                ref={scrollRef}
                style={{ scrollBehavior: 'smooth' }}
            >
                {Array.isArray(data) && data.length > 0 ? (
                    data.map((item, index) => (
                        <div
                            className='flex-shrink-0 w-64 sm:w-80 md:w-96 lg:w-72 xl:w-80'
                            key={item.id || index}
                            itemID={item.id || item}
                            title={item.id || item}
                        >
                            {
                                bodyPart ? 
                                <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} /> 
                                : 
                                <ExerciseCard exercise={item} />
                            }
                        </div>
                    ))
                ) : (
                    <p>.....No data available.....</p>
                )}
            </div>

            {/* Scroll Buttons */}
            <button
                onClick={() => handleScroll('right')}
                className='absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700 transition-colors duration-300 z-10'
                aria-label="Scroll Right"
            >
                <img src={rightarrow} alt="Scroll Right" className='w-6 h-6' />
            </button>
        </div>
    );
}

export default HorizontalScrollbar;
