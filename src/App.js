import React, {Component} from "react";
import Header from "./component/header/Header";
import './app.scss'
import HeadLine from "./component/headline/HeadLine";
import ShareButton from "./component/button/Button";
import ListItem from "./component/listItem/ListItem";
import {connect} from 'react-redux'
import {fetchPosts} from './action'

const tempArr = [{
    fName: 'Joe',
    lName: 'Bloggs',
    email: 'tmtuanyd@gmail.com',
    age: 24,
    onlineStatus: true
}]

class App extends Component{

    constructor(props) {
        super(props)
    }

    fetch=()=>{
        this.props.fetchPosts();
    }

    render() {
        const {posts} = this.props
        const configButton = {
            buttonText:'Get posts',
            emitEvent: this.fetch
        }
        return (
            <div className="App" data-test={'appComponent'}>
                <Header/>
                <section className={"main"}>
                    <HeadLine header={"Post"} desc={"Click the button to render posts!"} tempArr={tempArr}/>
                    <ShareButton {...configButton}/>
                    {posts.length > 0 &&
                        <div>
                            {posts.map((item, index)=>{
                                const {title, body} = item;
                                return <ListItem
                                    title={title}
                                    desc={body}
                                />
                            })}
                        </div>
                    }
                </section>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps, {fetchPosts}) (App);
