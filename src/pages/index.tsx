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

      <main className="flex-1 p-6 md:p-8 ml-0 md:ml-32 flex flex-col items-center">
        <motion.section
          id="sobre"
          className="flex flex-col md:flex-row items-center text-center md:text-left gap-6 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <img src="/foto.jpg" alt="Minha Foto" className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-primary shadow-lg" />
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-primary">👋 Olá, eu sou João Antonio M. Taveira</h1>
            <p className="text-seventhy mt-4">
              Transformando ideias em código e código em soluções. 🚀
            </p>
          </div>
        </motion.section>

        <motion.div
          className="w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <ExperienciaHome />
        </motion.div>

        <motion.section
          id="repos"
          className="mb-12 w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <h2 className="text-2xl font-semibold text-primary text-center">🔥 Meus Repositórios</h2>
          <GitHubRepos />
          <div className="flex justify-center mt-6">
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
          className="flex flex-col md:flex-row justify-center w-full gap-6 mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <div className="w-full md:w-1/2 bg-gray-900 bg-opacity-80 p-6 rounded-lg shadow-lg hover:shadow-2xl transition text-center">
            <h2 className="text-2xl font-semibold text-primary">📄 Meu Currículo</h2>
            <p className="text-gray-300 mt-2">Baixe meu currículo em PDF para saber mais sobre minha trajetória profissional.</p>

            <div className="mt-4 flex justify-center">
              <DownloadCvPdf />
            </div>
          </div>

          <div className="w-full md:w-1/2 bg-gray-900 bg-opacity-80 p-6 rounded-lg shadow-lg hover:shadow-2xl transition text-center">
            <h2 className="text-2xl font-semibold text-primary">💬 Vamos Conversar?</h2>
            <p className="text-gray-300 mt-2">Fale comigo diretamente pelo WhatsApp ou pelo e-mail.</p>

            <div className="mt-4 flex flex-col md:flex-row justify-center items-center gap-4">
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
