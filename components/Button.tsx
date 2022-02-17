import React from "react";

function Button({
  dark,
  text,
  click,
}: {
  dark: Boolean;
  text: string;
  click?: () => void;
}) {
  return (
    <button
      onClick={click}
      className={
        dark
          ? "py-2 px-5 rounded-full text-sm bg-purple-600 hover:bg-purple-500 active:bg-purple-700 duration-100 text-white"
          : "py-2 px-5 bg-purple-100 text-sm rounded-full text-purple-800 hover:bg-purple-50 active:bg-purple-200 duration-100"
      }
    >
      {text}
    </button>
  );
}

export default Button;
