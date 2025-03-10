import { GitHubRepositoryDomain } from "@/domain/GitHubRepositoryDomain";
import { useEffect, useState } from "react";

export default function useGitHubRepository() {
    const [repos, setRepos] = useState<GitHubRepositoryDomain[]>([]); 
  
    useEffect(() => {
      fetch("/api/github")
        .then(res => res.json())
        .then((data: GitHubRepositoryDomain[]) => setRepos(data)); 
    }, []);
  
    return repos;
  }
