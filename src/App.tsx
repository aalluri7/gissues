import logo from "./logo.svg";
import css from "./App.module.css";
import React, { useState, useCallback } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Issues from './Issues';

import { useNavigate } from "react-router-dom";

function RepoFetcher() {
  // const [repoName, setRepoName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = useCallback((e: any) => {
    e.preventDefault();
    console.log("pikapik", `/issues/${e.currentTarget.name.value}`);
    navigate(`/issues/${e.currentTarget.name.value}`);
    // setRepoName(e.target.name.value);
    // fetchIssues(e.target.name.value, setIssues);
  }, []);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Repository Name" />
        <button type="submit">Go</button>
      </form>
      {/* <p>{repoName}</p> */}
    </div>
  );
}





function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RepoFetcher />,
    },
    {
      path: "issues/:org/:repo",
      element: <Issues />,
    },
  ]);

  return (
    <div className="App">
      <h1>Git Issues</h1>
      <RouterProvider router={router} />
      {/* < /> */}
    </div>
  );
}


export default App;
