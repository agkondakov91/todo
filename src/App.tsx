import { Button } from "./components/button/button";

function App() {
  return (
    <>
      <header className="header">
        <h1 className="header__title">todos</h1>
      </header>
      <main className="main">
        <Button
          title="add"
          isActive={false}
          onClick={() => console.log("Test click")}
        />
      </main>
      <footer className="footer"></footer>
    </>
  );
}

export default App;
