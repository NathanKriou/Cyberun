import React from "react";
import { JsonSchema7, Categorization } from "@jsonforms/core";
interface CategorizationRendererProps {
    schema: JsonSchema7;
    uiSchema: Categorization;
    data: any;
    onChange: ({ data }: {
        data: any;
    }) => void;
}
declare const CategorizationRenderer: React.FC<CategorizationRendererProps>;
export default CategorizationRenderer;
