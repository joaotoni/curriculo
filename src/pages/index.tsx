import { useRouter } from "next/router";
import { motion } from "framer-motion";
import GitHubRepos from "@/components/GitHubRepository";
import DownloadCvPdf from "@/components/DownloadCvPdf";
import WhatsAppButton from "@/components/WhatsAppButton";
import Sidebar from "@/components/SideBar";
import ExperienciaHome from "@/components/ExperienciaHome";
import EmailButton from "@/components/EmailButton";

export default function Home() {
  const router = useRouter();

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="flex bg-background text-white min-h-screen">
      <Sidebar />

      <main className="flex-1 p-8 ml-2 md:ml-32">
        <motion.section
          id="sobre"
          className="flex  md:flex-row items-center gap-8 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <img src="/foto.jpg" alt="Minha Foto" className="w-40 h-40 rounded-full border-4 border-primary shadow-lg" />
          <div>
            <h1 className="text-4xl font-bold text-primary">👋 Olá, eu sou João Antonio M. Taveira</h1>
            <p className="text-seventhy mt-4">
              Transformando ideias em código e código em soluções. 🚀
            </p>
          </div>
        </motion.section>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <ExperienciaHome />
        </motion.div>

        <motion.section
          id="repos"
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <h2 className="text-2xl font-semibold text-primary">🔥 Meus Repositórios</h2>
          <GitHubRepos />
          <div className="flex justify-end mt-6 pr-4">
            <button
              onClick={() => router.push("/repos")}
              className="bg-third text-white px-4 py-2 rounded-lg hover:bg-secondary hover:text-black transition"
            >
              Ver mais →
            </button>
          </div>
        </motion.section>

        <motion.section
          id="cv"
          className="flex justify-center mb-8 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <div className="w-full bg-gray-900 bg-opacity-80 p-6 rounded-lg shadow-lg hover:shadow-2xl transition text-center">
            <h2 className="text-2xl font-semibold text-primary">📄 Meu Currículo</h2>
            <p className="text-gray-300 mt-2">Baixe meu currículo em PDF para saber mais sobre minha trajetória profissional.</p>

            <div className="mt-4 flex justify-center">
              <DownloadCvPdf />
            </div>
          </div>
          <div className="w-full bg-gray-900 bg-opacity-80 p-6 rounded-lg shadow-lg hover:shadow-2xl transition text-center">
            <h2 className="text-2xl font-semibold text-primary">💬 Vamos Conversar?</h2>
            <p className="text-gray-300 mt-2">Fale comigo diretamente pelo WhatsApp ou pelo e-mail.</p>

            <div className="mt-4 flex justify-center gap-8">
              <WhatsAppButton
                phoneNumber="+5562998671605"
                message="Olá, vi seu site e gostaria de conversar!"
              />
              <EmailButton
                email="joaoantoniomartinst@gmail.com"
                subject="Contato através do seu site"
                body="Olá João, vi seu site e gostaria de entrar em contato!"
              />
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
