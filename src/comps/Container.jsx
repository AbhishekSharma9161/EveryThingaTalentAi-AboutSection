import React from 'react';

const Container = ({children, footer}) => {
  // Check if this container has Component4
  const hasComponent4 = React.Children.toArray(children).some(
    child => child?.type?.name === 'Component4'
  );

  // Check if this container has Hero or Standards
  const hasHero = React.Children.toArray(children).some(
    child => child?.type?.name === 'Hero'
  );
  const hasStandards = React.Children.toArray(children).some(
    child => child?.type?.name === 'Standards'
  );

  // If we have Component4, filter out any Heading components
  const filteredChildren = hasComponent4 
    ? React.Children.toArray(children).filter(child => child?.type?.name !== 'Heading')
    : children;
  
  // Remove margins for Hero and Standards sections
  const marginClasses = hasHero ? '' 
    : hasStandards ? 'mt-0' 
    : `mt-10 ${footer ? 'mb-0' : 'mb-30'}`;
  
  return (
    <div className={marginClasses}>
      {filteredChildren}
    </div>
  )
}

export default Container
  