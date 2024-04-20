import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Add_University, } from '../../redux/wishlist/Uni_wishlist';
import { Add_Job } from '../../redux/wishlist/Job_slice';
import { Add_Scholarship } from '../../redux/wishlist/Scholarship_slice';

const PRODUCTS = [
  {
    id: '1',
    name: 's',
    price: 10
  },

  {
    id: '2',
    name: 'w',
    price: 20
  },
  {
    id: '3',
    name: 'sh',
    price: 30
  },
];

const ProductsScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const uni = useSelector((state) => state.uni); // Accessing 'user' slice
  const job = useSelector((state) => state.job); 
  const schlor = useSelector((state) => state.scholarship); 
  const addTouni = (product) => {
    dispatch(Add_University(product));
  };
  const addTojob = (product) => {
    dispatch(Add_Job(product));
  };
  const addToscholar = (product) => {
    dispatch(Add_Scholarship(product));
  };
 
  return (
    <View style={styles.container}>
      <FlatList
        data={PRODUCTS}
        renderItem={ ({ item }) => (
          <View style={styles.item}>
            <Text>{item.name} - ${item.price}</Text>
            <Button title="Add to uni" onPress={() => addTouni(item)} />
            <Button title="Add to job" onPress={() => addTojob(item)} />
            <Button title="Add to schlorship" onPress={() => addToscholar(item)} />
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
      <Button
        title="Go to Cart"
        onPress={() => navigation.navigate('Cart')}
      />
      <Text style={styles.cartCount}>
        Items in uni: {uni.length}
      </Text>
      <Text style={styles.cartCount}>
        Items in job: {job.length}
      </Text>
      <Text style={styles.cartCount}>
        Items in scholar: {schlor.length}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  cartCount: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProductsScreen;
