import React from 'react';
import { ARRAY_CHANGING_FUNCTIONS } from './../../constants/transformation-constants';
import StyledButton from "../Button/StyledButton";

export default function TransformationUpdater(props) {
  const { setChanges, changes = [], setLoading, loading } = props;

  return (
    <React.Fragment>
      <h2>Transformations</h2>
      <div>
        {Object.keys(ARRAY_CHANGING_FUNCTIONS).map((text) => (
          <StyledButton
            key={text}
            onClick={() => {
              setChanges([...changes, text]);
            }}
          >
            {text}
          </StyledButton>
        ))}
      </div>
      <div>
        <ol>
          {changes.length ? (
            changes.map((change, idx) => (
              <li key={`${change}${idx}`}>{change}</li>
            ))
          ) : (
            <div>No filters selected</div>
          )}
        </ol>
      </div>
      <StyledButton
        disabled={loading}
        onClick={() => setLoading(true)}
      >
        {loading ? 'Applying your changes...' : 'Apply changes to array'}
      </StyledButton>
    </React.Fragment>
   
  )
}