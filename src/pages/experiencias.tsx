import { useRouter } from "next/router";
import { experiencias } from "@/data/experiencias";
import Sidebar from "@/components/SideBar";

export default function Experiencias() {
  const router = useRouter();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Sidebar />
      <h1 className="text-3xl font-bold text-center mb-6">Minhas Experiências Profissionais</h1>

      <div className="space-y-6">
        {experiencias.map((exp, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-900">{exp.cargo}</h3>
            <p className="text-gray-700">{exp.empresa} - {exp.periodo}</p>

            <ul className="list-disc list-inside mt-2 text-gray-600">
              {exp.descricao.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <div className="mt-3">
              <h4 className="text-gray-800 font-semibold">Tecnologias utilizadas:</h4>
              <div className="flex flex-wrap gap-2 mt-2">
                {exp.tecnologias.map((tech, i) => (
                  <span key={i} className="bg-blue-200 px-3 py-1 rounded-full text-blue-900 text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <button
          onClick={() => router.push("/")}
          className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition cursor-pointer"
        >
          ← Voltar para Home
        </button>
      </div>
    </div>
  );
}
