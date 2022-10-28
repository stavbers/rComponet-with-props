import { Fragment } from 'react';
import Block from './Block'
import model from './Model'


export default () => {
  return (
    <Fragment>
    <h2>Body component</h2>
    <Block title ={model.title} btn={model.btnTitle} p={model.pt} quotes={model.quotes} />
    </Fragment>
  );
}


