import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './views/Home';
import Contato from './views/Contato';
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Post from "./views/Post";
import Servico from "./views/Servico";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AreaRestrita from './views/AreaRestrita';
import Projetos from "./views/Projetos";

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/servico/:slug" element={<Servico />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/post/:post_uid" element={<Post />} />
          <Route path="/area-restrita/:empresa" element={<AreaRestrita />} />
        </Routes>
        <Footer />
        <ToastContainer />
      </BrowserRouter>
    </>
  )
}

export default App
