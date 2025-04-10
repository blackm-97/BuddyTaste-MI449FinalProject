

export async function getData() {
    const url = "https://f4ckavlbp6.execute-api.us-east-2.amazonaws.com/movies";
    let message = 'Failed'
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      console.log(json);
      message = json;
    } catch (error) {
      console.error(error.message);
    }

    return message;
  }