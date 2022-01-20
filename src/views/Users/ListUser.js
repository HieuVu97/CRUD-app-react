import React from "react";
import axios from "axios";
import './ListUser.scss';
import { withRouter } from 'react-router-dom';
class ListUser extends React.Component {

    state = {
        listUser: []
    }

    async componentDidMount() {
        let res = await axios.get('https://reqres.in/api/users?page=1')
        this.setState({
            listUser: res && res.data && res.data.data ? res.data.data : []
        })
    }

    handleViewDetail = (user) => {
        this.props.history.push(`/user/${user.id}`)
    }

    render() {
        let { listUser } = this.state
        return (
            <div className="list-user-container">
                <div className="list-user-title">Fetch all list of users </div>
                <div className="list-user-content">
                    {listUser && listUser.length > 0 &&
                        listUser.map((item, index) => {
                            return (
                                <div className="child-user"
                                    key={item.id}
                                >
                                    {index + 1}-{item.first_name + ' ' + item.last_name}
                                    <span className="detail-icon" onClick={() => this.handleViewDetail(item)}> &gt;</span>
                                </div>


                            )
                        })
                    }

                </div>
            </div>
        )
    }
}
export default withRouter(ListUser);