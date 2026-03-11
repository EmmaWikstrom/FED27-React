import user from "./mockUser.json";
import Layout from "./components/Layout";
import Homepage from "./components/Homepage/Homepage";
import ContactForm from "./components/ContactForm/ContactForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage user={user} />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
