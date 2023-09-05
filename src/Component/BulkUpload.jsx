import React from 'react'
// import { useForm } from 'react-hook-form';

function BulkUpload() {
  // const{register,errors,handleSubmit}=useForm('');
  return (
    <div className='BulkUpload' style={{position:"absolute",marginLeft:300, marginTop:100}}>
      {/* <form onSubmit={handleSubmit()}> */}
        <div className="mb-3">
  <label for="formFileMultiple" class="form-label" style={{fontFamily:"cursive"}}>Admin Upload File's</label>
  <input class="form-control" type="file" id="formFileMultiple" 
  multiple style={{width:400,backgroundColor:" #1ab4b54d"}} 
  // name='Upload' ref={register ({required:true})}
  />
</div>
{/* <small className='form-text text-success'>{errors.Upload && 'fgjgrmklmfklfmfeiuhfruiorpmk '}</small> */}

<div className='mb-3'>
      <a href="/path/to/your/file.pdf" download="filename.pdf">
        <button>Download Template</button>
      </a>
    </div>
    <div>
      <button type='submit'>submit</button>
    </div>
    {/* </form> */}
    </div>
  )
}

export default BulkUpload;
// ....
// import React from 'react';

// const BulkUpload = () => {
//   const handleDownload = () => {
//     // Create some sample content
//     const content = 'This is the content you want to download.';
    
//     // Create a Blob from the content
//     const blob = new Blob([content], { type: 'text/plain' });

//     // Create a URL for the Blob
//     const url = URL.createObjectURL(blob);

//     // Create an anchor element
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = 'downloaded_content.txt'; // Specify the file name

//     // Append the anchor element to the body and click it
//     document.body.appendChild(a);
//     a.click();

//     // Remove the anchor element from the body
//     document.body.removeChild(a);

//     // Release the URL object
//     URL.revokeObjectURL(url);
//   };

//   return (
//     <div>
//       <button onClick={handleDownload}>Download File</button>
//     </div>
//   );
// };

// export default BulkUpload;

// import React, { useState } from 'react';

// const BulkUpload = () => {
//   const [content, setContent] = useState('');
//   const [isEditing, setIsEditing] = useState(true);
//   let [edit,setedit]=useState('')

//   const handleSave = () => {                           
//     // Perform actions to save content to the backend (e.g., using an API call)
//     // For now, let's just update the state to simulate saving
//     setIsEditing(false);
//   };

//   return (
//     <div>
//       {isEditing ? (
//         <textarea
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//         />
//       ) : (
//         <div>{content}</div>
//       )}

//       {isEditing ? (
//         <button onClick={handleSave}>Save</button>
//       ) : (
//         <button onClick={() => setIsEditing(true)}>Edit</button>
//       )}
//     </div>
//   );
// };

// export default BulkUpload;