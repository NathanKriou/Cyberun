export declare const schema2: {
    type: string;
    properties: {
        jobTitle: {
            type: string;
            title: string;
        };
        company: {
            type: string;
            title: string;
        };
        yearsExperience: {
            type: string;
            title: string;
            minimum: number;
        };
        diploma: {
            type: string;
            title: string;
        };
        institution: {
            type: string;
            title: string;
        };
    };
};
export declare const uiSchema2: {
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
export declare const data2: {
    jobTitle: string;
    company: string;
    yearsExperience: null;
    diploma: string;
    institution: string;
};
