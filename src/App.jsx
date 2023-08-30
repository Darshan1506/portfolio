import { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Experience } from './components/Experience';
import Alert from '@mui/material/Alert';
import NavBar from './components/NavBar';
import { MutatingDots } from 'react-loader-spinner';


function App() {
  const [showAlert, setShowAlert] = useState(true);
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    // Set a timeout to hide the alert after 10 seconds
    const alertTimer = setTimeout(() => {
      setShowAlert(false);
    }, 20000);

    // Set a timeout to hide the loading spinner after 3 seconds
    const loadingTimer = setTimeout(() => {
      setShowLoading(false);
    }, 5000);

    // Clear the timeouts when the component is unmounted
    return () => {
      clearTimeout(alertTimer);
      clearTimeout(loadingTimer);
    };
  }, []);

  return (
    <div>
      {showAlert && (
        <Alert severity="info" onClose={() => setShowAlert(false)}>
          Hey, could you please click on the playAudio button on the right for my introduction? Thanks! 🎶
        </Alert>
      )}

      {showLoading ? (
        <div className="loading-spinner">
          <MutatingDots 
  height="100"
  width="100"
  color="#4fa94d"
  secondaryColor= '#4fa94d'
  radius='12.5'
  ariaLabel="mutating-dots-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
 />
        </div>
      ) : (
        <>
          <NavBar />
          <div className="appDiv">
            <Canvas shadows camera={{ position: [0, 0, 8], fov: 42 }}>
              <color attach="background" args={['#a72a2a']} />
              <Experience />
            </Canvas>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
