import React from 'react';
import ReactDom from 'react-dom';
function Great()
{
  return <h4>first component</h4>;
}

ReactDom.render(<Great/>,document.getElementById('root'));