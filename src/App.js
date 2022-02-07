import { useSelector } from 'react-redux';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
  const authenticated = useSelector((state) => state.users.authenticated);

  return (
    (!authenticated) ? <Login /> : <Dashboard />
  );
}

export default App;
