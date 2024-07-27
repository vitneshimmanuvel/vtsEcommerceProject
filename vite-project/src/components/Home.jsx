import Header from './Header'
import Navbar from './Navbar'
import Prodect from './Prodect'
import Fotter from './Fotter'
import Hmain from './Hmain'
import Lappshow from './Lappshow'
const Home=({cart,setcart})=> {
  return (
    <div>
       <Header size={cart.length}/> 
      <Navbar ></Navbar>
      <Hmain></Hmain>
      <Lappshow/>
      <Prodect cart={cart} setcart={setcart} ></Prodect>
      <Fotter></Fotter>
      
    </div>
  )
}
export default Home;