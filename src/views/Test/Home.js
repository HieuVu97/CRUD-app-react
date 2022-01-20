import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC/Color";
import logo from "../../assets/image/logo.png"
import { connect } from 'react-redux'
import './Home.scss'

class Home extends React.Component {

    // componentDidMount() {
    //     setTimeout(() => {
    //         this.props.history.push('/todo')
    //     }, 3000)
    // }

    handleOnDel = (user) => {
        console.log('>>>check uers delete: ', user)
        this.props.deleteUserRedux(user);
    }

    handleOnAdd = () => {
        this.props.addUserRedux();
    }

    render() {
        console.log('check props', this.props);
        let listUsers = this.props.dataRedux
        return (
            <>

                <div><img style={{ height: 200 }} src={logo}></img></div>
                <div>
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {index + 1} - {item.name}&nbsp;
                                    <span style={{ color: "red", cursor: 'pointer' }} onClick={() => this.handleOnDel(item)}>X</span>&nbsp;
                                </div>
                            )
                        })
                    }
                    <button onClick={() => this.handleOnAdd()}>Add new</button>
                </div>
            </>

        )
    }
}
const mapStateToProps = (state) => {
    return {
        //dataRedux: defined
        dataRedux: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({ type: 'DELETE_USER', payload: userDelete }),
        addUserRedux: () => dispatch({ type: 'CREATE_USER' }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));

// export default withRouter(Home);