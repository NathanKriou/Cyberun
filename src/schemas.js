"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.data1 = exports.uiSchema1 = exports.schema1 = void 0;
// schema1.ts
exports.schema1 = {
    type: "object",
    properties: {
        personalData: {
            type: "object",
            properties: {
                firstName: { type: "string" },
                lastName: { type: "string" },
                age: { type: "integer" }
            }
        },
        address: {
            type: "object",
            properties: {
                street: { type: "string" },
                city: { type: "string" },
                zip: { type: "string" }
            }
        },
        jobInfo: {
            type: "object",
            properties: {
                jobTitle: { type: "string" },
                company: { type: "string" },
                years: { type: "integer" }
            }
        }
    }
};
exports.uiSchema1 = {
    type: "Categorization",
    elements: [
        {
            type: "Category",
            label: "Donnée perso",
            elements: [
                { type: "Control", scope: "#/properties/personalData/properties/firstName" },
                { type: "Control", scope: "#/properties/personalData/properties/lastName" },
                { type: "Control", scope: "#/properties/personalData/properties/age" }
            ]
        },
        {
            type: "Category",
            label: "Adresse",
            elements: [
                { type: "Control", scope: "#/properties/address/properties/street" },
                { type: "Control", scope: "#/properties/address/properties/city" },
                { type: "Control", scope: "#/properties/address/properties/zip" }
            ]
        },
        {
            type: "Category",
            label: "Job Info",
            elements: [
                { type: "Control", scope: "#/properties/jobInfo/properties/jobTitle" },
                { type: "Control", scope: "#/properties/jobInfo/properties/company" },
                { type: "Control", scope: "#/properties/jobInfo/properties/years" }
            ]
        }
    ]
};
exports.data1 = {
    personalData: { firstName: "", lastName: "", age: null },
    address: { street: "", city: "", zip: "" },
    jobInfo: { jobTitle: "", company: "", years: null }
};
