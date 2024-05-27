import React from 'react';
import { Image, Card } from 'react-bootstrap';
import { FaBox } from 'react-icons/fa';
import box from '../assets/image/box.svg'
const Bundle_content = () => {
  return (

    <div className='border-end border-dark float-start box-height box-width-sm mb-0 bundle1a' >
      <Card className="rounded  d-flex flex-column justify-content-center align-items-center bundle1b">
        <div className="border border-1 border-dark bg-dark5  border-secondary rounded p-2">

          <Image src={box} height={22} />
        </div>
        <Card.Text className='my-2 text-white fw-400 fs-5 mb-0 nobundle'>No Bundles</Card.Text>
        <Card.Text className='text-secondary fw-light fs-5 Available' >Available</Card.Text>
      </Card>
    </div>


  );
}

export default Bundle_content;




