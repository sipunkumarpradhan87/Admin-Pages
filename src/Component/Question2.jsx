import React from 'react'

function Question2({Formdata2,setFormdata2}) {
  // let Ques2=(e)=>{
  //   setFormdata({...Formdata,Question2:e.target.value})
  //   setFormdata('')
  // }
  let update2=()=>{
    setFormdata2(Formdata2);
    setFormdata2(" ");
  }
  let altbuttons=()=>{
    if( Formdata2.Question2 ===" ")
    {
      alert('please enter question')
    }
    else if(Formdata2.Option5==="")
    {
      alert('please enter question')
    }
    else if(Formdata2.Option6==="")
    {
      alert('please enter question')
    }
    else if(Formdata2.Option7==="")
    {
      alert('please enter question')
    }
    else if(Formdata2.Option8==="")
    {
      alert('please enter question')
    }
    else
    {
      alert('it is successfull') 
    }
  }
   
  return (
    <div className='question'>
         <div>
        <label style={{fontFamily:"times roman",fontSize:30}}>Question.2</label>
        <input type="text" placeholder='' style={{
          width:270,height:50,borderRadius:10,border:"2px solid green"
        }}  value={Formdata2.Question2} onChange={(e)=>{setFormdata2({...Formdata2,Question2:e.target.value})}}/>
        <button onClick={update2} style={{margin:10}}>Edit</button>
        <button onClick={altbuttons} style={{margin:10}}>Submit</button>
         </div>
         <div className='radio mt-3'  style={{fontSize:20}}>

           <div className='QuestionInput mt-2'>1.   <input type="radio" name='radi'   
            style={{ transform: 'scale(1.2)', width: '20px', height: '20px', padding:1,margin:10, }}/>  
            <input type="text" value={Formdata2.Option5} onChange={(e)=>{setFormdata2({...Formdata2,Option5:e.target.value})}}/>
            </div>
                {/* ******************** */}
            <div className='QuestionInput mt-2'> 2.  <input type="radio" name='radi'  
            style={{ transform: 'scale(1.2)', width: '20px', height: '20px', padding:1,margin:10 }}/>
                <input type="text" value={Formdata2.Option6} onChange={(e)=>{setFormdata2({...Formdata2,Option6:e.target.value})}} />
                </div>
                {/* ************************* */}
            <div className='QuestionInput mt-2'> 3.  <input type="radio" name='radi'  
            style={{ transform: 'scale(1.2)', width: '20px', height: '20px', padding:1,margin:10 }}/>
                <input type="text" value={Formdata2.Option7} onChange={(e)=>{setFormdata2({...Formdata2,Option7:e.target.value})}} />
                </div>
                {/* ******************************** */}
            <div className='QuestionInput mt-2'> 4.  <input type="radio" name='radi'  
            style={{ transform: 'scale(1.2)', width: '20px', height: '20px', padding:1,margin:10 }}/>
             <input type="text" value={Formdata2.Option8} onChange={(e)=>{setFormdata2({...Formdata2,Option8:e.target.value})}} />
               </div>
                {/* *********************************8 */}
        </div>
    </div>
  )
}

export default Question2