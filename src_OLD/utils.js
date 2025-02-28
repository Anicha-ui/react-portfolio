
export const getImageUrl = (path) => {
      const myPath = new URL('../assets/', import.meta.url).href;
       return `${myPath}/${path}`
     };

  
