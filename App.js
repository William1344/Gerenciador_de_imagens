import React                            from 'react';
import { StatusBar }                    from 'expo-status-bar';
import { 
  FlatList, Text, TouchableOpacity, 
  View, Modal, Alert, Image
}                                       from 'react-native';
import { PickImgUser, AsyncStor, API }  from './services';
import styles                           from './styles.js';

const cache = { 
  addImg : PickImgUser.PickImgUserCache,
  uptImg : AsyncStor.SalveDataCache,
  getImg : PickImgUser.ReturnImgUserCache,
}

const disk = {
  addImg : PickImgUser.PickImgUserDisk,
  uptImg : AsyncStor.SalveDataDisk,
  getImg : PickImgUser.ReturnImgUserDisk,
}

export default function App() {
  class Img_ClassCache {
    constructor( idx, nome, rota, url, base64 ){
      this.idx    = idx;
      this.nome   = nome;
      this.chave  = "img_" + idx + "_" + nome;
      this.url    = url;
      this.rota   = rota;
      this.imagem = base64;
    }
  };

  const [ modal, setModal ]    =  React.useState(false);
  const [ list, setList ]      =  React.useState([]);      // Lista de objetos Img_Class
  const [ bttTxt, setBttTxt ]  =  React.useState("Cache");
  const [ methods, setMethods] =  React.useState(cache);
  const [ stt, setState ]      =  React.useState(true);

  async function AddImage(){
    const result  = await methods.addImg();
    //console.log("result: ", result)
    if( result !== 0 ){
      const vetSplit  = result.assets[0].uri.split('.');
      const value     = result.assets[0].type + "/" + vetSplit[vetSplit.length - 1];
      const img       = new Img_ClassCache( list.length, "will", value, result.assets[0].uri, result.assets[0].base64 );
      //console.log("img: ", img);
      list.push(img);
      setList(list);
      methods.uptImg(img.chave, img);
      console.log("list: ", list.length);
      setState(!stt);
    } else Alert.alert("Cancelado!");
  }

  function toogleMethods(){
    if( bttTxt === "Cache" ) setBttTxt("Disk"),  setMethods(disk);
    else                     setBttTxt("Cache"), setMethods(cache);
  }

  function CompImg({ item }) {
    return (
      <View style = { styles.cont }>
        <TouchableOpacity style = { styles.containItem }>
          <Image
            style   = { styles.img }
            source  = { methods.getImg(item) }
          />
          <Text style = { styles.font }>Imagem</Text>
        </TouchableOpacity>
      </View>
    );
  }

  function RenderModal(){
    return (
      <Modal
        animationType   = "slide"
        transparent     = { true }
        visible         = { modal }
        onRequestClose  = { () => {
          setModal(!modal);
        }}
      >
        <View style = {styles.modalFull}>
          <View style = { styles.modalContain }>
            <Text style = { styles.modalTitle}>Modal</Text>
            <TouchableOpacity 
              style = {styles.modalBtt}>
              <Text style = {styles.modalTxtBtt}> Atualizar </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style = {styles.modalBtt}
              onPress = {() => {}}
            >
              <Text style = {styles.modalTxtBtt}>Apagar</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style = {styles.modalBtt}>
              <Text style = {styles.modalTxtBtt}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }

  return (
    <View style = { styles.container }>
      <StatusBar style="auto" />
      { RenderModal() }
      <Text style = { styles.title }> Gerenciador de Images </Text>
      <View style = { styles.containeList }>
        <FlatList
          style         = { styles.flatList }
          data          = { list }
          keyExtractor  = { item => item.idx }
          renderItem    = { CompImg }
        />
      </View>
      <View style = { styles.containBtts }>
        <TouchableOpacity 
          style   = { styles.containBtt }
          onPress = { () => {
            AddImage();
          }}
        >
          <Text style = { styles.text }> 
            Adicionar  
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style   = { styles.containBtt }
          onPress = { () => {
            toogleMethods();
          }}
        >
          <Text style = { styles.text }>{bttTxt}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
