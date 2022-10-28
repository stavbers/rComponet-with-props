import { Fragment} from 'react';
import {useState} from 'react'
import { Button } from 'react-bootstrap';
import './block.css'
const Block = (props)=> {
  // const [text, setText] = useState('0');
  const [click, setClick] = useState(0);
  const nextBtn = ()=> {
    setClick(click + 1)
    props.quotes.length > click 
    ? 
      document.querySelector('.wrp-info').textContent = props.quotes[click]
    :
      document.querySelector('.btn-next').classList.remove('btn-danger')
      document.querySelector('.btn-next').classList.add('btn-secondary')
   }
   const prevBtn = ()=> {
     
   }

  return (
<Fragment>
    <div className="wrp">
      <h2>{props.title}</h2>
      <p className="wrp-info">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
    <div className="wrp-btn">
      <Button className={'btn btn-success'} onClick={prevBtn}>Show</Button>
      <Button className={'btn-next btn btn-danger'} onClick={nextBtn}>{props.btn}</Button>
    </div>
    </div>
</Fragment>
  )

}

export default Block