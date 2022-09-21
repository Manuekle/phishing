import Row from "../assets/row";

function Tools() {
  return (
    <section className="w-full px-10 pt-10 lg:pt-28 mx-auto max-w-7xl">
      <div className="space-y-12 md:text-left">
        <div className=" space-y-5 sm:mx-auto sm:space-y-4">
          <h2 className="pt-10 lg:pb-5 text-2xl font-black text-center text-white sm:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-500 to-blue-200">
              Herramientas
            </span>
          </h2>
          <h1 className="text-lg lg:text-3xl font-normal text-justify lg:text-center text-white pb-5">
            En esta sección encontraras una lista de herramientas que te
            ayudaran a realizar diferentes tareas, desde la creación de phishing
            hasta la creación de payloads para explotar vulnerabilidades.
          </h1>
          <div className="lg:block hidden">
            <div className="flex flex-col justify-center items-center">
              <span className="bg-black shadow-black/50 rounded-full p-2 transition delay-75 animate-bounce shadow-lg">
                <Row className="fill-white" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tools;
