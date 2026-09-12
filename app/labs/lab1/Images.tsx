export default function Images() {
  return (
    <div id="wd-images">
      <h4>Image tag</h4>
      Loading an image from the internet:
      <br />
      <img
        id="wd-starship"
        width="400px"
        alt="Starship"
        src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
      />
      <br />
      Loading a local image:
      <br />
      <img
        id="wd-teslabot"
        src="/images/teslabot.jpg"
        height="200px"
        alt="Tesla Bot (Optimus) humanoid robot"
      />
      <br />
      <img
        id="wd-ai-image"
        src="https://images-assets.nasa.gov/image/PIA12235/PIA12235~small.jpg"
        width="200px"
        alt="Nearside of the Moon"
      />
      <br />
      <img
        id="wd-your-image"
        src="https://www.spotandtango.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fsi2d31ie%2Fproduction%2F3c7259031efa144677b682b172af44559de151b7-1000x563.jpg%3Frect%3D137%2C0%2C726%2C563%26w%3D495%26h%3D384&w=3840&q=75"
        height="300px"
        alt="Cute puppy!"
      />
    </div>
  );
}
