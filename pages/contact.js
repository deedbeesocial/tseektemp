import React, { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState("Contract Manufacturing");
  const [info, setInfo] = useState("");
  const [message, setMessage] = useState(false);
  const [visible, setVisible] = useState(false);

  const sendMessage = async (e) => {
    e.preventDefault();
    console.log("working");

    console.log("name", name);
    console.log("email", email);
    console.log("phone", phone);
    console.log("interest", interest);
    console.log("info", info);

    if (!name || !email || !phone || !info) {
      return;
    }

    const response = await fetch(
      "https://prejyihun6edtdi4tyfymegotm0sbtxi.lambda-url.ap-south-1.on.aws/",
      {
        method: "POST",
        headers: {},
        body: JSON.stringify({ name, email, phone, info, interest }),
      }
    );

    console.log("response", response);

    if (response.status === 200) {
      setName("");
      setEmail("");
      setPhone("");
      setInterest("");
      setInfo("");
      setMessage(
        "Your message is sent. We'll get back to you at the earliest!"
      );
    } else {
      console.log(JSON.stringify(response));
    }
  };

  const changeName = (e) => {
    setName(e.target.value);
  };
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePhone = (e) => {
    setPhone(e.target.value);
  };
  const changeInfo = (e) => {
    setInfo(e.target.value);
  };
  const changeInterest = (e) => {
    setInterest(e.target.value);
  };
  if (name && email && phone && info && interest) {
    console.log("iam visible");
  }

  return (
    <>
      <section className="pt-12 pb-12 text-zinc-900 bg-lightgray">
        <div className="md:container p-4 mx-auto">
          <h1 className="text-4xl tracking-wide text-blue md:ml-4 ">
            Contact
          </h1>

          <div className="flex flex-col-reverse md:flex-row justify-center items-start rounded pt-8 ">
            <div className="md:w-2/5 md:mt-0 mt-10 w-full">
              <p className="text-2xl font-semibold  md:ml-4">
              Zenith Energy
              </p>
              <div className="grid gap-10 grid-cols ">
                <div className="text-base pt-8 text-black md:ml-4">
                  
                  <p className="font-semibold">  ZENITH ENERGY SERVICES PVT</p>
                  <p>LTD, 3rd floor, Ramky Grandiose,</p>
                  <p>Gachibowli, Hyderabad -500032</p>
                  <p></p>
                  <p>Tel : +91 9988774455</p>
                  <p>Email:Info@zenithenergy.com </p>
                </div>
                <div className="p-4 lg:p-0 pl-6 mr-6 ">
            <p className="font-semibold text-sm pb-2 text-black text-left md:ml-4">
              FIND US ON
            </p>
            <div className="lg:grid-cols-2 flex justify-center gap-4 lg:inline-grid md:ml-4">
              <a
                className="hover:scale-105 transition-all"
                href=""
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  className="w-10 h-10 facebook"
                  width="100"
                  height="100"
                  viewBox="0 0 187 187"
                >
                  <rect
                    width="187"
                    height="187"
                    fill="#3b5998"
                    rx="18"
                    ry="18"
                  />
                  <path
                    fill="#fefefe"
                    d="M131 79l0 -12c0,-6 4,-7 6,-7 3,0 18,0 18,0l0 -27 -24 0c-27,0 -33,20 -33,32l0 14 -15 0 0 19 0 12 16 0c0,35 0,77 0,77l30 0c0,0 0,-42 0,-77l23 0 1 -12 2 -19 -24 0z"
                  />
                </svg>
              </a>
              <a
                className="hover:scale-105 transition-all"
                href=""
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  className="w-10 h-10 twitter"
                  width="100"
                  height="100"
                  viewBox="0 0 384 384"
                >
                  <rect
                    width="384"
                    height="384"
                    fill="#1DA1F2"
                    rx="37"
                    ry="37"
                  />
                  <path
                    fill="#fefefe"
                    d="M313 118c-9,4 -19,6 -29,8 11,-7 19,-16 22,-28 -9,6 -20,10 -31,12 -9,-9 -22,-15 -37,-15 -27,0 -49,22 -49,49 0,4 0,7 1,11 -41,-2 -78,-22 -102,-51 -5,7 -7,15 -7,24 0,17 9,32 22,41 -8,0 -16,-2 -23,-6 0,0 0,0 0,1 0,6 2,12 4,17 6,16 20,27 36,31 -4,1 -8,1 -13,1 -3,0 -6,0 -9,-1 6,20 25,34 46,34 -17,14 -38,21 -61,21 -5,0 -8,0 -12,0 22,14 48,22 76,22 78,0 125,-54 138,-110 2,-10 3,-20 3,-30 0,-2 0,-4 0,-6 10,-7 18,-15 25,-25z"
                  />
                </svg>
              </a>
              <a
                className="hover:scale-105 transition-all"
                href=""
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  className="w-10 h-10 linkedin"
                  width="100"
                  height="100"
                  viewBox="0 0 201 201"
                >
                  <rect
                    width="201"
                    height="201"
                    fill="#0072b1"
                    rx="19"
                    ry="19"
                  />
                  <polygon
                    fill="#fefefe"
                    points="39 102 39 162 68 162 68 97 68 80 39 80"
                  />
                  <path
                    fill="#fefefe"
                    d="M54 39c-8 0-15 7-15 15 0 7 7 14 15 14 7 0 14-7 14-14 0-8-7-15-14-15zM161 105c-2-15-9-25-30-25-12 0-20 5-24 11l0 0 0-11-23 0 0 16 0 66 24 0 0-41c0-10 2-21 15-21 13 0 14 13 14 22l0 40 25 0 0-45 0 0c0-4 0-8-1-12z"
                  />
                </svg>
              </a>

              <a
                className="hover:scale-105 transition-all"
                href=""
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  className="w-10 h-10 youtube"
                  width="100"
                  height="100"
                  viewBox="0 0 5067 5067"
                >
                  <rect
                    width="5067"
                    height="5067"
                    fill="#c4302b"
                    rx="489"
                    ry="489"
                  />
                  <path
                    fill="#fefefe"
                    d="M3110 2497l-933 504 0 -776 0 -236 421 229 512 279zm1116 -684c0,0 -33,-248 -137,-357 -131,-144 -278,-145 -346,-153 -483,-36 -1208,-36 -1208,-36l-2 0c0,0 -725,0 -1209,36 -67,8 -214,9 -346,153 -103,109 -137,357 -137,357 0,0 -35,292 -35,583l0 36 0 238c0,291 35,583 35,583 0,0 34,248 137,357 132,144 304,139 381,154 277,28 1175,36 1175,36 0,0 726,-1 1209,-37 68,-9 215,-9 346,-153 104,-109 137,-357 137,-357 0,0 35,-292 35,-583l0 -223 0 -51c0,-291 -35,-583 -35,-583z"
                  />
                </svg>
              </a>
            </div>
          </div>
              </div>
              
            </div>
            <div className="md:w-3/5 w-full">
              <div className=" md:pt-0 pt-12">
                <h2 className="text-2xl text-black ">Write to us</h2>
                <form className="mt-8" onSubmit={sendMessage}>
                  <div className="lg:grid flex flex-col justify-center lg:grid-cols-2 gap-6">
                    <label className="block">
                      <span className="text-black">Name</span>
                      <input
                        type="text"
                        className="block  w-full lg:h-[47px] rounded-sm   focus:border-green-700 focus:ring focus:ring-green-100 focus:ring-opacity-50"
                        placeholder=""
                        value={name}
                        onChange={changeName}
                      />
                    </label>
                    <label className="block">
                      <span className="text-black">Email</span>
                      <input
                        type="email"
                        className=" block w-full rounded-sm    lg:h-[47px]  focus:border-green focus:ring focus:ring-green focus:ring-opacity-50"
                        placeholder=""
                        value={email}
                        onChange={changeEmail}
                      />
                    </label>
                    <label className="block">
                      <span className="text-black">Phone</span>
                      <input
                        type="tel"
                        className=" block  rounded-sm w-full lg:h-[47px] border focus:border-green-700 focus:ring focus:ring-green-100 focus:ring-opacity-50"
                        placeholder=""
                        value={phone}
                        onChange={changePhone}
                      />
                    </label>

                    <label className="block">
                      <span className="text-black">
                        What are you looking for?
                      </span>
                      <select
                        onChange={changeInterest}
                        className=" block w-full    lg:h-[47px] rounded-sm border-black focus:border-green-700 focus:ring focus:ring-green-100 focus:ring-opacity-50"
                      >
                        
                        <option>Energy Efficiency </option>
                        <option>Solar Energy </option>
                        <option>Water Management</option>
                        <option> Carbon Trading</option>

                        <option>Others</option>
                      </select>
                    </label>
                  </div>
                  <div className="mt-6">
                  <label className="block">
                      <span className="text-black">
                      How Did You Hear About us?
                      </span>
                      <select
                        onChange={changeInterest}
                        className=" block w-full    lg:h-[47px] rounded-sm border-black focus:border-green-700 focus:ring focus:ring-green-100 focus:ring-opacity-50"
                      >
                         <option>Search Engine(Google,Yahoo,etc)</option>
                        <option> Recommended By Friends </option>
                        <option>Social Media</option>
                        <option> Blog Or Publication </option>

                        <option>Others</option>
                       
                      
                      </select>
                    </label>
                  </div>
                  <label className="block mt-6">
                    <span className="text-black">Additional details</span>
                    <textarea
                      className="mt-1 block w-full   lg:h-28 rounded-sm border-black focus:border-green-700 focus:ring focus:ring-green-100 focus:ring-opacity-50"
                      rows="3"
                      value={info}
                      onChange={changeInfo}
                    ></textarea>
                  </label>
                  <div className="w-full flex justify-center items-center">
                    {message ? (
                      <p className="text-green text-md font-semibold pt-6 ">
                        {message}
                      </p>
                    ) : (
                      <button
                        className={`w-32 mt-6 bg-orange1 text-black font-bold text-xs   p-3 rounded-sm transition-all ${
                          name && email && phone && info && interest
                            ? "opacity-100"
                            : "opacity-25"
                        }`}
                      >
                        SEND
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30450.31999417214!2d78.33045997910156!3d17.445828600000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb973fa6843ec7%3A0x255a0d8737e35814!2sZenith%20Energy%20Services%20Private%20Limited!5e0!3m2!1sen!2sin!4v1659440207093!5m2!1sen!2sin"
          width="100%"
          height="600"
          
        
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
}
{
  /* <button className={`w-32 mt-6 bg-orange text-black font-bold text-xs   p-3 rounded-sm transition-all ${name && email && phone && info && interest?"opacity-100":"opacity-25"}`}>
SEND
</button> */
}
