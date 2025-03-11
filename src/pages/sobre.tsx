import Sidebar from "@/components/SideBar";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { experiencias } from "@/data/experiencias";


export default function AboutMe() {
  const router = useRouter();

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="flex bg-background text-white min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8 flex flex-col items-center md:ml-[72px]">
        <motion.section
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <h1 className="text-4xl font-bold text-primary mb-6">Sobre Mim</h1>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img
              src="/foto.jpg"
              alt="Minha Foto"
              className="w-60 h-60 rounded-full border-4 border-primary shadow-lg"
            />
            <p className="text-gray-300 text-lg max-w-xl">
              Olá! Meu nome é <span className="font-semibold text-white">João Antonio M. Taveira</span>, sou um desenvolvedor com experiência de 3 anos.
              Apaixonado por tecnologia e inovação, busco sempre dar o meu melhor em cada desafio.
              Além da minha dedicação ao código, sou comunicativo e extrovertido, o que me permite trabalhar bem em equipe e transformar ideias em soluções eficientes. 🚀
            </p>
          </div>

        </motion.section>
        <motion.section
          className="mb-8 w-full bg-gray-900 bg-opacity-80 p-6 rounded-lg shadow-lg hover:shadow-2xl transition text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <h2 className="text-2xl font-semibold text-primary mb-4">💻 Minhas Skills</h2>

          <div className="grid md:grid-cols-3 gap-8 pt-4 text-white">
            <div>
              <h3 className="text-xl font-semibold mb-3">🎨 Front-End</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {["JavaScript", "TypeScript", "React.js", "Next.js", "Tailwind CSS", "Styled Components", "SASS"].map(skill => (
                  <span key={skill} className="bg-third px-3 py-1 rounded-full text-white text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">🖥️ Back-End</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {["Node.js", "Express.js", "Java", "SQL", "MongoDB", "PostgreSQL"].map(skill => (
                  <span key={skill} className="bg-third px-3 py-1 rounded-full text-white text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">🛠️ Ferramentas</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {["Git", "GitHub", "Docker", "Postman", "Figma"].map(tool => (
                  <span key={tool} className="bg-third px-3 py-1 rounded-full text-white text-sm font-medium">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
        <motion.section
          className="mb-8 w-full bg-fifthy bg-opacity-80 p-6 rounded-lg shadow-lg hover:shadow-2xl transition"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <h2 className="text-2xl font-semibold text-primary mb-4">📌 Experiência Profissional</h2>
          <ul className="space-y-6">
            {experiencias.map((exp, index) => (
              <li key={index} className="bg-fourthy p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold text-white">{exp.cargo} - {exp.empresa}</h3>
                <p className="text-sixthy text-sm">{exp.periodo}</p>

                <ul className="list-disc list-inside mt-3 text-seventhy space-y-2">
                  {exp.descricao.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                <div className="mt-4">
                  <h4 className="text-white font-semibold">Tecnologias utilizadas:</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {exp.tecnologias.map((tech, i) => (
                      <span key={i} className="bg-third px-3 py-1 rounded-full text-white text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </motion.section>
        <motion.div
          className="flex justify-center mt-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <button
            onClick={() => router.push("/")}
            className="bg-third text-white px-4 py-2 rounded-lg hover:bg-primary hover:text-black transition cursor-pointer shadow-md"
          >
            ← Voltar para Home
          </button>
        </motion.div>
      </main>
    </div>
  );
}
