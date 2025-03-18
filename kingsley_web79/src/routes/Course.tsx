import {memo, useState} from "react"
import {img} from "../lib/img_path"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Fade} from "react-awesome-reveal"

export default memo(function Course() {
    const [items, setItems] = useState(img)

    const details = items.map((item, index)=>{
        return (
          <Fade>
        <Card style={{ width: '18rem' }} key={item.id}>
      <Card.Img variant="top" src={item.img}  style={{width:"70%"}} className="card_img"/>
      <Card.Body>
        <Card.Title>{item.course}</Card.Title>
        <Card.Text>
          {
            item.des
          }
        </Card.Text>
        <Button variant="primary">N{item.price}</Button>
        <Button variant="primary mt-3">Choose</Button>
      </Card.Body>
    </Card>
    </Fade>
        )
    })
    
  return (
    <div className="container">
    <h1 className="text-white text-center mt-5">Courses:</h1>
    <div className="card_course">
    {
        details
    }
    </div>
    </div>
  )
})