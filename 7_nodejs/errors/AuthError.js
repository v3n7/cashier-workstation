class AuthError extends Error {
    constructor(message = "", code = 403) {
        super(message)
        this.code = code
    }
}

module.exports = AuthError