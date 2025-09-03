import { useState } from "react";

export const Pagethree = ({ from, setFrom, errors, setStep }) => {
  const [preview, setPreview] = useState();
  const Continue = () => {
    setStep("Page4");
  };
  function handleImageChange(e) {
    const file = e.target.files[0];
    const filePreview = URL.createObjectURL(file);
    setPreview(filePreview);
  }
  return (
    <div>
      <div className="w-[480px] h-[655px] bg-[#FFF] flex flex-col justify-between p-[32px] items-start rounded-[8xp]">
        <header>
          <img className="" src="pinecone-logo.png"></img>
          <br></br>
          <h1 className="text-black font-semibold text-2xl">Join Us! 😎</h1>
          <br></br>
          <h3 className="text-[#8E8E8E] items-center text-base mt-[-16px] font-sans">
            Please provide all current information accurately.
          </h3>

          <div className="mt-5 w-[400px]">
            <h6 className="text-black">date *</h6>
            <div>
              {" "}
              <input
                type="date"
                placeholder={"--/--/--"}
                value={from.date}
                onChange={(e) =>
                  setFrom({
                    ...from,
                    date: e.target.value,
                  })
                }
                className="w-[392px] h-[40px] flex p-[12px] justify-between rounded-[8px] border-[#8B8E95] border-2 text-black"
              />
            </div>
          </div>
          <h6 className="text-black mt-3">Profile image *</h6>
        </header>

        {preview ? (
          <img src={preview} />
        ) : (
          <div className="bg-[#7F7F800D] flex w-full h-52 justify-center items-center relative text-black">
            Add image
            <input
              type="file"
              className="absolute opacity-0 inset-0"
              onChange={handleImageChange}
            />
          </div>
        )}
        <div className="flex gap-2">
          <button
            onClick={() => {
              setStep("Page2");
            }}
            className=" w-[142px] h-[40px] bg-white text-black rounded-[6px] border-1"
          >
            Back
          </button>
          <button
            onClick={Continue}
            className=" w-[272px] h-[40px] bg-[#121316] text-white rounded-[6px]"
          >
            Continue 3/3
          </button>
        </div>
      </div>
    </div>
  );
};
