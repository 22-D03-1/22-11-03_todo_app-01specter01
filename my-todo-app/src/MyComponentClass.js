import { Component } from "react";
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import MainNav from "./components/MainNav";

class MyComponentClass extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todoElem: "",
        };
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
        return <MainNav />;
    }
}
export default MyComponentClass;
