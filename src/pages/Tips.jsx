/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-vars */
function Tips() {
  const gmail =
    'https://cdn3d.iconscout.com/3d/free/thumb/gmail-2950163-2447924.png';

  const web =
    'https://cdn3d.iconscout.com/3d/premium/thumb/web-search-3473218-2910808@0.png';

  const card =
    'https://cdn3d.iconscout.com/3d/premium/thumb/credit-cards-5569220-4655953.png';

  const ads =
    'https://cdn3d.iconscout.com/3d/premium/thumb/paid-advertisement-4085853-3379650.png';

  const wifi =
    'https://cdn3d.iconscout.com/3d/premium/thumb/free-wifi-5663937-4719921.png';

  const windows =
    'https://cdn3d.iconscout.com/3d/free/thumb/windows-5562368-4642713.png';
  return (
    <>
      <div className="px-8 lg:px-0">
        <h1 className="pt-20 pb-10 font-bold text-zinc-800 text-2xl lg:text-5xl text-center uppercase tracking-widest">
          Algunos tips para evitar ser victima de Phishing
        </h1>
        <div className="grid grid-cols-3 gap-8 lg:gap-16 lg:px-56">
          {/* gmail */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center col-span-3 lg:col-span-1 bg-zinc-900 rounded-lg shadow-xl shadow-zinc-900/50 p-4">
            <div className="flex items-start justify-center">
              <img
                src={gmail}
                alt="gmail"
                className="relative object-cover w-44 lg:w-full"
              />
            </div>
            <div className=" flex flex-col items-center lg:items-start justify-center">
              <h1 className="text-lg lg:text-xl text-center lg:text-start text-white font-bold">
                Correos electrónicos dudosos
              </h1>
              <p className="lg:px-0 px-8 lg:pt-0 pt-4 lg:pb-0 pb-4 text-zinc-100 text-sm lg:text-lg font-normal text-justify lg:text-start">
                No abras correos electrónicos que no esperes o que no hayas
                solicitado.
              </p>
            </div>
          </div>
          {/* web */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center col-span-3 lg:col-span-1 bg-zinc-900 rounded-lg shadow-xl shadow-zinc-900/50 p-4">
            <div className="flex items-start justify-center">
              <img
                src={web}
                alt="web"
                className="lg:pt-0 lg:pl-4 lg:pb-0 pb-4 pt-8 relative object-cover w-44 lg:w-[400px]"
              />
            </div>
            <div className="lg:pl-8 pl-0 flex flex-col items-center lg:items-start justify-center">
              <h1 className="text-lg lg:text-xl text-center lg:text-start text-white font-bold">
                Enlaces Sospechosos
              </h1>
              <p className="lg:px-0 px-8 lg:pt-0 pt-4 lg:pb-0 pb-4 text-zinc-100 text-sm lg:text-lg font-normal text-justify lg:text-start">
                No hagas clic en enlaces sospechosos, sino estás seguro de su
                procedencia, no lo abras.
              </p>
            </div>
          </div>
          {/* card */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center col-span-3 lg:col-span-1 bg-zinc-900 rounded-lg shadow-xl shadow-zinc-900/50 p-4">
            <div className="flex items-start justify-center">
              <img
                src={card}
                alt="card"
                className="lg:pb-0 pb-4 relative object-cover w-44 lg:w-[400px]"
              />
            </div>
            <div className="lg:pl-8 pl-0 flex flex-col items-center lg:items-start justify-center">
              <h1 className="text-lg lg:text-xl text-center lg:text-start text-white font-bold">
                Verifica tus cuentas bancarias
              </h1>
              <p className="lg:px-0 px-8 lg:pt-0 pt-4 lg:pb-0 pb-4 text-zinc-100 text-sm lg:text-lg font-normal text-justify lg:text-start">
                Hazlo constantemente, para evitar que te roben tu dinero.
              </p>
            </div>
          </div>
          {/* ads */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center col-span-3 lg:col-span-1 bg-zinc-900 rounded-lg shadow-xl shadow-zinc-900/50 p-4">
            <div className="flex items-start justify-center">
              <img
                src={ads}
                alt="ads"
                className="lg:pb-0 pb-2 relative object-cover w-44 lg:w-[400px]"
              />
            </div>
            <div className="lg:pl-8 pl-0 flex flex-col items-center lg:items-start justify-center">
              <h1 className="text-lg lg:text-xl text-center lg:text-start text-white font-bold">
                Anuncios maliciosos o malvertising
              </h1>
              <p className="lg:px-0 px-8 lg:pt-0 pt-4 lg:pb-0 pb-4 text-zinc-100 text-sm lg:text-lg font-normal text-justify lg:text-start">
                Estos anuncios pueden contener enlaces maliciosos, no los abras.
              </p>
            </div>
          </div>
          {/* wifi */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center col-span-3 lg:col-span-1 bg-zinc-900 rounded-lg shadow-xl shadow-zinc-900/50 p-4">
            <div className="flex items-start justify-center">
              <img
                src={wifi}
                alt="wifi"
                className="lg:pb-0 pb-2 relative object-cover w-44 lg:w-[400px]"
              />
            </div>
            <div className="lg:pl-8 pl-0 flex flex-col items-center lg:items-start justify-center">
              <h1 className="text-lg lg:text-xl text-center lg:text-start text-white font-bold">
                Redes Wifi publicas o desconocidas
              </h1>
              <p className="lg:px-0 px-8 lg:pt-0 pt-4 lg:pb-0 pb-4 text-zinc-100 text-sm lg:text-lg font-normal text-justify lg:text-start">
                No te conectes a redes wifi públicas o desconocidas, ya que
                pueden ser falsas y robar tus datos.
              </p>
            </div>
          </div>
          {/* windows */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center col-span-3 lg:col-span-1 bg-zinc-900 rounded-lg shadow-xl shadow-zinc-900/50 p-4">
            <div className="flex items-start justify-center">
              <img
                src={windows}
                alt="windows"
                className="lg:pb-0 pb-2 relative object-cover w-44 lg:w-[400px]"
              />
            </div>
            <div className="lg:pl-8 pl-0 flex flex-col items-center lg:items-start justify-center">
              <h1 className="text-lg lg:text-xl text-center lg:text-start text-white font-bold">
                Aplicaciones falsas o maliciosas
              </h1>
              <p className="lg:px-0 px-8 lg:pt-0 pt-4 lg:pb-0 pb-4 text-zinc-100 text-sm lg:text-lg font-normal text-justify lg:text-start">
                No descargues aplicaciones falsas o maliciosas, ya que pueden
                robar tus datos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tips;

{
  /* <div className="lg:flex lg:justify-center">
  <div className="flex flex-col pt-8 lg:pt-20 px-8 lg:px-0">
    <h1 className="font-bold text-zinc-800 text-2xl lg:text-5xl text-center uppercase tracking-widest">
      Algunos tips para evitar ser victima de Phishing
    </h1>
    <div className="grid grid-cols-6 lg:gap-20 gap-12 pt-8 lg:pt-40">
      <div className="flex flex-col items-center col-span-6 lg:col-span-3 lg:col-span-1 lg:w-[300px] border-black rounded-lg border-[3px] p-8 lg:border-none lg:p-0">
        <img
          src={gmail}
          alt="gmail"
          className="relative object-cover w-56 lg:w-72"
        />
        <h1 className="text-xl lg:text-2xl text-center text-white font-bold">
          Correos electrónicos dudosos
        </h1>
        <p className="pt-2 text-white text-lg lg:text-xl font-normal text-center lg:text-justify">
          No abras correos electrónicos que no esperes o que no hayas
          solicitado.
        </p>
      </div>
      <div className="flex flex-col items-center col-span-6 lg:col-span-3 lg:col-span-1 lg:w-[300px] border-black rounded-lg border-[3px] p-8 lg:border-none lg:p-0 pt-10">
        <img
          src={web}
          alt="web"
          className="relative object-cover w-56 lg:w-72"
        />
        <h1 className="text-2xl text-center text-white font-bold pt-8">
          Enlaces Sospechosos
        </h1>
        <p className="pt-2 lg:pt-[34px] text-white text-xl font-normal text-center lg:text-justify">
          No hagas clic en enlaces sospechosos, sino estás seguro de su
          procedencia, no lo abras.
        </p>
      </div>
      <div className="flex flex-col items-center col-span-6 lg:col-span-3 lg:col-span-1 lg:w-[300px] border-black rounded-lg border-[3px] p-8 lg:border-none lg:p-0">
        <img
          src={card}
          alt="card"
          className="relative object-cover w-56 lg:w-72"
        />
        <h1 className="text-2xl text-center text-white font-bold">
          Verifica tus cuentas bancarias
        </h1>
        <p className="pt-2 text-white text-xl font-normal text-center lg:text-justify">
          Hazlo constantemente, para evitar que te roben tu dinero.
        </p>
      </div>
      <div className="flex flex-col items-center col-span-6 lg:col-span-3 lg:col-span-1 lg:w-[300px] border-black rounded-lg border-[3px] p-8 lg:border-none lg:p-0">
        <img
          src={ads}
          alt="ads"
          className="relative object-cover w-56 lg:w-72"
        />
        <h1 className="text-2xl text-center text-white font-bold">
          Anuncios maliciosos o malvertising
        </h1>
        <p className="pt-2 text-white text-xl font-normal text-center lg:text-justify">
          Estos anuncios pueden contener enlaces maliciosos, no los abras.
        </p>
      </div>
      <div className="flex flex-col items-center col-span-6 lg:col-span-3 lg:col-span-1 lg:w-[300px] border-black rounded-lg border-[3px] p-8 lg:border-none lg:p-0">
        <img
          src={wifi}
          alt="wifi"
          className="relative object-cover w-56 lg:w-72"
        />
        <h1 className="text-2xl text-center text-white font-bold">
          Redes Wifi publicas o desconocidas
        </h1>
        <p className="pt-2 text-white text-xl font-normal text-center lg:text-justify">
          No te conectes a redes wifi públicas o desconocidas, ya que pueden ser
          falsas y robar tus datos.
        </p>
      </div>
      <div className="flex flex-col items-center col-span-6 lg:col-span-3 lg:col-span-1 lg:w-[300px] border-black rounded-lg border-[3px] p-8 lg:border-none lg:p-0">
        <img
          src={windows}
          alt="windows"
          className="relative object-cover w-56 lg:w-72"
        />
        <h1 className="text-2xl text-center text-white font-bold">
          Apliacaciones falsas o maliciosas
        </h1>
        <p className="pt-2 text-white text-xl font-normal text-center lg:text-justify">
          No descargues aplicaciones falsas o maliciosas, ya que pueden robar
          tus datos.
        </p>
      </div>
    </div>
  </div>
</div>; */
}
