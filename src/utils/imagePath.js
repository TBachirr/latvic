const getImagePath = (path) => {
    const basePath = process.env.PUBLIC_URL || '';
    return `${basePath}${path}`;
  };
  
  export default getImagePath;