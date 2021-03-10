import React from "react";


export class Search extends React.Component {
    state = {
        search: '',
        type: 'all',
    }

    handleKey = (event) => {
        if (event.key === 'Enter') {
            this.props.searchMovies(this.state.search, this.state.type);
        }
    }

    handleRadio = (event) => {
        this.setState(
            () =>
                ({ type: event.target.value })
            ,
            () => {
                this.props.searchMovies(this.state.search, this.state.type);
            }
        );
    }

    render() {
        return (
            <div className="row">
                <div className="input-field col s6">
                    <input
                        placeholder="Movie"
                        type="search"
                        className="validate"
                        value={this.state.search}
                        onChange={(e) => this.setState({ search: e.target.value })}
                        onKeyDown={this.handleKey}
                    />
                    <div className='checkboxes'>
                        <label>
                            <input
                                className="with-gap"
                                name="group1"
                                type="radio"
                                value="all"
                                onChange={this.handleRadio}
                                сhecked={this.state.type === "all"}

                            />
                            <span>All</span>
                        </label>
                        <label>
                            <input
                                className="with-gap"
                                name="group1"
                                type="radio"
                                value="movie"
                                onChange={this.handleRadio}
                                сhecked={this.state.type === "movie"}

                            />
                            <span>Movies Only</span>
                        </label>
                        <label>
                            <input
                                className="with-gap"
                                name="group1"
                                type="radio"
                                value="series"
                                onChange={this.handleRadio}
                                сhecked={this.state.type === 'series'}

                            />
                            <span>Series Only</span>
                        </label>
                    </div>
                    <label className="active" htmlFor="first_name2">You find</label>
                </div>
            </div>
        )
    }

}