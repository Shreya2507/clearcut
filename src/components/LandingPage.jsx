import React from 'react'
import { motion } from "framer-motion";

import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {

    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-auto mb-16 bg-zinc-900 pt-1 font-["Inter_Tight"]'>
            <div className="textstructure mt-48 px-28">
                <div className="leading-[4.7vw] tracking-tight text-[5.5vw] font-['Inter_Tight'] font-[600] ">
                    Great Ideas
                </div>
                {["Deserve Great", "Products"].map((item, index) => {
                    return (

                        <div className="w-fit flex items-center">

                            <div className="leading-[4.7vw] text-[#b4b5b8] tracking-tight text-[5.5vw] font-['Inter_Tight'] font-[600] ">
                                {item}
                            </div>

                        </div>


                    );
                })}
            </div>

            {/* <div className='border-t-[1px]  border-zinc-800 mt-24 flex justify-between items-center py-3 px-14'>
                {["For public and private companies", "From the first pitch to IPO"
                ].map((item, index) =>
                    <p key={index} className='text-md font-light tracking-tight leading-none'>{item}</p>)}
                <div className="start flex items-center gap-1">
                    <div className="uppercase px-4 py-[0.3rem] text-sm border-[1.5px] border-zinc-500 rounded-full">Start the project</div>
                    <div className=" w-9 h-9 border-[1.5px] border-zinc-500 rounded-full flex items-center justify-center">
                        <span className='rotate-[45deg]'>
                            <FaArrowUpLong />

                        </span>

                    </div>

                </div>

            </div> */}

        </div>
    )
}

export default LandingPage
