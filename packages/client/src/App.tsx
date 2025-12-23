import { useEffect, useState } from "react";
import "./index.css";
import { Button } from "./components/ui/button";
function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-2">{message}</h1>
      <Button>Click me</Button>
    </div>
  );
}

export default App;
