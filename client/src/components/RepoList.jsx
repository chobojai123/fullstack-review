import React from 'react';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Description</th>
          <th>Stargazers_count</th>
          <th>CreatedAt</th>
          <th>HTML Url</th>
        </tr>
      </thead>
      <tbody>
        {props.repos.map(function(repo){
          return (
          <tr key={repo._id}>
          <td>{repo.id}</td>
          <td>{repo.name}</td>
          <td>{repo.description}</td>
          <td>{repo.stargazers_count}</td>
          <td>{repo.created_at}</td>
          <td>{repo.html_url}</td>
          </tr>
          )
        })}
      </tbody>
    </table>
  </div>
)

export default RepoList;