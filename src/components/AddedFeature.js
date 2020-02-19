import React from 'react';

const AddedFeature = ({ feature, removeFeature }) => {
    console.log(feature)
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={ () => removeFeature({ id: feature.id, name: feature.name, price: feature.price }) }>X</button>
      {feature.name}
    </li>
  );
};

export default AddedFeature;
