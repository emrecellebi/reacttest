import {Container} from "reactstrap";

import Navi from "../navi/Navi";
import Dashboard from "./Dashboard";

function App() {
	return (
		<Container>
			<Navi />
			<Dashboard />
			Melek Şentürk
		</Container>
	);
}

export default App;