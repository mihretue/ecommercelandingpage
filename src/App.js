import Landing from "./pages/Index";
import { Route,Routes} from "react-router-dom";
function App() {
  return (
    <>
    {/* <BrowserRouter> */}
        <Routes>
          <Route index element={<Landing/>} />
        </Routes>
    {/* </BrowserRouter> */}
 </> 
    
  );
}

export default App;
