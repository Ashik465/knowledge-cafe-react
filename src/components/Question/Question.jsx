import React from 'react';

const Question = () => {
    return (
        <div className=' my-7'>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
  <div className="collapse-title text-xl font-medium">
  Props vs state
  </div>
  <div className="collapse-content"> 
    <p>Props or the properties are data that are passed from the parent component to the child component and They are read only and cannot be modified by the child component.
        
        
    on the other hand, state is used to manage the internal state of a component .state can be modified using the setState method. </p>
  </div>
</div>

<div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
  <div className="collapse-title text-xl font-medium">
  How does useState work?

  </div>
  <div className="collapse-content"> 
    <p>useState is a react hook it returns an array with two value, one is the current state value and other one is the function to update the state value </p>
  </div>
</div>


<div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
  <div className="collapse-title text-xl font-medium">
  Purpose of useEffect other than fetching data.

  </div>
  <div className="collapse-content"> 
    <p>Updating the document title: You can use useEffect to update the title of the web page based on the current state or props of the component. Handling keyboard events: You can use useEffect to register and unregister event listeners when the component mounts and unmounts.Animating components: You can use useEffect to create animations by updating the state or props of a component over time.</p>
  </div>
</div>
<div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
  <div className="collapse-title text-xl font-medium">
  How Does React work?


  </div>
  <div className="collapse-content"> 
    <p>React is a JavaScript library for building user interfaces. It works by using a component based architecture to create reusable and modular UI components. React uses JSX (JavaScript XML)which let developer to write html like syntax directly in the  js.React uses a virtual DOM (Document Object Model) to manage the state of the UI.The virtual DOM is a lightweight representation of the actual DOM, which allows React to update the UI more efficiently. </p>
  </div>
</div>
        </div>
    );
};

export default Question;