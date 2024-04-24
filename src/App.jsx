import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import "./App.css";
import Earth from "./Earth";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="app">
            <Canvas>
                <Suspense fallback={null}>
                    <ambientLight />
                    <Earth />
                    <OrbitControls />
                </Suspense>
            </Canvas>
        </div>
    );
}

export default App;
