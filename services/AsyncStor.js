import AsyncStorage from '@react-native-async-storage/async-storage';

const AsyncStor = {
  GetData : async (dado, chave) => {
    try {
      const jsBanco = await AsyncStorage.getItem(str);
      if (jsBanco) {
        let banco = JSON.parse(jsBanco);
        return { banco: banco, status: true };
      } else return { banco: null, status: false };
    } catch (e) {
      console.log("Erro", e);
      return false;
    }
  },
  SalveDataCache : async (chave, dado) => {
    try {
      await AsyncStorage.setItem(chave, JSON.stringify(dado));
      return true;
    } catch (e) {
      console.log("Erro", e);
      return false;
    }
  },
  SalveDataDisk : async (banco, chave) => {

  }
}; export default AsyncStor;