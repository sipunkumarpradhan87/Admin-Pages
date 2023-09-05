import React from 'react'
import { Link } from 'react-router-dom'
import PaginationComponent from './PreviousButton'

function AInsertPage() {
  return (
    <div className='containerinsert  ' style={{width:1000,height:440 ,marginLeft:130,
      boxShadow:"2px 2px 3px 3px  #766767",backgroundColor:"white"
      ,borderRadius:12,border:"2px solid  #766767",marginTop:60}}>
      <div>
        <PaginationComponent/>
        {/* PreviousButton */}
      </div>
      <div className='Heading mx-3 mt-3'>
        <h3>Admin Insert Page</h3>
      </div>
       <div>
        <Link to="/"><button type="button" className="btn btn-primary col-md-1 mx-3"> 
       Admin</button>
    </Link>
       </div>
       <Link to="/AInsertPage"><button type="button" className="btn btn-primary col-md-1 mt-1 mx-3"> 
       Insert</button></Link>
    
     <div>
    <Link to="/ADeletePage"><button type="button" class="btn btn-primary  col-md-1 mt-1 mx-3">
        Delete</button> </Link>
     </div>
    
     <div>
    <Link to="/AUpdatePage"><button type="button" class="btn btn-primary col-md-1 mt-1 mx-3">
        Update</button></Link>
     </div>
     <div>
     <button type="button" class="btn btn-primary col-md-1 mt-1 mx-3">View</button>
     </div>
     <div>
     <Link to="/ABulkupPage"><button type="button" class="btn btn-primary col-md-1 mt-1 mx-3">
        Bulk upload</button></Link>
     </div>
     <div>
     <button type="button" class="btn btn-primary col-md-1 mt-1 mx-3">Add/ Delete Category</button>
     </div>
    </div>
  )
}

export default AInsertPage