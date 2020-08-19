import React, { useState, useEffect }from 'react';


const Home = (props) => {

const [userHits, setHits] = useState({
  hits: null
});
  useEffect(() => {
  setHits({
    hits:props.pageData
  })
  window.sessionStorage.setItem("hits", props.pageData);

}, []);

  const pageListData = props.pageData.map(function (listing, index) {
        return (
          <div className="container">
            <div className="row">
              <div class="col-sm">{listing.num_comments}</div>
              <div class="col-sm">0</div>
              <div class="col-sm">&#9650;</div>
              <div class="col-sm title">{listing.title}</div>
            </div>
            <div className="clear"></div>
          </div>
        )
      });
        return (
          <div >
          {pageListData}

           < /div >);
        };

        export default Home;
