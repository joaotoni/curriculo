import { useRouter } from "next/router";
import { experiencias } from "@/data/experiencias";
import { useEffect, useState } from "react";

export default function ExperienciaHome() {
  const router = useRouter();
  const ultimaExperiencia = experiencias[0];
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <section id="experiencias" className="mb-12">
      <h2 className="text-2xl font-semibold text-primary">💼 Minha Última Experiência</h2>
      <div
        className={`mt-4 bg-gray-900 bg-opacity-80 p-6 rounded-lg shadow-lg transform transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
      >
        <h3 className="text-lg font-semibold text-white">{ultimaExperiencia.cargo}</h3>
        <p className="text-gray-300">{ultimaExperiencia.empresa} - {ultimaExperiencia.periodo}</p>

        <ul className="list-disc list-inside mt-3 text-gray-400 space-y-2">
          {ultimaExperiencia.descricao.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <div className="mt-4">
          <h4 className="text-white font-semibold">Tecnologias utilizadas:</h4>
          <div className="flex flex-wrap gap-2 mt-2">
            {ultimaExperiencia.tecnologias.map((tech, i) => (
              <span
                key={i}
                className="bg-third px-3 py-1 rounded-full text-white text-sm font-medium shadow-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>

      <div className="flex justify-center mt-6">
        <button
          onClick={() => router.push("/experiencias")}
          className="bg-third text-white px-5 py-2 rounded-lg hover:bg-secondary hover:text-black transition cursor-pointer shadow-md"
        >
          Ver mais →
        </button>
      </div>
    </section>
  );
}
