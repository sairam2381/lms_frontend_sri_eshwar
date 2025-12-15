import { Routes, Route } from "react-router-dom";
import CreateAssignmentPage from "./components/assignment-create-page/assignment-create-page-component";
import UserRequestsPage from "./components/admin-request-page/admin-request-page";
import AssignmentResults from "./components/assignment-results-backend/assignment-results-backend-component";
import UserAssignmentDashboard from "./components/user-assignment-page/user-assignment-page-component";
import UserLoginPage from "./components/user-login-page/user-login-page";
function App() {
  return (
    <Routes>
      <Route path="/create-assignment" element={<CreateAssignmentPage />} />
      <Route path="/user-request" element={<UserRequestsPage />} />
      <Route
        path="/assignment-results-backend"
        element={<AssignmentResults />}
      />
      <Route
        path="/user-assignment-backend"
        element={<UserAssignmentDashboard />}
      />
      <Route path="/user-login-page" element={<UserLoginPage />} />
    </Routes>
  );
}

export default App;
