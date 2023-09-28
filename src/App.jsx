import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, About, Profile, SignIn, SignUp } from "./pages";
import { Header } from "./components";

function App() {
  return (
    <BrowserRouter>
      {/* Header Section */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
