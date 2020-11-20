import React, { useEffect, useState } from "react";
import Table from "./Table";
import FilterInput from "./SearchInput";
import {getUsers} from "./API";
import "./App.css";

function App() {
  const [initialUsers, updateAvailableUsers] = useState([]);
  const [usersToRender, updateUsersToRender] = useState([]);

  useEffect(() => {
    getUsers().then(({data: { results } }) => updateAvailableUsers(results));
  }, []);

  return(
    <div className="App">
      <h1>Employee Directory</h1>
      <p>
        Browse through the company directory
      </p>
      <FilterInput 
        users={ initialUsers }
        updateUsers={ updateUsersToRender }
      />
      <Table 
        users={ usersToRender }
      />
    </div>
  );
};

export default App;
