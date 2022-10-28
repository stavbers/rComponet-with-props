import { Fragment} from 'react';
import {useState} from 'react'
import { Button } from 'react-bootstrap';
import './block.css'
const Block = (props)=> {
  const [click, setClick] = useState(0);
  let activeSlide = 0;
  const nextBtn = ()=> {
    setClick(click + 1 < props.quotes.length ? click + 1 : 0)
   }
   const prevBtn = ()=> {
    setClick(click - 1 < 0 ? props.quotes.length - 1:  click - 1)
   }
   const quote = ()=> {
    return (
      <p>{props.quotes[click]}</p>
    )
  }
  return (
<Fragment>
    <div className="wrp">
      <h2>{props.title}</h2>
      <p className="wrp-info">{quote()}</p>
    <div className="wrp-btn">
      <Button className={'btn-prev btn-secondary'} onClick={prevBtn}>Show</Button>
      <Button className={'btn-next btn btn-danger'} onClick={nextBtn}>{props.btn}</Button>
    </div>
    </div>
</Fragment>
  )

}

export default Block