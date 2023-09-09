import {useFetchGenderQuery,useFetchgcollectionQuery} from '../store';
import Sidebaritems from './sidebaritems';
import { useState } from 'react';


function SideBar({opensidebar}) {
    
    const [selectedgender, setselectedgender] = useState(2);
    
    const handleslectgender = (id) => {
        setselectedgender(id);
        
    }

    const {data, error, loading} = useFetchGenderQuery();

    let genderrender = null;
    if(loading){
        genderrender = <div>Loading...</div>
    } 
    else if (error) {
        genderrender = <div>error is </div>
    }
    else if (data){
        genderrender = data.map((gender)=>{
            const select = gender.id === selectedgender
            return <div  key={gender.id}>
                <div onClick={()=>{handleslectgender(gender.id)}}  className={` 
                text-slate-900 text-l  ${select?'font-bold text-xl':''}
                 font-serif cursor-pointer p-8
                hover:font-bold`}>{gender.label}</div> 
                    </div>
        })
    }


    return <div className='absolute z-30 mt-3 flex flex-col bg-slate-50 ml-3 shadow rounded w-1/4  bg-slate-50'>
        <div className='flex flex-row pr-6  shadow-2xl gap-3 ml-3'>{genderrender}</div>
        <div className=' ml-2 bg-slate-50 shadow-2xl rounded
         border-t-4 border-slate-700'><Sidebaritems opensidebar = {opensidebar} selectedgender={selectedgender}/> </div>
    </div>
}
export default SideBar;