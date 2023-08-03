import {useEffect,useState} from 'react'
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import Alert from '@mui/material/Alert';
import NavBar from "./components/NavBar";


function App() {
  const [showAlert, setShowAlert] = useState(true);


  useEffect(() => {
    // Set a timeout to hide the alert after 10 seconds
    const timer = setTimeout(() => {
      setShowAlert(false);
    }, 10000);

    // Clear the timeout when the component is unmounted
    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
     {showAlert && (
        <Alert severity="info" onClose={() => setShowAlert(false)}>
Hey, could you please click on the playAudio button on the right for my introduction? Thanks! 🎶
        </Alert>
      )}

      <NavBar/>
      <div className="appDiv">
      <Canvas shadows camera={{ position: [0, 0, 8], fov: 42 }}>
      <color attach="background" args={["#a72a2a"]} />
      <Experience />
    </Canvas>
      </div>
    </div>
  );
}

export default App;
