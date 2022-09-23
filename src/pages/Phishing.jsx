/* eslint-disable no-unused-vars */
import Gif from '../assets/zs.gif';

import Tips from './Tips';

function Phishing() {
  const phishing =
    'https://cdn3d.iconscout.com/3d/premium/thumb/incognito-mode-5353063-4468795.png';

  const email =
    'https://cdn3d.iconscout.com/3d/premium/thumb/danger-email-5695020-4771077.png';

  const phone =
    'https://cdn3d.iconscout.com/3d/premium/thumb/mobile-key-5695019-4771076.png';

  const sms =
    'https://cdn3d.iconscout.com/3d/premium/thumb/file-duplication-5695011-4771068.png';

  const hacker =
    'https://cdn3d.iconscout.com/3d/premium/thumb/hackers-5695025-4771082.png';

  return (
    <>
      <section className="w-full pt-10 lg:pt-44 mx-auto lg:max-w-7xl mb-20 lg:mb-56">
        <div className="space-y-12 md:text-left">
          <div className=" space-y-5 sm:mx-auto sm:space-y-4">
            <h2 className="pt-10 text-3xl font-black text-center text-white sm:text-6xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-500 to-blue-100">
                ¿Qué es el Pentesting?
              </span>
            </h2>
          </div>
          <div className="lg:pt-10 pt-0">
            <h1 className="text-white font-normal text-lg lg:text-3xl text-justify px-8 lg:px-0">
              Significa test de penetración y consiste en la utilización de
              técnicas, métodos, herramientas, conocimientos e ingenio de una
              persona para descubrir fallas y vulnerabilidades mediante la
              realización de pruebas de penetración en un sistema informático.
            </h1>
            <h1 className="pt-4 text-white font-normal text-lg lg:text-3xl text-justify px-8 lg:px-0">
              💡
              <span className="font-bold text-yellow-400">Algo más: </span>Al
              proceso de pentesting se lo conoce como hacking ético
            </h1>
          </div>
          <div className=" space-y-5 sm:mx-auto sm:space-y-4">
            <h2 className="pt-10 text-3xl font-black text-center text-white sm:text-6xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-500 to-blue-100">
                ¿Qué es el phishing?
              </span>
            </h2>
          </div>
          <div className="pt-0 lg:pt-10 px-8 lg:px-0">
            <h1 className="text-white font-normal text-lg lg:text-3xl text-justify">
              A través del <span className="font-bold">phishing</span> se lanza
              un ataque con fines fraudulentos a millones de usuarios,
              principalmente por medio del{' '}
              <span className="font-bold">correo electrónico</span>. De todos
              ellos algunos caen en la trampa y entregan sus datos.
            </h1>
          </div>
          <div className="lg:block hidden">
            <div className="flex flex-row gap-12 ">
              <div className="relative">
                <div
                  className="w-10 h-96 bg-amber-400 left-3 absolute"
                  style={{ filter: 'blur(30px)' }}
                ></div>
                <div className="relative flex justify-center items-center p-8 bg-amber-400 w-10 h-96 rounded-sm">
                  <h1 className="font-bold text-6xl text-zinc-800">1</h1>
                </div>
              </div>
              <div className="flex justify-center items-start">
                <div className="flex flex-col gap-8">
                  <h1 className="font-bold text-6xl text-white ">
                    Algunos engaños que atraen incautos
                  </h1>
                  <div className="grid grid-cols-3 items-center">
                    <span className="flex justify-start col-span-1">
                      <img
                        src={phishing}
                        alt="phishing"
                        className="relative object-cover w-72"
                      />
                    </span>
                    <div className="col-span-2 flex flex-col gap-4 border-[4px] rounded-lg p-4">
                      <li className="font-bold text-[21px] text-white">
                        Acceda al siguiente enlace para verificar su cuenta
                      </li>
                      <li className="font-bold text-[21px] text-white">
                        Presione el click para descargar el archivo
                      </li>
                      <li className="font-bold text-[21px] text-white">
                        Se ha detectado una actividad sospechosa en su cuenta
                      </li>
                      <li className="font-bold text-[21px] text-white">
                        Eres el visitante número 1000 y tienes un ipad gratis
                      </li>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:hidden block pt-0 lg:pt-10 px-8 lg:px-0">
            <div className="flex flex-col gap-8">
              <div className="relative">
                <div
                  className="w-full bg-amber-400 absolute h-4 top-5"
                  style={{ filter: 'blur(30px)' }}
                ></div>
                <div className="relative flex justify-center items-center p-2 bg-amber-400 w-full rounded-sm">
                  <h1 className="font-bold text-2xl text-zinc-800">1</h1>
                </div>
              </div>
              <div className="flex justify-center items-start">
                <div className="flex flex-col gap-8 items-center">
                  <h1 className="font-bold text-2xl text-white text-center ">
                    Algunos engaños que atraen incautos
                  </h1>
                  <span className="flex justify-start col-span-1">
                    <img
                      src={phishing}
                      alt="phishing"
                      className="relative object-cover w-32"
                    />
                  </span>
                  <div className="col-span-2 flex flex-col gap-4 border-[4px] rounded-lg p-4">
                    <li className="font-bold text-md text-white">
                      Acceda al siguiente enlace para verificar su cuenta
                    </li>
                    <li className="font-bold text-md text-white">
                      Presione el click para descargar el archivo
                    </li>
                    <li className="font-bold text-md text-white">
                      Se ha detectado una actividad sospechosa en su cuenta
                    </li>
                    <li className="font-bold text-md text-white">
                      Eres el visitante número 1000 y tienes un ipad gratis
                    </li>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col pt-0 lg:pt-12 px-8 lg:px-0">
            <h1 className="font-bold text-3xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-500 to-blue-100">
              Ataque de <em>{'"phishing"'}</em>
            </h1>
            <h1 className="text-white font-normal text-lg lg:text-3xl text-justify pt-4 lg:pt-10">
              El atacante suele suplantar marcas, organizaciones oficiales o
              productos populares para engañar a las víctimas. El objetivo es
              que la víctima ingrese sus datos personales, como contraseñas,
              números de tarjetas de crédito, etc. En el caso de que la víctima
              ingrese sus datos, el atacante puede usarlos para robar dinero,
              robar identidad, etc.
            </h1>
            <h1 className="pt-6 lg:pt-12 font-bold text-xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-red-400">
              Una de las formas más fáciles de hacer un ataque de phishing es
              con esta herramienta
            </h1>
            <div className="flex flex-row gap-8 pt-8">
              <img
                src={Gif}
                alt="Gif"
                className="w-[900px] object-cover rounded-lg"
              />
              <div className="flex flex-col gap-8 items-center"></div>
            </div>
          </div>

          <div className="lg:block hidden">
            <div className="grid grid-cols-8 gap-12 pt-12">
              <div className="col-span-7 flex justify-start items-start">
                <div className="flex flex-col gap-8">
                  <h1 className="font-bold text-6xl text-white ">
                    ¿Por qué lo hacen?
                  </h1>
                  <div className="col-span-2 flex flex-col gap-4 border-[4px] rounded-lg p-4">
                    <li className="font-bold text-[21px] text-white">
                      En gran parte de los casos, el objetivo es robar dinero o
                      robar identidad.
                    </li>
                    <li className="font-bold text-[21px] text-white">
                      Espionaje industrial, robo de información confidencial.
                    </li>
                    <li className="font-bold text-[21px] text-white">
                      Instalación de malware o software malicioso.
                    </li>
                    <li className="font-bold text-[21px] text-white">
                      Ataques a sitios web.
                    </li>
                  </div>
                </div>
              </div>
              <div className="flex justify-end items-start col-span-1 relative ">
                <div
                  className="w-10 h-96 bg-amber-400 left-[60px] absolute"
                  style={{ filter: 'blur(30px)' }}
                ></div>
                <div className="relative flex justify-center items-center p-8 bg-amber-400 w-10 h-96 rounded-sm">
                  <h1 className="font-bold text-6xl text-zinc-800">2</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:hidden block pt-0 lg:pt-10 px-8 lg:px-0">
            <div className="flex flex-col gap-8">
              <div className="relative">
                <div
                  className="w-full bg-amber-400 absolute h-4 top-5"
                  style={{ filter: 'blur(30px)' }}
                ></div>
                <div className="relative flex justify-center items-center p-2 bg-amber-400 w-full rounded-sm">
                  <h1 className="font-bold text-2xl text-zinc-800">2</h1>
                </div>
              </div>
              <div className="flex justify-center items-start">
                <div className="flex flex-col gap-8 items-center">
                  <h1 className="font-bold text-2xl text-white text-center ">
                    ¿Por qué lo hacen?
                  </h1>
                  <div className="col-span-2 flex flex-col gap-4 border-[4px] rounded-lg p-4">
                    <li className="font-bold text-md text-white">
                      En gran parte de los casos, el objetivo es robar dinero o
                      robar identidad.
                    </li>
                    <li className="font-bold text-md text-white">
                      Espionaje industrial, robo de información confidencial.
                    </li>
                    <li className="font-bold text-md text-white">
                      Instalación de malware o software malicioso.
                    </li>
                    <li className="font-bold text-md text-white">
                      Ataques a sitios web.
                    </li>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:block hidden">
            <div className="flex flex-row gap-12 pt-12">
              <div className="relative">
                <div
                  className="w-10 h-[600px] bg-amber-400 left-3 absolute"
                  style={{ filter: 'blur(30px)' }}
                ></div>
                <div className="relative flex justify-center items-center p-8 bg-amber-400 w-10 h-[600px] rounded-sm">
                  <h1 className="font-bold text-6xl text-zinc-800">3</h1>
                </div>
              </div>
              <div className="flex justify-center items-start">
                <div className="flex flex-col gap-8">
                  <h1 className="font-bold text-6xl text-white ">
                    Variantes de Phishing
                  </h1>
                  <div className="flex flex-row gap-4">
                    <div className="flex flex-col w-[300px] border-[3px] p-4 rounded-lg">
                      <div className="relative">
                        <img
                          src={email}
                          alt="email"
                          className="relative object-cover w-72"
                        />
                        <span className="absolute rounded-full backdrop-saturate-50 bg-zinc-500/30 backdrop-blur-sm bottom-10 left-[150px]">
                          <h1 className="font-bold text-3xl text-white py-4 px-[26px]">
                            1
                          </h1>
                        </span>
                      </div>
                      <h1 className="font-bold text-white text-2xl text-center pb-8 ">
                        Por Correo Electrónico
                      </h1>
                      <p className="font-normal text-white text-xl text-justify px-4">
                        Contiene enlaces que redirigen a sitios falsos o tienen
                        archivos adjuntos que contienen malware.
                      </p>
                    </div>
                    <div className="flex flex-col w-[300px] border-[3px] p-4 rounded-lg">
                      <div className="relative">
                        <img
                          src={phone}
                          alt="phone"
                          className="relative object-cover w-72"
                        />
                        <span className="absolute rounded-full backdrop-saturate-50 bg-zinc-500/30 backdrop-blur-sm bottom-10 left-[150px]">
                          <h1 className="font-bold text-3xl text-white py-4 px-[26px]">
                            2
                          </h1>
                        </span>
                      </div>
                      <h1 className="font-bold text-white text-2xl text-center pb-8 ">
                        Vishing
                      </h1>
                      <p className="font-normal text-white text-xl text-justify px-4">
                        Se realiza a través de llamadas telefónicas, con el
                        objetivo de obtener información personal o bancaria.
                      </p>
                    </div>
                    <div className="flex flex-col w-[300px] border-[3px] p-4 rounded-lg">
                      <div className="relative">
                        <img
                          src={sms}
                          alt="sms"
                          className="relative object-cover w-72"
                        />
                        <span className="absolute rounded-full backdrop-saturate-50 bg-zinc-500/30 backdrop-blur-sm bottom-10 left-[150px]">
                          <h1 className="font-bold text-3xl text-white py-4 px-[26px]">
                            3
                          </h1>
                        </span>
                      </div>
                      <h1 className="font-bold text-white text-2xl text-center pb-8 ">
                        Smishing
                      </h1>
                      <p className="font-normal text-white text-xl text-justify px-4">
                        Se realiza a través de mensajes de texto, con el
                        objetivo de que la victima haga click en un enlace.
                      </p>
                    </div>
                    <div className="flex flex-col w-[300px] border-[3px] p-4 rounded-lg">
                      <div className="relative">
                        <img
                          src={hacker}
                          alt="hacker"
                          className="relative object-cover w-72"
                        />
                        <span className="absolute rounded-full backdrop-saturate-50 bg-zinc-500/30 backdrop-blur-sm bottom-10 left-[150px]">
                          <h1 className="font-bold text-3xl text-white py-4 px-[26px]">
                            4
                          </h1>
                        </span>
                      </div>
                      <h1 className="font-bold text-white text-2xl text-center pb-8 ">
                        Por Redes Sociales
                      </h1>
                      <p className="font-normal text-white text-xl text-justify px-4">
                        Creación de perfiles falsos y se utilizan para engañar a
                        las victimas.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:hidden block pt-0 lg:pt-10 px-8 lg:px-0">
            <div className="flex flex-col gap-8">
              <div className="relative">
                <div
                  className="w-full bg-amber-400 absolute h-4 top-5"
                  style={{ filter: 'blur(30px)' }}
                ></div>
                <div className="relative flex justify-center items-center p-2 bg-amber-400 w-full rounded-sm">
                  <h1 className="font-bold text-2xl text-zinc-800">3</h1>
                </div>
              </div>
              <div className="flex justify-center items-start">
                <div className="flex flex-col gap-8 items-center">
                  <h1 className="font-bold text-2xl text-white text-center">
                    Variantes de Phishing
                  </h1>
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col w-[300px] border-[3px] p-4 rounded-lg">
                      <div className="flex items-center justify-center relative">
                        <img
                          src={email}
                          alt="email"
                          className="relative object-cover w-[150px]"
                        />
                        <span className="absolute rounded-full backdrop-saturate-50 bg-zinc-500/30 backdrop-blur-sm bottom-8 left-[150px]">
                          <h1 className="font-bold text-xl text-white py-2 px-[18px]">
                            1
                          </h1>
                        </span>
                      </div>
                      <h1 className="font-bold text-white text-xl text-center pb-4 ">
                        Por Correo Electrónico
                      </h1>
                      <p className="font-normal text-white text-sm text-justify px-6">
                        Contiene enlaces que redirigen a sitios falsos o tienen
                        archivos adjuntos que contienen malware.
                      </p>
                    </div>
                    <div className="flex flex-col w-[300px] border-[3px] p-4 rounded-lg">
                      <div className="flex items-center justify-center relative">
                        <img
                          src={phone}
                          alt="phone"
                          className="relative object-cover w-[150px]"
                        />
                        <span className="absolute rounded-full backdrop-saturate-50 bg-zinc-500/30 backdrop-blur-sm bottom-6 left-[140px]">
                          <h1 className="font-bold text-xl text-white py-2 px-[16px]">
                            2
                          </h1>
                        </span>
                      </div>
                      <h1 className="font-bold text-white text-xl text-center pb-4 ">
                        Vishing
                      </h1>
                      <p className="font-normal text-white text-sm text-justify px-6">
                        Se realiza a través de llamadas telefónicas, con el
                        objetivo de obtener información personal o bancaria.
                      </p>
                    </div>
                    <div className="flex flex-col w-[300px] border-[3px] p-4 rounded-lg">
                      <div className="flex items-center justify-center relative">
                        <img
                          src={sms}
                          alt="sms"
                          className="relative object-cover w-[150px]"
                        />
                        <span className="absolute rounded-full backdrop-saturate-50 bg-zinc-500/30 backdrop-blur-sm bottom-6 left-[135px]">
                          <h1 className="font-bold text-xl text-white py-2 px-[16px]">
                            3
                          </h1>
                        </span>
                      </div>
                      <h1 className="font-bold text-white text-xl text-center pb-4 ">
                        Smishing
                      </h1>
                      <p className="font-normal text-white text-sm text-justify px-6">
                        Se realiza a través de mensajes de texto, con el
                        objetivo de que la victima haga click en un enlace.
                      </p>
                    </div>
                    <div className="flex flex-col w-[300px] border-[3px] p-4 rounded-lg">
                      <div className="flex items-center justify-center relative">
                        <img
                          src={hacker}
                          alt="hacker"
                          className="relative object-cover w-[150px]"
                        />
                        <span className="absolute rounded-full backdrop-saturate-50 bg-zinc-500/30 backdrop-blur-sm bottom-8 left-[140px]">
                          <h1 className="font-bold text-xl text-white py-2 px-[16px]">
                            4
                          </h1>
                        </span>
                      </div>
                      <h1 className="font-bold text-white text-xl text-center pb-4 ">
                        Por Redes Sociales
                      </h1>
                      <p className="font-normal text-white text-sm text-justify px-6">
                        Creación de perfiles falsos y se utilizan para engañar a
                        las victimas.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="jigsaw"
        className="relative w-full bg-gradient-to-r from-shad-yellow-100 via-shad-yellow-100 to-shad-orange-100 pb-24"
      >
        <Tips />
      </section>
    </>
  );
}

export default Phishing;
