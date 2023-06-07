import React,{useState} from 'react'


export default function Form(prop) {
    function change(event)
    {
        setText(event.target.value);
        console.log(text);
    }
    function upcase(event)
    {
        let writing=text;
        // console.log(event.target.value);
        setText(writing.toUpperCase());
        prop.updatealert("Made to uppercase","success");

    }

    function lowcase(event)
    {
        let writing=text;
        // console.log(event.target.value);
        setText(writing.toLowerCase());
      prop.updatealert("Converted to Lowercase","primary");

    }
    function wordcount()
    {
        let arr=text.split(/\s+/);
        // console.log(arr);
        while(arr[arr.length-1]==='')
        arr.pop();
        return arr.length;
    }
    function charcount()
    {
        let arr=text;
        
        while(arr[arr.length-1]==='')
        arr=arr.substring(0,arr.length-1);
        // console.log(arr.length+" "+ arr);
        return arr.length;
    }
    function rmvspc()
    {
        let arr=text.split(" ");
        // console.log(arr);
        let ntext='';
        for(let i=0;i<arr.length;i++)
        {
            if(arr[i]==='')
            continue;
            else
            ntext=ntext+arr[i];
        }
        setText(ntext);
        prop.updatealert("Spaces removed","danger");
    }
    function rmvexspc()
    {
        let arr=text.split(" ");
        let ntext='';
        let count=0;
        console.log(arr);
        for(let i=0;i<arr.length;i++)
        {
            if(arr[i]==='')
            continue;
            else
            ntext=ntext+arr[i]+" ";
           
        }
        // ntext=ntext.substring(0,ntext.length-1);
        setText(ntext.substring(0,ntext.length-1));
    }
    function clttext()
    {
        setText('');
    }
    const [text,setText]=useState("");
    return (
        <>
            <div className={`mb-3 text-${prop.mode==='light'||prop.mode==='warning'?'dark':'light'} my-5`}>

               Enter the text here
            </div>
            <div className="mb-3">
                <textarea className={`form-control bg-${prop.mode} text-${prop.mode==='light'||prop.mode==='warning'?'dark':'light'}`} style={{color:prop.mode==='light'?'black':'white',}} value={text}   onChange={change} id="exampleFormControlTextarea1" rows="6"></textarea>
            </div>
            <div className="button-div d-flex" >
            <button disabled={text.length===0} className="btn btn-success d-flex" style={{border: '2px solid black'}} onClick={upcase}>Upper Case</button>
             <button disabled={text.length===0} className="btn btn-primary mx-3" onClick={lowcase} style={{border: '2px solid black'}}>Lower case</button>
             <button disabled={text.length===0} className="btn btn-primary " onClick={clttext} style={{border: '2px solid black'}}>clear text</button>
             
             <button disabled={text.length===0} className="rmvspc btn btn-danger text-light mx-3 " onClick={rmvspc} style={{border: '2px solid black'}}>Remove space</button>
             <button disabled={text.length===0} className="rmvexspc btn btn-danger text-light " onClick={rmvexspc} style={{border: '2px solid black'}}>Remove extra space</button>

            </div>

            <div className={`count text-${prop.mode==='light'||prop.mode==='warning'?'dark':'light'} my-4 `}>
                <p className="word-count">There are {wordcount()} words. </p>
                <p className="char-count">There are {charcount()} characters.</p>
            </div>
        </>
    )
}
