"use client";
import React, { useState } from "react";
import Image from "next/image";

const SubscribeForm = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setError("This field is required");
      return;
    }

    const emailPattern = /^[^@]+@[^@]+\.[^@]+$/;
    if (!emailPattern.test(email)) {
      setError("Invalid email format");
      return;
    }

    setError(null);

    console.log("Form data: ", email);

    setEmail("");
  };

  return (
    <div
      className={
        "rounded-2xl p-6 lg:p-14 xl:p-20 bg-card-light-purple-gradient"
      }
    >
      <h3
        className={
          "mb-7 lg:mb-12 font-bold text-2xl lg:text-[36px] xl:text-5xl"
        }
      >
        Register your interest & Sign up for our email newsletter{" "}
      </h3>
      <form onSubmit={handleSubmit} className="form">
        <div className="relative h-[72px] md:h-[82px] w-[726px] max-w-[100%] mx-auto rounded-full overflow-hidden">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="myemail@email.com"
            className={`!leading-[1.2] rounded-full bg-misty-purple-gradient-input h-full w-full bg-transparent pt-[20px] pb-[26px] px-[42px] pr-[80px] md:pr-[240px] text-[#fff] md:text-custom-xl tracking-tighter border ${
              error
                ? "!border-[#BC3A2D] !text-[#BC3A2D] border-[2px]"
                : "border-[#51487b] placeholder:text-[#b0ecfc]"
            } focus:border-[#9E8AFF] outline-none focus:border-[2px]`}
          />
          {error && <p className="error">{error}</p>}

          <button
            type="submit"
            className="absolute right-[9px] top-[11px] w-[48px] h-[48px] md:top-[8px] md:w-[206px] md:h-[64px] md:leading-[64px] rounded-full uppercase font-bold text-[#6e073f] btn-submit-gradient md:text-custom-xl hover:bg-blue-gradient-hover"
          >
            <span className={"hidden md:block"}>Subscribe</span>
            <Image
              className={"inline-block md:hidden"}
              src="/images/icon-arrow-right.svg"
              alt="Subscribe"
              width={23}
              height={24}
            />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SubscribeForm;
