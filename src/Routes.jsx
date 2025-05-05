import { Routes,Route } from 'react-router-dom';
import Landpage from './Pages/Landpage/Landpage';
import Servicos from './Pages/Servicos/servicos';

function MainRoutes() {
  

  return (
    <>
     <Routes>
      <Route path='/' element={<Landpage />}/>
      <Route path='/servicos' element={<Servicos />}/>
     </Routes>
    </>
  );
};

export default MainRoutes;