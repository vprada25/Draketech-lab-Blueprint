export const countDuplicateItems = (array: [], value: any) => {
  let count = 0;
  array.forEach((item) => {
    if (parseInt(item) === value) count++;
  });
  return count;
};



export const removeDuplicateItems = (array: []) => {
  const setObj = new Set(); // creamos pares de clave y array
  return array.reduce((acc, elemento) => {
    const clave = JSON.stringify(elemento);
    if (!setObj.has(clave)) {
      setObj.add(clave)
      acc.push(elemento)
    }
    return acc;
  }, []);
}


export const removeItem = (array: [], item: never) => {
  const index = array.indexOf(item);
  if (index > -1) array.splice(index, 1);
  return array;
};
