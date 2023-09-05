import React, { useState } from 'react';
import Question1 from './Question1';
import Question2 from './Question2';
import Question3 from './Question3';
import Question4 from './Question4';
import Question5 from './Question5';

const items = ['Question 1',' Question 2', 'Question 3','Question 4','Question 5'];

function PaginationComponent() {
  const [currentPage, setCurrentPage] = useState(0);

  
  const [Formdata1,setFormdata1]=useState({
    Question1:" ",
    Option1:"", Option2:"",Option3:"",Option4:"",
   
   });

  const [Formdata2,setFormdata2]=useState({
    Question2:" ",
    Option5:"",Option6:"", Option7:"",Option8:"",
  });
  const [abc,setabc]=useState({
    Question3:" ",
    Option9:"",Option10:"", Option11:"",Option12:"",
  });
  
  const [Formdata4,setFormdata4]=useState({
    Question4:"",
    Option13:"" ,  Option14:"",  Option15:"" , Option16:""
  })
  
  const [Formdata5,setFormdata5]=useState({
    Question5:" ",
    Option17:"", Option18:"", Option19:"", Option20:"",
  })
  
  let Delete=()=>{
         setFormdata1(Formdata1);
         setFormdata2(Formdata2);
         setabc(abc);
         setFormdata4(Formdata4);
         setFormdata5(Formdata5)
       
         setFormdata1('');
         setFormdata2('');
        setabc(" ");
        setFormdata4(" ")
        setFormdata5(" ")
  }


  
   function PageDisplay()
   {
    if(currentPage===0)
    {
      return <Question1 Formdata1={Formdata1} setFormdata1={setFormdata1}  />
    }
    else if(currentPage===1)
    {
      return <Question2 Formdata2={Formdata2}  setFormdata2={setFormdata2} />
    }
    else if(currentPage===2)
    {
      return <Question3 abc={abc} setabc={setabc}/>
    }
    else if(currentPage===3)
    {
     return <Question4 Formdata4={Formdata4} setFormdata4={setFormdata4}/>
    }
    else 
    {
     return <Question5 Formdata5={Formdata5} setFormdata5={setFormdata5}/>
    }
   }

  const goToPreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage-1);
    }

  };

  const goToNextPage = () => {
    if (currentPage <= items.length-1 ) {
      setCurrentPage(currentPage+1);
    }
  };

  return (
    <div className='containerquestion' style={{marginLeft:300,marginTop:65,position:"absolute"}}>
      <div>
      {PageDisplay()}
    </div>



      <button onClick={goToPreviousPage}  disabled={currentPage === 0}>
    
        Previous
      </button>
      <button onClick={goToNextPage}  style={{margin:10}} disabled={currentPage === items.length-1 }>
      
        Next
      </button>
      <button onClick={Delete}  style={{margin:10}}>
      
      Delete
      </button>
      {/* <button  onClick={altbuttons} style={{margin:10}}>
      submit
      </button> */}
    </div>
  );
}

export default PaginationComponent;