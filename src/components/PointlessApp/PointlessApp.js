import React, { useState, useEffect } from "react";
import { createRandomArray } from './../../utilities/general-utilities';
import TransformationUpdater from './../TransformationUpdater/TransformationUpdater';
import { ARRAY_CHANGING_FUNCTIONS } from './../../constants/transformation-constants';
import StyledButton from './../Button/StyledButton';

export default function PointlessApp() {
  const [randomArray, setRandomArray] = useState([]);
  const [outputArray, setOutputArray] = useState([]);
  const [changes, setChanges] = useState([]);
  const [loading, setLoading] = useState(false);
  const [arrayLength, setArrayLength] = useState(0);
  const [runtime, setRuntime] = useState();

  const firstEl = outputArray[0];
  const len = outputArray.length;

  useEffect(() => {
    setLoading(false);
  }, [firstEl, len]);

  useEffect(() => {
    if (loading) {
      let start = performance.now();

      //use reduce to avoid multiple iterations through array
      const outputArray = randomArray.reduce((previousValue, currentValue) => {
        let keepElement = true;
        changes.forEach((change, i) => {
          const { method, fn } = ARRAY_CHANGING_FUNCTIONS[change];
          if (method === 'map') {
            const mappedValue = fn(currentValue);
            currentValue = mappedValue;
          } else if (method === 'filter') {
            if (!fn(currentValue)) {
              keepElement = false;
            }
          }
        });

        if (keepElement) {
          previousValue.push(currentValue);
        }

        return previousValue;
      }, []);

      let end = performance.now();
      const runtime = end-start;
      setRuntime(runtime);
      setOutputArray(outputArray);
    }
  }, [loading, changes, randomArray]);

  const onGenerateRandomArrayButtonClick = () => {
    setRandomArray(createRandomArray(arrayLength));
  }

  const onInputChange = (e) => {
    setArrayLength(e.target.value);
  }

  return (
    <React.Fragment>
      {!randomArray.length && <p>Array not generated</p>}
      <StyledButton onClick={onGenerateRandomArrayButtonClick}>
        Generate random array
      </StyledButton>
      <label htmlFor="length"> of length: </label>
      <input type="number" name="length" min="1" max="10000" onChange={onInputChange}/>
      <br></br>
      <TransformationUpdater
        setChanges={setChanges}
        changes={changes}
        setLoading={setLoading} 
        loading={loading}/>
      <br></br>
      <div>
        Output array Length:
        {outputArray.length}
      </div>
      <div>
        Runtime:
        {runtime} ms
      </div>
    </React.Fragment>
  );
}