import {BsCartPlusFill,BsHeart} from 'react-icons/bs';
import { useAddfavMutation,AddtoCart } from '../store';
import { useSelector, useDispatch } from 'react-redux';
function ItemsRender({item}){
    const dispatch = useDispatch();
    const [addfav] = useAddfavMutation();
    const user = useSelector((state) => {
        return state.usersname.userid;
        
    })
    const sendtocart = (item) => {
        dispatch(AddtoCart(item));
        
    }
    const addtowishlist = (item) => {
        addfav({item,user})

    }
   return( 
    <div className="flex flex-col p-3 cursor-pointer mt-5 rounded-2xl bg-slate-50 shadow-2xl" >
           <img className="rounded-2xl p-1 mt-1" src={item.pic1} />
           <p className="text-3xl font-serif pt-2 pl-5 ">{item.name}</p>
            <div className='flex flex-row pt-4 justify-between items-center'>
                <p className="text-xl  pl-2 pt-4 font-thin font-serif  
                text-slate-500">TYPE : {item.tag}</p>
            <div onClick={()=>{sendtocart(item)}} className='hover:text-red-500  flex flex-row'>
            <BsCartPlusFill className='text-4xl ml-5 ' />
            <p className='text-l font-serif pt-3 tracking-widest'>BUY NOW</p>
            </div>
            </div>
            <p className="text-3xl font-serif pl-5 pt-5">Price - Rs: {item.price}</p>
            <div onClick={()=>{addtowishlist(item)}} className='flex flex-row pt-2 pl-5 items-center hover:font-bold hover:text-red-700'>
                <p className='pr-1 text-xl  font-serif'>add to wishlist</p>
            <BsHeart className='pl-2 text-3xl' />
            </div>
            
        </div>)
}

export default ItemsRender;

