exports.handler = async (event, context) => {
  try {
    // Your code logic here
    const response = {
      statusCode: 200,
      body: "Welcome to backend server"
    };
    return response;
  } catch (error) {
    // Handle errors here
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "An error occurred" })
    };
  }
};
