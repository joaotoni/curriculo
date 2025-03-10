export  default function DownloadCvPdf() {
    return (
      <a href="/curriculo.pdf" className="px-4 py-2 rounded-lg hover:bg-third transition" download>
        <button>📄 Baixar Currículo</button>
      </a>
    );
  }
  