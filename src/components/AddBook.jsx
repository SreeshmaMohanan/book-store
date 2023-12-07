import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Form, Link } from 'react-router-dom';
import { addBookApi } from '../services/api';

function AddBook() {
  const [show, setShow] = useState(false);
  const [bookDetails,setbookDetails]=useState({
    title:"",author:"",description:"",genre:"",imageUrl:"",pdfUrl:"",price:""
  })
  const [preview,setPreview]=useState("")
  console.log(bookDetails);
const [token,setToken]=useState("")
    const handleClose = () =>{ 
      setShow(false);
      setbookDetails({
        title:"",author:"",description:"",genre:"",imageUrl:"",pdfUrl:"",price:""

      })
      setPreview("")
    }
    const handleAdd= async(e)=>{
      e.preventDefault();
      const {title,author,description,genre,imageUrl,pdfUrl,price}=bookDetails
      if(!title||!author||!description||!genre||!imageUrl||!pdfUrl||!price){
        alert('Please fill all fields')
      }else{
        const reqBody= new FormData()
        reqBody.append("title",title)
        reqBody.append("author",author)
        reqBody.append("description",description)
        reqBody.append("genre",genre)
        
        reqBody.append("price",price)
        reqBody.append("pdfUrl",pdfUrl)
        reqBody.append("imageUrl",imageUrl)
      if(token){
      const  reqHeader={
          "Content-Type":"multipart/form-data",
          "Authorization":`Bearer ${token}`
        }
        const result= await addBookApi(reqBody,reqHeader)
        if(result.status===200){
          console.log(result.data);
          
          // setAddProjectResponse(result.data)


        }else{
          console.log(result);
          alert(result.response.data);
        }     
        
      }
        
      }
    }
  
    
    useEffect(()=>{
      if(bookDetails.imageUrl){
        setPreview(URL.createObjectURL(bookDetails.imageUrl))
      }
    },[bookDetails.imageUrl])


    useEffect(()=>{
      if(sessionStorage.getItem("token")){
        setToken(sessionStorage.getItem("token"))
      }else{
        setToken("")
      }

    },[])
  

  
  const handleShow = () => setShow(true);
  return (
    <>
    <Link className='fw-bolder btn text-white' variant="transparent" onClick={handleShow}>
        Add Book
      </Link>

      <Offcanvas ClassName='bg-dark text-white' show={show} onHide={handleClose} backdrop="static">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Enter Book Details</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <>
            <div className="row">
              <div className="w-100">
              <label >
                <input type="file" style={{display:'none'}} onChange={e=>setbookDetails({...bookDetails,imageUrl:e.target.files[0]})}/>
                <img className='img-fluid rounded' src={preview?preview:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS75ebrwvgVW5Ks_oLfCbG8Httf3_9g-Ynl_Q&usqp=CAU" }alt="book picture" />
                </label>
              <div className='mb-3'>  <input type="text" className="form-control w-100" value={bookDetails.title} onChange={(e)=>setbookDetails({...bookDetails,title:e.target.value})} placeholder='Book-title' /></div>
              <div className='mb-3'>  <input type="text" className="form-control" value={bookDetails.author} onChange={(e)=>setbookDetails({...bookDetails,author:e.target.value})} placeholder='Author Name' /></div>
              <div className='mb-3'>  <input type="text" className="form-control" value={bookDetails.description} onChange={(e)=>setbookDetails({...bookDetails,description:e.target.value})} placeholder='Description' /></div>
              <div className='mb-3'>  <input type="text" className="form-control" value={bookDetails.genre} onChange={(e)=>setbookDetails({...bookDetails,genre:e.target.value})} placeholder='Genre' /></div>
              <div className='mb-3'>  <input type="text" className="form-control" value={bookDetails.price} onChange={(e)=>setbookDetails({...bookDetails,price:e.target.value})} placeholder='Price' /></div>
              <div className='mb-3'>
                <input type="text" placeholder='pdf URL' className='form-control' value={bookDetails.pdfUrl}  onChange={e=>setbookDetails({...bookDetails,pdfUrl:e.target.value})}/>
              <div className='mb-3'> </div>
             
                
                </div>
              </div>
              <div>
                <Button onClick={handleClose}>Close</Button>
                <Button className='btn btn-black' onClick={handleAdd}> Add </Button></div>
            </div>
          </>
          
        </Offcanvas.Body>
      </Offcanvas>

    </>
  )
}

export default AddBook
