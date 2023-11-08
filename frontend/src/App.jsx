import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <nav>
        <Link to="/Home">Home</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}
export default App;
