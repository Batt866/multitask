export const Pagetwo = ({ from, setFrom, errors, setStep, setErrors }) => {
  const handleonclick2 = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const newErrors = {};
    if (emailRegex.test(from.email)) {
      newErrors.email = null;
    } else {
      newErrors.email = "Wrong email";
    }

    const mnNumberRegex = /^(?:\+976|976)?\s?[689]\d{7}$/;

    if (mnNumberRegex.test(from.phone)) {
      newErrors.phone = null;
    } else {
      newErrors.phone = "Wrong phone";
    }

    const passwordRegex = /^[A-Za-z\d]{8,}$/;

    if (passwordRegex.test(from.password)) {
      newErrors.password = null;
    } else {
      newErrors.password = "wrong password";
    }

    if (passwordRegex.test(from.comfirm)) {
      newErrors.confirm = null;
    } else {
      newErrors.confirm = "wrong comfirm password";
    }

    if (from.password === from.confirm && passwordRegex.test(from.password)) {
      newErrors.confirm = null;
    } else {
      newErrors.confirm = "Wrong password";
    }

    setErrors(newErrors);
    if (
      !newErrors.email &&
      !newErrors.password &&
      !newErrors.confirm &&
      !newErrors.phone
    ) {
      setStep("Page3");
    }
  };
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
              value={from.email}
              onChange={(e) =>
                setFrom({
                  ...from,
                  email: e.target.value,
                })
              }
              className="w-[392px] h-[40px] flex p-[12px] items-center rounded-[8px] border-[#8B8E95] border-2 text-black"
            ></input>

            {!setErrors.email && (
              <div className="text-red-500">{errors.email}</div>
            )}

            <h6 className="text-black mt-3">Phone number *</h6>

            <input
              placeholder={"Placeholder"}
              onChange={(e) =>
                setFrom({
                  ...from,
                  phone: e.target.value,
                })
              }
              value={from.phone}
              className="w-[392px] h-[40px] flex p-[12px] items-center rounded-[8px] border-[#8B8E95] border-2 text-black"
            ></input>

            {errors.phone && <div className="text-red-500">{errors.phone}</div>}

            <h6 className="text-black mt-3">Password *</h6>

            <input
              type="password"
              placeholder={"Placeholder"}
              onChange={(e) =>
                setFrom({
                  ...from,
                  password: e.target.value,
                })
              }
              value={from.password}
              className="w-[392px] h-[40px] flex p-[12px] items-center rounded-[8px] border-[#8B8E95] border-2 text-black"
            ></input>
            {!setErrors.password && (
              <div className="text-red-500">{errors.password}</div>
            )}

            <h6 className="text-black mt-3">confirm password *</h6>
            <input
              type="password"
              placeholder={"Placeholder"}
              onChange={(e) =>
                setFrom({
                  ...from,
                  confirm: e.target.value,
                })
              }
              value={from.confirm}
              className="w-[392px] h-[40px] flex p-[12px] items-center rounded-[8px] border-[#8B8E95] border-2 text-black"
            ></input>
            {!setErrors.confirm && (
              <div className="text-red-500">{errors.confirm}</div>
            )}
          </div>
        </header>
        <div className="flex gap-2">
          <button
            onClick={() => {
              setStep("Page1");
            }}
            className=" w-[142px] h-[40px] bg-white text-black rounded-[6px] border-1"
          >
            Back
          </button>
          <button
            className=" w-[272px] h-[40px] bg-[#121316] text-white rounded-[6px]"
            onClick={handleonclick2}
          >
            Continue 2/3
          </button>
        </div>
      </div>
    </div>
  );
};
