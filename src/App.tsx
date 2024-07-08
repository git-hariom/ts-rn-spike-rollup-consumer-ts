import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button as ButtonV1 } from "tsrnspikerolluppackage/components";
import { Button as ButtonV2 } from "tsrnspikerolluppackage/components/v2";
import { Button as ButtonV3 } from "tsrnspikerolluppackage/components/v3";
function App() {
  return (
    <div className="App">
      <ButtonV1>ConsumerTS V1</ButtonV1>
      <ButtonV2>ConsumerTS V2</ButtonV2>
      <ButtonV3>ConsumerTS V3</ButtonV3>
    </div>
  );
}

export default App;
