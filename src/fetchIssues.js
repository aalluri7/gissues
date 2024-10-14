import { github_token } from "./secrets";

export const fetchIssues = async (repoName, setData) => {
  const response = await fetch(
    `https://api.github.com/repos/${repoName}/issues?per_page=${10}&page=${1}`,
    {
      method: "GET",
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${github_token}`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  );
  const data = await response.json();
  const headers = response.headers.entries().toArray();
  console.log({ data, headers });
  setData(data);
};
