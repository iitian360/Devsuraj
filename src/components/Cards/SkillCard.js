import React, { useState } from 'react';

const SkillCard = ({ logo, alt_text }) => {
    const [pop, setPop] = useState(""); // Text to display in popup
    const [show, setShow] = useState(false); // Controls popup visibility

    const showPopUp = async (e) => {
        setPop(e.target.alt); // Set the text from the alt attribute
        setShow(true); // Show the popup

        // Set a timer to hide the popup after 1 second
        setTimeout(() => {
            setShow(false);
        }, 3000);
    };

    return (
        <>
            <div className='cursor-pointer w-auto relative' onClick={showPopUp}>
                <img className='w-16 rounded-full py-1 px-1' src={logo} alt={alt_text} />

                {/* Conditionally render the popup if show is true */}
                {show && (
                    <p className='absolute -top-8 left-4 bg-gray-200 p-1 rounded-t-md rounded-br-md
          w-24 border border-y-designColor text-center capitalize bg-black text-white shadow-[3px_4px_12px_rgba(255,149,0,0.5),3px_8px_24px_rgba(255,149,0,0.2)]'>
                        {pop}
                    </p>
                )}
            </div>
        </>
    );
};

export default SkillCard;
