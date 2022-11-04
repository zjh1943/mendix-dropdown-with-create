import { Component, ReactNode, createElement } from "react";
import { HelloWorldSample } from "./components/HelloWorldSample";
import { DropdowntWithCreatePreviewProps } from "../typings/DropdowntWithCreateProps";

export class preview extends Component<DropdowntWithCreatePreviewProps> {
    render(): ReactNode {
        return <HelloWorldSample sampleText={this.props.sampleText} />;
    }
}

export function getPreviewCss(): string {
    return require("./ui/DropdowntWithCreate.css");
}
