"use client";

import { useState } from "react";

export default function Home() {
  const [step, setStep] = useState("basic");
  const [from, setForm] = useState({
    firstname: "",
    Lastname: "",
    Username: "",
  });
  function Continue() {
    setStep("step1");
  }
  function Continue2() {
    setStep("step2");
  }
  const [errors, setErrors] = useState({});
  function gotoNext() {
    const newErrors = {};
    const firstnameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/;
    if (firstnameRegex.test(form.firstname)) {
      newErrors.firstname = null;
    } else {
      newErrors.firstname = "";
    }
    const LastnameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/;
    if (form.Lastname === "") {
      newErrors.Lastname = "";
    } else {
      newErrors.Lastname = null;
    }

    setErrors(newErrors);
    setStep("step1");
  }

  if (step === "basic") {
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

            <div className="mt-5">
              <h6 className="text-black ">First name *</h6>
              <input
                placeholder={"Placeholder"}
                value={from.firstname}
                onChange={(e) =>
                  setForm({
                    ...from,
                    firstname: e.target.value,
                  })
                }
                className="w-[392px] h-[40px] flex p-[12px] items-center rounded-[8px] border-[#8B8E95] border-2 text-black"
              ></input>
              <h6 className="text-black mt-5">Last name *</h6>
              <input
                placeholder={"Placeholder"}
                onChange={(e) =>
                  setForm({
                    ...from,
                    Lastname: e.target.value,
                  })
                }
                value={from.Lastname}
                className="w-[392px] h-[40px] flex p-[12px] items-center rounded-[8px] border-[#8B8E95] border-2 text-black"
              ></input>
              <h6 className="text-black mt-5">Username *</h6>
              <input
                placeholder={"Placeholder"}
                onChange={(e) =>
                  setForm({
                    ...from,
                    Username: e.target.value,
                  })
                }
                value={from.Username}
                className="w-[392px] h-[40px] flex p-[12px] items-center rounded-[8px] border-[#8B8E95] border-2 text-black"
              ></input>
            </div>
          </header>
          <button
            onClick={gotoNext}
            className=" w-[392px] h-[40px] bg-[#121316] text-white rounded-[6px]"
          >
            Continue 1/3
          </button>
        </div>
      </div>
    );
  }
  if (step === "step1") {
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

            <div className="mt-5">
              <h6 className="text-black mt-3">Email *</h6>
              <input
                placeholder={"Placeholder"}
                value={from.firstname}
                onChange={(e) =>
                  setForm({
                    ...from,
                    firstname: e.target.value,
                  })
                }
                className="w-[392px] h-[40px] flex p-[12px] items-center rounded-[8px] border-[#8B8E95] border-2 text-black"
              ></input>
              <h6 className="text-black mt-3">Phone number *</h6>
              <input
                placeholder={"Placeholder"}
                onChange={(e) =>
                  setForm({
                    ...from,
                    Lastname: e.target.value,
                  })
                }
                value={from.Lastname}
                className="w-[392px] h-[40px] flex p-[12px] items-center rounded-[8px] border-[#8B8E95] border-2 text-black"
              ></input>
              <h6 className="text-black mt-3">Password *</h6>
              <input
                placeholder={"Placeholder"}
                onChange={(e) =>
                  setForm({
                    ...from,
                    Username: e.target.value,
                  })
                }
                value={from.Username}
                className="w-[392px] h-[40px] flex p-[12px] items-center rounded-[8px] border-[#8B8E95] border-2 text-black"
              ></input>
              <h6 className="text-black mt-3">confirm password *</h6>
              <input
                placeholder={"Placeholder"}
                onChange={(e) =>
                  setForm({
                    ...from,
                    Username: e.target.value,
                  })
                }
                value={from.Username}
                className="w-[392px] h-[40px] flex p-[12px] items-center rounded-[8px] border-[#8B8E95] border-2 text-black"
              ></input>
            </div>
          </header>
          <div className="flex gap-2">
            <button
              onClick={() => {
                setStep("basic");
              }}
              className=" w-[142px] h-[40px] bg-white text-black rounded-[6px] border-1"
            >
              Back
            </button>
            <button
              onClick={Continue2}
              className=" w-[272px] h-[40px] bg-[#121316] text-white rounded-[6px]"
            >
              Continue 2/3
            </button>
          </div>
        </div>
      </div>
    );
  }
  if (step === "step2") {
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

            <div className="mt-5">
              <h6 className="text-black">First name *</h6>
              <input
                placeholder={"--/--/--"}
                value={from.firstname}
                onChange={(e) =>
                  setForm({
                    ...from,
                    firstname: e.target.value,
                  })
                }
                className="w-[392px] h-[40px] flex p-[12px] items-center rounded-[8px] border-[#8B8E95] border-2 text-black"
              ></input>
            </div>
            <h6 className="text-black mt-3">Profile image *</h6>
          </header>
          <div className="flex gap-2">
            <button
              onClick={() => {
                Continue("step1");
              }}
              className=" w-[142px] h-[40px] bg-white text-black rounded-[6px] border-1"
            >
              Back
            </button>
            <button
              onClick={() => Continue}
              className=" w-[272px] h-[40px] bg-[#121316] text-white rounded-[6px]"
            >
              Continue 3/3
            </button>
          </div>
        </div>
      </div>
    );
  }
  if (step === "step3") {
    return (
      <div>
        <div className="w-[480px] h-[655px] bg-[#FFF] flex flex-col justify-between p-[32px] items-start rounded-[8xp]">
          <header>
            <img className="" src="pinecone-logo.png"></img>
            <br></br>
            <h1 className="text-black font-semibold text-2xl">
              You're All Set 🔥
            </h1>
            <br></br>
            <h3 className="text-[#8E8E8E] items-center text-base mt-[-16px] font-sans">
              We have received your submission. Thank you!
            </h3>
          </header>
        </div>
      </div>
    );
  }
}
