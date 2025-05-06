import { Routes,Route } from 'react-router-dom';
import Landpage from './Pages/Landpage/Landpage';
import Servicos from './Pages/Servicos/servicos';
import Produto from './Pages/Produto/Produto';
import Produtos from './Pages/Produtos/Produtos';

function MainRoutes() {
  

  return (
    <>
     <Routes>
      <Route path='/' element={<Landpage />}/>
      <Route path='/servicos' element={<Servicos />}/>
      <Route path='/produto' element={<Produto />}/>
      <Route path='/produtos' element={<Produtos />}/>
     </Routes>
    </>
  );
};

export default MainRoutes;