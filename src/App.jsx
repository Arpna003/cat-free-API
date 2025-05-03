import { useEffect, useState } from "react";

function App() {
  const [fact, setFact] = useState("");
  const [loading, setLoading] = useState(false);

  const getCatFact = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://catfact.ninja/fact");
      const data = await res.json();
      setFact(data.fact);
    } catch (error) {
      setFact("Oops! Couldn't fetch a cat fact.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCatFact(); // Fetch on load
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center max-w-md">
        <h1 className="text-2xl font-bold mb-4">🐱 Cat Fact Generator</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <p className="mb-6 italic">"{fact}"</p>
        )}
        <button
          onClick={getCatFact}
          className="bg-orange-400 text-white px-4 py-2 rounded hover:bg-orange-500"
        >
          Get New Fact
        </button>
      </div>
    </div>
  );
}

export default App;
