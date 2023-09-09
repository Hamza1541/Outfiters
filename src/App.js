
import Navbar from "./bars/navBar";
import HomePage from "./pages/homePage";
import Cart from "./pages/cart";

import Wishlist from "./pages/wishlist";
import Route from "./components/Route";

function App () {
 



  return <div className="">
    <div className="relative w-full"><Navbar /></div>

    <Route Path = 'home'><HomePage /></Route>
    <Route Path = 'wishlist'><Wishlist /> </Route>
    <Route Path = 'cart'><Cart/></Route>

    
    
  </div>
}

export default App;