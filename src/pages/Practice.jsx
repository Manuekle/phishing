import Kali from '../assets/kali';
import Android from '../assets/android';

function Practice() {
  return (
    <section className="w-[100em] pt-4 mx-auto">
      <div className="space-y-12 md:text-left">
        <div className=" space-y-5 sm:mx-auto sm:space-y-4">
          <h2 className="pt-44 pb-20 text-4xl font-black text-center text-white sm:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-500 to-blue-100">
              Taller Práctico de Pentesting
            </span>
          </h2>
          <div className="flex flex-col gap-8  items-center">
            <div className="grid grid-cols-3 items-center">
              <span className="pt-28 pb-28 grid justify-center relative">
                <div
                  className="p-56 bg-sky-300 top-[200px] absolute rounded-full left-[40px]"
                  style={{ filter: 'blur(100px)' }}
                ></div>
                <Kali width="900px" className="relative" />
              </span>
              <span className="pt-28 pb-28 grid justify-center relative"></span>
              <span className="pt-28 pb-28 grid justify-center relative">
                <div
                  className="p-56 bg-green-300 top-[150px] absolute rounded-full left-[45px]"
                  style={{ filter: 'blur(100px)' }}
                ></div>
                <Android className="relative" />
              </span>
            </div>
            <div className="flex flex-col">
              <p className="text-3xl font-normal text-white text-justify">
                Kali linux es una distribución de Linux diseñada para la
                seguridad informática y el pentesting. Es una distribución
                derivada de Debian y está basada en el kernel Linux. Kali Linux
                se distribuye en dos versiones: Kali Linux y Kali Linux
                NetHunter. Kali Linux es una distribución de seguridad y
                pentesting que contiene más de 600 herramientas de seguridad y
                pentesting. Kali Linux se puede usar para realizar pruebas de
                penetración, auditorías de seguridad, análisis forense y pruebas
                de seguridad de red.
              </p>
            </div>
          </div>
          <h2 className="pt-44 text-4xl font-black text-center text-white sm:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-500 to-blue-100">
              Vulnerabilidades Informáticas
            </span>
          </h2>
          <h1 className="text-3xl font-normal text-center text-white pb-5">
            Se la puede definir como una falencia o debilidad en un sistema
            informático, el cual coloca en riesgo la seguridad de los activos de
            la información y compromete la integridad, confidencialidad y
            disponibilidad de la información; por lo tanto, es importante
            reconocer, actuar y eliminar la vulnerabilidad encontrada en el
            menor tiempo posible.
          </h1>
          <div className="flex flex-col">
            <h1 className="pt-20 text-4xl font-black text-white sm:text-6xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-300 via-fuchsia-500 to-fuchsia-100">
                Tipos de vulnerabilidades:
              </span>
            </h1>
            <h1 className="pt-20 text-4xl font-black text-white sm:text-6xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-300 via-red-400 to-red-500">
                Ingeniería social:
              </span>
            </h1>
            <p className="pt-4 text-3xl font-normal text-white">
              Consiste cuando delincuentes informáticos se hacen pasar por otras
              personas u organizaciones para engañar a usuarios con el objetivo
              de obtener y robar información o dinero. Ejemplo: spam, phising,
              etc.
            </p>
          </div>
          <div className="flex flex-col">
            <h1 className="pt-10 text-4xl font-black text-white sm:text-6xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-green-400 to-green-500">
                Windows Spoofing:
              </span>
            </h1>
            <p className="pt-4 text-3xl font-normal text-white">
              Se presenta cuando se muestran ventanas y mensajes de notificación
              en el sistema operativo engañando al usuario con sorteos, premios
              y diferentes tipos de estafas.
            </p>
          </div>
          <div className="flex flex-col">
            <h1 className="pt-10 text-4xl font-black text-white sm:text-6xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500">
                Denegación de servicios(DDoS):
              </span>
            </h1>
            <p className="pt-4 text-3xl font-normal text-white">
              Se presenta cuando se realiza un ataque para inundar el ancho de
              banda de la red por un consumo excesivo de este o de recursos
              conectados al sistema. Su propósito es bloquear el servicio para
              que los usuarios no puedan utilizarlo.
            </p>
          </div>
          <div className="flex flex-col">
            <h1 className="pt-10 text-4xl font-black text-white sm:text-6xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500">
                SQL Injection:
              </span>
            </h1>
            <p className="pt-4 text-3xl font-normal text-white">
              Se presenta cuando se inserta código o sentencias SQL con el
              objetivo de alterar el funcionamiento de una base de datos.
            </p>
          </div>
          <div className="flex flex-col">
            <h1 className="pt-10 text-4xl font-black text-white sm:text-6xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-stone-300 via-stone-400 to-stone-500">
                Cross Site Scripting(XSS):
              </span>
            </h1>
            <p className="pt-4 text-3xl font-normal text-white">
              Se presenta en los campos de una aplicación web que no están
              debidamente protegidos y permite ejecutar por los atacantes
              scripts de lenguajes como JavaScript o VBScript, permitiendo
              mostrar información y escalar privilegios.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Practice;
