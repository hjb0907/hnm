function getProducts(keywd){
  return async(dispatch, getState) => {
    let url = `https://my-json-server.typicode.com/hjb0907/hnm/products?q=${keywd}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    dispatch({type:'GET_PRODUCT_SUCCESS', payload: {data}})
  };
}

export const productAction = {getProducts}