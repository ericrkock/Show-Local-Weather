import React from 'react';

class ProjectFooter extends React.Component {
   render() {
      return (
         <div>
            <div className="footer">
               <span>Presented by Eric R. Kock - Sep. 2019 |
                  <a href="https://about.me/erickock" rel="noopener noreferrer" target="_blank">{" "}About Me</a>{" "}-
                  <a href="https://codepen.io/EricRKock/" rel="noopener noreferrer" target="_blank">{" "}CodePen{" "}</a>{" "}-
                  <a href="https://github.com/ericrkock/Show-Local-Weather" rel="noopener noreferrer" target="_blank">{" "}GitHub</a>
               </span>
            </div>
         </div>
      );
   }
}

export default ProjectFooter;