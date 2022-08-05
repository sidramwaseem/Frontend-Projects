import React from "react";
import Card from "./components/Card.jsx";
import "./App.css";

function App() {
  const [advice, setAdvice] = React.useState({
    id:0,
    advice:"",
  });

  React.useEffect(() => {
    async function getAdvice() {
      const res = await fetch(
        "https://api.adviceslip.com/advice"
      );
      const data = await res.json();
      setAdvice(() => {
        return {
          id: data.slip.id,
          advice: data.slip.advice,
        };
      });
    }
    getAdvice();
  }, []);

  console.log(advice.advice);

  return (
    <div>
      <Card id={advice.id} advice={advice.advice} />
    </div>
  );
}

export default App;
