
import { useState , useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2'


export const VideoInput = () => {

    const [input , setInput] = useState("")
    const [video , setVideo] = useState([])


    const inputChange =(e)=>{
        setInput(e.target.value)

    }
    const submit =(e)=>{
       
        if(input.includes("www") ){
            e.preventDefault()
            setVideo([...video ,input])
            localStorage.setItem("video", JSON.stringify(video))
            
        }else {
            e.preventDefault()
            Swal.fire({
                title: 'Error!',
                text: 'Please enter a valid URL ',
                icon: 'error',
                showCancelButton: true,
              })
        }


    }


  return (
    <>
        <form className='form form-control'>
            <input onChange={inputChange} type= "text" placeholder='Introduce la url' value ={input}></input>
            <button className='btn btn-outline-primary' onClick={submit} type = "submit">Submit Url</button>
        </form>
        <div className='row'>
            {
                video.map((vid , i)=>{
                    return(
                        <Card style={{ width: '420px' }}>
                         <div key={i} className = "col-xxl mt-3">
                            <iframe src={vid} allowFullScreen={true} width={400} height ={300}></iframe>
                        </div>
                        <Button variant="outline-dark">Delete Video</Button>
                        </Card>
                    )
                })
            }
        </div>
    </>


    
  )
}
