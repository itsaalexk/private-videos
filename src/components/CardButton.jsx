import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export const CardButton = ({vid , i ,video}) => {

  const handleDelete = ()=>{
    video.map((v)=>{console.log(v)})
  }
  return (
    <Card style={{ width: '420px' }}>
    <div className = "col-xxl mt-3">
       <iframe title={i} src={vid} allowFullScreen={true} width={400} height ={300}></iframe>
   </div>
   <Button onClick = {handleDelete} variant="outline-dark">Delete Video</Button>
   </Card>
  )
}
