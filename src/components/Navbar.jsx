import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex gap-4 p-4 bg-black text-white">
      <Link to="/">Login</Link>
      <Link to="/todo">Todo</Link>
      <Link to="/search">Search</Link>
      <Link to="/performance">Performance</Link>
      <Link to="/infinite">Infinite</Link>
    </div>
  );
}

export default Navbar;