import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { StoreProvider } from "./store/StoreContext";
import { QueryClient } from "@tanstack/query-core";
import { QueryClientProvider } from "@tanstack/react-query";
import Department from "./component/pages/developer/settings/department/Department";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <StoreProvider>
          <Router>
            <Routes>
              <Route path={`*`} element={<Department />} />
            </Routes>
          </Router>
        </StoreProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
