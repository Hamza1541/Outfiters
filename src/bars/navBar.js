import {CgMenuRight} from 'react-icons/cg';
import { FaShopify,FaGratipay } from 'react-icons/fa';
import {MdOutlineFavoriteBorder} from 'react-icons/md';
import Login from './login';
import { AddPath } from '../store';
import SideBar from './sideBar';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { useSelector } from 'react-redux';


function Navbar () {
    const dispatch = useDispatch();
    const opencart= () => {
        dispatch(AddPath('cart'));
    }
    const gotohome = () => {
        dispatch(AddPath('home'));
    }
    const openwishlist = () => {
        dispatch(AddPath('wishlist'));
    }
    const loginuser = useSelector((state)=> {
        return state.usersname.loginuser;
    })
    const [showsidebar, setshowsidebar] = useState(false);
    const opensidebar = () => {
        setshowsidebar(!showsidebar);
    }
    const [showloginbar , setshowloginbar] = useState(false);
    const openlogin = () => {
        setshowloginbar(!showloginbar);
    }
   return <div className='items-center'>
    <div className=" flex justify-between bg-slate-50 flex-row bg-slate-50
     border-b shadow-2xl 
rounded-b-2xl">
    <div className='flex flex-row p-6 ml-5 items-center cursor-pointer '> 
    <CgMenuRight onClick={opensidebar} className='text-3xl hover:text-slate-600
      shadow-2xl' />
    <p onClick={gotohome} className=' font-extrabold tracking-wide italic ml-5 font-serif 
    text-3xl'>Outfiters</p>
    </div>
   <div onClick={openwishlist} className='flex flex-row bg-slate-50 font-bold  rounded-2xl mt-4 items-center  pt-5 ml-24 left-2/4
     cursor-pointer'>
     <MdOutlineFavoriteBorder className='text-3xl mr-1 hover:text-red-600 text-slate-900 font-bold mb-5'  />
   < p className='text-xl font-serif tracking-widest hover:text-red-600 border-b mb-5 text-slate-900 font-bold border-slate-400'>
    Wish-List</p>
   <MdOutlineFavoriteBorder className='text-3xl ml-1 mb-5 hover:text-red-600 text-slate-900 font-bold'  /></div>

    <div className=' items-center p-6  flex flex-row cursor-pointer'>
        <form > <input className='border-b-4 border-slate-700 bg-slate-50' /> </form>
        <button className='ml-2 text-l font-seif
         font-thin tracking-tight hover:font-bold'>SEARCH</button>
         <div onClick={openlogin} className='ml-5 text-l font-seif
         font-thin tracking-tight font-bold'>
            <div></div>
            <span className={`font-bold ${loginuser ? 
                'font-bold text-2xl tracking-wide font-serif' : ''}`}>
        {loginuser || 'LOGIN'}
    </span>
         </div>
         
         <FaShopify onClick={opencart} className='text-5xl mr-5 ml-10' />



    </div>
   


</div>
{ showsidebar &&  <SideBar opensidebar = {opensidebar}/>}
<div className='mt-5 mr-5'>{showloginbar && <Login openlogin={openlogin} /> }</div>
</div>


}
 export default Navbar;