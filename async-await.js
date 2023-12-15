// Promise to get butter
const getButter = new Promise((resolve, reject) => {
    const husbandGotButter = true; // Assume the husband got butter successfully
    if (husbandGotButter) {
      resolve("Husband got butter.");
    } else {
      reject("Husband failed to get butter.");
    }
  });
  
  // Promise to get cold drinks after getting butter
  const getColdDrinks = getButter.then((message) => {
    return new Promise((resolve) => {
      resolve(`${message} Now getting cold drinks.`);
    });
  });
  
  // Handling Promise.all with async/await
  const handlePromises = async () => {
    try {
      const results = await Promise.all([getButter, getColdDrinks]);
      console.log(results);
    } catch (error) {
      console.error(error);
    }
  };
  
  // Async/await for createPost and deletePost
  const createPost = async () => {
    try {
      // Assuming some asynchronous operation
      const result = await someAsyncOperation();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };
  
  const deletePost = async () => {
    try {
      // Assuming some asynchronous operation
      const result = await someAsyncOperation();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };
  
  // Function to simulate an asynchronous operation
  const someAsyncOperation = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Operation completed.");
      }, 1000);
    });
  };
  
  // Testing
  handlePromises();
  createPost();
  deletePost();