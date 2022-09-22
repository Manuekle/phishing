import Github from '../assets/github';
function Footer() {
  return (
    <section className="lg:mt-56 mt-28 relative w-full bg-gradient-to-r from-shad-yellow-100 via-shad-yellow-100 to-shad-orange-100">
      <div className="flex justify-center">
        <div className="flex flex-col lg:pt-20 lg:pb-20 pb-20 pt-10">
          <h1 className="flex-col lg:flex-row items-center gap-2 flex font-bold text-zinc-800 text-xl lg:text-2xl text-center uppercase tracking-wider">
            Desarrollado por{' '}
            <a
              className="flex-row flex gap-2 text-zinc-900"
              target="blank"
              href="https://github.com/Manuekle"
            >
              <Github />
              <h1 className="font-bold text-xl text-zinc-900">@manuel</h1>
            </a>
          </h1>
        </div>
      </div>
    </section>
  );
}

export default Footer;
