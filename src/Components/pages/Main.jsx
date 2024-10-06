// import React from "react";
// class Main extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {search:"",searchResults:[]};
//   }
//   fetchImages = () => {
//     fetch(
//       `https://pixabay.com/api/?key=46193765-9b4e405df685d88e9b0aa6bbb&q=${this.state.search}&image_type=photo&pretty=true`
//     )
//       .then((response) => response.json())
//       .then((data) => this.setState({ searchResults: data.hits }))
//       .catch((error) => console.error("Error fetching data:", error));
//   };
//   handleInputChange = (e) => {
//     this.setState({ search: e.target.value }, this.fetchImages);
//   };
//   render() {
//     return (
//       <>
//         <input
//           placeholder="Search..."
//           onChange={this.handleInputChange}
//           value={this.state.search}    
//             />
//         <div>
//           {this.state.searchResults.map((x, index) => {
//             return <img  src={x.webformatURL} alt="search result" />;
//           })}
//         </div>
//         <div id="image-gallery">
//           {content}
//         </div>
        
//       </>
//     );
//   }
// }
// export default Main
import React from "react";
import Footer from "./Footer";
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {search:"",searchResults:[]};
  }
  componentDidMount() {
    this.fetchImages(); 
  }
  fetchImages = () => {
    const query = this.state.search 
    fetch(
      `https://pixabay.com/api/?key=46193765-9b4e405df685d88e9b0aa6bbb&q=${query}&image_type=photo&pretty=true`
    )
      .then((response)=>response.json())
      .then((data)=>this.setState({ searchResults: data.hits }))
      .catch((error)=>console.error("Error fetching data:",error));
  };
  handleInputChange = (e) => {
    this.setState({search:e.target.value},this.fetchImages);
  };
  render() {
    return (
      <>
       <div id="d3">
       <input 
          placeholder="Search......."
          onChange={this.handleInputChange}
          value={this.state.search}  style={{height:"40px",width:"60%", borderRadius:"20px", marginLeft:"310px",
          fontSize:"15px", textAlign:"center"}}
        />
       </div>
        <div id="image-gallery">
          {this.state.searchResults.map((x, index) => (
            <img key={index} src={x.webformatURL} alt="search result"style={{width:"30%",height:"250px",paddingLeft:"37px",paddingTop:"50px",
            }}/>
          ))}
          {/* <Footer></Footer> */}
        </div>
        <Footer></Footer>
      </>
    );
  }
}
export default Main;
