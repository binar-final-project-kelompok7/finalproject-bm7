import { BrowserRouter, Route, Routes } from "react-router-dom";
import KelasSaya from "./pages/KelasSaya";
import Course from "./pages/Course";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<KelasSaya />} />
          <Route path="/course" element={<Course />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
