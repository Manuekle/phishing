import Game from '../assets/game';
import Bug from '../assets/bug';
import Home from '../assets/home';
import Click from '../assets/click';
import Jigsaw from '../assets/jigsaw';

function Bar() {
  return (
    <section className="lg:hidden block px-8">
      <div className="flex justify-center items-center">
        <div className="fixed bottom-4 z-50 bg-zinc-900 bg-zinc-900/80 shadow-zinc-900 p-2 backdrop-opacity-10 rounded-lg shadow-lg2">
          <div className="flex flex-row gap-6">
            <span className="p-2">
              <Click className="fill-white" />
            </span>{' '}
            <span className="p-2">
              <Jigsaw className="fill-white" />
            </span>{' '}
            <span className="p-2">
              <Home className="fill-white" />
            </span>{' '}
            <span className="p-2">
              <Bug className="fill-white" />
            </span>{' '}
            <span className="p-2">
              <Game className="fill-white" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Bar;
