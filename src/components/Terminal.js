import React from 'react';
import Style from "./Terminal.module.scss"; 

function Terminal(props) {
  const { text } = props;

  return (
    <>
      <section className={Style.terminal}>
        <div className={Style.statusBar}>
          <div className="h-4 w-4 rounded-full bg-red-500 mr-2"></div>
          <div className="h-4 w-4 rounded-full bg-yellow-500 mr-2"></div>
          <div className="h-4 w-4 rounded-full bg-green-500"></div>
        </div>
        <div className={Style.content}>
          {text}
        </div>
      </section>
    </>
  );
}

export default Terminal;
