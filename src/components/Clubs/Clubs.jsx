import React from 'react';
import { Link } from 'react-router-dom';

const Clubs = () => {
    return (
        <div className='mx-auto max-w-7xl mt-16'>
            <div className='flex justify-center items-center gap-10'>
                <div className='flex-1 space-y-10 justify-center items-center text-center'>
                    <div className=' mx-auto '>
                        <img src="https://i.postimg.cc/vBSsXLPC/images-1.jpg" className='block mx-auto' alt="" />
                    </div>
                    <p>Join in our club</p>
                    <p>Create and Craft Club is our exclusive membership that gives you great benefits including Discount on all products and exclusive member only benefits. </p>
                    <button className='w-full btn'>View More</button>
                    <p>Exclusions apply, please see <Link className='text-blue-400' to={"/"}>Terms and Conditions</Link> for details.</p>
                </div>
                <div className='flex-1 flex justify-center items-center flex-col'>
                    <div>
                        <img className='rounded-full w-64' src="https://i.postimg.cc/sDWr9W50/Screen-Shot-2020-03-06-at-4-20-44-PM.png" alt="" />
                    </div>
                    <button className='btn w-full mt-4'>Exclusive Access Here</button>
                </div>
            </div>
        </div>

    );
};

export default Clubs;