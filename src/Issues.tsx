import css from "./Issues.module.css";
import { useState, useCallback, useEffect } from "react";
import { fetchIssues } from "./fetchIssues";
import { Routes, Route, useParams } from "react-router-dom";
import { IssueTitleCard } from "./IssueTitleCard";

export type GithubIssue = { id: number, title: string, body: string }
const Issues = () => {
  let { org, repo } = useParams();
  const [issues, setIssues] = useState<GithubIssue[]>([]);
  useEffect(() => {
    fetchIssues(`${org}/${repo}`, setIssues);
  }, [org, repo]);
  console.log({ org, repo });

  return (
    <div className={css.issuesPage}>
      <div className={css.issuesContainer}>
        {issues.map((issue) => (
          <IssueTitleCard key={issue.id} issue={issue} />
        ))}
      </div>

    </div>
  );
};

export default Issues;
