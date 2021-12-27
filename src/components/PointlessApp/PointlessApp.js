import React, { useState, useEffect } from "react";
import { makeRandomString, shuffle } from './../../utilities/general-utilities';
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

      let newArr = randomArray;
      changes.forEach((change, i) => {
        const { method, fn, callFlatAtEnd } = ARRAY_CHANGING_FUNCTIONS[change];
        // easiest way to leverage shuffle function is to pass whole array instead of using something like map to step through each element
        if (!method) {
          newArr = shuffle(newArr);
        } else {
          newArr = newArr[method](fn);
          if (callFlatAtEnd) {
            newArr = newArr.flat();
          }
        }
      });

      let end = performance.now();
      const runtime = end-start;
      setRuntime(runtime);
      setOutputArray(newArr);
    }
  }, [loading, changes, randomArray]);

  const onGenerateRandomArrayButtonClick = () => {
    const generatedArray = makeRandomString(parseInt(arrayLength)).split('');
    setRandomArray(generatedArray);
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