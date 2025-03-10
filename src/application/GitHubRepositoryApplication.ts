export class GitHubRepositoryApplication {
    async execute(username: string) {
      const response = await fetch(`https://api.github.com/users/${username}/repos`);
      return response.json();
    }
  }