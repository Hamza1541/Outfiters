import { useSelector } from "react-redux";
import { useFetchItemsQuery, useFetchGenderQuery } from "../store";
import ItemsRender from "./itemsrender";
import Homepageitems from "./homepageitems";


function HomePage() {
    const showgcid = useSelector((state) => {
        return state.itemsl.showgcid });
        

    const gcid = useSelector((state)=>{
        return state.itemsl.gcid
    });
   
    const {currentData,isError,isLoading} = useFetchGenderQuery();
   const {data, error, loading} = useFetchItemsQuery(gcid);
   let renderitems = null;
   if(loading){
    renderitems = <div>..loading</div>
   }
   else if(error) {
    renderitems = <div>error</div>
   }
   else if(data) {
    renderitems = data.map((item)=>{
        return <div  key={item.id}>
            <ItemsRender item = {item} /> 

        </div>
    })

   }

   let renderhomeppage = null;
   if(isLoading){
    renderhomeppage = <div>..loading</div>
   }
   else if(isError) {
    renderhomeppage = <div>error</div>
   }
   else if(currentData) {
    renderhomeppage = currentData.map((item)=>{
        return <div  key={item.id}>
            
            <Homepageitems item = {item} /> 

        </div>
    })
   }
    return<div >
        {showgcid && <div className="grid grid-cols-4 grid-rows-3 gap-5  rounded-2xl" >
            {renderitems}</div>  }
            {showgcid ? '' : <div className="">{renderhomeppage}</div>}
    </div>
}
export default HomePage;