/* eslint-disable no-unused-vars */
import { supabase } from '../clients';
import { useState, useEffect } from 'react';

function Results() {
  // get results supabase
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      const { data, error } = await supabase
        .from('results')
        .select('*')
        .order('id', { ascending: false });
      if (error) {
        console.log(error);
      } else {
        setResults(data);
      }
    };
    fetchResults();
  }, []);

  return (
    // <div>
    //   <h1>Results</h1>
    //   {results.map((result) => (
    //     <div key={result.id}>
    //       <h2>{result.name}</h2>
    //       <p>{result.result}</p>
    //     </div>
    //   ))}
    // </div>
    <section id="quiz" className="lg:w-[100em] pt-4 mx-auto">
      <div className="space-y-12 md:text-left px-8 lg:px-0">
        <div className=" space-y-5 sm:mx-auto sm:space-y-4">
          <h2 className="pt-10 lg:pt-44 text-3xl font-black text-center text-white sm:text-6xl">
            <span>🕹 </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-100 via-red-500 to-red-100">
              Lista de resultados
            </span>
          </h2>
          <h1 className="text-lg lg:text-3xl text-center font-bold text-white">
            Lista de los mejores puntajes
          </h1>
        </div>
        <div className="overflow-y-auto relative p-0 lg:p-8 rounded-lg bg-zinc-900 mx-0 lg:mx-[500px] shadow-xl h-96 lg:h-[700px] no-scrollbar">
          <div className="flex flex-col items-center lg:p-12 p-8">
            {results.length === 0 ? (
              <div className="flex flex-col items-center">
                <h1 className="text-2xl lg:text-4xl font-bold text-white">
                  No hay resultados
                </h1>
              </div>
            ) : (
              <div>
                {results.map((result) => (
                  <div
                    className="grid grid-cols-3 w-56 lg:w-96 pb-6"
                    key={result.id}
                  >
                    <span className="flex justify-start col-span-2">
                      <li className="text-xl lg:text-3xl font-bold text-white">
                        {result.name}
                      </li>
                    </span>
                    <span className="flex justify-end col-span-1">
                      <h1 className="text-xl lg:text-3xl font-bold text-yellow-400">
                        {result.result}pts
                      </h1>
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Results;
