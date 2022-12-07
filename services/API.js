import urlRootNode from "../config";

const API = {
  show   : async (id) => {
    
  },
  index  : async () => {

  },
  create : async () => {
    const reqs = await fetch(urlRootNode + "image_create", {
      method: "POST",
        
    });
    return await reqs.json();
  },
  read : async () => {

  }
} ; export default API;