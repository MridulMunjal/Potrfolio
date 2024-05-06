import React from 'react';

function EmojiBullet(props) {
  const { emoji, text } = props;

  return (
    <div className=" text-base hover:animate-bounce mb-2">
      <li
        className=" cursor-pointer text-gray-200 hover:text-pink-500 font-bold"
        style={{ fontSize: '1rem', lineHeight: '1.5' }}
      >
        <span className="mr-2 text-xl">{emoji}</span>
        {text}
      </li>
    </div>
  );
}

export default EmojiBullet;