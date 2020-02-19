import React from 'react';
import AdditionalFeature from './AdditionalFeature';

const AdditionalFeatures = ({ additionalFeatures,addFeature }) => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {additionalFeatures.length ? (
        <ol type="1">
          {additionalFeatures.map(item => (
            <AdditionalFeature addFeature={ addFeature } key={ Math.random() } feature={ item } />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

export default AdditionalFeatures;
