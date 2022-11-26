

export const Submit = ({inputChange, submit , input}) => {
  return (
    <form className='form form-control'>
    <input onChange={inputChange} type= "text" placeholder='Introduce la url' value ={input}></input>
    <button className='btn btn-outline-primary' onClick={submit} type = "submit">Submit Url</button>
</form>
  )
}
