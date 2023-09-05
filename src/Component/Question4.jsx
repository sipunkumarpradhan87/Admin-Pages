import React from 'react'

function Question4({Formdata4,setFormdata4}) {

    const update4=()=>{
        setFormdata4(Formdata4);
        setFormdata4(" ");
    }
    const altbtns4=()=>{
      if( Formdata4.Question4 ===" ")
      {
        alert('please enter questions');
      }
      else if(Formdata4.Option13===" ")
      {
        alert('please enter questions');
      }
      else if(Formdata4.Option14===" ")
      {
        alert('please enter questions');
      }
      else if(Formdata4.Option15===" ")
      {
        alert('please enter questions');
      }
      else if(Formdata4.Option16===" ")
      {
        alert('please enter questions');
      }
      else 
      {
        alert('it is successfull');
      }
     }
  return (
    <div className='question4'>
    <div>
    <label style={{fontFamily:"times roman",fontSize:30}}>Question.4</label>
    <input type="text"  style={{
      width:270,height:50,borderRadius:10,border:"2px solid green"
    }}  value={Formdata4.Question4} onChange={(e)=>{setFormdata4({...Formdata4,Question4:e.target.value})}}/>
    <button onClick={update4} style={{margin:10}}>Edit</button>
    <button onClick={altbtns4} style={{margin:10}}>Submit</button>
     </div>
     <div className='radio mt-3'  style={{fontSize:20}}>

<div className='QuestionInput mt-2'>1.   <input type="radio" name='radi'   
style={{ transform: 'scale(1.2)', width: '20px', height: '20px', padding:1,margin:10, }}/>  
<input type="text" value={Formdata4.Option13} onChange={(e)=>{setFormdata4({...Formdata4,Option13:e.target.value})}}/>
</div>
 {/* ******************** */}
<div className='QuestionInput mt-2'> 2.  <input type="radio" name='radi'  
style={{ transform: 'scale(1.2)', width: '20px', height: '20px', padding:1,margin:10 }}/>
 <input type="text" value={Formdata4.Option14} onChange={(e)=>{setFormdata4({...Formdata4,Option14:e.target.value})}} />
 </div>
 {/* ************************* */}
<div className='QuestionInput mt-2'> 3.  <input type="radio" name='radi'  
style={{ transform: 'scale(1.2)', width: '20px', height: '20px', padding:1,margin:10 }}/>
 <input type="text" value={Formdata4.Option15} onChange={(e)=>{setFormdata4({...Formdata4,Option15:e.target.value})}} />
 </div>
 {/* ******************************** */}
<div className='QuestionInput mt-2'> 4.  <input type="radio" name='radi'  
style={{ transform: 'scale(1.2)', width: '20px', height: '20px', padding:1,margin:10 }}/>
<input type="text" value={Formdata4.Option16} onChange={(e)=>{setFormdata4({...Formdata4,Option16:e.target.value})}} />
</div>
 {/* *********************************8 */}
 
</div>
</div>
  )
}

export default Question4;