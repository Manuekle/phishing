/* eslint-disable react/no-unknown-property */
import { useState, useEffect } from 'react';

import Copy from '../assets/copy';
import Check from '../assets/check';
import Github from '../assets/github';
function Ngrok() {
  const [copy1, setCopy1] = useState(false);

  useEffect(() => {
    if (copy1) {
      setTimeout(() => {
        setCopy1(false);
      }, 2000);
    }
  }, [copy1]);
  return (
    <section className="w-full px-8 lg:px-10 lg:pt-20 lg:mx-auto lg:max-w-7xl">
      <div className="space-y-12 md:text-left">
        <div className=" space-y-5 sm:mx-auto sm:space-y-4">
          <h2 className="pt-10 lg:pt-10 lg:pb-5 text-2xl font-black text-center text-white sm:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-500 via-slate-600 to-slate-400">
              Ngrok
            </span>
          </h2>
          <h1 className="text-lg lg:text-3xl font-normal text-justify lg:text-center text-white pb-5">
            Esta herramienta te permite crear un túnel seguro entre tú y tu
            equipo, esto te permite acceder a tu equipo desde cualquier lugar
            del mundo, sin necesidad de abrir puertos en tu router.
          </h1>
          <div className=" bg-zinc-900 p-4 lg:px-12 rounded-lg justify-between flex items-start shadow-lg">
            <code className="text-white text-sm lg:text-xl">
              <span className="text-zinc-500">
                # El puerto es personalizable
              </span>
              <br />$ ngrok http 80
            </code>
            <div className="lg:block hidden">
              <button
                onClick={() => {
                  setCopy1(true);
                  navigator.clipboard.writeText('ngrok http 80');
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
          <div className="flex justify-center pt-4">
            <a
              className="flex flex-row gap-4"
              target="blank"
              href="https://ngrok.com/"
            >
              <Github className="fill-zinc-300" />
              <h1 className="font-bold text-md lg:text-xl text-white">
                Documentación Ngrok
              </h1>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ngrok;
