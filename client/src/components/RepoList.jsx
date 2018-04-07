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
          <th>Owner</th>
          <th>CreatedAt</th>
        </tr>
      </thead>
      <tbody>
        {props.repos.map(function(repo){
          return (
          <tr key={repo._id}>
          <td>{repo.id}</td>
          <td>{repo.name}</td>
          <td>{repo.description}</td>
          <td>{repo.owner}</td>
          <td>{repo.createdAt}</td>
          </tr>
          )
        })}
      </tbody>
    </table>
  </div>
)

export default RepoList;