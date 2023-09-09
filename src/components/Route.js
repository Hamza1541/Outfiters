import { useSelector } from "react-redux";

function Route ({Path, children}) {
    const currentPath = useSelector((state)=>{
        return state.navbar.path;
      })

  

    if (Path === currentPath) {
        return children;
    }


    return null;
}

export default Route;