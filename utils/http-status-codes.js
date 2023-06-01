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
    CLIENT_ERROR: {
        /**
         * @description The requested resource could not be found on the server.
         */
        NOT_FOUND: 404,
    },
};

module.exports = { httpStatusCodes };
