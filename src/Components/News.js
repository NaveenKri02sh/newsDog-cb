import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component"


export class News extends Component {
    static defaultProps = {
        country : "in",
        category : "general",
        pageSize : 8
    }
    static propTypes = {
        country : PropTypes.string,
        category : PropTypes.string,
        pageSize : PropTypes.number
    }
    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    constructor(props){
        super(props);
        this.state ={
            articles : [],
            loading : false,
            page : 1,
            totalResults : 0
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsDog`
    }
    async updateNews(){
        this.props.setProgress(0)
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading : true})
        let data = await fetch(url);
        let parseData = await data.json();
        this.props.setProgress(100)
        this.setState({
            articles : parseData.articles,
            totalResults: parseData.totalResults,
            loading : false
        })
    }
    fetchMoreData = async () => {
        
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        this.setState({
            page : this.state.page + 1,
        })
        this.setState({loading : true})
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({
            articles : this.state.articles.concat(parseData.articles),
            totalResults: parseData.totalResults,
            loading : false
        })
       
    };
    
    async componentDidMount(){
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=86c5e138c72648799dfaf01575f1151b&page=1&pageSize=${this.props.pageSize}`;
        // this.setState({loading : true})
        // let data = await fetch(url);
        // let parseData = await data.json();
        // this.setState({
        //     articles : parseData.articles,
        //     totalResults: parseData.totalResults,
        //     loading : false
        // })
        this.updateNews();

    }
    handleNextClick =  async ()=>{
        // if(!(this.state.page+1 > Math.ceil(this.state.totalResults)/this.props.pageSize)){

        //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=86c5e138c72648799dfaf01575f1151b&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        //     this.setState({loading : true})
        //     let data = await fetch(url);
        //     let parseData = await data.json();
        //     this.setState({
        //         page : this.state.page+1,
        //         articles : parseData.articles,
        //         loading : false
        //     })
        // }
        console.log('Next');
        this.setState({
            page : this.state.page + 1,
        })
        this.updateNews();
        
    }
    handlePreClick = async ()=>{
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=86c5e138c72648799dfaf01575f1151b&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        // this.setState({loading : true})
        // let data = await fetch(url);
        // let parseData = await data.json();
        // this.setState({
        //     page : this.state.page-1,
        //     articles : parseData.articles,
        //     loading : false
        // })
        this.setState({
            page : this.state.page - 1,
        })
        this.updateNews();
    }
 
    render() {
        return (     
            <>     
                <h2 className="text-center my-3">NewsDog Top Headlines - {this.capitalizeFirstLetter(this.props.category)}</h2>
                {this.state.loading && <Spinner/>}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner/>}
                >
               <div className="container my-3">    
                <div className="row">
                {this.state.articles.map((element)=>{
                    return <div className="col-md-4" key={element.url}>
                    <NewsItems title={element.title} desc={element.description} url={element.url} imageUrl={element.urlToImage ?element.urlToImage : "https://images.moneycontrol.com/static-mcnews/2018/07/ecommerce-770x433.jpg"} author={element.author ? element.author : "Unknown"} date={element.publishedAt} source={element.source.name}/>
                    </div>
                })}
                    
                </div>
               {/* <div className="d-flex justify-content-between">
                    <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreClick}> &larr; Previous</button>
                    <button disabled ={this.state.page+1 > Math.ceil((this.state.totalResults)/this.props.pageSize)}type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div> */}
              </div>
              </InfiniteScroll>
            </>
        )
    }
}

export default News
