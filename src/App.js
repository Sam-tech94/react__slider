import ImageSlider from "./components/ImageSlider";

function App() {
  const slides = [
    { url: 'http://localhost:3000/image-1.jpg', title: "beach"},
    { url: "http://localhost:3000/image-2.jpg", title: "boat" },
    { url: "http://localhost:3000/image-3.jpg", title: "forest" },
    { url: "http://localhost:3000/image-4.jpg", title: "city" },
    { url: "http://localhost:3000/image-5.jpg", title: "italy" },
  ];

  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto"
  };

  const textCenterStyle = {
    textAlign: "center"
  };

  return (
    <div>
      <h1 style={textCenterStyle}>React Slider</h1>
      <div style={containerStyles}>
        <ImageSlider slides={slides} parentWidth={500} />
      </div>
    </div>
  );
}

export default App;
