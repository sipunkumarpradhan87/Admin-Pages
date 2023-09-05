import React from 'react'

function Question3({abc,setabc}){

   let update3=()=>{
    setabc(abc);
    setabc(" ");
   }
   const altbtns3=()=>{
    if( abc.Question3 ===" ")
    {
      alert('please enter questions');
    }
    else if(abc.Option9===" ")
    {
      alert('please enter questions');
    }
    else if(abc.Option10===" ")
    {
      alert('please enter questions');
    }
    else if(abc.Option11===" ")
    {
      alert('please enter questions');
    }
    else if(abc.Option12===" ")
    {
      alert('please enter questions');
    }
    else 
    {
      alert('it is successfull');
    }
   }
  return (
    <div className='question'>
        <div>
        <label style={{fontFamily:"times roman",fontSize:30}}>Question.3</label>
        <input type="text"  style={{
          width:270,height:50,borderRadius:10,border:"2px solid green"
        }}  value={abc.Question3} onChange={(e)=>{setabc({...abc,Question3:e.target.value})}}/>
        <button onClick={update3} style={{margin:10}}>Edit</button>
        <button onClick={altbtns3} style={{margin:10}}>Submit</button>
         </div>
         <div className='radio mt-3'  style={{fontSize:20}}>

<div className='QuestionInput mt-2'>1.   <input type="radio" name='radi'   
 style={{ transform: 'scale(1.2)', width: '20px', height: '20px', padding:1,margin:10, }}/>  
 <input type="text" value={abc.Option9} onChange={(e)=>{setabc({...abc,Option9:e.target.value})}}/>
 </div>
     {/* ******************** */}
 <div className='QuestionInput mt-2'> 2.  <input type="radio" name='radi'  
 style={{ transform: 'scale(1.2)', width: '20px', height: '20px', padding:1,margin:10 }}/>
     <input type="text" value={abc.Option10} onChange={(e)=>{setabc({...abc,Option10:e.target.value})}} />
     </div>
     {/* ************************* */}
 <div className='QuestionInput mt-2'> 3.  <input type="radio" name='radi'  
 style={{ transform: 'scale(1.2)', width: '20px', height: '20px', padding:1,margin:10 }}/>
     <input type="text" value={abc.Option11} onChange={(e)=>{setabc({...abc,Option11:e.target.value})}} />
     </div>
     {/* ******************************** */}
 <div className='QuestionInput mt-2'> 4.  <input type="radio" name='radi'  
 style={{ transform: 'scale(1.2)', width: '20px', height: '20px', padding:1,margin:10 }}/>
  <input type="text" value={abc.Option12} onChange={(e)=>{setabc({...abc,Option12:e.target.value})}} />
    </div>
     {/* *********************************8 */}
</div>
    </div>
  )
}

export default Question3