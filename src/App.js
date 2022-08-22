import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/layout';

import Rockets from './pages/Rockets';
import Missions from './pages/Missions';
import Profile from './pages/Profile';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/rockets" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Navigate to="/rockets" />} />
      </Routes>
    </Layout>
  );
}

export default App;
