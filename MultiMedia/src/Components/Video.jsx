 import video from '../assets/V1.mp4'
 import video1 from '../assets/V2.mp4'

 export function Video(){
    return(
        <>
        <h1>Videos!</h1>
        <video controls src={video} 
         style={{ width: "900px", height: "500px", borderRadius: "10px" }}>    
        </video>

        <br></br>

        <video controls
        src={video1 }
         style={{ width: "900px", height: "500px", borderRadius: "10px" }}
        ></video>
        
        </>
    )
}