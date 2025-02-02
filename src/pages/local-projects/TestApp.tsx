import React, { useState } from "react";

const [isDisabled, setIsDisabled] = useState(false);

const handleDisableButton = () => {
  setIsDisabled(true); // Disable the button
};

const TestApp = () => {
  return (
    <div>
      <button id="showBtn" disabled={isDisabled}>
        Click Me
      </button>
      <button onClick={handleDisableButton}>Disable Button</button>
    </div>
  );
}

export default TestApp;
