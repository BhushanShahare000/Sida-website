"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import lawyer from "./../../../public/lawyer.png";
import arrow from "./../../../public/arrow.png";
import legal from "./../../../public/legal.png";
import logo from "./../../../public/logo.png";
import person_3 from "./../../../public/person_3.png";
import person_2 from "./../../../public/person_2.png";
import person_1 from "./../../../public/person_1.png";
import { steps } from "../Data/DummyData";
import { whyChooseUsData } from "../Data/DummyData";
import { comparisonData } from "../Data/DummyData";
import { testimonials } from "../Data/DummyData";
import { faqs } from "../Data/DummyData";
import Link from "next/link";

const LandingPage = () => {
  const carouselRef = useRef(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const scrollTo = (direction: "left" | "right") => {
    const container = carouselRef.current;
    if (!container) return;

    // ✅ Ensure firstChild is an HTMLElement before using offsetWidth
    const firstChild = container.firstElementChild as HTMLElement | null;
    if (!firstChild) return;

    const cardWidth = firstChild.offsetWidth + 32; // card width + gap
    const scrollAmount = direction === "left" ? -cardWidth : cardWidth;

    container.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full  overflow-hidden">
      <main className="min-h-[calc(100vh-100px)] bg-white z-4 relative flex items-center justify-between px-4 sm:px-12 py-12 sm:py-0 max-w-full">
        {/* Background Shape */}
        <div
          className="absolute top-[-100px] right-0 w-1/3 h-[878.4px] sm:h-screen bg-gradient-to-br from-yellow-200 via-yellow-100 to-50 opacity-80 -z-2"
          style={{
            clipPath: "polygon(0px 0px, 100% 0px, 100% 100%, 50% 100%)",
          }}
        ></div>

        {/* Right Side Image (Desktop) */}
        <div className="absolute bottom-0 right-0 sm:right-32 hidden sm:block overflow-hidden opacity-100 max-w-none">
          <Image
            alt="Woman Lawyer"
            width={750}
            height={750}
            className="w-[80vh] max-w-none"
            src={lawyer}
          />
        </div>

        {/* Left Content Section */}
        <div className="w-full sm:w-1/2 flex flex-col gap-8 z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-[#0A0B5C] text-center sm:text-left">
            Medence Legal
          </h1>
          <p className="text-lg sm:text-xl lg:text-3xl text-gray-500 text-center sm:text-left">
            Your Personal Lawyer. On <br /> Your Side, Always.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Mobile Image */}
            <div className="mb-4 block sm:hidden w-full  justify-center overflow-hidden">
              <Image
                alt="Woman Lawyer"
                width={750}
                height={750}
                className="w-full max-w-[720px] h-auto"
                src={lawyer}
              />
            </div>

            <button className="px-6 sm:px-8 py-4 text-[#0A0B5C] font-semibold bg-yellow-100 rounded-full shadow hover:bg-yellow-200 transition">
              Check Plans
            </button>

            <button className="border-2 border-[#0A0B5C] sm:border-0 flex items-center justify-center gap-2 px-6 sm:px-8 py-4 text-[#0A0B5C] font-semibold rounded-full hover:bg-gray-200 transition">
              Book a Call
              <Image
                alt="arrow"
                width={32}
                height={32}
                className="object-contain"
                src={arrow}
              />
            </button>
          </div>
        </div>
      </main>
      <section className="about-section overflow-x-hidden py-8 px-4 md:py-12 md:px-12">
        <div className="mx-auto flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0">
          {/* Left Text Section */}
          <div className="about-text flex-1">
            <div className="w-full lg:w-[80%]">
              {/* Avatars */}
              <div className="flex items-center mb-12 relative">
                <Image
                  alt="Person 1"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full absolute top-0 left-0"
                  src={person_1}
                />
                <Image
                  alt="Person 2"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full absolute top-0 left-6"
                  src={person_2}
                />
                <Image
                  alt="Person 3"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full absolute top-0 left-12"
                  src={person_3}
                />
              </div>

              {/* Text Content */}
              <h1 className="text-2xl text-black md:text-4xl font-bold mb-4 leading-tight">
                Welcome to Medence Legal.
                <br className="hidden lg:block" />
              </h1>
              <p className="text-sm md:text-base text-gray-600 mb-6">
                Just like insurance, you pay a simple fee upfront — and when
                trouble comes, we handle the legal fight for you.
                <br />
                No chasing lawyers. No high legal bills. Just peace of mind for
                tenants, consumers, and everyday legal needs.
                <br />
                It&apos;s like having a personal lawyer in your corner to tackle
                the world for you.
              </p>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="about-image flex-1 flex justify-end">
            <div className="rounded-3xl overflow-hidden shadow-lg w-full max-w-[500px] sm:w-[80%] lg:w-[80%]">
              <Image
                alt="legal"
                width={600}
                height={400}
                className="object-cover max-h-[80vh] w-full"
                src={legal}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-white">
        <div className="mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-12 text-[#080414]">
            How It Works
          </h2>

          <div className="relative grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className="relative flex flex-col items-center"
              >
                {/* Icon */}
                <div
                  className="w-16 h-16 flex items-center justify-center rounded-full mb-2"
                  style={{ backgroundColor: "rgb(8, 4, 20)" }}
                >
                  {step.icon}
                </div>

                {/* Title */}
                <h3 className="font-semibold text-lg mb-2 text-[#080414]">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-center">{step.description}</p>

                {/* Dotted line between steps */}
                {index < steps.length - 1 && (
                  <div
                    className="absolute hidden md:block w-px h-16 border-dotted border-gray-600"
                    style={{
                      top: "6rem",
                      left: "50%",
                      transform: "translateX(-50%)",
                    }}
                  ></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      (
      <section className="my-8 mx-4 md:my-12 md:mx-12 bg-gray-900 rounded-3xl">
        {/* Title */}
        <div className="py-8 px-6 md:px-24 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white">
            Why choose us?
          </h2>
        </div>

        {/* Desktop layout */}
        <div className="hidden sm:flex relative flex-row justify-center gap-12 py-8">
          {whyChooseUsData.map((item, index) => (
            <div
              key={item.id}
              className="flex flex-col gap-4 w-80 p-8 rounded-2xl text-black"
              style={{
                backgroundColor: item.bgColor,
                transform: `translateX(${index * 2}rem)`,
              }}
            >
              <h3 className="text-xl sm:text-2xl font-semibold">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base">{item.description}</p>
              <hr className="border-t border-gray-500" />
              <ul className="list-disc list-inside text-xs sm:text-sm space-y-1">
                {item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mobile layout */}
        <div className="flex flex-col sm:hidden gap-4 px-4 pb-8">
          {whyChooseUsData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-4 p-8 rounded-2xl text-black"
              style={{ backgroundColor: item.bgColor }}
            >
              <h3 className="text-xl sm:text-2xl font-semibold">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base">{item.description}</p>
              <hr className="border-t border-gray-500" />
              <ul className="list-disc list-inside text-xs sm:text-sm space-y-1">
                {item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <section className="py-8 px-4 md:py-12 md:px-12">
        <div className="mx-auto max-w-6xl">
          {/* Section Heading */}
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#0A0B5C] mb-8 min-h-[3rem] flex items-center justify-center">
            How{" "}
            <span className="ml-2 relative">
              Are We Dif
              <span className="animate-pulse ml-1 text-[#0A0B5C]">|</span>
            </span>
          </h2>

          {/* Table / Comparison */}
          <div className="grid grid-cols-3 text-center md:text-left gap-2 md:gap-4">
            {/* Header Row */}
            <div></div>
            <div className="px-1 md:px-2">
              <div className="text-base md:text-xl bg-green-50 text-[#0A0B5C] font-semibold py-3 px-2 md:px-4 rounded-md flex justify-center items-center">
                <Image
                  src={logo}
                  alt="Medence logo"
                  width={40}
                  height={40}
                  className="object-contain md:w-[60px] md:h-[60px]"
                />
                <span className="hidden sm:inline-block ml-2">
                  Medence Legal
                </span>
              </div>
            </div>
            <div className="pl-1 md:pl-2">
              <div className="text-xs sm:text-sm md:text-xl bg-red-100 text-red-800 font-medium py-3 px-1 sm:px-2 md:px-4 rounded-md flex justify-center items-center">
                Other{" "}
                <span className="block sm:inline">&quot;Typical&quot;</span>{" "}
                Lawyers
              </div>
            </div>

            {/* Data Rows */}
            {comparisonData.map((row, index) => (
              <React.Fragment key={index}>
                <div className="border-y border-gray-200 pr-1 md:pr-2">
                  <div className="py-4 px-2 md:px-4 text-gray-900 bg-white font-medium text-xs sm:text-base md:text-xl">
                    {row.feature}
                  </div>
                </div>
                <div className="px-1 md:px-2 border-y text-black border-gray-200 bg-green-50">
                  <div className="py-4 px-2 md:px-4 text-center font-medium text-xs sm:text-base md:text-xl">
                    {row.medence}
                  </div>
                </div>
                <div className="pl-1 md:pl-2 border-y text-black border-gray-200">
                  <div className="py-4 px-1 sm:px-2 md:px-4 text-center bg-red-50 h-full font-medium text-xs sm:text-sm md:text-xl">
                    {row.other}
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
      {/* testimonials */}
      <section className="py-12 flex flex-col min-h-[520px]">
        {/* Heading */}
        <div className="flex justify-between items-center px-4 sm:px-12">
          <div className="flex text-black flex-col gap-2">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              HEAR IT FROM OUR USERS
            </h2>
            <p className="text-sm sm:text-base sm:max-w-md">
              Discover the valuable feedback and testimonials from our satisfied
              clients about their experiences with us.
            </p>
          </div>
          {/* Buttons */}
          <div className="hidden sm:flex space-x-4">
            <button
              onClick={() => scrollTo("left")}
              className="p-2 bg-gray-300 rounded-full hover:bg-gray-400 focus:outline-none"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                className="text-gray-700"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path>
              </svg>
            </button>
            <button
              onClick={() => scrollTo("right")}
              className="p-2 bg-gray-300 rounded-full hover:bg-gray-400 focus:outline-none"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                className="text-gray-700"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={carouselRef}
          className="flex gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-4 sm:px-12 py-8"
        >
          {testimonials.map((t, i) => (
            <div key={i} className="snap-center flex-shrink-0 w-96">
              <div className="bg-white border-2 border-black rounded-lg p-6 transition-transform duration-300 hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl w-full h-full">
                <div className="flex items-center mb-4">
                  <Image
                    src={t.image.one!}
                    alt={t.name}
                    width={48}
                    height={48}
                    className="rounded-full border-2 border-black object-cover"
                  />

                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-black">
                      {t.name}
                    </h3>
                    <p className="text-sm text-gray-600">{t.role}</p>
                  </div>
                </div>
                <p className="text-gray-800 mb-4 leading-relaxed">{t.review}</p>
                <div className="flex justify-between items-center">
                  <div className="flex text-yellow-400">
                    {Array(t.rating)
                      .fill("★")
                      .map((star, index) => (
                        <span key={index} className="text-lg">
                          {star}
                        </span>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="py-8 px-4 md:py-12 md:px-12  bg-white flex flex-col items-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-black text-center">
          TRUSTED BY OUR USERS
        </h2>
        <p className="mb-6 text-gray-600 text-sm md:text-base text-center">
          Medence Legal is backed by results, not just words
        </p>

        <div className="flex flex-col md:flex-row justify-around space-y-6 md:space-y-0 md:space-x-48 bg-white shadow-md border-t rounded-lg p-6 md:p-24 border-gray-200 w-full">
          <div className="text-center">
            <p className="text-2xl md:text-6xl font-bold text-blue-700">
              27.45+
            </p>
            <p className="text-gray-600 text-sm md:text-base">
              crore worth of assets under <br /> litigation handled
            </p>
          </div>

          <div className="text-center">
            <p className="text-2xl md:text-6xl font-bold text-blue-700">
              73,000
            </p>
            <p className="text-gray-600 text-sm md:text-base">
              Average Money Saved per User
            </p>
          </div>

          <div className="text-center">
            <p className="text-2xl md:text-6xl font-bold text-blue-700">4.83</p>
            <p className="text-gray-600 text-sm md:text-base">Average Rating</p>
          </div>
        </div>
      </section>
      <section className="py-8 text-black px-4 md:py-12 md:px-12 flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="mb-6 text-sm md:text-base">
            Still have any questions? Contact our Team via{" "}
            <a
              className="text-blue-600 underline"
              href="mailto:support@medencelegal.in"
            >
              support@medencelegal.in
            </a>
          </p>
          <Link href="/">
            <button className="border rounded px-4 py-2 text-sm font-medium hover:bg-gray-200 transition w-full md:w-auto">
              See All FAQ&apos;s
            </button>
          </Link>
        </div>

        <div className="md:w-2/3 text-black space-y-4 border p-4 md:p-8 rounded-md">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-4 flex justify-between items-center text-sm md:text-md font-semibold"
              >
                {faq}
                <span className="bg-blue-700 text-white rounded p-1">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="0"
                    viewBox="0 0 15 15"
                    className={`transition-transform rotate-45 ${
                      openIndex === index ? "rotate-90" : ""
                    }`}
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
              </button>
              {openIndex === index && (
                <div className="p-4 border-t text-gray-600">
                  {/* Placeholder content for FAQ answer */}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      <a
        href="https://wa.me/918901664959"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-5 rounded-full shadow-lg transition-all duration-300"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 448 512"
          className="w-7 h-7"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
        </svg>
      </a>
    </div>
  );
};

export default LandingPage;
