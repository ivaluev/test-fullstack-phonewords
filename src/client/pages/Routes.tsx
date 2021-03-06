import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import AppBar from "../layout/AppBar"
import Home from "./Home"
import NotFound from "./404"

export default function App() {
		return (
			<Router>
				<AppBar />
				<Switch>
					<Route path="/" exact>
						<Home />
					</Route>
					<Route>
						<NotFound />
					</Route>
				</Switch>
			</Router>
		);
}

