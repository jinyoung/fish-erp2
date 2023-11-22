import accountYaml from "js-yaml-loader!../api/account-openapi.yaml";
import itemYaml from "js-yaml-loader!../api/item-openapi.yaml";
import purchaseYaml from "js-yaml-loader!../api/purchase-openapi.yaml";

const YAML = require('json2yaml');

let apiSpec = "";

let accountSpec = YAML.stringify(accountYaml);
apiSpec += accountSpec;

let itemSpec = YAML.stringify(itemYaml);
apiSpec += itemSpec;

let purchaseSpec = YAML.stringify(purchaseYaml);
apiSpec += purchaseSpec;


export default apiSpec;