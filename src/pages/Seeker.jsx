/* eslint-disable react/no-unknown-property */
import { useState, useEffect } from 'react';

import Copy from '../assets/copy';
import Check from '../assets/check';
import Github from '../assets/github';
function Seeker() {
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
    <section className="w-full px-8 lg:px-10 lg:pt-28 lg:mx-auto lg:max-w-7xl">
      <div className="space-y-12 md:text-left">
        <div className=" space-y-5 sm:mx-auto sm:space-y-4">
          <h2 className="pt-10 lg:pb-5 text-2xl font-black text-center text-white sm:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-purple-500 to-purple-200">
              Seeker
            </span>
          </h2>
          <h1 className="text-lg lg:text-3xl font-normal text-justify lg:text-center text-white pb-5">
            Esta herramienta te permite realizar phishing a través de un enlace
            para obtener información de la víctima, como su ubicación, su
            dirección IP, su proveedor de servicios de Internet, su sistema
            operativo y entre otras cosas.
          </h1>
          <div className="overflow-x-auto w-[310px] no-scrollba lg:w-full bg-zinc-900 p-4 lg:px-12 rounded-lg justify-between flex items-start shadow-lg">
            <code className="text-white text-sm lg:text-xl">
              <span className="text-zinc-500"># Clonar seeker</span>
              <br />$ git clone https://github.com/thewhiteh4t/seeker.git
            </code>
            <div className="lg:block hidden">
              <button
                onClick={() => {
                  setCopy1(true);
                  navigator.clipboard.writeText(
                    'git clone https://github.com/thewhiteh4t/seeker.git'
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
          <div className="bg-zinc-900 p-4 lg:px-12 rounded-lg justify-between flex items-start shadow-lg">
            <code className="text-white text-sm lg:text-xl">
              $ cd seeker/ <br />$ chmod +x install.sh <br />$ ./install.sh
            </code>
            <div className="lg:block hidden">
              <button
                onClick={() => {
                  setCopy2(true);
                  navigator.clipboard.writeText(
                    'cd seeker \n chmod +x install.sh \n ./install.sh'
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
          <div className=" bg-zinc-900 p-4 lg:px-12 rounded-lg justify-between flex items-start shadow-lg">
            <code className="text-white text-sm lg:text-xl">
              <span className="text-zinc-500"># Ejecutar seeker</span>
              <br />$ python3 seeker.py
            </code>
            <div className="lg:block hidden">
              <button
                onClick={() => {
                  setCopy3(true);
                  navigator.clipboard.writeText('python3 seeker.py');
                }}
                className="hover:bg-zinc-700 p-2 rounded-lg transition duration-0 hover:duration-150 delay-100"
              >
                {copy3 ? (
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
              href="https://github.com/thewhiteh4t/seeker"
            >
              <Github className="fill-zinc-300" />
              <h1 className="font-bold text-cd lg:text-xl text-white">
                Documentación Seeker
              </h1>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Seeker;
