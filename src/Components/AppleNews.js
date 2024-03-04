import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class AppleNews extends Component {
    constructor() {
        super();
        console.log("hello i am a constructore from news Component");
        this.state = {
            articles: [],
            loading: false,
            page: 1
        };
    }

    async componentDidMount() {
        console.log("CDM");
        let url = `https://newsapi.org/v2/everything?q=apple&from=2024-03-03&to=2024-03-03&sortBy=popularity&apiKey=07842d535f0e4e85b598d534919f407a&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults });
    }

    handleNextClick = async () => {
        console.log("Next");

        if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {

        }
        else {
            let url = `https://newsapi.org/v2/everything?q=apple&from=2024-03-03&to=2024-03-03&sortBy=popularity&apiKey=07842d535f0e4e85b598d534919f407a&page=${this.state.page + 1}&pageSize=20`;
            let data = await fetch(url);
            let parsedData = await data.json();
            console.log(parsedData);
            this.setState({
                articles: parsedData.articles,
                page: this.state.page + 1
            });
        }

    }
    handlePrevClick = async () => {
        console.log("Previous");
        let url = `https://newsapi.org/v2/everything?q=apple&from=2024-03-03&to=2024-03-03&sortBy=popularity&apiKey=07842d535f0e4e85b598d534919f407a&page=${this.state.page - 1}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            page: this.state.page - 1
        });
    }

    render() {
        return (
            <div className="container my-3">
                <h2>Top Headlines</h2>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; previous</button>
                    <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}
