import { NextApiRequest, NextApiResponse } from "next";
import { GitHubRepositoryApplication } from "@/application/GitHubRepositoryApplication";
import { GitHubRepositoryDomain } from "@/domain/GitHubRepositoryDomain";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const username = "joaotoni";
  const getRepos = new GitHubRepositoryApplication();
  console.log("resposta API github", getRepos)
  const repos = await getRepos.execute(username);

  if (!Array.isArray(repos)) {
    console.error("Erro: resposta da API do GitHub não é um array", repos);
    return res.status(500).json({ error: "Erro ao buscar repositórios do GitHub" });
  }

  const formattedRepos: GitHubRepositoryDomain[] = repos.map((repo: any) => ({
    id: repo.id,
    name: repo.name,
    html_url: repo.html_url,
    language: repo.language || "Não especificado",
    description: repo.description || "Sem descrição",
  }));

  res.status(200).json(formattedRepos);
}
