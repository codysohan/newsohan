import React, {useEffect, useState} from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types"; // Shortcut => impt
import InfiniteScroll from "react-infinite-scroll-component"; // For creating Infinite Scroll bar to my News component

const News = (props) =>{
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  
  const updateNews = async () => {
    props.setProgress(20)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=a1cc074fb3c14847b61a0fecc5bd83ca&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(50)
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false);

    props.setProgress(100)
  }

  useEffect(() => {
    document.title = `${props.title} - SohanNews`; 
    updateNews();
    
  }, []);

  const fetchMoreData = async () => {
    
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=a1cc074fb3c14847b61a0fecc5bd83ca&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1)
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults)
  };

    return (
      <div className="container my-3">
        <h3 className={`text-center text-${props.textColor}`} style={{margin: '35px 0px', marginTop: '80px'}}>
          News Monkey - Top{" "}
          <span className={`text-${props.btnColor}`}>{props.title}</span> News!
        </h3>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length < totalResults}
          loader={<Spinner/>}
        >
          <div className="container">
          <div className="row">
            {articles.map((element, index) => {
              // By Using Index in map function it will give you unique index number for every array element 
              return (
                <div key={index} className="col-md-4">
                  <Newsitem
                  darkmode={props.darkmode}
                  btnColor={props.btnColor}
                    title={
                      element.title ? element.title : "Title not available :("
                    }
                    description={
                      element.description
                        ? element.description
                        : "Description not available :("
                    }
                    publishedAt={
                      element.publishedAt ? element.publishedAt : "2"
                    }
                    author={element.author ? element.author : "Unknown author"}
                    source={
                      element.source.name ? element.source.name : "Unknown"
                    }
                    urlToImage={
                      element.urlToImage
                        ? element.urlToImage
                        : '/imgNotAvl.png'
                    }
                    newsUrl={element.url ? element.url : "www.google.com"}
                    
                  />
                </div>
                
              );
            })}
          </div>
          </div>
        </InfiniteScroll>

      </div>
    );
}

News.defaultProps = {
  country: "in",
  pageSize: 5,
  category: "general",
}; 


News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}; 

export default News;
