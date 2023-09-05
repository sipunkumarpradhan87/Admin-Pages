import React from 'react'
// import useForm from './Useform';
// import { useForm } from 'react-hook-form';

function Question1({Formdata1,setFormdata1}) {
    // let options1=["a","b","c","d"];       
    // let [question,setquestion]=useState(' ');
    // let [question1,setquestion1]=useState(' ');
    // let [question2,setquestion2]=useState(' ');
    // let [question3,setquestion3]=useState(' ');
    // let  [question4,setquestion4]=useState(' ');

    // let Ques=(e)=>{
    //   setFormdata({...Formdata,Question1:e.target.value});
    //   setFormdata(' ');
    // }
      

    // setquestion(question);
    // setquestion1(question1);
    // setquestion2(question2);
    // setquestion3(question3);
    // setquestion4(question4);
    // setquestion(' ');
    // setquestion1(' ');
    // setquestion2(' ');
    // setquestion3(' ');
    // setquestion4(' ');
    // }
    

   const altbtns=()=>{
    if( Formdata1.Question1 ===" ")
    {
      alert('please enter questions');
    }
    else if(Formdata1.Option1===" ")
    {
      alert('please enter questions');
    }
    else if(Formdata1.Option2===" ")
    {
      alert('please enter questions');
    }
    else if(Formdata1.Option3===" ")
    {
      alert('please enter questions');
    }
    else if(Formdata1.Option4===" ")
    {
      alert('please enter questions');
    }
    else 
    {
      alert('it is successfull');
    }
   }

  let update=()=>{
    setFormdata1(Formdata1);
    setFormdata1(" ");
  }

    
  return (
    <div className='question'>
      
        <div>
        <label style={{fontFamily:"times roman",fontSize:30}}>Question.1</label>
        <input type="text"  placeholder='' style={{
          width:270,height:50,borderRadius:10,border:"2px solid green"
        }}  value={Formdata1.Question1} onChange={(e)=>{setFormdata1({...Formdata1,Question1:e.target.value})}}
       />
       <button onClick={update} style={{margin:10}}>Edit</button>
       <button onClick={altbtns} style={{margin:10}}>submit</button>
         </div>
        
       
         <div className='radio mt-3'  style={{fontSize:20}}>

           <div className='QuestionInput mt-2'>1.   <input type="radio" name='radi'   
            style={{ transform: 'scale(1.2)', width: '20px', height: '20px', padding:1,margin:10, }}/>  
            <input type="text" value={Formdata1.Option1} onChange={(e)=>{setFormdata1({...Formdata1,Option1:e.target.value})}}/>
            </div>
                {/* ******************** */}
            <div className='QuestionInput mt-2'> 2.  <input type="radio" name='radi'  
            style={{ transform: 'scale(1.2)', width: '20px', height: '20px', padding:1,margin:10 }}/>
                <input type="text" value={Formdata1.Option2} onChange={(e)=>{setFormdata1({...Formdata1,Option2:e.target.value})}} />
                </div>
                {/* ************************* */}
            <div className='QuestionInput mt-2'> 3.  <input type="radio" name='radi'  
            style={{ transform: 'scale(1.2)', width: '20px', height: '20px', padding:1,margin:10 }}/>
                <input type="text" value={Formdata1.Option3} onChange={(e)=>{setFormdata1({...Formdata1,Option3:e.target.value})}} />
                </div>
                {/* ******************************** */}
            <div className='QuestionInput mt-2'> 4.  <input type="radio" name='radi'  
            style={{ transform: 'scale(1.2)', width: '20px', height: '20px', padding:1,margin:10 }}/>
             <input type="text" value={Formdata1.Option4} onChange={(e)=>{setFormdata1({...Formdata1,Option4:e.target.value})}} />
               </div>
                {/* *********************************8 */}
        </div>
        
        
    </div>
  )
}

export default Question1