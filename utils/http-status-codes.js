/**
 * @description standardized three-digit codes that are returned by a server in response to a client's request over the HTTP protocol.
 */
const httpStatusCodes = {
    /**
     * @description 2xx: The request was successfully received, understood, and accepted.
     */
    SUCCESS: {
        /**
         * @description The request was successful.
         */
        OK: 200,
        /**
         * @description request has been processed by the server, and a new resource has been created.
         */
        CREATED: 201,
        /**
         * @description request has been processed by the server, but there is no content to return.
         */
        NO_CONTENT: 204,
    },
    /**
     * @description The request contains bad syntax or cannot be fulfilled by the server.
     */
    CLIENT_ERROR: {
        /**
         * @description The requested resource could not be found on the server.
         */
        NOT_FOUND: 404,
    },
    /**
     * @description The server failed to fulfill a valid request due to an error on the server's side.
     */
    SERVER_ERROR: {
        /**
         * @description A generic server error occurred.
         */
        INTERNAL: 500,
    }
};

module.exports = { httpStatusCodes };
