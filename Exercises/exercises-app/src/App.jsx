import user from "./mockUser.json";
import Layout from "./components/Layout";
import Homepage from "./components/Homepage/Homepage";

function App() {
  return (
    <Layout>
      <Homepage user={user} />
      <form>
        <label htmlFor="name">Name:</label>
        <input id="name" type="text" name="username" placeholder="Name" />
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" name="email" placeholder="Email" />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" placeholder="Your message" />
        <button type="submit">Submit</button>
      </form>
    </Layout>
  );
}

export default App;
