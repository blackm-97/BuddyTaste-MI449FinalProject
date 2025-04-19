

export async function getData() {
    const url = "https://f4ckavlbp6.execute-api.us-east-2.amazonaws.com/movies";
    let message = 'Failed'
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          movie_name: 'Inception' ,
          users: [
            'treemang', 'thatmemecrona'
          ]
        })
      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const jsonString = await response.json();
      console.log(jsonString);
      message = jsonString.movie + '\n' + jsonString.rating + '\n' + jsonString.user1;
    } catch (error) {
      console.error(error.message);
    }

    return message;
  }