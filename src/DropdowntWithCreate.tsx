import { Component, ReactNode, createElement } from "react";
import { HelloWorldSample } from "./components/HelloWorldSample";

import { DropdowntWithCreateContainerProps } from "../typings/DropdowntWithCreateProps";

import "./ui/DropdowntWithCreate.css";

export class DropdowntWithCreate extends Component<DropdowntWithCreateContainerProps> {
    render(): ReactNode {
        return <HelloWorldSample sampleText={this.props.sampleText ? this.props.sampleText : "World"} />;
    }
}
