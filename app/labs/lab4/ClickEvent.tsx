"use client";

const hello = () => {
  alert("Hello World!");
};

const goodbye = () => {
  alert("Goodbye World!");
};

const greetMaya = () => {
  alert("Hi, I'm Maya, welcome!");
};

export default function ClickEvent() {
  return (
    <div id="wd-click-event">
      <h2>Click Event</h2>
      <button
        type="button"
        onClick={hello}
        id="wd-onclick-hello"
        className="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Click Hello
      </button>
      <button
        type="button"
        onClick={goodbye}
        id="wd-onclick-goodbye"
        className="ms-2 rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Click Goodbye
      </button>
      <button
        type="button"
        onClick={greetMaya}
        id="wd-onclick-greet-maya"
        className="ms-2 rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Greet Maya
      </button>
      <hr />
    </div>
  );
}
