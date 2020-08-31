import React from 'react';
import './style.css';
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Home extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
        hits: [],
      };
   }


   componentDidMount() {
      fetch("https://api.themoviedb.org/3/movie/popular?api_key=e5311b9ae6407dbed2cc61fa8d677bcc&language=en-US&page=1")
      .then(response => response.json())
      .then(data => this.setState({ hits: data.results }));

   }

   render() {
    const { hits } = this.state;
      // const settings = {
      //    dots: true,
      //    infinite: true,
      //    speed: 500,
      //    slidesToShow: 5.1,
      //    slidesToScroll: 1
      // };
      console.log(hits)

      return (
          <div>
             <h1 className="popular-movie-text px-3 pt-3">Popular Movie</h1>
             <hr/>
             <div>
                <div className="row px-3">
                <ul>
                  {hits.map(hit =>
                    <li key={hit.objectID}>
                      <a href={hit.id}>{hit.title}</a>
                    </li>
                  )}
                </ul>
                   <div className="col-md-2">
                     <img src="https://i.pinimg.com/originals/a5/96/2e/a5962eef9507c320c98436e078d4b40f.jpg" width="100%"></img>
                   </div>
                   <div className="col-md-2">
                     <img src="https://i.pinimg.com/originals/a5/96/2e/a5962eef9507c320c98436e078d4b40f.jpg" width="100%"></img>
                   </div>
                   <div className="col-md-2">
                     <img src="https://i.pinimg.com/originals/a5/96/2e/a5962eef9507c320c98436e078d4b40f.jpg" width="100%"></img>
                   </div>
                   <div className="col-md-2">
                     <img src="https://i.pinimg.com/originals/a5/96/2e/a5962eef9507c320c98436e078d4b40f.jpg" width="100%"></img>
                   </div>
                   <div className="col-md-2">
                     <img src="https://i.pinimg.com/originals/a5/96/2e/a5962eef9507c320c98436e078d4b40f.jpg" width="100%"></img>
                   </div>
                   <div className="col-md-2">
                     <img src="https://i.pinimg.com/originals/a5/96/2e/a5962eef9507c320c98436e078d4b40f.jpg" width="100%"></img>
                   </div>
                </div>
             </div>
             <h1 className="popular-movie-text px-3 pt-3">Top Rated Movie</h1>
             <hr/>
             <div>
                <div className="row px-3">
                   <div className="col-md-2">
                     <img src="https://lakhaneditingexpress.files.wordpress.com/2017/08/23__by_y5y6-d3acdsi.jpg" width="100%"></img>
                   </div>
                   <div className="col-md-2">
                     <img src="https://lakhaneditingexpress.files.wordpress.com/2017/08/23__by_y5y6-d3acdsi.jpg" width="100%"></img>
                   </div>
                   <div className="col-md-2">
                     <img src="https://lakhaneditingexpress.files.wordpress.com/2017/08/23__by_y5y6-d3acdsi.jpg" width="100%"></img>
                   </div>
                   <div className="col-md-2">
                     <img src="https://lakhaneditingexpress.files.wordpress.com/2017/08/23__by_y5y6-d3acdsi.jpg" width="100%"></img>
                   </div>
                   <div className="col-md-2">
                     <img src="https://lakhaneditingexpress.files.wordpress.com/2017/08/23__by_y5y6-d3acdsi.jpg" width="100%"></img>
                   </div>
                   <div className="col-md-2">
                     <img src="https://lakhaneditingexpress.files.wordpress.com/2017/08/23__by_y5y6-d3acdsi.jpg" width="100%"></img>
                   </div>
                </div>
             </div>
          </div>
       )
    }
 }
 export default Home;