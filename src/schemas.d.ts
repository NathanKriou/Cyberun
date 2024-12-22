export declare const schema1: {
    type: string;
    properties: {
        personalData: {
            type: string;
            properties: {
                firstName: {
                    type: string;
                };
                lastName: {
                    type: string;
                };
                age: {
                    type: string;
                };
            };
        };
        address: {
            type: string;
            properties: {
                street: {
                    type: string;
                };
                city: {
                    type: string;
                };
                zip: {
                    type: string;
                };
            };
        };
        jobInfo: {
            type: string;
            properties: {
                jobTitle: {
                    type: string;
                };
                company: {
                    type: string;
                };
                years: {
                    type: string;
                };
            };
        };
    };
};
export declare const uiSchema1: {
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
export declare const data1: {
    personalData: {
        firstName: string;
        lastName: string;
        age: null;
    };
    address: {
        street: string;
        city: string;
        zip: string;
    };
    jobInfo: {
        jobTitle: string;
        company: string;
        years: null;
    };
};
