import React from 'react';
import {useSelector} from 'react-redux'
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = () => {

  const  additionalFeatures=useSelector(state=>state.featuresReducer.additionalFeatures)
  const car=useSelector(state=>state.featuresReducer.car)
  const  additionalPrice=useSelector(state=>state.featuresReducer.additionalPrice)

  return (
    <div className="boxes">
      <div className="box">
        <Header car={car} />
        <AddedFeatures car={car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={additionalFeatures} />
        <Total car={car} additionalPrice={additionalPrice} />
      </div>
    </div>
  );
};

// const mapStateToProps = state =>{

//   return{
//     additionalPrice: state.featuresReducer.additionalPrice,
//     car: state.featuresReducer.car,
//     additionalFeatures: state.featuresReducer.additionalFeatures
//   }
// }

// export default connect(mapStateToProps,{}) (App);
export default App;