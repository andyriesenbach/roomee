import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

const SearchResultView = ({listing, onTitleClick}) => (
  <div className="container is-fluid">
    <Link to="/house" >
      <h4 className="level-item has-text-centered " onClick={()=>onTitleClick(listing)}>
        {listing.title}
      </h4>
    </Link>
    <div>
      <h4 className="level-item has-text-centered ">{listing.city}, {listing.stateAbbr}  {listing.zipCode} </h4>
      <h5 className="level-item has-text-centered ">${listing.price}</h5>

      <div className="level-item">
        {
          listing.photos.map((photo,ind) => {
            // cloundinary image sizes are manipulated by inserting arguments after the 'upload' part of the file parth
            // example: "http://res.cloudinary.com/dwysumxzw/image/upload/v1532558555/kog_r_full_shot_x2ggw7.jpg";
            // I'm not connected to the database yet and will need to test the lines below once we are
            const arr = photo.url.split('upload/');
            const uploadWidth = 'upload/w_412,c_scale/';
            const resizedPhotoUrl = arr.join(uploadWidth);

            return (<img src={resizedPhotoUrl} alt="picture of room for rent" key={ind}></img>)
          })
        }
      </div>
    </div>
  </div>
);

export default SearchResultView;
