import React from 'react'
import { Link } from 'react-router-dom'
import BulkUpload from './BulkUpload'

function ABulkupPage() {
  return (
    <div className='BulkPage' style={{width:1000,height:440 ,marginLeft:130,
      boxShadow:"2px 2px 3px 3px  #766767",backgroundColor:"white"
      ,borderRadius:12,border:"2px solid  #766767",marginTop:60}}>
        <div className='UPloadform'>
         <BulkUpload/>
        </div>
        <div className='Bulkheading mx-2 mt-2'>
          <h3 style={{fontFamily:"cursive"}}>Admin Bulkupload page</h3>
        </div>
         <div>
       <Link to="/"> <button type="button" className="btn btn-primary col-md-1 mt-1  mx-2">Admin 
       </button></Link>
       </div>
       <div>

<Link to="/AInsertPage"><button type="button" className="btn btn-primary col-md-1 mt-1 mx-2"> 
     Insert</button></Link> 
     </div>
         <div>
<Link to="/ADeletePage"> <button type="button" className="btn btn-primary col-md-1 mt-1 mx-2">
   Delete</button></Link>
         </div>
         <div>
        <Link to="/AUpdatePage"><button type="button" className="btn btn-primary col-md-1 mt-1 mx-2"> 
        Update</button></Link>
         </div>
         <div>
        <button type="button" className="btn btn-primary col-md-1 mt-1 mx-2"> view</button>
         </div>
         <div>
        <Link to="/ABulkupPage"><button type="button" className="btn btn-primary col-md-1 mt-1 mx-2">
           Bulk upload</button></Link>
         </div>
         <div>
        <button type="button" className="btn btn-primary col-md-1 mt-1 mx-2"> Add / Delete catagory</button>
         </div>
    </div>
  )
}

export default ABulkupPage