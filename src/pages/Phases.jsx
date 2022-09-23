/* eslint-disable react/no-unknown-property */
import { useState, useEffect } from 'react';

import Copy from '../assets/copy';
import Check from '../assets/check';

import Github from '../assets/github';
function Phases() {
  const [copy1, setCopy1] = useState(false);
  const [copy2, setCopy2] = useState(false);
  const [copy3, setCopy3] = useState(false);
  const [copy4, setCopy4] = useState(false);
  const [copy5, setCopy5] = useState(false);
  const [copy6, setCopy6] = useState(false);
  const [copy7, setCopy7] = useState(false);
  const [copy8, setCopy8] = useState(false);
  const [copy9, setCopy9] = useState(false);

  useEffect(() => {
    if (
      copy1 ||
      copy2 ||
      copy3 ||
      copy4 ||
      copy5 ||
      copy6 ||
      copy7 ||
      copy8 ||
      copy9
    ) {
      setTimeout(() => {
        setCopy1(false);
        setCopy2(false);
        setCopy3(false);
        setCopy4(false);
        setCopy5(false);
        setCopy6(false);
        setCopy7(false);
        setCopy8(false);
        setCopy9(false);
      }, 2000);
    }
  }, [copy1, copy2, copy3, copy4, copy5, copy6, copy7, copy8, copy9]);
  return (
    <section className="w-full lg:px-10 lg:pt-28 lg:mx-auto lg:max-w-7xl">
      <div className="space-y-12 md:text-left">
        {/* fase 1 */}
        <div id="phase1" className=" space-y-5 sm:mx-auto sm:space-y-4">
          <h2 className="lg:pt-10 pb-5 text-2xl font-black text-center text-white sm:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-500 to-amber-200">
              Fase 1: Recolección de información
            </span>
          </h2>
          <h1 className="text-lg lg:text-3xl font-normal text-justify lg:text-center text-white pb-5">
            Etapa conocida como “Intelligence Gathering” en donde se emplean
            técnicas y herramientas para la obtención de información sobre los
            sistemas informáticos y el reconocimiento de información relevante
            de la empresa u organización.
          </h1>
          <h2 className="pt-5 lg:pt-10 lg:pb-5 text-2xl font-black text-white sm:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-500 to-blue-200">
              Recolección Pasiva
            </span>
          </h2>
          <h1 className="text-lg lg:text-3xl font-normal text-justify text-white pb-5">
            En este tipo de recolección, nunca enviaremos tráfico directamente a
            los sistemas de nuestro objetivo.
          </h1>
          <h2 className="pt-5 lg:pt-10 lg:pb-5 text-2xl font-black text-center text-white sm:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-teal-500 to-teal-200">
              Dmitry
            </span>
          </h2>
          <h1 className="text-lg lg:text-3xl font-normal text-justify lg:text-center text-white pb-5">
            Esta herramienta permite conseguir información de dominios, redes,
            direcciones IP, correos electrónicos, nombres de usuario y más.
          </h1>
          <div className=" bg-zinc-900 p-4 lg:px-12 rounded-lg justify-between flex items-start shadow-lg">
            <code className="text-white text-sm lg:text-xl">
              <span className="text-zinc-500"># Buscar Subdominios</span>
              <br />$ dmitry -s hackthissite.org → subdominios
            </code>
            <div className="lg:block hidden">
              <button
                onClick={() => {
                  setCopy1(true);
                  navigator.clipboard.writeText('dmitry -s hackthissite.org');
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
              <span className="text-zinc-500"># Buscar puertos abiertos</span>
              <br />$ dmitry -p hackthissite.org → puertos
            </code>
            <div className="lg:block hidden">
              <button
                onClick={() => {
                  setCopy2(true);
                  navigator.clipboard.writeText('dmitry -p hackthissite.org');
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
          <h2 className="pt-10 lg:pt-32 lg:pb-5 text-2xl font-black text-center text-white sm:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-orange-500 to-orange-200">
              TheHarvester
            </span>
          </h2>
          <h1 className="text-lg lg:text-3xl font-normal text-justify lg:text-center text-white pb-5">
            Esta herramienta permite la recolección de información publica en
            Internet, como correos electrónicos, subdominios, servidores DNS,
            información de redes sociales, etc.
          </h1>
          <div className=" bg-zinc-900 p-4 lg:px-12 rounded-lg justify-between flex items-start shadow-lg">
            <code className="text-white text-sm lg:text-xl">
              <span className="text-zinc-500"># Buscar correos</span>
              <br />$ theHarvester -d hackthissite.org -l 300 -b all
            </code>
            <div className="lg:block hidden">
              <button
                onClick={() => {
                  setCopy3(true);
                  navigator.clipboard.writeText(
                    'theHarvester -d hackthissite.org -l 300 -b all'
                  );
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
              $ theHarvester -d defendtheweb.net -l 300 -b all -f test
            </code>
            <div className="lg:block hidden">
              <button
                onClick={() => {
                  setCopy4(true);
                  navigator.clipboard.writeText(
                    'theHarvester -d defendtheweb.net -l 300 -b all -f test'
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
          <h2 className="pt-10 lg:pt-32 lg:pb-5 text-2xl font-black text-white sm:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-500 to-blue-200">
              Recolección Activa
            </span>
          </h2>
          <h1 className="text-lg lg:text-3xl font-normal text-justify text-white pb-5">
            Este tipo de actividades posiblemente sea detectada por los sistemas
            objetivo, debido a que incluyen la emisión de tráfico sospechoso o
            malicioso.
          </h1>
          <h2 className="lg:pt-10 lg:pb-5 text-2xl font-black text-center text-white sm:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-stone-300 via-stone-500 to-stone-200">
              nmap
            </span>
          </h2>
          <h1 className="text-lg lg:text-3xl font-normal text-justify lg:text-center text-white pb-5">
            Esta herramienta permite la detección de puertos abiertos, servicios
            y sistemas operativos.
          </h1>
          <div className=" bg-zinc-900 p-4 lg:px-12 rounded-lg justify-between flex items-start shadow-lg">
            <code className="text-white text-sm lg:text-xl">
              <span className="text-zinc-500"># Escaneo de puertos</span>
              <br />$ nmap -sV hackthissite.org
            </code>
            <div className="lg:block hidden">
              <button
                onClick={() => {
                  setCopy5(true);
                  navigator.clipboard.writeText('nmap -sV hackthissite.org');
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
          <div className=" bg-zinc-900 p-4 lg:px-12 rounded-lg justify-between flex items-start shadow-lg">
            <code className="text-white text-sm lg:text-xl">
              <span className="text-zinc-500">
                # Escaneo de puertos de mi maquina
              </span>
              <br />$ nmap -Pn ip_equipo
            </code>
            <div className="lg:block hidden">
              <button
                onClick={() => {
                  setCopy6(true);
                  navigator.clipboard.writeText('nmap -Pn');
                }}
                className="hover:bg-zinc-700 p-2 rounded-lg transition durationitems-start-0 hover:duration-150 delay-100"
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
              <span className="text-zinc-500"># Ejemplo</span>
              <br />$ nmap -p445 --script smb-vuln-ms17-010 192.168.88.246
            </code>
            <div className="lg:block hidden">
              <button
                onClick={() => {
                  setCopy7(true);
                  navigator.clipboard.writeText(
                    'nmap -p445 --script smb-vuln-ms17-010 192.168.88.246'
                  );
                }}
                className="hover:bg-zinc-700 p-2 rounded-lg transition duration-0 hover:duration-150 delay-100"
              >
                {copy7 ? (
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
              href="https://nmap.org/search/?q=Eternal+Blue"
            >
              <Github className="fill-zinc-300" />
              <h1 className="font-bold text-md lg:text-xl text-white">
                Documentación nmap
              </h1>
            </a>
          </div>
        </div>
        {/* fase 2 */}
        <div id="phase2" className="lg:pt-20 space-y-5 sm:mx-auto sm:space-y-4">
          <h2 className="pt-10 lg:pb-5 text-2xl font-black text-center text-white sm:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-500 to-amber-200">
              Fase 2: Análisis de vulnerabilidades
            </span>
          </h2>
          <h1 className="text-lg lg:text-3xl font-normal text-justify lg:text-center text-white pb-5">
            Etapa en la que se emplean técnicas y herramientas para determinar
            las debilidades o vulnerabilidades de un sistema y establecer las
            posibles estrategias de penetración con el objetivo de comprometer
            la seguridad del sistema.
          </h1>
          <h2 className="lg:pt-10 lg:pb-5 text-2xl font-black text-center text-white sm:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-violet-500 to-violet-200">
              Nikto
            </span>
          </h2>
          <h1 className="text-lg lg:text-3xl font-normal text-justify lg:text-center text-white pb-5">
            Esta herramienta es un escáner de vulnerabilidades web que puede
            detectar problemas de seguridad en servidores web.
          </h1>
          <div className=" bg-zinc-900 p-4 lg:px-12 rounded-lg justify-between flex items-start shadow-lg">
            <code className="text-white text-sm lg:text-xl">
              <span className="text-zinc-500"># Buscar Subdominios</span>
              <br />$ nikto -h hackthissite.org
            </code>
            <div className="lg:block hidden">
              <button
                onClick={() => {
                  setCopy8(true);
                  navigator.clipboard.writeText('nikto -h hackthissite.org');
                }}
                className="hover:bg-zinc-700 p-2 rounded-lg transition duration-0 hover:duration-150 delay-100"
              >
                {copy8 ? (
                  <Check className="fill-green-400" />
                ) : (
                  <Copy className="fill-zinc-400" />
                )}
              </button>
            </div>
          </div>
          <div className=" bg-zinc-900 p-4 lg:px-12 rounded-lg justify-between flex items-start shadow-lg">
            <code className="text-white text-sm lg:text-xl">
              <span className="text-zinc-500"># Buscar Subdominios</span>
              <br />$ nikto -h hackthissite.org -p Puerto
            </code>
            <div className="lg:block hidden">
              <button
                onClick={() => {
                  setCopy9(true);
                  navigator.clipboard.writeText(
                    'nikto -h hackthissite.org -p '
                  );
                }}
                className="hover:bg-zinc-700 p-2 rounded-lg transition duration-0 hover:duration-150 delay-100"
              >
                {copy9 ? (
                  <Check className="fill-green-400" />
                ) : (
                  <Copy className="fill-zinc-400" />
                )}
              </button>
            </div>
          </div>
        </div>
        {/* fase 3 */}
        <div id="phase3"  className="lg:pt-20 space-y-5 sm:mx-auto sm:space-y-4">
          <h2 className="pt-10 lg:pb-5 text-2xl font-black text-center text-white sm:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-500 to-amber-200">
              Fase 3: Explotación de vulnerabilidades
            </span>
          </h2>
          <h1 className="text-lg lg:text-3xl font-normal text-justify lg:text-center text-white pb-5">
            Etapa en la que se emplean técnicas y herramientas para comprometer
            la seguridad de los sistemas de información. Se pueden emplear
            varias formas de explotación que van desde los exploits (accesos al
            sistema a través de errores o fallas) hasta los RATs(Remote Acces
            Trojan)
          </h1>
        </div>
      </div>
    </section>
  );
}

export default Phases;
