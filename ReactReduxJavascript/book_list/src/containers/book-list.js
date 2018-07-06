import React, {Component} from 'react';
import  {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

 class BookList extends Component {
    renderList() {
        return this.props.books.map((book)=> {
            return(
                <li
                key={book.title}
                onClick={()=>this.props.selectBook(book)}
                className="list-group-item" >
                {book.title}
                </li>
                );
        });
    }

    render() {
        return (
                <ul className="list-group col-sm-4">
                    {this.renderList()}
                </ul>
               );
    }


}


function mapStateToProps(state){
    // Whatever gets returned will show up as props inside the book list
    // Whenver the application state changes the component should render
    // Whenver the application state changes
    return ({
        books:state.books
    });
}

// Anything returned from this function ends up as props of the container in reality whatever is passed as an argument to this function
//
function mapDispatchToProps(dispatch){
    // Whenver selectBook is called result should be passed to all of reducers.


    return bindActionCreators({selectBook:selectBook},dispatch);
}

// Promote Booklist from a component to a container it need to know about this new dispatch method selectBook Make it available
// // as a prop.
export default connect(mapStateToProps,mapDispatchToProps)(BookList);
