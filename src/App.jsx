import { BrowserRouter, Route, Routes } from "react-router-dom";
import KelasSaya from "./pages/KelasSaya";
import Course from "./pages/Course";
import AdminLogin from "./pages/AdminLogin";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/myclass" element={<KelasSaya />} />
          <Route path="/course" element={<Course />} />
          <Route path="/adminLogin" element={<AdminLogin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
