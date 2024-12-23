"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@jsonforms/react");
const material_renderers_1 = require("@jsonforms/material-renderers");
const CategorizationRenderer = ({ schema, uiSchema, data, onChange }) => {
    return (<react_2.JsonForms schema={schema} uischema={uiSchema} data={data} renderers={material_renderers_1.materialRenderers} cells={material_renderers_1.materialCells} onChange={onChange}/>);
};
exports.default = CategorizationRenderer;
