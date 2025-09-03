"use client";

import { useState } from "react";
import { Pageone, Pagetwo, Pagethree } from "@/components";

export default function Home() {
  const [step, setStep] = useState("Page1");
  const [errors, setErrors] = useState({});
  const [from, setFrom] = useState({
    firstname: "",
    Lastname: "",
    Username: "",
    email: "",
    phone: "",
    password: "",
    confirm: "",
    date: "",
    image: "",
  });

  if (step === "Page1") {
    return (
      <div>
        <Pageone
          from={from}
          setFrom={setFrom}
          errors={errors}
          setStep={setStep}
          step={step}
          setErrors={setErrors}
        ></Pageone>
      </div>
    );
  }
  if (step === "Page2") {
    return (
      <div>
        <Pagetwo
          from={from}
          setFrom={setFrom}
          errors={errors}
          setStep={setStep}
          setErrors={setErrors}
        ></Pagetwo>
      </div>
    );
  }
  if (step === "Page3") {
    return (
      <div>
        <Pagethree
          from={from}
          setFrom={setFrom}
          errors={errors}
          setStep={setStep}
        ></Pagethree>
      </div>
    );
  }
  if (step === "Page4") {
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

  function Continue() {
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
  }
  setStep("Page2");
}
