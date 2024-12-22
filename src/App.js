"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const antd_1 = require("antd");
const schema1_1 = require("./schema1");
const schema2_1 = require("./schema2");
const CategorizationRenderer_1 = __importDefault(require("./components/CategorizationRenderer"));
require("./App.css");
const { Header, Content } = antd_1.Layout;
const App = () => {
    const [visible, setVisible] = (0, react_1.useState)(false);
    const [selectedCategory, setSelectedCategory] = (0, react_1.useState)(null);
    const [data, setData] = (0, react_1.useState)(schema1_1.data);
    const [data2, setData2] = (0, react_1.useState)(schema2_1.data2);
    const openDrawer = () => setVisible(true);
    const closeDrawer = () => setVisible(false);
    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        closeDrawer();
    };
    const handleChange = ({ data }) => {
        if (selectedCategory && ["Identité", "Localisation", "Contact"].includes(selectedCategory)) {
            setData(data);
        }
        else {
            setData2(data);
        }
    };
    const validateForm = (formData, formSchema) => {
        for (const key in formSchema.properties) {
            if (!formData[key]) {
                antd_1.message.error(`Le champ ${formSchema.properties[key].title} est requis`);
                return false;
            }
            if (formSchema.properties[key].pattern) {
                const regex = new RegExp(formSchema.properties[key].pattern);
                if (!regex.test(formData[key])) {
                    antd_1.message.error(`Le champ ${formSchema.properties[key].title} n'est pas au bon format`);
                    return false;
                }
            }
            if (formSchema.properties[key].format === "email" && !/\S+@\S+\.\S+/.test(formData[key])) {
                antd_1.message.error(`Le champ ${formSchema.properties[key].title} n'est pas au bon format`);
                return false;
            }
        }
        return true;
    };
    const handleSubmit = () => {
        if (selectedCategory && ["Identité", "Localisation", "Contact"].includes(selectedCategory)) {
            if (validateForm(data, schema1_1.schema)) {
                console.log("Formulaire soumis :", data);
                antd_1.message.success("Formulaire soumis avec succès !");
            }
        }
        else {
            if (validateForm(data2, schema2_1.schema2)) {
                console.log("Formulaire soumis :", data2);
                antd_1.message.success("Formulaire soumis avec succès !");
            }
        }
    };
    const renderForm = () => {
        if (!selectedCategory) {
            return <div>Veuillez sélectionner une catégorie dans l'onglet 'Mon compte'</div>;
        }
        let selectedUiSchema;
        let selectedData;
        let selectedSchema;
        if (["Identité", "Localisation", "Contact"].includes(selectedCategory)) {
            selectedUiSchema = {
                type: "Categorization",
                label: selectedCategory,
                elements: schema1_1.uiSchema.elements.filter((element) => element.label === selectedCategory)
            };
            selectedData = data;
            selectedSchema = schema1_1.schema;
        }
        else {
            selectedUiSchema = {
                type: "Categorization",
                label: selectedCategory,
                elements: schema2_1.uiSchema2.elements.filter((element) => element.label === selectedCategory)
            };
            selectedData = data2;
            selectedSchema = schema2_1.schema2;
        }
        return (<div className="form-container">
        <CategorizationRenderer_1.default schema={selectedSchema} uiSchema={selectedUiSchema} data={selectedData} onChange={handleChange}/>
        <antd_1.Button type="primary" onClick={handleSubmit} style={{ marginTop: 20 }}>
          Soumettre
        </antd_1.Button>
      </div>);
    };
    return (<antd_1.Layout style={{ minHeight: "100vh" }}>
      <antd_1.Button type="primary" onClick={openDrawer} className="drawer-button">
        Mon Compte
      </antd_1.Button>
      <antd_1.Layout className="main-layout" style={{ marginLeft: 200 }}>
        <Header className="main-header"/>
        <Content className="main-content">
          {renderForm()}
        </Content>
      </antd_1.Layout>
      <antd_1.Drawer title="Sélectionnez une catégorie" placement="left" onClose={closeDrawer} visible={visible} width={250}>
        <antd_1.Menu mode="inline" onClick={({ key }) => handleCategoryClick(key)} defaultOpenKeys={['set1', 'set2']}>
          <antd_1.Menu.SubMenu key="set1" title="Informations">
            <antd_1.Menu.Item key="Identité">Identité</antd_1.Menu.Item>
            <antd_1.Menu.Item key="Localisation">Localisation</antd_1.Menu.Item>
            <antd_1.Menu.Item key="Contact">Contact</antd_1.Menu.Item>
          </antd_1.Menu.SubMenu>
          <antd_1.Menu.SubMenu key="set2" title="Supplémentaire">
            <antd_1.Menu.Item key="Professionnel">Professionnel</antd_1.Menu.Item>
            <antd_1.Menu.Item key="Diplôme">Diplôme</antd_1.Menu.Item>
          </antd_1.Menu.SubMenu>
        </antd_1.Menu>
      </antd_1.Drawer>
    </antd_1.Layout>);
};
exports.default = App;
