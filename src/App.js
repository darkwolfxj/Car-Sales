import React from "react";
import { connect } from "react-redux";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";
import { addFeature, removeFeature } from "./actions/actions";

const App = ({state, addFeature, removeFeature }) => {

  const buyItem = item => {
    return addFeature(item)
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={ state.car } />
        <AddedFeatures removeFeature={ removeFeature } state={ state } car={ state.car } />
      </div>
      <div className="box">
        <AdditionalFeatures addFeature={ buyItem } additionalFeatures={ state.additionalFeatures } />
        <Total car={ state.car } additionalPrice={ state.additionalPrice.reduce((acc, cv) => acc + cv) } />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
    return {
        state: state,
        actions: { addFeature, removeFeature }
    }
}

export default connect(mapStateToProps, { addFeature, removeFeature })(App);
