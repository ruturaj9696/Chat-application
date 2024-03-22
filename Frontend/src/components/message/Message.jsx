import React from "react";

const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src={"https://i.stack.imgur.com/l60Hf.png"}
          />
        </div>
      </div>
      <div className={`chat-bubble text-white bg-blue-400`}>Hi!! whatsupp</div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center text-white">
        12.42
      </div>
    </div>
  );
};

export default Message;
