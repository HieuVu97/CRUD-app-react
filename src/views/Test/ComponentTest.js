import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class ComponentTest extends React.Component {
    state = {

        arrJobs: [
            { id: 'job1', title: 'Developer', salary: '2000' },
            { id: 'job2', title: 'Tester', salary: '1000' },
            { id: 'job3', title: 'PM', salary: '3000' }

        ],
        age: '',
        address: ''
    }

    addNewJob = (job) => {
        console.log('check', job)
        // let currentJobs = this.state.arrJobs
        // currentJobs.push(job)

        this.setState({
            // arrJobs: currentJobs
            arrJobs: [...this.state.arrJobs, job]
        })
    }

    deleteJob = (job) => {
        let currentJobs = this.state.arrJobs
        currentJobs = currentJobs.filter(item => item.id !== job.id)
        this.setState({
            arrJobs: currentJobs
        })
    }

    componentDidMount() {
        console.log('>>> run component did mount')
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('>>> run did update: ', 'prev state: ', prevState, 'current state', this.state)
    }

    render() {
        console.log('>>> call render: ', this.state)
        return (
            <>
                <AddComponent
                    addNewJob={this.addNewJob}
                />

                <ChildComponent
                    arrJobs={this.state.arrJobs}
                    deleteJob={this.deleteJob}
                />

            </>

        )
    }
}
export default ComponentTest;