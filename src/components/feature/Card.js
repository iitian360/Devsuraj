import React from 'react'
import {HiArrowRight} from 'react-icons/hi';
const Card = ({ title, des, icon }) => {
    return (
        <div className='w-full h-80 py-10 px-12 rounded-lg  flex items-center cardDesign'>
            <div className='flex flex-col gap-6'>
                <div>
                    <span className='text-designColor text-5xl'>{icon}</span>
                </div>
                <div className='flex flex-col gap-6'>
                    <h2 className='text-xl font-titleFont capitalize font-bold text-gray-300'>{title}</h2>
                    <p className='base'>{des}</p>
                    <span className='text-designColor text-2xl'>{<HiArrowRight/>}</span>
                </div>
            </div>

        </div>
    )
}


export default Card
