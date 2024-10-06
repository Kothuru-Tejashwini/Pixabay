// import { Link } from "react-router-dom"
// export default function Navbar(){
//     return(
//        <div id="nav1">
//          <nav>
//                 <div id2="nav2">
//                 <h1>Pixabay</h1>
//                 <Link to="/login"><button>Login</button></Link>
//                 {/* <img src="https://pixabay.com/static/img/profile_images/green.svg"alt="" style={{borderRadius:"50%",height:"30px",width:"30px"}}></img> */}
//                 <button>Upload</button>
//                 </div>
//                 <h3>Stunning royalty-free images & royalty-free stock</h3>
//                 <p>Over 5 million+ high quality stock images, videos and music shared by our talented community.</p>
//         </nav>
//        </div>
//     )
// }
import {Link} from "react-router-dom";
export default function Navbar() {
  return (
    <div id="nav1">
      <nav>
        <div id="nav2">
          <h1 id="d1">Pixabay</h1>
          <Link to="/login">
            <button style={{marginLeft:"1100px"}}>Login</button>
          </Link>
          <button>Upload</button>
        </div>
        <div id="centerContent">
          <h3>Stunning royalty-free images & royalty-free stock</h3>
          <p>
            Over 5 million+ high quality stock images, videos and music shared
            by our talented community.
          </p>
        </div>
      </nav>
      <div>
        <footer>
          
        </footer>
      </div>
    </div>
    
  )
}
