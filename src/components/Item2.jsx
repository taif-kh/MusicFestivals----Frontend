import React from 'react';

const Item2 = () => {
  const handleCopy = () => {
    const textToCopy = ` curl --location 'http://localhost:3000/events/4'          `;
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        console.log("Text copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  return (
    <div>
      <div className="w-full h-[600px] py-[22px] px-[98px]">
        <h2 className="w-full">Get event</h2>
        <div className="w-full h-[25px] "></div>
        {/* ----PART 2 //  ---- */}
        <div>
          <div className="flex w-full h-[300px] ">
            <div className="w-[648px] ">
              <div className="flex items-center justify-start gap-x-[24px] ">
              <div className='bg-[#008753] w-[48px] h-[24px] rounded-[6px] flex items-center justify-center text-[12px] '>GET</div>
                <button className="text-[21px]">/events/:id</button>
              </div>
              <div className="h-[55px] w-5 "></div>
              <p className="text-[21px] ">Get a specific event.</p>
            </div>
            <div className="flex flex-col w-[370px] h-full gap-y-[7px] ">
              <div className="flex items-center gap-x-2 ">
                <p className="text-[21px] font-semibold ">Request Sample </p>
                <img
                  src="/copy.png"
                  alt="Copy"
                  className="invert w-[20px] h-[20px] cursor-pointer"
                  onClick={handleCopy}
                />
              </div>
              <div className='w-[350px] h-[233px] bg-[#212121] rounded-[9px] flex font-mono px-[19px] py-[21px] break-words text-[16px] gap-y-[6px] gap-x-1'>
                <p className='text-[16px] '>curl --location </p>
                <p className='text-[16px] text-[#E6DB74] '>   'http://localhost:3000/events/4'</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item2;
