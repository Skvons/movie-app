import React from 'react';
import { Movies } from '../components/Movies'
import { Preloader } from '../components/Preloader'
import { Search } from '../components/Search'

const API_KEY = process.env.REACT_APP_API_KEY;

console.log(API_KEY)

class Main extends React.Component {


    state = {
        movies: [],
        loading: true,
    }

    searchMovies = (name, type = 'all') => {
        this.setState({ loading: false })
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${name}${type !== 'all' ? `&type=${type}` : ''}`)
            .then((response) => response.json())
            .then((data) => this.setState({ movies: data.Search }));
    }



    componentDidMount() {
        console.log(process.env)
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=taxi`)
            .then((response) => response.json())
            .then((data) => this.setState({ movies: data.Search, loading: false }));
    }

    render() {
        return (
            <main className='content container' >
                <Search searchMovies={this.searchMovies} />
                {
                    this.state.loading ?
                        <Preloader></Preloader>
                        :
                        <Movies movies={this.state.movies} />
                }

            </main>
        )

    }

}

export { Main }