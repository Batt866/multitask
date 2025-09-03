"use client";

import { useState } from "react";
export const Pageone = ({ from, setFrom, errors, setStep, setErrors }) => {
  const Continue = () => {
    const newErrors = {};
    const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ' -]{2,}$/;

    if (nameRegex.test(from.firstname)) {
      newErrors.firstname = null;
    } else {
      newErrors.firstname = "Please write name";
    }

    if (nameRegex.test(from.Lastname)) {
      newErrors.Lastname = null;
    } else {
      newErrors.Lastname = "Please write name";
    }

    if (nameRegex.test(from.Username)) {
      newErrors.Username = null;
    } else {
      newErrors.Username = "Please write name";
    }

    if (!newErrors.firstname && !newErrors.Lastname && !newErrors.Username) {
      setStep("Page2");
    }

    setErrors(newErrors);
  };

  return (
    <div>
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
                  setFrom({
                    ...from,
                    firstname: e.target.value,
                  })
                }
                className="w-[392px] h-[40px] flex p-[12px] items-center rounded-[8px] border-[#8B8E95] border-2 text-black"
              ></input>
              {errors.firstname && (
                <div className="text-red-500">{errors.firstname}</div>
              )}

              <h6 className="text-black mt-5">Last name *</h6>
              <input
                placeholder={"Placeholder"}
                onChange={(e) =>
                  setFrom({
                    ...from,
                    Lastname: e.target.value,
                  })
                }
                value={from.Lastname}
                className="w-[392px] h-[40px] flex p-[12px] items-center rounded-[8px] border-[#8B8E95] border-2 text-black"
              ></input>
              {errors.Lastname && (
                <div className="text-red-500">{errors.Lastname}</div>
              )}
              <h6 className="text-black mt-5">Username *</h6>
              <input
                placeholder={"Placeholder"}
                onChange={(e) =>
                  setFrom({
                    ...from,
                    Username: e.target.value,
                  })
                }
                value={from.Username}
                className="w-[392px] h-[40px] flex p-[12px] items-center rounded-[8px] border-[#8B8E95] border-2 text-black"
              ></input>
              {errors.Username && (
                <div className="text-red-500">{errors.Username}</div>
              )}
            </div>
          </header>
          <button
            className=" w-[392px] h-[40px] bg-[#121316] text-white rounded-[6px]"
            onClick={Continue}
          >
            Continue 1/3
          </button>
        </div>
      </div>
    </div>
  );
};
