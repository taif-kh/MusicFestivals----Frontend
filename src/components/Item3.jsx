import React from 'react';

const Item3 = () => {
  const handleCopy = () => {
    const textToCopy = ` http://localhost:3000/events/api/my_api_key_is_70c50a90b1n0.6651203107661632/event/7       `;
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
        <h2 className="w-full">Delete Event</h2>
        <div className="w-full h-[25px] "></div>
        {/* ----PART 2 //  ---- */}
        <div>
          <div className="flex w-full h-[300px] ">
            <div className="w-[648px] ">
              <div className="flex items-center justify-start gap-x-[24px] ">
              <div className='bg-[#CC0000] w-[48px] h-[24px] rounded-[6px] flex items-center justify-center text-[12px] '>DEL</div>

                <button className="text-[21px]">/events/api/:apiKey/event/:eventId</button>
              </div>
              <div className="h-[55px] w-5 "></div>
              <p className="text-[21px] ">Delete a specific event.</p>
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
              <div className='w-[350px] h-[233px] bg-[#212121] rounded-[9px] font-mono px-[19px] py-[21px] text-[16px] flex flex-col gap-y-[6px] break-words'>
                <p className='text-[16px] '>curl --location --request DELETE</p>
                <p className='text-[16px] text-[#F5AB35] '>'http://localhost:3000/events/api/my_api_key_is_70c50a90b1n0.6651203107661632/event/7'</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item3;
