const { queryDatabase } = require("./db-test.js"); // Adjust the path as needed

exports.handler = async (event, context) => {
  try {
    // Your serverless function logic here
    const results = await queryDatabase("SELECT * FROM user");
    return {
      statusCode: 200,
      body: JSON.stringify(results)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "An error occurred" })
    };
  }
};
