import "./index.css";
import ForegroundColors from "./ForegroundColors";
import BackgroundColors from "./BackgroundColors";
import Borders from "./Borders";
import Padding from "./Padding";
import Margins from "./Margins";
import BoxModel from "./BoxModel";
import Corners from "./Corners";
import Dimensions from "./Dimensions";
import Display from "./Display";
import Positions from "./Positions";
import Zindex from "./Zindex";
import Float from "./Float";
import GridLayout from "./GridLayout";
import Flex from "./Flex";
import MediaQueriesDemo from "./MediaQueriesDemo";
import ReactIconsSampler from "./ReactIconsSampler";
import Link from "next/link";

export default function Lab2() {
  return (
    <div id="wd-lab2">
      <h2>Lab 2 - Cascading Style Sheets</h2>
      <Link href="lab2/tailwind">Open Tailwing CSS lab</Link>
      <h3>Styling with the STYLE attribute</h3>
      <p>
        Style attribute allows configuring look and feel right on the element.
        Although it&apos;s very convenient it is considered bad practice and you
        should avoid using the style attribute
      </p>
      <p
        id="wd-ai-style-attr"
        style={{ backgroundColor: "purple", color: "white" }}
      >
        This sample paragraph uses the style attribute to set a purple
        background and white text color.
      </p>
      <p style={{ backgroundColor: "green", color: "yellow" }}>
        This is my second paragraph with a different style, specifically a green
        background and yellow text color.
      </p>
      <div id="wd-css-id-selectors">
        <h3>ID selectors</h3>
        <p id="wd-id-selector-1">
          Instead of changing the look and feel of all the elements of the same
          name, e.g., P, we can refer to a specific element by its ID
        </p>
        <p id="wd-id-selector-2">
          Here&apos;s another paragraph using a different ID and a different
          look and feel
        </p>
        <p id="wd-ai-id-selector">
          This paragraph uses its own ID with a unique background and text color
        </p>
        <p id="wd-id-selector-3">
          And here&apos;s a third paragraph with yet another ID and style
        </p>
      </div>
      <div id="wd-css-class-selectors">
        <h3>Class selectors</h3>
        <p className="wd-class-selector">
          Instead of using IDs to refer to elements, you can use an
          element&apos;s CLASS attribute
        </p>
        <h4 className="wd-class-selector">
          This heading has same style as paragraph above
        </h4>
        <p className="wd-ai-class-selector">
          This paragraph uses the AI sample class selector
        </p>
        <h4 className="wd-ai-class-selector">
          This heading shares the AI sample class style
        </h4>
        <h4 className="wd-your-class">Has same style of below paragraph!</h4>
        <p className="wd-your-class">Has same style as above h4!</p>
      </div>
      <div id="wd-css-document-structure">
        <div className="wd-selector-1">
          <h3>Document structure selectors</h3>
          <div className="wd-selector-2">
            Selectors can be combined to refer elements in particular places in
            the document
            <p className="wd-selector-3">
              This paragraph&apos;s red background is referenced as
              <br />
              .selector-2 .selector3
              <br />
              meaning the descendant of some ancestor.
              <br />
              <span className="wd-selector-4">
                Whereas this span is a direct child of its parent
                <span className="wd-selector-5">A new nested element</span>
              </span>
              <br />
              <span className="wd-ai-selector-5">
                This AI sample span is a descendant of .wd-selector-1
              </span>
              <br />
              You can combine these relationships to create specific styles
              depending on the document structure
            </p>
          </div>
        </div>
      </div>

      <div id="wd-css-cascade">
        <h3>CSS selection rule mechanism</h3>
        <p id="wd-cascade-demo" className="wd-cascade-demo">
          This paragraph is targeted by a tag rule, a class rule, and an id
          rule, all fighting over background-color. The id wd-cascade-demo wins
          making it purple.
        </p>
        <p id="wd-ai-cascade" className="wd-ai-cascade">
          This AI sample paragraph matches a p tag rule (green), a class rule
          (yellow), and an id rule (red). The id rule wins, so it is red.
        </p>
      </div>
      <ForegroundColors />
      <BackgroundColors />
      <Borders />
      <Padding />
      <Margins />
      <BoxModel />
      <Corners />
      <Dimensions />
      <Display />
      <Positions />
      <Zindex />
      <Float />
      <GridLayout />
      <Flex />
      <MediaQueriesDemo />
      <ReactIconsSampler />

    </div>
  );
}