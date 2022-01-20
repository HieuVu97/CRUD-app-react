import React from "react";
class ChildComponent extends React.Component {
    state = {
        showJobs: false,
    }

    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    handleOnClickDel = (job) => {
        console.log('job need be deleted:', job)
        this.props.deleteJob(job)
    }
    render() {
        // let name = this.props.name
        // let age = this .props.age
        // Use following syntax to shorten (only when key and var has same name)
        let { name, age, arrJobs } = this.props
        let { showJobs } = this.state
        return (
            <>
                {showJobs === false
                    ?
                    <div>
                        <button onClick={() => this.handleShowHide()}>Show</button>
                    </div>
                    :
                    <>
                        <div className="job-list">
                            {
                                arrJobs.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary} <span onClick={() => this.handleOnClickDel(item)}>X</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <button onClick={() => this.handleShowHide()} >Hide</button>
                        </div>
                    </>

                }



            </>

        )
    }
}

// const ChildComponent = (props) => {
//     let { name, age, arrJobs } = props
//     return (
//         <>
//             <div>ChildComponent name, {props.name} - {props.age}</div>
//             <div className="job-list">
//                 {
//                     arrJobs.map((item, index) => {
//                         return (
//                             <div key={item.id}>
//                                 {item.title} - {item.salary}
//                             </div>
//                         )
//                     })
//                 }
//             </div>


//         </>
//     )
// }
export default ChildComponent;