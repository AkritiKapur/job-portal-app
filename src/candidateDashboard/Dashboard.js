import React, { Component } from 'react';
import { connect } from 'react-redux';
import Jobs from './Jobs'
import ApplicationFilter from './ApplicationFilter';

class Dashboard extends Component {
    // componentDidMount() {
    //     this.fetchData();
    // }


    // fetchData() {
    //     const url = "https://randomuser.me/api/?results=50&nat=us,dk,fr,gb";
    //     return fetch(url)
    //         .then(response => response.json())
    //         .then(parsedJSON => this.setState({ jobs: parsedJSON.results }))
    //         .catch(error => console.log(error));
    // }

    render() {
        const jobs = [
            {"id":"110101", "title": "Software Engineer I", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
            {"id":"102342", "title": "Data Scientist Engineer", "description": "Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Congue mauris rhoncus aenean vel elit scelerisque. Ante metus dictum at tempor commodo ullamcorper a lacus vestibulum. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Blandit turpis cursus in hac habitasse platea dictumst quisque sagittis. Quam adipiscing vitae proin sagittis nisl rhoncus. Iaculis eu non diam phasellus vestibulum lorem sed. Blandit cursus risus at ultrices mi tempus imperdiet. Et malesuada fames ac turpis egestas integer. In fermentum posuere urna nec. Tristique senectus et netus et malesuada fames ac. Cursus eget nunc scelerisque viverra mauris. Viverra orci sagittis eu volutpat odio facilisis mauris. Proin nibh nisl condimentum id venenatis a condimentum. Pretium quam vulputate dignissim suspendisse in est ante in. Ullamcorper sit amet risus nullam eget felis eget nunc. Et ultrices neque ornare aenean."},
            {"id": "109832", "title": "Project Manager", "description": "Velit aliquet sagittis id consectetur purus. Vivamus at augue eget arcu dictum varius duis. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Condimentum mattis pellentesque id nibh tortor id aliquet lectus. Adipiscing bibendum est ultricies integer quis auctor elit sed vulputate. Non quam lacus suspendisse faucibus. Donec pretium vulputate sapien nec sagittis aliquam malesuada. A diam maecenas sed enim. Urna et pharetra pharetra massa massa ultricies mi quis hendrerit. Condimentum id venenatis a condimentum. Nunc id cursus metus aliquam eleifend mi in nulla posuere."},
            {"id": "103241", "title": "Software Engineer", "description": "Ac tortor vitae purus faucibus. Convallis posuere morbi leo urna molestie at. Purus viverra accumsan in nisl nisi scelerisque. Tincidunt arcu non sodales neque sodales ut etiam. Consequat nisl vel pretium lectus quam id leo in. Fusce ut placerat orci nulla pellentesque dignissim enim sit amet. Tellus at urna condimentum mattis pellentesque id nibh tortor. Arcu felis bibendum ut tristique et egestas. At risus viverra adipiscing at in tellus integer. Non blandit massa enim nec dui nunc mattis enim. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Sed blandit libero volutpat sed cras. Risus nullam eget felis eget nunc lobortis mattis. Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id. Etiam dignissim diam quis enim lobortis scelerisque fermentum. Sed risus pretium quam vulputate dignissim. Elementum nisi quis eleifend quam. Arcu dictum varius duis at consectetur lorem donec. In pellentesque massa placerat duis ultricies lacus sed turpis tincidunt."},
        ];

        return (
            <div className="candidate-dashboard">
                {/* <ApplicationFilter /> */}
                <Jobs jobs={jobs} />
            </div>
        );
    }
}

export default connect()(Dashboard);