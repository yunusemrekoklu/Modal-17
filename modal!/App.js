import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Modal, StyleSheet, Text, View } from 'react-native';

export default function App() {
  let [visible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
                                                /*Buraya | istersek true da yazabiliriz */
      <Button title='Modal' onPress={() => setVisible((prev)=>!prev)} /> 
      <Modal visible={visible} animationType='slide'>
        <View style={styles.modalView}>
          <View style={styles.modal}>
            <Text style={styles.text}>:::HELLO WORLD:::</Text>

            <Button title='CLOSE' onPress={() => setVisible(false)} />

          </View>

        </View>

      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  modalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  modal: {
    width: 200,
    height: 200,
    backgroundColor: "yellow",
    borderRadius: 20,
    borderWidth: 2,
    alignItems:"center",
    justifyContent:"center",

  },
  text: {
    fontWeight: "bold",
    fontSize: 23,
    
  },
});
