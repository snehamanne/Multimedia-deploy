import image from "../assets/Img2.jpg";
import image1 from "../assets/image.png"

export function Image() {
  return (
    <div>
        <h1>Images !</h1>
      <img src={image} alt="img"   style={{ width: "600px", height: "700px", borderRadius: "10px" }}/>
      <br></br>
      
      <img src={image1} alt=""  style={{ width: "600px", height: "700px", borderRadius: "10px" }} />
      <br></br>
      
      <img src="/img2.jpg" alt=""  style={{ width: "600px", height: "700px", borderRadius: "10px" }} />
    </div>
  );
}
