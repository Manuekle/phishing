/* eslint-disable react/no-unknown-property */
import { useState, useEffect } from 'react';

import Copy from '../assets/copy';
import Check from '../assets/check';
import Github from '../assets/github';

function Zphisher() {
  const [copy1, setCopy1] = useState(false);
  const [copy2, setCopy2] = useState(false);

  useEffect(() => {
    if (copy1 || copy2) {
      setTimeout(() => {
        setCopy1(false);
        setCopy2(false);
      }, 2000);
    }
  }, [copy1, copy2]);

  return (
    <section className="w-full px-8 lg:px-10 lg:pt-28 lg:mx-auto lg:max-w-7xl">
      <div className="space-y-12 md:text-left">
        <div className=" space-y-5 sm:mx-auto sm:space-y-4">
          <h2 className="pt-10 lg:pb-5 text-2xl font-black text-center text-white sm:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-300 via-lime-500 to-lime-100">
              Zphisher
            </span>
          </h2>
          <h1 className="text-lg lg:text-3xl font-normal text-justify lg:text-center text-white pb-5">
            Esta herramienta te permite clonar sitios web para realizar phishing
            como{' '}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-500 to-blue-100">
              Facebook
            </span>
            ,{' '}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-red-500 to-yellow-300">
              Instagram
            </span>
            ,{' '}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-red-300">
              Netflix
            </span>
            , y muchas mas.
          </h1>
          <div className=" bg-zinc-900 p-4 lg:px-12 rounded-lg justify-between flex items-start shadow-lg">
            <code className="text-white text-sm lg:text-xl">
              $ git clone --depth=1 https://github.com/htr-tech/zphisher.git
            </code>
            <div className="lg:block hidden">
              <button
                onClick={() => {
                  setCopy1(true);
                  navigator.clipboard.writeText(
                    'git clone --depth=1 https://github.com/htr-tech/zphisher.git'
                  );
                }}
                className="hover:bg-zinc-700 p-2 rounded-lg transition duration-0 hover:duration-150 delay-100"
              >
                {copy1 ? (
                  <Check className="fill-green-400" />
                ) : (
                  <Copy className="fill-zinc-400" />
                )}
              </button>
            </div>
          </div>
          <div className=" bg-zinc-900 p-4 lg:px-12 rounded-lg justify-between flex items-start shadow-lg">
            <code className="text-white text-sm lg:text-xl">
              $ cd zphisher <br />$ bash zphisher.sh
            </code>
            <div className="lg:block hidden">
              <button
                onClick={() => {
                  setCopy2(true);
                  navigator.clipboard.writeText(
                    'cd zphisher \n bash zphisher.sh'
                  );
                }}
                className="hover:bg-zinc-700 p-2 rounded-lg transition duration-0 hover:duration-150 delay-100"
              >
                {copy2 ? (
                  <Check className="fill-green-400" />
                ) : (
                  <Copy className="fill-zinc-400" />
                )}
              </button>
            </div>
          </div>
          <div className="flex justify-center pt-4">
            <a
              className="flex flex-row gap-4"
              target="blank"
              href="https://github.com/htr-tech/zphisher"
            >
              <Github className="fill-zinc-300" />
              <h1 className="font-bold text-md lg:text-xl text-white">
                Documentación Zphisher
              </h1>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Zphisher;
