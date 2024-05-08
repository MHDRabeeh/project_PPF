import React from 'react'
import Wrapper from '../Wrapper'
import { IoIosArrowForward } from "react-icons/io";


const VideoCard = () => {
    return (
        <Wrapper >
            <div className=''>
                <div className='flex justify-between items-center '>
                    <p className='text-sm w-1/2 text-gray-500 font-light'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt adipisci facilis illo dolorum molestiae aperiam explicabo, officia neque aut qui minus totam? Incidunt quos error eos voluptatem esse, labore quod quibusdam blanditiis unde fugit ullam voluptatibus mollitia optio eligendi!</p>
                    <div>
                        <button className='bg-black text-xs w-26 px-2 py-2 rounded-lg text-white flex gap-2 justify-center items-center text-center uppercase'>Read more <span className='flex relative '><IoIosArrowForward size={15} className='text-yellow-400 absolute -left-1' /><IoIosArrowForward size={15} /></span></button>
                    </div>
                </div>
                <div className='mt-10'>
                    {/* <video className='w-full h-[600px] ' loop src={videoOne}></video> */}
                    <iframe className='w-full h-[500px]' src="https://www.youtube.com/embed/Gc3aMaQ_AS4">
                    </iframe>
                    
                </div>
            </div>

        </Wrapper>
    )
}

export default VideoCard
