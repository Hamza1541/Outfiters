import { useDispatch, useSelector } from "react-redux";
import { Addusername } from "../store";
import  { useAddUserMutation } from '../store';
import Signup from "./signup";
import { useState } from "react";
import {AiOutlineArrowDown} from 'react-icons/ai';

function Login ({openlogin}) {
  const [showsignup,  setshowsignup] = useState(false);
  const [images, setimage] =  useState(null);
  const handleshowsignup = () => {
      setshowsignup(!showsignup);
  }
  console.log(images);
  
  const dispatch = useDispatch();
  const name = useSelector((state) => {
      return state.usersname.name;
  })
  const [ AddUser ] = useAddUserMutation();
  const handlechange = (event) => {
      dispatch(Addusername(event.target.value));
      
  }
  const handlechangeit = (event) => {
      const file = event.target.files[0];
    
      // Check if the user has selected a file
      if (file) {
        // Set the `images` state variable to the file
        setimage(file);
      }
    };
    const componentDidMount = () => {
      const pimages = document.getElementById('pimages');

      // Listen for changes to the file input element
      pimages.addEventListener('change', () => {
        // Get the files from the file input element
        const files = pimages.files;

        // Set the `images` state variable to the files
        setimage(files);
      });
    };
    const handlesubmit = async (event) => {
      event.preventDefault();
    
      const name = event.target.name.value;
      const pimage = event.target.pimages.files[0];
    
      // Check if the `input` element has any files selected
      if (event.target.pimages.files.length > 0) {
        // Send the request to the API
        await AddUser({ name, pimage });
      } else {
        // Show an error message
        alert('Please select a file to upload.');
      }
    };
     
    return <div>
        
        <div className="absolute z-30  border-t-4 border-slate-400  bg-slate-50 
    bg-slate-50 shadow-2xl rounded-2xl h-full pb-20 pt-10 
     left-2/4 w-2/4">

       <div className="p-5 bg-slate-50 border-b-4 border-slate-400 pb-10 rounded-b-2xl">
        <div className=" border-b-2 border-slate-300 pb-5">
            <p className="text-xl font-serif  ">Dont have Account?
             <br/> Create an Account <AiOutlineArrowDown />
             <button onClick={handleshowsignup}
              className="pl-3 text-2xl tracking-widest font-serif font-bold 
               hover:text-red-600">Sign-Up</button>
             </p></div>
             {showsignup ? '' : <div> <Signup openlogin = {openlogin} /> </div> }
       


       {showsignup && <div>
        <div className="ml-20"> <h6  className="text-5xl tracking-wide font-bold
        pb-10 pt-5">SIGN-UP</h6> </div>
        <form className="flex flex-col gap-5" onSubmit={handlesubmit}>
            <label className="text-xl font-serif"> Enter Your Name </label>
            <input value={name} onChange={handlechange} className="bg-slate-50 border-b-4 border-slate-900 ml-5" />
            <label className="text-xl font-serif"> Upload Your Profile Picture here! </label>
            <input onChange={handlechangeit} type="file" accept="image/*" className="mb-10 bg-slate-50 border-b-4 border-slate-900 ml-5" />
          
            <button onClick={handlesubmit} className="text-xl font-serif hover:bg-green-300 ml-10 
            border-2 rounded-2xl p-3 font-bold" > Submit </button>
        </form>
        
         </div>}
        
        
       </div>
      
             </div>
    </div>
}
export default Login;












