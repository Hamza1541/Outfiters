import {useFetchfavQuery,AddtoCart,useDeletefavMutation} from '../store';
import { useSelector, useDispatch } from 'react-redux';
import {AiOutlineDelete} from 'react-icons/ai';

import {AiOutlineShoppingCart} from 'react-icons/ai';
function Wishlist() {
    const [deletefav] = useDeletefavMutation();
    const deletefromfav = (id) => {
        deletefav(id);

    }
    const dispatch = useDispatch();
    const user = useSelector((state)=>{
        return state.usersname.userid;
    })
    const sendtocart = (item) => {
        dispatch(AddtoCart(item));
    }
    const {data, error , loading} = useFetchfavQuery(user);
    let renderwishlist = null;
    if(loading){
        renderwishlist = <div>...loading</div>
    }
    else if (error){
        renderwishlist = <div>...errror</div>
    }
    else if(data){
        renderwishlist = data.map((item)=>{
            return <div key={item.id} className='cursor-pointer rounded-2xl flex flex-col items-center border-2 border-slate-200 
            p-5 bg-slate-50 shadow-2xl'>
                <img src={item.pic1} />
                <p> Article name : {item.name}</p>
                <p>Price Rs: {item.price}</p>
                <div className='flex flex-row items-center gap-20'><AiOutlineShoppingCart onClick={()=>{sendtocart(item)}} className=' hover:text-red-400 text-5xl' />
                <AiOutlineDelete onClick={()=>{deletefromfav(item.id)}} className='text-4xl hover:text-red-500' /></div>
              

            </div>
        })
    }
    return <div className='grid grid-cols-3 grid-rows-2 gap-10'>{renderwishlist}</div>
}
export default Wishlist;