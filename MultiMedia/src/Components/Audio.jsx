 import audio from '../assets/M1.mp3' 
  
  export function Audio(){
    return(
        <>
        <h1>Audio!</h1>
        <audio controls  src={audio}>
        </audio>
        <br></br>
        <audio controls src="/M2.mpeg">
        </audio>
        <br></br>
        </>
    )
}