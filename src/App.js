import React, {Component} from 'react';
import './App.css';
import Joke from "./components/Joke";
import Button from "./components/Button";

class App extends Component {

    state = {
        jokes: [],
        urls: ['https://api.chucknorris.io/jokes/random', 'https://api.chucknorris.io/jokes/random', 'https://api.chucknorris.io/jokes/random', 'https://api.chucknorris.io/jokes/random', 'https://api.chucknorris.io/jokes/random'],
    };

    loadData = () => {
        Promise.all(this.state.urls.map(url =>
            fetch(url).then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Joke wrong with request');
            }))).then(posts => {
            posts.map((post) => {
                let copy = this.state.jokes;
                copy.push(post.value);
                this.setState({jokes: copy});
                console.log(post.value);
                return post;
            });

        }).catch(error => {
            console.error(error);
        })
    };

    componentDidMount() {
        this.loadData();
    }

    newJokes() {
        this.loadData();
    }

    render() {
        return (
            <div className="App">
                {this.state.jokes.map((item, key) => {
                    return <Joke joke={item} key={key}/>
                })}
                <Button onClick={this.newJokes.bind(this)}/>
            </div>
        );
    }
}

export default App;
