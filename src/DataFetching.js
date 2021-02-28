import React, { useState, useEffect } from "react";
import axios from "axios";

const DataFetching = () => {
  const [commits, setCommits] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState("");
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://api.github.com/repos/cookerolo/fulltime/commits")
      .then((res) => {
        setCommits(res.data);
      })
      .catch((err) => setFetchError(err.message));
    setLoading(false);
  }, []);
  return (
    <div className="container">
      <h4 class="font-weight-bold pt-4 pb-3">Commit history for this Github Project</h4>

      <ul className="list-group">
        {loading && <p className="alert alert-warning">Loading...</p>}
        {fetchError && (
          <div className="alert alert-danger" role="alert">
            {fetchError}
          </div>
        )}
        {commits.map((commit, i) => (
          <li key={i} className="list-group-item d-flex justify-content-between align-items-center">
            {commit.commit.message} by {commit.author.login}
            <span className="badge badge-info badge-pill">
              {new Date(Date.parse(commit.commit.author.date)).toLocaleString()}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataFetching;
