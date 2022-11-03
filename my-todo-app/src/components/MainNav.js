import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";

function BasicExample() {
    return (
        <Nav
            activeKey="/home"
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
            <Nav.Item>
                <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default BasicExample;
