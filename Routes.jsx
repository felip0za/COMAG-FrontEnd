import { Routes,Route } from 'react-router-dom';
import Landpage from './Pages/Landpage/Landpage';

function MainRoutes() {
  

  return (
    <>
     <Routes>
      <Route path='/' element={<Landpage />}/>
     </Routes>
    </>
  );
};

export default MainRoutes;