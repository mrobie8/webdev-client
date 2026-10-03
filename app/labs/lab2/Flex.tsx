import "./index.css";

export default function Flex() {
  return (
    <div id="wd-css-flex">
      <h2>Flex</h2>
      <div className="wd-flex-row-container">
        <div className="wd-bg-color-yellow wd-width-75px">Column 1</div>
        <div className="wd-bg-color-blue wd-fg-color-white">Column 2</div>
        <div className="wd-bg-color-red wd-fg-color-white wd-flex-grow-1">
          Column 3
        </div>
      </div>
      <div id="wd-ai-flex" className="wd-flex-row-container">
        <div className="wd-bg-color-yellow wd-width-75px">Fixed 75px</div>
        <div className="wd-bg-color-gray">Natural width</div>
        <div className="wd-bg-color-green wd-fg-color-white wd-flex-grow-1">
          Stretches (flex-grow)
        </div>
      </div>
      <div className="wd-flex-row-container">
        <div className="wd-flex-grow-1 wd-border-solid wd-border-blue wd-dimension-square wd-bg-color-gray">
          My box with flex-grow
        </div>
        <div className="wd-width-75px wd-border-solid wd-border-red wd-dimension-square wd-bg-color-gray">
          Fixed width
        </div>
      </div>
    </div>
  );
}
