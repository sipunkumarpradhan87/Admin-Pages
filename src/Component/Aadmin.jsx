import React from "react";

import './Aadmin.css';
// import {Link } from "react-router-dom";
import EditProfiles from "./EditProfiles";
import { Link } from "react-router-dom";

function Aadmin()
{
    return(
        <>
        
        <div className="container-admin " 
        style={{marginLeft:130,backgroundColor:"white",boxShadow:"2px 2px 3px 3px  #766767",width:1000
        ,height:440,borderRadius:20 ,marginTop:60}}>
            <h3 style={{paddingTop:10,marginLeft:17,fontFamily:'cursive'}}>Admin Screen</h3>
            <header> 
                <div>
                    <EditProfiles/>
                   
                </div>
             </header>
        <div className="mx-4">
<div>

    <Link to="/"><button type="button" className="btn btn-primary col-md-1 "> 
        Admin</button></Link>
        </div>
        <div>

   <Link to="/AInsertPage"><button type="button" className="btn btn-primary col-md-1 mt-1"> 
        Insert</button></Link> 
        </div>
    
     <div>
    <Link to="/ADeletePage">
    <button type="button" class="btn btn-primary  col-md-1 mt-1">Delete</button> 
    </Link>
     </div>
    
     <div>
     <Link to="/AUpdatePage">
     <button type="button" class="btn btn-primary col-md-1 mt-1">
        Update</button>
     </Link>
     </div>
     <div>
     <button type="button" class="btn btn-primary col-md-1 mt-1">View</button>
     </div>
     <div>
    <Link to="/ABulkupPage"> <button type="button" class="btn btn-primary col-md-1 mt-1">
        Bulk upload</button></Link>
     </div>
     <div>
     <button type="button" class="btn btn-primary col-md-1 mt-1">Add/ Delete Category</button>
     </div>
            
</div>
        </div>
        </>
    )
}
export default Aadmin;