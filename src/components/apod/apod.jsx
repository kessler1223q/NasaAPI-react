import React, { Component } from 'react';
import axios from 'axios';

import "./apod.css"
import Navbar from '../navbar/navbar'
import ReactLoader from '../loader/loader';

export default class APOD extends Component {


    state = {
        data: [],
        dataExists: false
    }
    componentDidMount() {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=OpY1aZ3IX0QGbIBFcbckdGLnpdjh8Ak5lIqG4EpP')
            .then(response => {
                this.setState({ data: response.data })
                this.setState({ dataExists: true })

                // console.log(this.state.data)

            })

    }

    render() {
        return (
            <div>
                <Navbar header="APOD"></Navbar>
                <ReactLoader loaded={this.state.dataExists}></ReactLoader>
                <div className="container my-4">

                    <div className="row">
                        <div class="col-12 col-lg-6">
                            <h4 className="karla">{this.state.data.title}</h4>
                        </div>
                        <div className="col-12 col-lg-6">
                            <h6 className="text-secondary font-weight-light text-lg-right">Date : {this.state.data.date}</h6>
                        </div>

                        <div className="col-12 col-lg-5 my-2">
                            <img alt="Astronomy Photo of the Day" className="img-fluid" src={this.state.data.url}></img>
                            <div className="d-flex mt-2 light-grey py-2">
                                <h6 className="mx-2 mt-1"><span className="badge badge-info p-2"><a href={this.state.data.url} class="text-decoration-none text-light" target="_blank">Standard Image</a></span></h6>
                                <h6 className="mx-2 mt-1"><span className="badge badge-info  p-2"><a href={this.state.data.hdurl} class="text-decoration-none text-light" target="_blank">HD Image</a></span></h6>

                            </div>
                        </div>
                        <div className="col-12 col-lg-7 my-2">
                            <p className="text-justify text-wrap standard-font-grey">{this.state.data.explanation}</p>
                            <small className="karla text-secondary">Copyright: {this.state.data.copyright} </small>

                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
