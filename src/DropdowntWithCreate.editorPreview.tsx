import { Component, ReactNode, createElement } from "react";
import { DropdowntWithCreatePreviewProps } from "../typings/DropdowntWithCreateProps";

export class preview extends Component<DropdowntWithCreatePreviewProps> {
    render(): ReactNode {
        return <span>No Preview</span>;
    }
}

export function getPreviewCss(): string {
    return require("./ui/DropdowntWithCreate.css");
}
