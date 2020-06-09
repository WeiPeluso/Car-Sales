import React from 'react';
import {useDispatch} from 'react-redux'
import {addFeature} from '../actions/featuresActions'

const AdditionalFeature = props => {
  const dispatch=useDispatch()
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={()=>dispatch(addFeature(props.feature.name))}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};
// const mapStateToProps = state =>{


//export default connect(null,{addFeature})(AdditionalFeature);
export default AdditionalFeature
