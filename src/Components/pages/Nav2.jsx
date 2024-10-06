// export default function Navbarnew(){
//     return(
//       <div id="nav1">
//       <nav>
//         <div id="nav2">
//           <h1 id="d1">Pixabay</h1>
//           <Link to="/login">
//             <button style={{marginLeft:"1100px"}}>Login</button>
//           </Link>
//           <button>Upload</button>
//         </div>
//         <div id="centerContent">
//           <h3>Stunning royalty-free images & royalty-free stock</h3>
//           <p>
//             Over 5 million+ high quality stock images, videos and music shared
//             by our talented community.
//           </p>
//         </div>
//     )
// }
import { Link } from "react-router-dom"; // Ensure you import Link

export default function Navbarnew() {
  return (
    <div id="nav1">
      <nav>
        <div id="nav2">
          <h1 id="d1">Pixabay</h1>
          <Link to="/login">
            <button style={{ marginLeft: "1100px" }}>Login</button>
          </Link>
          <button>Upload</button>
        </div>
        <div id="centerContent">
          <h3>Stunning royalty-free images & royalty-free stock</h3>
          <p>
            Over 5 million+ high quality stock images, videos, and music shared
            by our talented community.
          </p>
        </div>
      </nav>
    </div>
  );
}
