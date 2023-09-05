import React from 'react'

function Question5({Formdata5,setFormdata5}) {
    
const question5=(e)=>{
setFormdata5({...Formdata5,Question5:e.target.value})
}    
const option18=(e)=>{
 setFormdata5({...Formdata5,Option18:e.target.value})
}

const option19=(e)=>{
 setFormdata5({...Formdata5,Option19:e.target.value})
}
const option20=(e)=>{
 setFormdata5({...Formdata5,Option20:e.target.value})
}
  function update5()
  {
    setFormdata5(Formdata5);
    setFormdata5(" ");
  }
  const altbtns5=()=>{
    if( Formdata5.Question5 ===" ")
    {
      alert('please enter questions');
    }
    else if(Formdata5.Option17===" ")
    {
      alert('please enter questions');
    }
    else if(Formdata5.Option18===" ")
    {
      alert('please enter questions');
    }
    else if(Formdata5.Option19===" ")
    {
      alert('please enter questions');
    }
    else if(Formdata5.Option20===" ")
    {
      alert('please enter questions');
    }
    else 
    {
      alert('it is successfull');
    }
   }
return (
    <div className='question5'>
<div>
    <label style={{fontFamily:"times roman",fontSize:30}}>Question.5</label>
    <input type="text"  style={{
      width:270,height:50,borderRadius:10,border:"2px solid green"
    }} value={Formdata5.Question5} onChange={question5} />
    <button onClick={update5} style={{margin:10}}>Edit</button>
    <button onClick={altbtns5} style={{margin:10}}>Submit</button>
     </div>
     <div className='radio mt-3'  style={{fontSize:20}}>

<div className='QuestionInput mt-2'>1.   <input type="radio" name='radi'   
style={{ transform: 'scale(1.2)', width: '20px', height: '20px', padding:1,margin:10, }}/>  
<input type="text" value={Formdata5.Option17} onChange={(e)=>{setFormdata5({...Formdata5,Option17:e.target.value})}} />
</div>
 {/* ******************** */}
<div className='QuestionInput mt-2'> 2.  <input type="radio" name='radi'  
style={{ transform: 'scale(1.2)', width: '20px', height: '20px', padding:1,margin:10 }}/>
 <input type="text" value={Formdata5.Option18}  onChange={option18} />
 </div>
 {/* ************************* */}
<div className='QuestionInput mt-2'> 3.  <input type="radio" name='radi'  
style={{ transform: 'scale(1.2)', width: '20px', height: '20px', padding:1,margin:10 }}/>
 <input type="text" value={Formdata5.Option19} onChange={option19}  />
 </div>
 {/* ******************************** */}
<div className='QuestionInput mt-2'> 4.  <input type="radio" name='radi'  
style={{ transform: 'scale(1.2)', width: '20px', height: '20px', padding:1,margin:10 }}/>
<input type="text" value={Formdata5.Option20} onChange={option20}  />
</div>
 {/* *********************************8 */}
 
</div>
    </div>
  )
}

export default Question5;