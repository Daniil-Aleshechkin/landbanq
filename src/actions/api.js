import axios from "axios";

const baseURL = "";

export default {
    ownedProperty(url = baseURL + "property/") {
        return {
            fetchAll: () => axios.get(url),
            update: (id, updatedProperty) =>
                axios.put(url + id, updatedProperty),
        };
    },
    wallet(url = baseURL + "wallet/") {
        return {
            fetch: () => axios.get(url),
        };
    },
};
