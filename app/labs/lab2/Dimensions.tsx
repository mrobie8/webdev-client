export default function Dimensions() {
  return (
    <div id="wd-css-dimensions">
      <h2>Dimension</h2>
      <div>
        <div className="wd-dimension-portrait wd-bg-color-yellow">Portrait</div>
        <div className="wd-dimension-landscape wd-bg-color-blue wd-fg-color-white">
          Landscape
        </div>
        <div className="wd-dimension-square wd-bg-color-red">Square</div>
        <div id="wd-ai-dimension" className="wd-ai-dimension">
          This is a long sentence inside a box that is declared to be exactly
          120px wide and 60px tall, so the text overflows past the yellow area.
        </div>
        <div className="wd-dimension-mine wd-border-solid wd-border-blue wd-dimension-square wd-bg-color-gray">
          My box
        </div>
      </div>
    </div>
  );
}
