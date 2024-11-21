import React from 'react';

const Item5 = () => {
  const handleCopy = () => {
    const textToCopy = `
    curl --location 'http://localhost:3000/events/my_api_key_is_70c50a90b1n0.7211857592015423' \
--header 'Content-Type: application/json' \
--data '{
  "name" : "Coldplay WORLD TOUR",     
  "description":    "Coldplay are a British rock band formed in London in 1997. They consist of vocalist and pianist Chris Martin, guitarist Jonny Buckland, bassist Guy Berryman, drummer and percussionist Will Champion, and manager Phil Harvey. They are best known for their live performances, and for impacting popular culture through their music, advocacy and achievements.",
  "date":        "2025-01-09T00:00:00Z",
  "city": "London", 
   "country": "UK", 
  "ticketPrice":  50,
  "artist": "Coldplay",
  "imgUrl": " "
}'
`;
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
        <h2 className="w-full">Limit Result</h2>
        <div className="w-full h-[25px] "></div>
        {/* ----PART 2 //  ---- */}
        <div>
          <div className="flex w-full h-[300px] ">
            <div className="w-[648px] ">
              <div className="flex items-center justify-start gap-x-[24px] ">
                <div className="bg-[#0074E8] w-[48px] h-[24px] rounded-[6px] flex items-center justify-center text-[12px] ">
                  POST
                </div>
                <button className="text-[21px]">/events?limit=5</button>
              </div>
              <div className="h-[55px] w-5 "></div>
              <p className="text-[21px] ">Limit showed results (to 5 events for example). </p>
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
              <div className="w-[350px] h-[550px] bg-[#212121] rounded-[9px] font-mono px-[19px] py-[21px] break-words text-[16px] flex flex-col gap-y-[6px] ">
                <img src="/item1.jpg" className="w-[350px] " alt="Item" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item5;
