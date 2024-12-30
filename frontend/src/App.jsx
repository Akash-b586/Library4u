import { useState } from "react";
import Home from "./home/home";
import Courses from "./courses/courses";
import Signup from "./components/signup";
import Contacts from "./contacts/contacts";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contacts />} />
          <Toaster />

        </Routes>
      </div>
    </>
  );
}

export default App;
