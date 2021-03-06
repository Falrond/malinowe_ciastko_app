import React from 'react';

const Loading = () => {
  return (
    <div className="max-w-screen-xl mx-auto flex justify-center items-center">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
