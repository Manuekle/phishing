/* eslint-disable no-unused-vars */
import Questions from '../questions';
import { useState, useEffect } from 'react';
import Confetti from 'react-confetti';

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [time, setTime] = useState(60);
  const [running, setRunning] = useState(false);
  const [answersShow, setAnswersShow] = useState(false);
  const [open, setOpen] = useState(false);

  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  function handleAnswerSubmit(isCorrect, e) {
    // alert('width: ' + innerWidth + ' height: ' + window.innerHeight);
    if (isCorrect) setShowScore(showScore + 1);
    e.target.classList.add(isCorrect ? 'bg-green-500' : 'bg-red-500');
    setTimeout(() => {
      if (currentQuestion === Questions.length - 1) {
        setIsFinished(true);
      } else {
        if (isCorrect) setTime(60);
        setCurrentQuestion(currentQuestion + 1);
      }
    }, 500);
  }

  useEffect(() => {
    if (window.innerHeight > 1000) {
      setHeight(400);
    } else {
      setHeight(360);
    }

    if (window.innerWidth > 1000) {
      setWidth(1100);
    } else {
      setWidth(310);
    }

    const interval = setInterval(() => {
      if (time > 0) setTime((prev) => prev - 1);
      if (time === 0) setRunning(true);
      if (time < 12) {
        document.getElementById('timer').classList.add('text-red-500');
      } else {
        document.getElementById('timer').classList.remove('text-red-500');
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);

  if (isFinished) {
    return (
      <section className="lg:w-[100em] pt-4 mx-auto">
        <div className="space-y-12 md:text-left px-8 lg:px-0">
          <div className=" space-y-5 sm:mx-auto sm:space-y-4">
            <h2 className="pt-10 lg:pt-44 text-3xl font-black text-center text-white sm:text-6xl">
              <span>🎉 </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-500 to-blue-100">
                Quiz de Phishing
              </span>
            </h2>
            <h1 className="text-lg lg:text-3xl text-center font-bold text-white">
              Que tan bueno eres en Phishing! <br />
            </h1>
          </div>
          <div className="rounded-lg border-[3px] p-0 lg:p-0 mx-0 lg:mx-56">
            <div className="flex justify-center relative">
              <Confetti
                tweenDuration={90000}
                // width={1150}
                // height={400}
                width={width}
                height={height}
                initialVelocityY={20}
                numberOfPieces={1000}
                recycle={false}
                // wind={0.1}
                drawShape={(ctx) => {
                  ctx.beginPath();
                  for (let i = 0; i < 22; i++) {
                    const angle = 0.35 * i;
                    const x = (0.2 + 1.5 * angle) * Math.cos(angle);
                    const y = (0.2 + 1.5 * angle) * Math.sin(angle);
                    ctx.lineTo(x, y);
                  }
                  ctx.stroke();
                  ctx.closePath();
                }}
              />
            </div>

            <div className="flex flex-col items-center p-12">
              <h1 className="text-center text-3xl font-black text-white sm:text-6xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">
                  Resultados:
                </span>
              </h1>

              {showScore === 0 ? (
                <h1 className="pt-2 text-md lg:text-4xl text-center font-black text-white ">
                  Que mal, no has acertado ninguna pregunta.
                </h1>
              ) : (
                ''
              )}
              {showScore === 1 ? (
                <h1 className="pt-2 text-md lg:text-4xl text-center font-black text-white ">
                  Tienes que mejorar, solo has acertado una pregunta.
                </h1>
              ) : (
                ''
              )}
              {showScore > 1 && showScore < 5 ? (
                <h1 className="pt-2 text-md lg:text-4xl text-center font-black text-white ">
                  Buen intento, has acertado {showScore} preguntas.
                </h1>
              ) : (
                ''
              )}
              {showScore === 5 ? (
                <h1 className="pt-2 text-md lg:text-4xl text-center font-black text-white ">
                  Buen trabajo, has acertado {showScore} preguntas.
                </h1>
              ) : (
                ''
              )}
              {showScore > 5 && showScore <= 11 ? (
                <h1 className="pt-2 text-md lg:text-4xl text-center font-black text-white ">
                  Excelente, eres muy bueno, pero puedes mejorar.
                </h1>
              ) : (
                ''
              )}
              {showScore === 12 ? (
                <h1 className="pt-2 text-md lg:text-4xl text-center font-black text-white ">
                  Enhorabuen eres un experto en Phishing!
                </h1>
              ) : (
                ''
              )}
              <p className="pt-4 text-md lg:text-3xl font-bold text-white text-center ">
                Obtuviste {showScore} de {Questions.length}
              </p>
              <button
                className="py-3 px-12 mt-8 shadow-xl font-bold bg-black shadow-black/50 hover:shadow-zinc-900/80 rounded-xl hover:bg-zinc-900 text-white tracking-tighter"
                onClick={() => (window.location.href = '/')}
              >
                <a className="font-bold text-md lg:text-2xl text-white">
                  Volver a jugar
                </a>
              </button>
              <button
                className="font-bold text-md lg:text-xl text-white pt-6 border-b-2 border-zinc-500 hover:border-zinc-400 tracking-tighter"
                onClick={() => {
                  setIsFinished(false);
                  setAnswersShow(true);
                  setCurrentQuestion(0);
                  setOpen(true);
                }}
              >
                Ver respuestas
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (answersShow) {
    return (
      <section className="lg:w-[100em] pt-4 mx-auto">
        <div className="space-y-12 md:text-left px-8 lg:px-0">
          <div className=" space-y-5 sm:mx-auto sm:space-y-4">
            <h2 className="pt-10 lg:pt-44 text-3xl font-black text-center text-white sm:text-6xl">
              <span>🎉 </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-500 to-blue-100">
                Quiz de Phishing
              </span>
            </h2>
            <h1 className="text-lg lg:text-3xl text-center font-bold text-white">
              Que tan bueno eres en Phishing! <br />
            </h1>
          </div>
          <div className="rounded-lg border-[3px] p-0 lg:p-8 mx-0 lg:mx-56">
            <div className="flex flex-col lg:flex-row lg:justify-between items-center p-6 lg:p-12">
              <h1 className="text-center text-3xl font-black text-white sm:text-6xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">
                  Respuestas:
                </span>
              </h1>
              <h1 className="text-lg lg:text-3xl font-bold text-white">
                Pregunta{' '}
                <span className="text-yellow-400">{currentQuestion + 1}</span>{' '}
                de <span className="text-blue-400">{Questions.length}</span>
              </h1>
            </div>
            <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:px-12 pb-12">
              <div className="flex flex-col gap-8 lg:px-0 px-8">
                <h1 className="text-white font-bold text-lg lg:text-2xl text-justify lg:w-[600px]">
                  {Questions[currentQuestion].question}
                </h1>
                <h1>
                  <span className="text-green-500 font-bold text-lg lg:text-2xl ">
                    {
                      Questions[currentQuestion].answers.filter(
                        (option) => option.isCorrect
                      )[0].text
                    }
                  </span>
                </h1>
              </div>
              <div className="flex flex-col gap-4">
                <button
                  onClick={() => {
                    if (currentQuestion === Questions.length - 1) {
                      window.location.href = '/';
                    } else {
                      setCurrentQuestion(currentQuestion + 1);
                    }
                  }}
                  className="py-3 w-56 mt-8 shadow-xl font-bold bg-black shadow-black/50 hover:shadow-zinc-900/80 rounded-xl hover:bg-zinc-900 text-white tracking-tighter"
                >
                  <a className="font-bold text-md lg:text-2xl text-white">
                    {currentQuestion === Questions.length - 1
                      ? 'Volver a jugar'
                      : 'Siguiente'}
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="quiz" className="lg:w-[100em] pt-4 mx-auto">
      <div className="space-y-12 md:text-left px-8 lg:px-0">
        <div className=" space-y-5 sm:mx-auto sm:space-y-4">
          <h2 className="pt-10 lg:pt-44 text-3xl font-black text-center text-white sm:text-6xl">
            <span>🎉 </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-500 to-blue-100">
              Quiz de Phishing
            </span>
          </h2>
          <h1 className="text-lg lg:text-3xl text-center font-bold text-white">
            Que tan bueno eres en Phishing! <br />
          </h1>
        </div>
        {open ? (
          <div className="p-0 lg:p-8 rounded-lg border-[3px] mx-0 lg:mx-56">
            <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:p-0 p-4">
              <h1 className="text-md lg:text-3xl font-bold text-white lg:pt-0 pt-4">
                Pregunta{' '}
                <span className="text-yellow-400">{currentQuestion + 1}</span>{' '}
                de <span className="text-blue-400">{Questions.length}</span>
              </h1>
              <span>
                {running ? (
                  <>
                    {currentQuestion + 1 === 12 ? (
                      <button
                        className="mt-2 lg:mt-0 py-3 lg:py-4 px-4 lg:px-4 text-sm lg:text-xl font-bold bg-black shadow-black/50 hover:shadow-zinc-900/80 rounded-xl shadow-xl hover:bg-zinc-900 text-white tracking-tighter"
                        onClick={() => {
                          setIsFinished(true);
                        }}
                      >
                        Finalizar prueba
                      </button>
                    ) : (
                      <button
                        className="mt-2 lg:mt-0 py-3 lg:py-4 px-4 lg:px-4 text-sm lg:text-xl font-bold bg-black shadow-black/50 hover:shadow-zinc-900/80 rounded-xl shadow-xl hover:bg-zinc-900 text-white tracking-tighter"
                        onClick={() => {
                          setTime(60);
                          setRunning(false);
                          setCurrentQuestion(currentQuestion + 1);
                        }}
                      >
                        Siguiente pregunta
                      </button>
                    )}
                  </>
                ) : (
                  <h1 className="text-md lg:text-3xl font-bold text-yellow-300">
                    ⏰ Tiempo Restante: <span id="timer">{time}s</span>
                  </h1>
                )}
              </span>
            </div>
            <div className="grid grid-cols-3 pt-4 lg:pt-20 items-center px-8 lg:px-0">
              <div className="col-span-3 lg:col-span-2 lg:w-[500px]">
                <h1 className="text-md lg:text-3xl font-bold text-white">
                  {Questions[currentQuestion].question}
                </h1>
                {Questions[currentQuestion].img === '' ? (
                  ''
                ) : (
                  <img
                    src={Questions[currentQuestion].img}
                    alt="img"
                    className="border rounded-lg p-2 mt-8 object-cover"
                  />
                )}
              </div>
              <div className="lg:pt-0 pt-8 lg:pb-0 pb-8 col-span-3 lg:col-span-1 flex flex-col gap-4">
                {Questions[currentQuestion].answers.map((answer) => (
                  <button
                    id="block"
                    key={answer.text}
                    disabled={running}
                    onClick={(e) => handleAnswerSubmit(answer.isCorrect, e)}
                    className="w-full text-white py-2 px-4 lg:px-4 text-xs lg:text-xl font-bold lg:py-3 rounded-lg border-[3px] shadow-md"
                  >
                    {answer.text}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="p-0 lg:p-8 rounded-lg border-[3px] mx-0 lg:mx-56">
            <div className="flex flex-col items-center lg:p-12 p-8">
              <h1 className="text-center text-3xl font-black text-white sm:text-6xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">
                  Estas listo para jugar?
                </span>
              </h1>
              <h1 className="text-md lg:text-2xl text-center font-bold text-white pt-4">
                Se te dara 60 segundos para responder cada pregunta
              </h1>
              <h1 className="text-md lg:text-2xl text-center font-bold text-white pt-4">
                Demuestra lo que sabes!
              </h1>

              <button
                onClick={() => {
                  setOpen(true);
                  setTime(60);
                  setRunning(false);
                }}
                className="mt-8 py-3 px-12 bg-black shadow-black/50 hover:shadow-zinc-900/80 rounded-xl shadow-xl hover:bg-zinc-900"
              >
                <a className="font-bold text-md lg:text-2xl text-white tracking-tighter">
                  Iniciar!
                </a>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Quiz;
