import React,{useState} from 'react'

export default function TextForm(props) {
   // let arrtext = [text];
    const handleupclick = () =>{
       // console.log("upper case is clicked"+Text);
        let newtext = text.toUpperCase();
        SetText(newtext)
        props.showAlert("UpperCase has been successfully Work","success");
        
    }
    const handleLoclick = () =>{
        // console.log("Lower case is clicked"+Text);
         let newtext2 = text.toLowerCase();
         SetText(newtext2)
         props.showAlert("LowerCase has been successfully Work","success");
     }
    const Handleonchange = (event) =>{
        //console.log("text here");
        SetText(event.target.value)
    }
    const handletoCopy = ()=>{
        let newtext3 = document.getElementById("MyBox");
        newtext3.select();
        navigator.clipboard.writeText(newtext3.value)
        props.showAlert("Your Text has been successfully copied..","success");
    }
    // const handleSpaces = () =>{
    //     let newtext4 = text.split(/ /);
    //     SetText(newtext4.join(" "));
    // }
    const[text,SetText] = useState();
  return (
    <>
        
        <div className='Container'style={{color : props.theme==='light'?'black':'white'}}>
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <textarea className="form-control" onChange={Handleonchange} value={text} style={{backgroundColor : props.theme==='light'?'white':'#040316',color : props.theme ==='light'?'black':'white'}} id="MyBox" rows="8"></textarea>
            </div>
            <button
            
            
             className="btn btn-primary mx-1 my-1 " onClick={handleupclick}>Convert to Uppercase</button> 
            <button className="btn btn-primary mx-1 my-1" onClick={handleLoclick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handletoCopy}>Copy to clipboard</button>
            {/* <button className="btn btn-primary mx-1" onClick={handleSpaces}>Remove Extra Spaces</button>  */}
        </div>
        <div className="container my-3" style={{color : props.theme==='light'?'black':'white'}}>
            <h1>Your Text summary</h1>
              (text.length === 0) ? {
                 <p> 0 words and 0 characters</p> 
              } : {
                <div>
                    <p> {text.split(' ').length} words and {text.length} characters</p> 
             {/* <p>{0.008 * text.split(' ').length} minutes read</p> */}
                </div>
              }
              {/*    */}
            <h2>Preview</h2>
            <p>{text}</p>

        </div>
    </>


  )
}
