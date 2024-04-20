import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

const CartScreen = () => {
  const uni = useSelector((state) => state.uni); // Accessing 'user' slice
  const job = useSelector((state) => state.job);
  const sch = useSelector((state) => state.scholarship);

  const [btnstate, setbtnstate] = useState(0)

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.name}</Text>
      <Text>${item.price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text>Wishlist</Text>
      <View style={styles.Btn_Cont}>
        <TouchableOpacity onPress={() => { setbtnstate(0) }} style={[btnstate === 0 ? styles.Active_Btn : styles.Btn]} >
          <Text style={[btnstate === 0 ? styles.Active_Txt : styles.txt]} >Btnstate 0</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { setbtnstate(1) }} style={[btnstate === 1 ? styles.Active_Btn : styles.Btn]} >
          <Text style={[btnstate === 1 ? styles.Active_Txt : styles.txt]}>Btnstate 1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { setbtnstate(2) }} style={[btnstate === 2 ? styles.Active_Btn : styles.Btn]} >
          <Text style={[btnstate === 2 ? styles.Active_Txt : styles.txt]} >Btnstate 2</Text>
        </TouchableOpacity>
      </View>
      {btnstate === 0 ?
        <FlatList
          data={uni}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        /> : null}
      {btnstate === 1 ?
        <FlatList
          data={job}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        /> : null}
      {btnstate === 2 ?
        <FlatList
          data={sch}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        /> : null}


    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  Btn_Cont: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: '100%',
  },
  Btn: {
    width: "30%",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: 'green',
    height: 40,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  txt: {
    color: 'green',
    fontSize: 14,
    lineHeight: 18
  },
  Active_Btn: {
    backgroundColor: 'green',
    width: "30%",
    borderWidth: 1,
    borderColor: 'green',
    height: 40,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  Active_Txt: {
    color: 'white',
    fontSize: 14,
    lineHeight: 18
  }
});

export default CartScreen;





