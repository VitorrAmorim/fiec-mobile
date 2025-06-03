import { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { collection, addDoc, onSnapshot, doc, updateDoc, deleteDoc } from 'firebase/firestore';

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const productsRef = collection(db, 'products');
    
    const unsubscribe = onSnapshot(productsRef, (snapshot) => {
      const productsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setProducts(productsData);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const addProduct = async (product) => {
    try {
      await addDoc(collection(db, 'products'), product);
    } catch (error) {
      console.error("Error adding product: ", error);
      throw error;
    }
  };

  const updateProduct = async (id, product) => {
    try {
      await updateDoc(doc(db, 'products', id), product);
    } catch (error) {
      console.error("Error updating product: ", error);
      throw error;
    }
  };

  const deleteProduct = async (id) => {
    try {
      await deleteDoc(doc(db, 'products', id));
    } catch (error) {
      console.error("Error deleting product: ", error);
      throw error;
    }
  };

  return { products, loading, addProduct, updateProduct, deleteProduct };
};

export default useProducts;