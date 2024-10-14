import css from "./Issues.module.css";
import { useState, useCallback, useEffect } from "react";
import { fetchIssues } from "./fetchIssues";
import { Routes, Route, useParams } from "react-router-dom";
import { IssueTitleCard } from "./IssueTitleCard";

const Issues = ({ params }) => {
  let { org, repo } = useParams();
  const [issues, setIssues] = useState([]);
  useEffect(() => {
    fetchIssues(`${org}/${repo}`, setIssues);
  }, [org, repo]);
  console.log({ org, repo });

  return (
    <div className={css.issuesContainer}>
      {issues.map((issue) => (
        <IssueTitleCard key={issue.id} issue={issue} />
      ))}
    </div>
  );
};

export default Issues;
