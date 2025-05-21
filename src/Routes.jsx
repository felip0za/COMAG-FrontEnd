import { Routes,Route } from 'react-router-dom';
import Landpage from './Pages/Landpage/Landpage';
import Servico from './Pages/Servico/servico';
import Produto from './Pages/Produto/Produto';
import Produtos from './Pages/Produtos/Produtos';
import ContactUs from './Pages/ContactUs/ContactUs';
import Login from './Pages/Login/Login';
import ProductsPage from './Pages/ProductsPage/ProductsPage';
import AddProduct from './Pages/Product/AddProduct/AddProduct';
import ServicesPage from './Pages/ServicesPage/ServicesPage';
import AddServicoPage from './Pages/Servicess/AddServices/AddServicoPage';
import EditServicoPage from './Pages/Servicess/EditServicoPage/EditServicoPage';
import EditProductPage from './Pages/Product/EditProduct/EditProductPage';
import Servicos from './Pages/Servicos/servicos';

function MainRoutes() {
  

  return (
    <>
     <Routes>
      <Route path='/' element={<Landpage />}/>
      <Route path='/servico/:id' element={<Servico />}/>
      <Route path="/produto/:id" element={<Produto />} />
      <Route path='/produtos' element={<Produtos />}/>
      <Route path='/servicos' element={<Servicos />}/>
      <Route path='/contatos' element={<ContactUs />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/productsPages' element={<ProductsPage />}/>
      <Route path='/addproduct' element={<AddProduct />}/>
      <Route path='/editproduct/:id' element={<EditProductPage />}/>
      <Route path='/servicespage' element={<ServicesPage />}/>
      <Route path='/addservico' element={<AddServicoPage />}/>
      <Route path='/editservico/:id' element={<EditServicoPage />}/>
     </Routes>
    </>
  );
};

export default MainRoutes;