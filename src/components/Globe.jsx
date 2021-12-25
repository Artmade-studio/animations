import { h, Component } from "preact";
import { useEffect, useState, useRef } from "preact/hooks";
import { gsap } from "gsap";
import PJS from "particles.js-es";
import options from "/public/particlesjs-config.json";

const Globe = () => {
  let globe = useRef(null);
  let logo = useRef(null);
  const tl = gsap.timeline({ paused: true });
  useEffect(() => {
    PJS.init("snow", options);
    globe.addEventListener("mouseenter", (e) => {
      tl.fromTo(
        globe,
        { rotateZ: 45 },
        {
          rotateZ: -45,
          duration: 0.5,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          transformOrigin: "center bottom",
        },
        0
      ).fromTo(
        logo,
        {
          xPercent: 100,
        },
        {
          xPercent: -100,
          duration: 0.5,
          repeat: -1,
          // repeatDelay: 1,
          yoyo: true,
          ease: "power1.inOut",
          // transformOrigin: "center top",
        },
        0
      );
      tl.play();
    });
    globe.addEventListener("mouseleave", (e) => {
      tl.pause(1.75);
    });
  }, []);

  return (
    <div class="flex flex-col justify-center items-center container mx-auto h-screen p-4">
      <h1 class="font-dancing-script text-6xl uppercase text-white p-4">
        merry christmas
      </h1>
      <div ref={(el) => (globe = el)}>
        <div class=" relative flex justify-center items-center shadow-lg shadow-red-500/50 w-96 h-96 rounded-full overflow-hidden">
          <div class="absolute h-full w-full backdrop-blur-sm bg-white/10 " />
          <div class="absolute h-full w-full bg-gradient-radial-at-t rounded-full from-white to-transparent" />
          <div id="snow" class="absolute h-full w-full"></div>
          <svg
            class="h-24 w-24 z-10"
            viewBox="0 0 260 260"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            ref={(el) => (logo = el)}
          >
            <path
              id="a"
              class="text-white"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M163.008 18.929c1.944 2.413 2.935 5.67 4.917 12.181l43.309 142.27a180.277 180.277 0 00-51.778-17.53l-28.198-95.29a3.67 3.67 0 00-7.042.01l-27.857 95.232a180.225 180.225 0 00-52.01 17.557l43.52-142.281c1.99-6.502 2.983-9.752 4.927-12.16a15.999 15.999 0 016.484-4.798c2.872-1.154 6.271-1.154 13.07-1.154h31.085c6.807 0 10.211 0 13.086 1.157a16.004 16.004 0 016.487 4.806z"
            ></path>
            <path
              id="flame"
              class="text-orange-400"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M168.19 180.151c-7.139 6.105-21.39 10.268-37.804 10.268-20.147 0-37.033-6.272-41.513-14.707-1.602 4.835-1.961 10.367-1.961 13.902 0 0-1.056 17.355 11.015 29.426 0-6.268 5.081-11.349 11.349-11.349 10.743 0 10.731 9.373 10.721 16.977v.679c0 11.542 7.054 21.436 17.086 25.606a23.27 23.27 0 01-2.339-10.2c0-11.008 6.463-15.107 13.974-19.87 5.976-3.79 12.616-8.001 17.192-16.449a31.024 31.024 0 003.743-14.82c0-3.299-.513-6.479-1.463-9.463z"
            ></path>
          </svg>
        </div>
        <div class="flex flex-col justify-center items-center">
          <div class="w-64 h-10 bg-gradient-to-t from-black to-slate-800 rounded-tl-3xl rounded-tr-3xl"></div>
          <div class="w-72 h-10 bg-gradient-to-t from-black to-slate-800 rounded-tl-3xl rounded-tr-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Globe;
