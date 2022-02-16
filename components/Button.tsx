import React from "react";

function Button({ dark, text }: { dark: Boolean; text: string }) {
  return (
    <button
      className={
        dark
          ? "py-2 px-5 rounded-full text-sm bg-purple-600 hover:bg-purple-500 active:bg-purple-700 duration-100 text-white"
          : "py-2 px-5 bg-purple-100 rounded-full text-purple-800 hover:bg-purple-50 active:bg-purple-200 duration-100"
      }
    >
      {text}
    </button>
  );
}

export default Button;
