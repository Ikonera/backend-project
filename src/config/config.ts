export default () => ({
	port: process.env.APP_PORT,
	mongodb_connector_url: process.env.MONGODB_CONNECTOR_URL,
})
