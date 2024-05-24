import { Link, useLoaderData } from "react-router-dom";

function Home() {
  return (
    <>
      {console.log(useLoaderData())}
      <h1>Home Page</h1>
      <ul>
        <li>
          <Link to="/protected">Protected</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/register">Register</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </>
  );
}
export default Home;