import React from 'react';

class ProjectHeader extends React.Component {
   render() {
      return (
         <div>
            <div className="header">
               <h1>Show Local Weather</h1>
               <hr className="divide-line-header" />
               <p>A FCC Take Home Project - React JS</p>
            </div>
         </div>
      );
   }
}

export default ProjectHeader;