export default function VariablesAndConstants() {
  var functionScoped = 2;
  let blockScoped = 5;
  const constant1 = functionScoped - blockScoped;
  const sampleSum = functionScoped + blockScoped;
  let name = "Maya";
  const greeting = `Hello ${name}, welcome to lab 3!`;
  return (
    <div id="wd-variables-and-constants">
      <h4>Variables and Constants</h4>
      functionScoped = {functionScoped}
      <br />
      blockScoped = {blockScoped}
      <br />
      constant1 = {constant1}
      <br />
      Name = {name}
      <br />
      Greeting = {greeting}
      <br />
      sampleSum = {sampleSum}
      <hr />
    </div>
  );
}
