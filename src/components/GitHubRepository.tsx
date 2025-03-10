import useGitHubRepository from "@/adapters/useGitHubRepository";

export default function GitHubRepos() {
  const repos = useGitHubRepository();

  return (
    <div className="mx-auto py-4">
      {repos.length === 0 ? (
        <p className="text-center text-gray-400">Carregando repositórios...</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.slice(0, 6).map(repo => (
            <div
              key={repo.id}
              className="bg-gray-900 shadow-lg rounded-lg p-6 border border-gray-700 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
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
                <span className="text-sm bg-gray-800 px-2 py-1 rounded-full text-white">
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
          ))}
        </div>
      )}
    </div>
  );
}
