import React from 'react';
import { Link } from 'react-router-dom';

function ADeletePage() {
  return (
    <div>
  <div>
    <h3>Admin Delete Page</h3>
  </div>
        <div>
            <Link to="/"><button type="button" className="btn btn-primary col-md-1"> 
    Admin</button></Link>
        </div>
        <div>

       <Link to="/AInsertPage"><button type="button" className="btn btn-primary col-md-1 mt-1"> 
       Insert</button></Link>
        </div>
    
     <div>
     <Link to="/ADeletePage"><button type="button" class="btn btn-primary  col-md-1 mt-1"
     >Delete</button> </Link>
     </div>
    
     <div>
   <Link to="/AUpdatePage"><button type="button" class="btn btn-primary col-md-1 mt-1">
        Update</button></Link>
     </div>
     <div>
     <button type="button" class="btn btn-primary col-md-1 mt-1">View</button>
     </div>
     <div>
     <Link to="/ABulkupPage"><button type="button" class="btn btn-primary col-md-1 mt-1">
      Bulk upload</button></Link>
     </div>
     <div>
     <button type="button" class="btn btn-primary col-md-1 mt-1">Add/ Delete Category</button>
     </div>
    </div>
  )
}

export default ADeletePage