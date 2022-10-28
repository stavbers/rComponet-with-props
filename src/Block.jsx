import { Fragment } from 'react';
import { Button } from 'react-bootstrap';
import './block.css'
const Block = (props)=> {
  return (
<Fragment>
    <div className="wrp">
      <h2>{props.title}</h2>
      <p className="wrp-info">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
    <div className="wrp-btn">
      <Button className={'btn btn-success'}>Show</Button>
      <Button className={'btn btn-danger'}>{props.btn}</Button>
    </div>
    </div>
</Fragment>
  )

}

export default Block