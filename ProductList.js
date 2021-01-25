import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Image, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const ProductList = () => {
  const [products, setProduct] = useState({
    data:  [{title: "une voiture", description:"voiture rapide bleue",price:13000 }]}
    // voir section list doc https://reactnative.dev/docs/sectionlist
    // data2:  [{title: "une voiture", description:"voiture rapide bleue",price:13000 }]}
    );
  

    return (
      
      <div className="Product-List">
      
        <FlatList  
        {...products}
          // data={this.product}
          // data={product}
          renderItem={({item}) => <Text><h1>{item.title}</h1> <p>{item.description}</p> <span>{item.price} euros</span></Text>} 
        />
         
    </div>
   
    );
   
    }


export default ProductList