import logo from "./logo.svg";
import css from "./App.module.css";
import { useState, useCallback } from "react";
import { fetchIssues } from "./fetchIssues";
import { useNavigate } from "react-router-dom";

function RepoFetcher({ setIssues }) {
  const [repoName, setRepoName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    console.log("pikapik", `/issues/${e.target.name.value}`);
    navigate(`/issues/${e.target.name.value}`);
    // setRepoName(e.target.name.value);
    // fetchIssues(e.target.name.value, setIssues);
  }, []);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Repository Name" />
        <button type="submit">Go</button>
      </form>
      <p>{repoName}</p>
    </div>
  );
}
function App() {
  const [issues, setIssues] = useState([]);
  console.log({ issues });
  return (
    <div className="App">
      <h1>Git Issues</h1>
      <RepoFetcher setIssues={setIssues} />
      {issues.map((issue) => {
        return (
          <>
            <br />
            <p>{issue.body}</p>
          </>
        );
      })}
    </div>
  );
}

export default App;
