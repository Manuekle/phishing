/* eslint-disable react/no-unknown-property */
import { useState, useEffect } from 'react';

import Copy from '../assets/copy';
import Check from '../assets/check';
import Github from '../assets/github';
function Scrcpy() {
  const [copy1, setCopy1] = useState(false);
  const [copy2, setCopy2] = useState(false);
  const [copy3, setCopy3] = useState(false);

  useEffect(() => {
    if (copy1 || copy2 || copy3) {
      setTimeout(() => {
        setCopy1(false);
        setCopy2(false);
        setCopy3(false);
      }, 2000);
    }
  }, [copy1, copy2, copy3]);
  return (
    <section className="w-full px-10 pt-28 mx-auto max-w-7xl">
      <div className="space-y-12 md:text-left">
        <div className=" space-y-5 sm:mx-auto sm:space-y-4">
          <h2 className="pt-10 pb-5 text-4xl font-black text-center text-white sm:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-indigo-500 to-indigo-200">
              Scrcpy
            </span>
          </h2>
          <h1 className="text-3xl font-normal text-center text-white pb-5">
            Esta herramienta te permite ver y controlar tu dispositivo Android
          </h1>
          <div className=" bg-zinc-900 p-4 px-12 rounded-lg justify-between flex items-center shadow-lg">
            <code className="text-white text-xl">
              $ sudo apt-get install scrcpy
            </code>
            <button
              onClick={() => {
                setCopy1(true);
                navigator.clipboard.writeText('sudo apt-get install scrcpy');
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
          <div className=" bg-zinc-900 p-4 px-12 rounded-lg justify-between flex items-center shadow-lg">
            <code className="text-white text-xl">
              <span className="text-zinc-500"># Modo de uso</span>
              <br />$ sudo scrcpy
            </code>
            <button
              onClick={() => {
                setCopy2(true);
                navigator.clipboard.writeText('scrcpy');
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
          <div className="flex justify-center pt-4">
            <a
              className="flex flex-row gap-4"
              target="blank"
              href="https://github.com/Genymobile/scrcpy"
            >
              <Github className="fill-zinc-300" />
              <h1 className="font-bold text-xl text-white">
                Documentación Scrcpy
              </h1>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Scrcpy;
