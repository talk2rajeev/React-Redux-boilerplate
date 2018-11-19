export const fetchData = async () => {
    try {
      console.log('*** calling api');
        
      const response = await fetch("https://randomuser.me/api");
      const data = await response.json();
      return data;
    } catch (e) {
      console.log(e);
    }
  };