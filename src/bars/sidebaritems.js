import {useFetchgcollectionQuery,Addgcid,Ashowgcid} from '../store';
import { useDispatch} from 'react-redux';

import { AddPath } from '../store';


function Sidebaritems ({selectedgender,opensidebar}) {
    const dispatch = useDispatch();
    const {data , error, loading} = useFetchgcollectionQuery(selectedgender);

    
    const handlesomethin = (id) => {
    
        opensidebar();
        dispatch(Addgcid(id));
        dispatch(Ashowgcid());
        dispatch(AddPath('home'));
       
    }
   
    let rendersidebaritems = null;
    if  (loading) {
        rendersidebaritems = <div>..loading</div>
    } 
    else if (error) {
        rendersidebaritems = <div>error</div>
    } 
    else  if (data) {
        rendersidebaritems = data.map((gitem)=>{
            return <div className='' key={gitem.id}>
                <div onClick={()=>{handlesomethin(gitem.id)}} className='text-xl font-serif hover:font-bold pb-3 pl-10 cursor-pointer gap-4' >
                    {gitem.label}</div>
            </div>
        })
    }
   
    return <div className="flex flex-col mt-2 mb-2">
        {rendersidebaritems}
     

    </div>
}
export default Sidebaritems;