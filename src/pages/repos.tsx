import useGitHubRepository from "@/adapters/useGitHubRepository";
import Sidebar from "@/components/SideBar";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

export default function Repos() {
  const repos = useGitHubRepository();
  const router = useRouter();

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="flex bg-background text-white min-h-screen">
      <Sidebar />

      <main className="flex-1 p-8 flex flex-col items-center md:ml-[72px]">
        <motion.h1
          className="text-3xl font-bold text-primary mb-8 text-center"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          📂 Todos os Repositórios
        </motion.h1>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          {repos.length === 0 ? (
            <p className="text-gray-400 text-center">Carregando repositórios...</p>
          ) : (
            repos.map(repo => (
              <div
                key={repo.id}
                className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-700 hover:shadow-2xl transition-all"
              >
                <h3 className="text-xl font-semibold text-white truncate">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition"
                  >
                    {repo.name}
                  </a>
                </h3>

                <p className="text-sm text-gray-400 mt-2 line-clamp-2">
                  {repo.description || "Sem descrição disponível"}
                </p>

                <div className="mt-3 flex justify-between items-center">
                  <span className="text-sm bg-gray-800 px-3 py-1 rounded-full text-white">
                    {repo.language || "N/A"}
                  </span>

                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-medium hover:text-fifthy hover:bg-primary px-3 py-1 rounded-lg transition-all duration-300"
                  >
                    Ver no GitHub →
                  </a>
                </div>
              </div>
            ))
          )}
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
            className="bg-third text-white px-4 py-2 rounded-lg hover:bg-primary hover:text-black transition cursor-pointer shadow-md"
          >
            ← Voltar para Home
          </button>
        </motion.div>
      </main>
    </div>
  );
}
