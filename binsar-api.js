const newman = require("newman")

newman.run({
    collection: "json-collection/binsar.postman_collection.json",
    environment: "json-env/binsar.postman_environment.json",
    reporters: ["cli", "htmlextra"]
})
