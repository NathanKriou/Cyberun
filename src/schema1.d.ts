export declare const schema: {
    type: string;
    properties: {
        firstName: {
            type: string;
            title: string;
        };
        lastName: {
            type: string;
            title: string;
        };
        age: {
            type: string;
            title: string;
            minimum: number;
        };
        country: {
            type: string;
            title: string;
        };
        address: {
            type: string;
            title: string;
        };
        email: {
            type: string;
            title: string;
            format: string;
        };
        phoneNumber: {
            type: string;
            title: string;
            pattern: string;
        };
    };
};
export declare const uiSchema: {
    type: string;
    elements: {
        type: string;
        label: string;
        elements: {
            type: string;
            scope: string;
        }[];
    }[];
};
export declare const data: {
    firstName: string;
    lastName: string;
    age: null;
    country: string;
    address: string;
    email: string;
    phoneNumber: string;
};
