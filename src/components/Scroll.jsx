import React from 'react'; 

// In this component, the components inside it are rendered with a height of 70 viewport height and turns them into a scrollable component for the y-axis if they overflow.

const Scroll = (props) => {
  return( 
    <div style={{overflowY: 'scroll', height:'100vh'}}>
      {props.children}
    </div>	
  );
}

export default Scroll;