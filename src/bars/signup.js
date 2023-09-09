import {useFetchUserQuery ,  Addloginguser, Adduserid } from '../store';
import { useDispatch, useSelector } from 'react-redux';

function Signup ({openlogin}) {
   
   
     const {data , error , loading} = useFetchUserQuery();
    const dispatch = useDispatch();



    const handleuserclick = (user) => {
        const id = user.id;
      
        dispatch(Addloginguser(user.name));
        dispatch(Adduserid(id));
        openlogin();
      }
      
   
 

    let renderusers =  null; 
    if (loading){
        renderusers = <div>....loading</div>
    }
     else if (error){
        renderusers = <div>error</div>
    }
    else if (data){
        renderusers = data.map((user)=>{
            return <div key={user.id} onClick={()=>{handleuserclick(user)}}
             className='p-5 hover:bg-green-200 cursor-pointer   rounded-2xl shadow-2xl 
              text-xl items-center
            '> {user.name} 
            <div><img src={user.img} /></div></div>
            
        })
    }


    return <div className='grid grid-cols-4 grid-rows-3 gap-10  mt-10 '>
       {renderusers}

    </div>

}

export default Signup;