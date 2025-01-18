import { useEffect, useRef, useState } from "react"
import { Button } from "@/contexts/shared/presenter/components/ui/button"

export function Camera() {
  const videoRef = useRef(null)
  const canvasRef = useRef(null)

  const [width, setWidth] = useState(1280)
  const [height, setHeight] = useState(720)
  

  // document.querySelector("video");

  const getVideo = () => {
    if (navigator.mediaDevices?.getUserMedia) {
      navigator.mediaDevices
      .getUserMedia({
        audio: false,
        video: {
          width:   1280,
          height: 720
        },
      })
      .then(function (mediaStream) {
        
        videoRef.current.srcObject = mediaStream;
        videoRef.current.onloadedmetadata = function () {
          videoRef.current.play();
        };
      })
      .catch(function (err) {
        console.log(err.name + ": " + err.message);
      }); // always check for errors at the end.
    }
  }

  useEffect(() => {
    getVideo()
  }, [videoRef])

  function takepicture() {
    const context = canvasRef.current.getContext("2d");
    // if (width && height) {
      canvasRef.current.width = width;
      canvasRef.current.height = height;
      context.drawImage(videoRef.current, 0, 0, width, height);
  
      const data = canvasRef.current.toDataURL("image/png");
      photo.current.setAttribute("src", data);
    // } else {
      // clearphoto();
    // }
  }

  // function clearphoto() {
  //   const context = canvas.current.getContext("2d");
  //   context.fillStyle = "#AAA";
  //   context.fillRect(0, 0, canvas.current.width, canvas.current.height);
  
  //   const data = canvas.current.toDataURL("image/png");
  //   photo.current.setAttribute("src", data);
  // }

  return (
    <div>
      <video ref={videoRef}></video>
      <canvas className='w-full' ref={canvasRef}></canvas>
      <Button onClick={() => takepicture()}>Click</Button>
    </div>)
} 