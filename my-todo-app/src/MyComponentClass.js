import { Component } from "react";
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import MainNav from "./components/MainNav";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

class MyComponentClass extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todoElem: "",
        };
    }
    shouldComponentUpdate(nextProps, nextState) {
        /**
         * Wird vor einem Update ausgeführt
         * mit dem return von true oder false kann entschieden werden,
         * ob ein Update durchgeführt werden soil oder nicht
         */
        return true;
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("aktuelle props", this.props.name);
        console.log("vorherige props", prevProps.name);

        console.log("aktueller state", this.state.avatar);
        console.log("vorheriger state", prevState.name);

        setTimeout(() => {
            console.log("Call Database on change");
        }, 2000);
    }
    render() {
        return (
            <div>
                <MainNav />
                <Container>
                    <h1>{this.props.propName}Todo-List</h1>
                    <div>
                        <input
                            onChange={this.changeName}
                            value={this.state.name}
                        />
                    </div>
                    <Button className="m-1" onClick={this.logIn}>
                        Create New Task
                    </Button>
                </Container>
            </div>
        );
    }
}
export default MyComponentClass;
