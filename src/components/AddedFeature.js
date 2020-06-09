import React from 'react'
import {connect} from 'react-redux'
import {removeFeature} from '../actions/featuresActions'

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={()=>{props.removeFeature(props.feature)}}>X</button>
      {props.feature}
    </li>
  );
};

const mapStateToProps = state =>{

  return{
    additionalPrice: state.featuresReducer.additionalPrice,
    car: state.featuresReducer.car,
    additionalFeatures: state.featuresReducer.additionalFeatures
  }
}

export default connect(mapStateToProps,{removeFeature}) (AddedFeature);
