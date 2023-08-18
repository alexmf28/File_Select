module.exports = {
    transform: {        
        "^.+\\.tsx?$": "ts-jest",
        "^.+\\.js$": "babel-jest",
        ".*\\.vue$": "<rootDir>/node_modules/vue-jest"
    },
}