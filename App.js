import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [pantalla, setPantalla] = useState('');

  const agregar = (valor) => setPantalla(pantalla + valor);
  const limpiar = () => setPantalla('');
  const calcular = () => {
    try {
      setPantalla(eval(pantalla).toString());
    } catch {
      setPantalla('Error');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.pantalla}>{pantalla}</Text>

      <View style={styles.row}>
        <Btn texto="7" onPress={agregar} />
        <Btn texto="8" onPress={agregar} />
        <Btn texto="9" onPress={agregar} />
        <Btn texto="/" onPress={agregar} />
      </View>

      <View style={styles.row}>
        <Btn texto="4" onPress={agregar} />
        <Btn texto="5" onPress={agregar} />
        <Btn texto="6" onPress={agregar} />
        <Btn texto="*" onPress={agregar} />
      </View>

      <View style={styles.row}>
        <Btn texto="1" onPress={agregar} />
        <Btn texto="2" onPress={agregar} />
        <Btn texto="3" onPress={agregar} />
        <Btn texto="-" onPress={agregar} />
      </View>

      <View style={styles.row}>
        <Btn texto="0" onPress={agregar} />
        <Btn texto="C" onPress={limpiar} />
        <Btn texto="=" onPress={calcular} />
        <Btn texto="+" onPress={agregar} />
      </View>
    </View>
  );
}

function Btn({ texto, onPress }) {
  return (
    <TouchableOpacity onPress={() => onPress(texto)} style={styles.btn}>
      <Text style={styles.btnText}>{texto}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    justifyContent: 'center',
    padding: 20,
  },
  pantalla: {
    backgroundColor: '#fff',
    height: 60,
    marginBottom: 10,
    fontSize: 24,
    textAlign: 'right',
    padding: 10,
    borderRadius: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btn: {
    backgroundColor: '#555',
    padding: 20,
    margin: 5,
    borderRadius: 10,
  },
  btnText: {
    color: '#fff',
    fontSize: 18,
  },
});