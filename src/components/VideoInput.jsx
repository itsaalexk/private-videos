import { useState} from 'react';
import Swal from 'sweetalert2'
import { CardButton } from './CardButton';
import { Submit } from './Submit';


export const VideoInput = () => {

    const [input , setInput] = useState("")
    const [video , setVideo] = useState([])
   
    const inputChange =(e)=>{
        setInput(e.target.value)

    }
    const submit =(e)=>{

    if(input.includes("www") ){
        e.preventDefault()
        localStorage.setItem("video",input)
        setVideo([...video ,input])
        
       
    }else {
        e.preventDefault()
        Swal.fire({
            title: 'Error!',
            text: 'Please enter a valid URL ',
            icon: 'error',
            showCancelButton:false,
        })
    }

    

    }


  return (
    <>
        <Submit  inputChange={inputChange} submit={submit} input={input}/>
        <div className='row'>
            {
                video.map((vid , i)=>{
                    return(
                        <CardButton key={i} vid ={vid} />
                    )
                })
            }
        </div>
    </>


    
  )
}
