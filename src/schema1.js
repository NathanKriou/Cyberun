"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.data = exports.uiSchema = exports.schema = void 0;
exports.schema = {
    type: "object",
    properties: {
        firstName: { type: "string", title: "Nom" },
        lastName: { type: "string", title: "Prénom" },
        age: { type: "integer", title: "Age", minimum: 1 },
        country: { type: "string", title: "Pays" },
        address: { type: "string", title: "Adresse" },
        email: {
            type: "string",
            title: "Email",
            format: "email",
        },
        phoneNumber: {
            type: "string",
            title: "Numéro de téléphone",
            pattern: "^[0-9]{10}$",
        },
    },
};
exports.uiSchema = {
    type: "Categorization",
    elements: [
        {
            type: "Category",
            label: "Identité",
            elements: [
                { type: "Control", scope: "#/properties/firstName" },
                { type: "Control", scope: "#/properties/lastName" },
                { type: "Control", scope: "#/properties/age" },
            ],
        },
        {
            type: "Category",
            label: "Localisation",
            elements: [
                { type: "Control", scope: "#/properties/country" },
                { type: "Control", scope: "#/properties/address" },
            ],
        },
        {
            type: "Category",
            label: "Contact",
            elements: [
                { type: "Control", scope: "#/properties/email" },
                { type: "Control", scope: "#/properties/phoneNumber" },
            ],
        },
    ],
};
exports.data = {
    firstName: "",
    lastName: "",
    age: null,
    country: "",
    address: "",
    email: "",
    phoneNumber: "",
};
