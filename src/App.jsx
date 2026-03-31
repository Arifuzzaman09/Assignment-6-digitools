
import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner'
import Cart from './Components/Cart'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Pricing from './Components/Pricing'
import Products from './Components/Products'
import Stats from './Components/Stats'
import Steps from './Components/Steps'

const getProducts = async () => {
  const res = await fetch('/data.json')
  return res.json()
}
const productsPromise = getProducts()


function App() {
  const [activeTab, setActiveTab] = useState("product")
  const [carts, setCarts] = useState([])




  return (
    <>
      <Navbar carts={carts}></Navbar>
      <Banner></Banner>
      <Stats></Stats>


      <section className='text-center space-y-3'>
        <h1 className='text-3xl font-bold'>Premium Digital Tools</h1>
        <p>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
      </section>


      <div className="tabs tabs-box justify-center bg-transparent mt-10">
        <input
          type="radio"
          name="my_tabs_1"
          className="tab w-40 rounded-full "
          aria-label="Product"
          onClick={() => setActiveTab("product")}
          defaultChecked
        />

        <input
          type="radio"
          name="my_tabs_1"
          className="tab w-40 rounded-full "
          aria-label={`Cart(${carts.length})`}
          onClick={() => setActiveTab("cart")}
        />
      </div>

      {activeTab === "product" && <Products productsPromise={productsPromise} carts={carts} setCarts={setCarts}></Products>}


      {activeTab === "cart" && <Cart carts={carts} setCarts={setCarts}></Cart>}

      <Steps></Steps>
      <Pricing></Pricing>
      <Footer></Footer>



    </>
  )
}

export default App
