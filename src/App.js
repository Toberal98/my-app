import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Users from "./User";
import OtherUsers from "./otherUsers";
import CreateUser from "./CreateUsers";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1000,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  const [show, setShow] = useState(false);
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Lista de usuarios</h1>
        <Users />
        <button
          onClick={() => {
            setShow(true);
          }}
        >
          Mostrar
        </button>
        {show ? <OtherUsers /> : <h1>not data</h1>}
        <CreateUser />
      </div>
    </QueryClientProvider>
  );
};

export default App;
