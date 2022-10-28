import { Fragment} from 'react';
import {useState} from 'react'
import { Button } from 'react-bootstrap';
import './block.css'
const Block = (props)=> {
  const [text, setText] = useState('Lorem ipsum dolor sit amet consectetur adipisicing elit');
  const [click, setClick] = useState(0);
  const nextBtn = ()=> {
 
   if(props.quotes.length > click && click <= props.quotes.length -1) {
    setText(props.quotes[click])
    setClick(click + 1)
    console.log(click)
   } else {
    document.querySelector('.btn-next').classList.remove('btn-danger')
    document.querySelector('.btn-next').classList.add('btn-secondary')
   }
   }
   const prevBtn = ()=> {
     if(click > -1 ) {
      setClick(click - 1)
      console.log(click)
      setText(props.quotes[click])
     }

   }

  return (
<Fragment>
    <div className="wrp">
      <h2>{props.title}</h2>
      <p className="wrp-info">{text}</p>
    <div className="wrp-btn">
      <Button className={'btn-prev btn-secondary'} onClick={prevBtn}>Show</Button>
      <Button className={'btn-next btn btn-danger'} onClick={nextBtn}>{props.btn}</Button>
    </div>
    </div>
</Fragment>
  )

}

export default Block