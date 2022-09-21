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
              <a href="#practice">
                <Click className="fill-white" />
              </a>
            </span>{' '}
            <span className="p-2">
              <a href="#jigsaw">
                <Jigsaw className="fill-white" />
              </a>
            </span>{' '}
            <span className="p-2">
              <a href="#pentesting">
                <Home className="fill-white" />
              </a>
            </span>{' '}
            <span className="p-2">
              <a href="#phase">
                <Bug className="fill-white" />
              </a>
            </span>{' '}
            <span className="p-2">
              <a href="#quiz">
                <Game className="fill-white" />
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Bar;
