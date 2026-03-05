import user from './mockUser.json';
import Layout from './components/Layout';
import Homepage from './components/Homepage/Homepage';

function App() {
  return (
    <Layout>
      <Homepage user={user} />
    </Layout>
  );
}

export default App;
