import { Routes,Route } from 'react-router-dom';
import Landpage from './Pages/Landpage/Landpage';
import Servicos from './Pages/Servicos/servicos';
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

function MainRoutes() {
  

  return (
    <>
     <Routes>
      <Route path='/' element={<Landpage />}/>
      <Route path='/servicos' element={<Servicos />}/>
      <Route path='/produto' element={<Produto />}/>
      <Route path='/produtos' element={<Produtos />}/>
      <Route path='/contatos' element={<ContactUs />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/productsPages' element={<ProductsPage />}/>
      <Route path='/addproduct' element={<AddProduct />}/>
      <Route path='/editproduct' element={<EditProductPage />}/>
      <Route path='/servicespage' element={<ServicesPage />}/>
      <Route path='/addservico' element={<AddServicoPage />}/>
      <Route path='/editservico' element={<EditServicoPage />}/>
     </Routes>
    </>
  );
};

export default MainRoutes;