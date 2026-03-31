
import './App.css'
import Banner from './Components/Banner'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Pricing from './Components/Pricing'
import Products from './Components/Products'
import Stats from './Components/Stats'
import Steps from './Components/Steps'

const getProducts = async()=>{
  const res = await fetch('/data.json')
  return res.json()
}
const productsPromise = getProducts()


function App() {


  return (
    <>
       <Navbar></Navbar>
       <Banner></Banner>
       <Stats></Stats>
        <Products productsPromise={productsPromise}></Products>
       <Steps></Steps>
       <Pricing></Pricing>
       <Footer></Footer>
     
    

    </>
  )
}

export default App
