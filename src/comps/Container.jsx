import React from 'react';

const Container = ({children, footer}) => {
  // Check if this container has Component4
  const hasComponent4 = React.Children.toArray(children).some(
    child => child?.type?.name === 'Component4'
  );

  // If we have Component4, filter out any Heading components
  const filteredChildren = hasComponent4 
    ? React.Children.toArray(children).filter(child => child?.type?.name !== 'Heading')
    : children;
  
  return (
    <div className={`mt-10 ${footer ? 'mb-0' : 'mb-30'}`}>
      {filteredChildren}
    </div>
  )
}

export default Container
  