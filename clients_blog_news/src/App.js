import { RouterProvider } from "react-router-dom";
import { router } from './Component/Routes/Routes';



function App() {

  return (
    <div className=" ">
     
     <RouterProvider router={router}/>
    </div>
  );
}

export default App;
