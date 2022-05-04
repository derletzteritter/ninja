import React from 'react'
import {createRoot} from "react-dom/client";
import {App} from "./App";
import {NinjaProvider} from "../src";

const root = createRoot(document.getElementById("root")!);
root.render(
	<NinjaProvider>
		<App/>
	</NinjaProvider>
)