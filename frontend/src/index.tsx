import { render } from "solid-js/web";
import { Router } from "@solidjs/router";
import App from "./app/app";
import "./styles.css";
import "./typography.css";

render(() => <Router><App /></Router>, document.querySelector(".root") as Element);