import React from "react";
import { Link } from "react-router-dom";
import img4 from "../assets/img/1(10).jpeg";

export default function About() {
  return (
    <>
      <main
        className="w-full flex flex-col gap-2 text-justify bg-yellow-300 bg-opacity-50 mb-6 mt-20"
        style={{ height: "80%" }}
      >
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
          <h1 className="mt-6 text-2xl text-center sm:pl-20 md:pl-40 lg:pr-48 sm:mb-0 mb-6">
            ABOUT US
          </h1>
          <div className="mt-4 sm:mt-6 text-center sm:pr-20 md:pr-24 lg:pr-48">
            <Link to="/" className="text-base sm:text-lg">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-base sm:text-lg">About us</span>
          </div>
        </div>

        <div className="flex flex-col w-full sm:flex-row">
          {/* Image section */}
          <div className="w-full h-full sm:w-7/12 overflow-hidden">
            <img
              src={img4}
              alt="The Haweli Resort"
              className="w-full object-fit-contain rounded-sm"
            />
          </div>

          {/* Content Section */}
          <div className=" w-full sm:w-5/12 sm:p-20 p-8">
            <div className="mb-4 sm:mb-6 text-lg whitespace-nowrap font-serif text-center">
              THE HAWELI RESORT
            </div>
            <p className="mb-3 text-base sm:text-lg">
              Our team at "The Haweli Resort & Restaurant " is a dedicated and
              passionate group of individuals committed to ensuring that every
              guest has a memorable and enjoyable experience. From the moment
              you step into our resort, our team is ready to cater to your needs
              with warmth and professionalism. Whether you're here for a grand
              wedding celebration, a corporate conference, or a leisurely stay,
              our staff is well-trained and eager to assist you. We take pride
              in providing top-notch service, and our commitment
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
