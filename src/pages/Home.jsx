import React from 'react'
import { Link } from 'react-router-dom'
import BookCard from './BookCard'
import { Col, Row } from 'react-bootstrap'
import Header from '../components/Header'
function Home() {
  return (
    <div>
      <Header/>
      <div style={{ backgroundImage: 'url("https://www.reinhartrealtors.com/blog/wp-content/uploads/2019/01/Top2.png")', backgroundAttachment: 'fixed', height: '600px' }} className='container-fluid bg-dark'>
        <Row className="ms-1 w-100">
          <Col className='border rounded mt-5 p-1' sm={12} md={6}>
            <div className='w-75'>
              <h1 className='text-light fw-bolder m-2 p-3'>e-book</h1>
              <p className=' text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet labore adipisci, magni repudiandae facere voluptatem, ratione eligendi hic placeat, at eveniet explicabo saepe eaque rem nemo architecto assumenda. Ipsam, alias.</p>
              <Link to="/login" className='btn btn-dark mb-2' >Shop now</Link>
            </div>
          </Col>
          <Col sm={12} md={6}>
            <img className='w-75 rounded  mt-5 ms-5' src="https://plus.unsplash.com/premium_photo-1669652639356-f5cb1a086976?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym9vayUyMHN0b3JlfGVufDB8fDB8fHww" alt="" />
          </Col>
        </Row>

      </div>
      <div className='all-projects mt-5'>
        <h1 className="text-center">Relax Your Brain </h1>
        {/* marquee */}
        <marquee scrollAmount={20}>
          <Row className='justify-content-between'>
            <Col><BookCard/></Col>
          </Row>
        </marquee>
        <div className="text-center mb-5">
          <Link to={'/Books'}>Book Collection</Link>
        </div>
      </div>
      </div>
      )
      }

      export default Home