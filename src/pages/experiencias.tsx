import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { experiencias } from "@/data/experiencias";
import Sidebar from "@/components/SideBar";

export default function Experiencias() {
  const router = useRouter();

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="flex bg-background text-white min-h-screen">
      <Sidebar />
      <main className="flex-1 p-4 md:p-8 ml-0 md:ml-32 flex flex-col items-center">

        <motion.h1
          className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          💼 Minhas Experiências Profissionais
        </motion.h1>

        <motion.div
          className="w-full max-w-4xl space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          {experiencias.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-900 p-4 md:p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all"
            >
              <h3 className="text-lg md:text-xl font-semibold text-white">{exp.cargo}</h3>
              <p className="text-gray-400 text-sm">{exp.empresa} - {exp.periodo}</p>

              <ul className="list-disc list-inside mt-3 text-gray-300 space-y-2">
                {exp.descricao.map((item, i) => (
                  <li key={i} className="text-sm md:text-base">{item}</li>
                ))}
              </ul>

              <div className="mt-4">
                <h4 className="text-white font-semibold text-sm md:text-base">🛠️ Tecnologias utilizadas:</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  {exp.tecnologias.map((tech, i) => (
                    <span key={i} className="bg-gray-800 px-3 py-1 rounded-full text-white text-xs md:text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="flex justify-center mt-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <button
            onClick={() => router.push("/")}
            className="bg-third text-white px-4 py-2 rounded-lg hover:bg-secondary hover:text-black transition"
          >
            ← Voltar para Home
          </button>
        </motion.div>
      </main>
    </div>
  );
}
