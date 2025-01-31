import React, { useState } from "react";

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
        <div className="relative h-[82px] w-[726px] mx-auto rounded-full bg-misty-purple-gradient-input overflow-hidden">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="myemail@email.com"
            className="h-full w-full bg-transparent px-[42px] pr-[240px] py-[10px] text-[#b0ecfc] leading-[82px]"
          />
          {error && <p className="error">{error}</p>}

          <button type="submit" className="absolute right-[9px] top-[8px] w-[206px] h-[64px] leading-[64px] rounded-full uppercase font-bold text-[#6e073f] bg-gradient-submit-btn">
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
};

export default SubscribeForm;
