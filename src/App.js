import {Route, Routes } from "react-router-dom";
import Aadmin from "./Component/Aadmin";
import AInsertPage from "./Component/AInsertPage";
import ADeletePage from "./Component/ADeletePage";
import AUpdatePage from "./Component/AUpdatePage";
import ABulkupPage from "./Component/ABulkupPage";


function App() {
  return (
    <div className="App">
    <Routes>
     
     <Route path="/" element={<Aadmin/>}/>
     <Route path="/AInsertPage" element={<AInsertPage/>}/>
     <Route path="ADeletePage" element={<ADeletePage/>}/>
     <Route path="AUpdatePage" element={<AUpdatePage/>}/>
    <Route path="ABulkupPage" element={<ABulkupPage/>}/>
   
 </Routes> 
    </div>
  );
}

export default App;
