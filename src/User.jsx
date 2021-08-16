import React, { useEffect, useState } from "react";
import useUsers from "./useUsers";
const Users = () => {
  const query = useUsers();
  return (
    <div>
      <button onClick={query.refetch}>Refresh</button>
      {query.isLoading ? (
        <div>Loading ...</div>
      ) : (
        <ul>
          {query.data.data.map((us) => (
            <li key={us.id}>{us.email}</li>
          ))}
        </ul>
      )}
      {query.isError && <div>Something went wrong ...</div>}
    </div>
  );
};

export default Users;
