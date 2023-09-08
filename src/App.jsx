import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { StoreProvider } from "./store/StoreContext";
import { QueryClient } from "@tanstack/query-core";
import { QueryClientProvider } from "@tanstack/react-query";
import ReferralType from "./component/pages/developer/settings/referral-type/ReferralType";
import Department from "./component/pages/developer/settings/department/Department";
import ReferralSource from "./component/pages/developer/settings/referral-source/ReferralSource";
// import Department from "./component/pages/developer/settings/department/Department";
// import ReferralType from "./component/pages/developer/settings/referral-type/ReferralType";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <StoreProvider>
          <Router>
            <Routes>
              <Route path={`*`} element={<Department />} />
              <Route path={"/settings/department"} element={<Department />} />
              <Route
                path={"/settings/referral-type"}
                element={<ReferralType />}
              />
              <Route
                path={"/settings/referral-source"}
                element={<ReferralSource />}
              />
            </Routes>
          </Router>
        </StoreProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
