import React from 'react'
import { motion } from 'framer-motion';

export default function Marquee() {
  return (

    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full h-[100vw] py-20 rounded-[4vw] bg-white'>
      <div className="flex ">
        <div className=' h-1/3 overflow-hidden'><img src="https://plus.unsplash.com/premium_photo-1715071976245-b4ab72b6c48b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8" alt="" /></div>
        <div className='flex-col justify-start'>
          <div className='flex-col justify-start  px-20 pt-32'>
            {["Strategic UX", "Design & Brand", "Studio."].map((item, index) => {
              return (

                <div className="w-fit flex items-center">
                  <div className="leading-[4.7vw] text-[#33343e] tracking-tight text-[5.5vw] font-['Inter_Tight'] font-[700] ">
                    {item}
                  </div>

                </div>

              );

            })}
            <div>
              <div className=' pt-6'>
                {["We help entrepreneurs and businesses", "achieve ambitious dreams by building", "design centric products and brands."].map((item, index) => {
                  return (

                    <div className="w-fit flex items-center">
                      <div className="leading-[3.2vw] text-[#33343e] tracking-tight text-[2vw] font-['Inter_Tight'] font-[400] ">
                        {item}
                      </div>

                    </div>

                  );

                })}

              </div>
            </div>
          </div>

        </div>


      </div>
      <div>Featured Work.</div>
      <path d="M17.429 34.776C7.803 34.776 0 26.99 0 17.388 0 7.785 7.803 0 17.429 0c9.625 0 17.428 7.785 17.428 17.388 0 9.603-7.803 17.388-17.428 17.388zm50.364-6.418l.034.034-32.584 32.583-10.792-10.792L44.524 30.11c-.319-.274-.63-.562-.933-.865-6.457-6.457-6.476-16.906-.043-23.34 6.434-6.433 16.883-6.414 23.34.043 6.155 6.154 6.46 15.936.905 22.41z" fill="#33343E"></path>

    </div>




  )
}
