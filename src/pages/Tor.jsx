
/* eslint-disable react/no-unknown-property */
import { useState, useEffect } from 'react';

import Copy from '../assets/copy';
import Check from '../assets/check';
import TorBrowser from '../assets/tor';

function Tor() {

    const [copy1, setCopy1] = useState(false);
    const [copy2, setCopy2] = useState(false);
    const [copy3, setCopy3] = useState(false);
    const [copy4, setCopy4] = useState(false);
    const [copy5, setCopy5] = useState(false);
    const [copy6, setCopy6] = useState(false);
    const [copy7, setCopy7] = useState(false);
    const [copy8, setCopy8] = useState(false);

    useEffect(() => {
        if (copy1 || copy2 || copy3 || copy4 || copy5 || copy6 || copy7 || copy8) {
            setTimeout(() => {
                setCopy1(false);
                setCopy2(false);
                setCopy3(false);
                setCopy4(false);
                setCopy5(false);
                setCopy6(false);
                setCopy7(false);
                setCopy8(false);
            }, 2000);
        }
    }, [copy1, copy2, copy3, copy4, copy5, copy6, copy7, copy8]);
    return (
        <section className="w-full px-8 lg:px-10 lg:pt-28 lg:mx-auto lg:max-w-7xl">
            <div className="space-y-12 md:text-left">
                <div className=" space-y-5 sm:mx-auto sm:space-y-4">
                    <h2 className="pt-10 lg:pb-5 text-2xl font-black text-center text-white sm:text-6xl">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 purple to-purple-500">
                            Navegador Tor
                        </span>
                    </h2>
                    <span className="pt-28 pb-28 grid justify-center relative">
                        <div
                            style={{
                                filter: 'blur(100px)'
                            }}
                            className="p-28 lg:p-56 bg-purple-400 top-[100px] lg:top-[135px] absolute rounded-full left-[55px] lg:left-[380px] "
                        ></div>
                        <TorBrowser className="relative lg:w-[800px] w-[400px] h-[200px] lg:h-[500px]" />
                    </span>

                    <h1 className="text-lg lg:text-3xl font-normal text-justify lg:text-center text-white pb-5">
                        Tor es un navegador que te permite navegar de forma anónima y segura por internet.
                    </h1>

                    <div className=" bg-zinc-900 p-4 lg:px-12 rounded-lg justify-between flex items-start shadow-lg">
                        <code className="text-white text-sm lg:text-xl">
                            <span className="text-zinc-500"># Instalamos el navegador de tor </span>
                            <br />
                            $ sudo apt-get install torbrowser-launcher

                        </code>
                        <div className="lg:block hidden">
                            <button
                                onClick={() => {
                                    setCopy6(true);
                                    navigator.clipboard.writeText('msfconsole');
                                }}
                                className="hover:bg-zinc-700 p-2 rounded-lg transition duration-0 hover:duration-150 delay-100"
                            >
                                {copy6 ? (
                                    <Check className="fill-green-400" />
                                ) : (
                                    <Copy className="fill-zinc-400" />
                                )}
                            </button>
                        </div>
                    </div>
                    <div className="overflow-x-auto w-[310px] no-scrollba lg:w-full bg-zinc-900 p-4 lg:px-12 rounded-lg justify-between flex items-start shadow-lg">
                        <code className="text-white text-sm lg:text-xl">
                            <span className="text-zinc-500">
                                # Instalación de Kalitorify para cambiar la IP de forma automática
                            </span>
                            <br />
                            $ git clone https://github.com/brainfucksec/kalitorify
                            <br />
                            $ cd kalitorify
                            <br />
                            $ sudo make install
                        </code>
                        <div className="lg:block hidden">
                            <button
                                onClick={() => {
                                    setCopy7(true);
                                    navigator.clipboard.writeText('git clone https://github.com/brainfucksec/kalitorify && cd kalitorify && sudo make install');
                                }}
                                className="flex hover:bg-zinc-700 p-2 rounded-lg transition duration-0 hover:duration-150 delay-100"
                            >
                                {copy7 ? (
                                    <Check className="fill-green-400" />
                                ) : (
                                    <Copy className="fill-zinc-400" />
                                )}
                            </button>
                        </div>
                    </div>

                    <div className=" bg-zinc-900 p-4 lg:px-12 rounded-lg justify-between flex items-start shadow-lg">
                        <code className="text-white text-sm lg:text-xl">
                            <span className="text-zinc-500"># Cambiamos la IP de forma automática</span>

                            <br />$ sudo kalitorify -t
                        </code>
                        <div className="lg:block hidden">
                            <button
                                onClick={() => {
                                    setCopy1(true);
                                    navigator.clipboard.writeText('sudo kalitorify -t');
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
                            <span className="text-zinc-500">
                                # Vemos los puertos que están abiertos en nuestra máquina
                            </span>
                            <br />$ nmap localhost
                        </code>
                        <div className="lg:block hidden">
                            <button
                                onClick={() => {
                                    setCopy2(true);
                                    navigator.clipboard.writeText(
                                        'nmap localhost'
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
                            <span className="text-zinc-500">
                                # Generamos otra IP aleatoria
                            </span>
                            <br />$ sudo kalitorify -r

                        </code>
                        <div className="lg:block hidden">
                            <button
                                onClick={() => {
                                    setCopy3(true);
                                    navigator.clipboard.writeText('sudo kalitorify -r');
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
                    <div className=" bg-zinc-900 p-4 lg:px-12 rounded-lg justify-between flex items-start shadow-lg">
                        <code className="text-white text-sm lg:text-xl">
                            <span className="text-zinc-500">
                                # Cerramos la conexión
                            </span>
                            <br />$ sudo kalitorify -c
                        </code>
                        <div className="lg:block hidden">
                            <button
                                onClick={() => {
                                    setCopy4(true);
                                    navigator.clipboard.writeText(
                                        'sudo kalitorify -c'
                                    );
                                }}
                                className="hover:bg-zinc-700 p-2 rounded-lg transition duration-0 hover:duration-150 delay-100"
                            >
                                {copy4 ? (
                                    <Check className="fill-green-400" />
                                ) : (
                                    <Copy className="fill-zinc-400" />
                                )}
                            </button>
                        </div>
                    </div>
                    <div className=" bg-zinc-900 p-4 lg:px-12 rounded-lg justify-between flex items-start shadow-lg">
                        <code className="text-white text-sm lg:text-xl">
                            <span className="text-zinc-500">
                                # Ejecutamos el navegador Tor
                            </span>
                            <br />$ torbrowser-launcher
                        </code>
                        <div className="lg:block hidden">
                            <button
                                onClick={() => {
                                    setCopy5(true);
                                    navigator.clipboard.writeText('torbrowser-launcher');
                                }}
                                className="hover:bg-zinc-700 p-2 rounded-lg transition duration-0 hover:duration-150 delay-100"
                            >
                                {copy5 ? (
                                    <Check className="fill-green-400" />
                                ) : (
                                    <Copy className="fill-zinc-400" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Tor