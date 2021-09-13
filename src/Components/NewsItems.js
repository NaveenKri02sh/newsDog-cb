import React, { Component } from 'react'

export class NewsItems extends Component {
    render() {
        let {title, desc,imageUrl,url,author,date,source} = this.props;
        return (
            <div className="card my-2">
                <div style={{display: 'flex',justifyContent: 'flex-end',position: 'absolute',right: '0'}}>
                    <span className="badge rounded-pill bg-danger">{source}</span>
                </div>
                <img src={imageUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{desc}</p>
                    <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toUTCString()}</small></p>
                    <a rel="noreferrer" href={url} target="_blank" className="btn btn-dark">Read More</a>
                </div>
            </div>
        )
    }
}

export default NewsItems
