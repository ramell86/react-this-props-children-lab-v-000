// Code ThemedDecoration Component Here
import React from 'react';

class ThemedDecorations extends React.Component {
  render(){
  var childrenPassed = React.Children.map(this.props.children, child => 
    React.cloneElement(child, {className: this.props.theme,}))
    return(
      <div>
      {childrenPassed}
     </div>
    )
  
  }
  
}


export default ThemedDecorations