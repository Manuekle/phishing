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
              <p className="text-4xl font-bold text-white text-justify">
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
              Términos de pentesting
            </span>
          </h2>
          <div className="flex flex-col">
            <h1 className="pt-20 text-4xl font-black text-white sm:text-6xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-300 via-red-400 to-red-500">
                Ataque tipo Payload:
              </span>
            </h1>
            <p className="pt-4 text-3xl font-bold text-white">
              Es un escript bastante simple que nos permite ejecutar un payload
              en un archivo .apk, para esto debemos tener en cuenta que el
              payload debe ser compatible con el sistema operativo que se va a
              ejecutar, en este caso se utilizara un payload de Android.
            </p>
          </div>
          <div className="flex flex-col">
            <h1 className="pt-10 text-4xl font-black text-white sm:text-6xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-green-400 to-green-500">
                Msfvenom:
              </span>
            </h1>
            <p className="pt-4 text-3xl font-bold text-white">
              Msfvenom es una herramienta de metasploit que nos permite crear
              payloads para diferentes sistemas operativos, en este caso se
              utilizara un payload de Android.
            </p>
          </div>
          <div className="flex flex-col">
            <h1 className="pt-10 text-4xl font-black text-white sm:text-6xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500">
                Msfconsole:
              </span>
            </h1>
            <p className="pt-4 text-3xl font-bold text-white">
              Es una herramienta de metasploit que nos permite crear un servidor
              para que el payload se conecte y nos de acceso al dispositivo
              objetivo.
            </p>
          </div>
          <div className="flex flex-col">
            <h1 className="pt-10 text-4xl font-black text-white sm:text-6xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500">
                Reverse TCP:
              </span>
            </h1>
            <p className="pt-4 text-3xl font-bold text-white">
              Un payload de tipo reverse_tcp es un payload que se conecta a un
              servidor que nosotros creamos, para esto debemos tener en cuenta
              que el puerto que se utiliza para la conexión debe estar abierto
              en el firewall del dispositivo objetivo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Practice;
