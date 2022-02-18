import React from "react";

function Button({
  dark,
  text,
  click,
  disabled,
}: {
  dark: boolean;
  text: string;
  click?: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      onClick={click}
      disabled={disabled}
      className={
        dark
          ? "py-2 px-5 rounded-full disabled:cursor-not-allowed text-sm bg-purple-700 hover:bg-purple-600 active:bg-purple-800 duration-100 text-white"
          : "py-2 px-5 bg-purple-100 text-sm rounded-full disabled:cursor-not-allowed text-purple-800 hover:bg-purple-50 active:bg-purple-200 duration-100"
      }
    >
      {text}
    </button>
  );
}

export default Button;
