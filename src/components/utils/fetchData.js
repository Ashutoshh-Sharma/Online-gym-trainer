export const exerciseOptions = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '0ca9dceb43msh4e16639f0c6799ep1c54d1jsn53c6356803ea',
		'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
	}
};

export const youtubeOptions = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '3391485246mshc3d35bd695257dbp1c5fa1jsn12ee9f19da75',
		'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
	}
};

export const fetchData = async (url, options) => {
	try {
	  const response = await fetch(url, options);
  
	  if (!response.ok) {
		// Capture and log more details from the response
		const errorDetails = await response.json();
		console.error('Error details:', errorDetails);
  
		throw new Error(`Network response was not ok. Status: ${response.status}, Message: ${response.statusText}`);
	  }
  
	  const data = await response.json();
	  return data;
	} catch (error) {
	  console.error('Error fetching data:', error);
	  throw error; // Re-throw the error to handle it in the calling function
	}
  };
  

  
