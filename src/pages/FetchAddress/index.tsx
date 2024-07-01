import React, { useState } from "react";
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Alert} from "react-native";
import Api from './services/findAddressAPI'

export default function FetchAddress() {

  const [cep, setCep] = useState("")
  const [logradouro, setLogradouro] = useState("")
  const [bairro, setBairro] = useState("")
  const [localidade, setLocalidade] = useState("")
  const [uf, setUf] = useState("")

  async function fechCep() {
    if (cep == "") {
      Alert.alert("Cep inválido")
      setCep("")
    }

    try {
      const response = await Api.get(`/${cep}/json/`)
      setLogradouro(response.data.logradouro)
      setBairro(response.data.bairro)
      setLocalidade(response.data.localidade)
      setUf(response.data.uf)
    } catch (error) {
      console.log("ERROR" + error)
    }

  }

  return (
    <View style={ styles.container }>

      <View style={styles.containerCep}>

        <TextInput 
          style={{
            borderColor: "black",
            borderWidth: 2,
            fontSize: 18,
            width: 200,
            marginTop: 30,
            marginEnd: 20,
            borderRadius: 10,
            padding: 15,
          }}
          value={cep}
          onChangeText={(text) => setCep(text)}
          placeholder="Cep"
        />
        <TouchableOpacity style={styles.button} onPress={fechCep}>
          <Text style={styles.textButton}>Buscar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.containerAddress}>

        <TextInput 
          style={styles.box}
          value={logradouro}
          onChangeText={(text) => setLogradouro(text)}
          placeholder="Rua"
        />

        <TextInput 
            style={styles.box}
            value={bairro}
            onChangeText={(text) => setBairro(text)}
            placeholder="Bairro"
        />

        <TextInput 
              style={styles.box}
              value={localidade}
              onChangeText={(text) => setLocalidade(text)}
              placeholder="Cidade"
        />

        <TextInput 
              style={{
                borderColor: "black",
                borderWidth: 2,
                fontSize: 18,
                width: 100,
                marginTop: 10,
                marginHorizontal: 20,
                marginEnd: 20,
                borderRadius: 10,
                padding: 15,
              }}
              value={uf}
              onChangeText={(text) => setUf(text)}
              placeholder="Estado"
        />

      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#EFF",
    alignItems: "center",
    flexDirection: "column",
  },
  containerAddress: {
    width: "100%",
  },
  title: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
    alignSelf: "center",
    margin: 20,
  },
  containerCep: {
    flexDirection: "row",
    height: 100,
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: "#BC3212",
    width: 150,
    height: 70,
    marginTop: 30,
    borderRadius: 10,
    padding: 20,
  },
  textButton: {
    color: "#fff",
    fontSize: 18,
    marginTop: 5,
    fontWeight: "bold",
    alignSelf: "center",
  },
  box: {
    borderColor: "#000",
    borderWidth: 2,
    padding: 15,
    fontSize: 18,
    borderRadius: 10,
    marginTop: 10,
    marginHorizontal: 20
  }
})