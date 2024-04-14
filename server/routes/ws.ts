/**
 * Proxies /ws requests to external websockets server,
 * for convenience of using the same domain for both client, API and websockets.
 * 
 * This has multiple benefits:
 * - Avoids CORS issues
 * - Simplifies deployment
 * - Allows to use the same domain for both client and server
 * - Hides the external server address
 * 
 * Now, if we want to connect to a websockets server, we can use the same domain:
 * const { data } = useWebSocket(`ws://${location.host}/ws`)
 */
export default defineEventHandler(async (event) => {
    // return proxyRequest(event, 'ws://127.0.0.1:3000/api/websocket')
    return proxyRequest(event, 'http://127.0.0.1:3000/api/websocket')
})
