
import React from 'react';

const Image = (props) => 
  <img style={{width:95}} src={props.src} alt={props.name} className="img-thumbnail clickable-images" onClick={() => props.pickImg(props.name)} />


export default Image;