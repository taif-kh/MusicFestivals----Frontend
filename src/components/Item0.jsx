import React, { useState, useEffect } from 'react';
import axios from 'axios';




const Item0 = () => {

    return (
        <div>
                          <div className=' w-full h-[600px] py-[22px] px-[98px] '>
              <h2 className='w-full'>List Events</h2>
              <div className='w-full h-[25px] '></div>
                           {/* ----PART 2 //  ---- */}
              <div>
                <div className='flex w-full h-[300px] '>
                  <div className='w-[648px] '>
                  <div className='flex items-center justify-start gap-x-[24px] '>
                <div className='bg-[#008753] w-[48px] h-[24px] rounded-[6px] flex items-center justify-center text-[12px] '>GET</div>
                <p className='text-[21px] '>/events</p>
              </div>
              <div className='h-[55px] w-5 '></div>
              <p className='text-[21px] '>Get a list of all the Events.</p>
                  </div>
              <div className='flex flex-col w-[370px]  h-full gap-y-[7px] '>
              <p className='text-[21px] font-semibold '>Request Sample</p>
              <div className='w-[350px] h-[233px] bg-[#212121] rounded-[9px] font-mono px-[19px] py-[21px] break-words text-[16px] flex flex-col gap-y-[6px] '>
                <p className='text-[16px] '>curl --location --request GET</p>
                <p className='text-[16px] text-[#F5AB35] '>"http://localhost:3000/events"</p>
              </div>
              </div>
                </div>
              </div>
            </div>
        </div>
    )
};

export default Item0;