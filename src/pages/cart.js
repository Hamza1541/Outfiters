import { useSelector, useDispatch } from "react-redux";
import {AiOutlineDelete} from 'react-icons/ai';
import {deleteitem} from '../store';


function Cart() {
    const dispatach = useDispatch();
    const deletecartitem = (item) => {
        dispatach(deleteitem(item))
    }
    const data = useSelector((state)=>{
        return state.cart.cart;
    });
    const totalSum = data.reduce((accumulator, item) => {
        return accumulator + item.price;
      }, 0);
     const renderingdata = data.map((item)=>{
        return <div key={item.id} className="">
            <img className="rounded-2xl p-2" src={item.pic1} />
            <div className="font-serif text-3xl ">Name : {item.name}</div>
            <p className="font-serif text-3xl ">Price Rs: {item.price}</p>
            <AiOutlineDelete onClick={()=>{deletecartitem(item.id)}} className=" cursor-pointer text-3xl " />
        </div>
    })
    return <div className="bg-slate-50">
        <div className="font-serif p-10 text-4xl">TOTAL BILL :{totalSum}</div>
        <div className="grid grid-cols-3 grid-rows-2 gap-10 rounded-2xl">
        
        {renderingdata}
        </div>
        
    </div>
}
export default Cart;