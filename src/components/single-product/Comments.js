import React, { Component } from 'react';

export default class Comments extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         body: "" 
      }
    }
    addCommentHandler=(e)=>{
        e.preventDefault()
        this.props.addComment(this.state.body)
        this.setState({
            body:""
        })

    }
  render() {
  
    return (
        <div className="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="1-tab">
        <div className="row">
            {/* <!-- comments --> */}
            <div className="col-12">
                <div className="comments">
                    { this.props.comments && this.props.comments.map(comment=> ( <ul key={Math.random()} className="comments__list">
                        <li id={comment.id} className="comments__item">
                            <div className="comments__autor">
                                <img className="comments__avatar" src="img/user.svg" alt="" />
                                <span className="comments__name">John Doe</span>
                                <span className="comments__time">30.08.2018, 17:53</span>
                            </div>
                            <p className="comments__text">{comment?.body}</p>
                            <div className="comments__actions">
                                <div className="comments__rate">
                                    <button type="button"><i className="icon ion-md-thumbs-up"></i>12</button>

                                    <button type="button">7<i className="icon ion-md-thumbs-down"></i></button>
                                </div>

                                <button type="button"><i className="icon ion-ios-share-alt"></i>Reply</button>
                                <button type="button"><i className="icon ion-ios-quote"></i>Quote</button>
                            </div>
                        </li>

                    </ul>))}
                    
                    <form  onSubmit={this.addCommentHandler} className="form">
                        <textarea onChange={(e) => this.setState({body: e.target.value})} id="text" value={this.state.body} name="body" className="form__textarea" placeholder="Add comment"></textarea>
                        <button  className="form__btn">Send</button>
                    </form>
                </div>
            </div>
            {/* <!-- end comments --> */}
        </div>
    </div>
    );
  }
}
