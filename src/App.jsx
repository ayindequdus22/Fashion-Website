import './App.css';
import { useState, useEffect, lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeContainer from './components/HomeContainer/HomeContainer';
import Loader from './components/loader/Loader';
import { Provider } from 'react-redux';
import Store from './components/utils/Store';
import { ToastContainer } from 'react-toastify';
import { Navbar } from './components/Index';


const Blog = lazy(() => import('./components//Blog/Blog'));
const NotFound = lazy(() => import('./components//Notfound/Notfound'));
const Cart = lazy(() => import("./components/cart/Cart"))
const Products = lazy(() => import('./components/Clothing/Products'));

function App() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setVisible(true)
      }
      else if (window.scrollY <= 100) {
        setVisible(false)
      }
    })

  }, [])
  return (
    <>
      <Suspense fallback={<Loader />}>
        <ToastContainer containerId="A" toastClassName="toastBody" className="toastContainer"
          position="bottom-right" style={{
            zIndex: 20
          }}
          limit={4}
          progressClassName="progressClass"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
       
        />
        <Provider store={Store}>
<Navbar/>
          <Routes>
            <Route path='/' element={<HomeContainer />} />
            <Route path='/products' element={<Products />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <div className='relativeIcons'>
            <>
              <div className={visible ? "fa fa-chevron-up active" : ""} onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }) }}></div>
              <div className={visible ? "fa fa-chevron-down active" : ""} onClick={() => { window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' }) }}></div>
            </>

          </div> </Provider>
      </Suspense>
    </>
  );
}

export default App;
