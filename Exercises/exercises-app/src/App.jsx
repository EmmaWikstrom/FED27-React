import user from "./mockUser.json";
import Layout from "./components/Layout";
import Homepage from "./components/Homepage/Homepage";
import ContactForm from "./components/ContactForm/ContactForm";

function App() {
  return (
    <Layout>
      <Homepage user={user} />
      <ContactForm />
    </Layout>
  );
}

export default App;
