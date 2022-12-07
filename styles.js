import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container     : {
    justifyContent      : "center",
    alignItems          : "center",
    height              :   '100%',
    width               :   '100%',
    padding             :   15,
    backgroundColor     :   'black',
  },  
  title         : { 
    height              :   '10%',
    width               :   'auto',
    textAlign           :   'center',
    color               :   'white',
    fontWeight          :   'bold',
    fontSize            :   22,
  },  
  containeList  : { 
    height              :   '80%',
    width               :   '98%',
  },  
    flatList    : { 
      height            :   '100%',
      width             :   '100%',
    },
      // styles dos componentes de cada item da lista
      cont      : {
        height          :   150,
        width           :   '100%',
        justifyContent  :   'center',
        alignItems      :   'center',
        margin          :   10,
        padding         :   5,
      },
      containItem : {
        height          :   "100%",
        width           :   150,
        justifyContent  :   'center',
        alignItems      :   'center'
      },
        img       : {
          height        :   '90%',
          width         :   '90%',
          borderRadius  :   45,
          borderColor   :   'white',
          borderWidth   :   2,
        },
        font      : {
          height        :   'auto',
          width         :   'auto',
          textAlign     :   'center',
          color         :   'white',
          fontWeight    :   'bold',
          fontSize      :   18,
        },
  containBtts     : {
    height              :   '10%',
    width               :   '98%',
    flexDirection       :   'row',
    justifyContent      :   'space-between',
    alignItems          :   'center',
  },
    containBtt    : {
      justifyContent    :   'center',
      alignItems        :   'center',
      height            :   '95%',
      width             :   '40%',
      backgroundColor   :   'blue',
      borderColor       :   'white',
      borderWidth       :   1.5,
      borderRadius      :   60,
    },  
      text        : { 
        height          :   '10%',
        width           :   'auto',
        textAlign       :   'center',
        color           :   'white',
        fontWeight      :   'bold'
      },  
      text        : { 
        textAlign       :   'center',
        color           :   'white',
        height          :   'auto',
        width           :   'auto',
        fontWeight      :   'bold',
        fontSize        :   18
      },
  // Modal styles
  modalFull       : {
    height              :   '100%',
    width               :   '100%',
    justifyContent      :   'center',
    alignItems          :   'center'
  },
    modalContain  : {
      justifyContent    :   'space-around',
      alignItems        :   'center',
      height            :   '60%',
      width             :   '95%',
      backgroundColor   :  'black',
      borderColor       :   'white',
      borderWidth       :   2,
      borderRadius      :   25
    },
      modalTitle  : {
        height          :   '10%',
        width           :   'auto',
        textAlign       :   'center',
        color           :   'white',
        fontWeight      :   'bold',
        fontSize        :   22
      },
      modalBtt    : {
        height          :   '15%',
        width           :   '40%',
        justifyContent  : 'center',
        alignItems      :   'center',
        backgroundColor : 'blue',
        borderColor     :   'white',
        borderWidth     :   1.5,
        borderRadius    :   60
      },
        modalTxtBtt  : {
          height        :   'auto',
          width         :   'auto',
          fontSize      :   18,
          textAlign     :   'center',
          color         :   'white',
          fontWeight    :   'bold'
        },
    
}); // end styles


export default styles;