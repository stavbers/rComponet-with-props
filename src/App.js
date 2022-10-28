import { Fragment } from 'react';
import Block from './Block'

const model = {
  title: 'Hello from React',
  btnTitle: 'Next',
}

export default () => {
  return (
    <Fragment>
    <h2>Body component</h2>
    <Block title ={model.title} btn={model.btnTitle} />
    </Fragment>

  );
}


