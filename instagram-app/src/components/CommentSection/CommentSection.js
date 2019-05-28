import React from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';


class CommentSection extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            comments: props.comments,
            newComment:""
        }
    }
    
    // componentDidMount(){
    //     this.setState({comments:this.props.comments}, function() {
    //         console.log(this.state.comments)
    //     })
    // }

    eventHandler = event =>{
        this.setState({newComment:event.target.value})
    }

    addNewComment = event => {
        console.log('CALLED') 
        event.preventDefault();
        this.setState({comments: [...this.state.comments, {username: "testname", text: this.state.newComment}], newComment:""});
        event.target.reset();
    }

    render(){
        return (
            <div>
               
                {this.state.comments.map(comment => {
                   return (
                    <div className = "comment-section-block">
                        <Comment commentObj ={comment}/>
                    </div>
                    )
                })}
                <form onSubmit={this.addNewComment}>
                <input
                    onChange={this.eventHandler}
                    type="text"
                    placeholder="Add a comment..."
                    value={this.state.newComment}
                />
                </form>
            </div>
        );
    }
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.object)
};


export default CommentSection;