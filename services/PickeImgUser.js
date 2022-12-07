import * as ImagePicker from  'expo-image-picker';

const PickImgUser = {
  // Salva a imagem no cache
  PickImgUserCache  : async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes      :   ImagePicker.MediaTypeOptions.All,
      aspect          :   [4, 3],
      allowsEditing   :   true,
      quality         :   0.5,
      base64          :   true
    });
    if (!result.canceled)  return result;
    else                   return 0;
  },
  // Salva a imagem no disco
  PickImgUserDisk   : async () => {
    console.log("Vtnc");
  },
  // Retorna a imagem do cache
  ReturnImgUserCache: (item) => {
    return {uri:`data:${item.rota};base64,${item.imagem}`}
  },
  // Retorna a imagem do disco
  ReturnImgUserDisk : (idx, nome) => {},
}; export default PickImgUser;

