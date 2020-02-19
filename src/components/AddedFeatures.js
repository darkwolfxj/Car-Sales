import React from 'react';

import AddedFeature from './AddedFeature';

const AddedFeatures = props => {
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.state.car.features.length ? (
        <ol type="1">
          {props.state.car.features.map(item => (
            <AddedFeature removeFeature={ props.removeFeature } key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

export default AddedFeatures;
