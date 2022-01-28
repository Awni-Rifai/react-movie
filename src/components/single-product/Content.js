import React, { Component } from 'react';
import Comments from './Comments';
import Gallery from './Gallery';
import Related_movie from './Related_movie';
import Reviews from './Reviews';

export default class Content extends Component {
    
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-8 col-xl-8">
                        {/* <!-- content tabs --> */}
                        <div className="tab-content" id="myTabContent">
                            {this.props.commentsState && <Comments />}
                            {this.props.reviewsState &&  <Reviews />}
                            {this.props.galleryState &&  <Gallery/>}
                        </div>
                        {/* <!-- end content tabs --> */}
                    </div>
                    {/* <!-- sidebar --> */}
                    <Related_movie />
                    {/* <!-- end sidebar --> */}
                </div>
            </div>
        );
    }
}
