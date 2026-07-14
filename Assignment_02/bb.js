
app.post("/signup", (request, response) => {
    console.log("signup body ===>", request.body)

    const userObj = request.body
    const isFileExists = fs.existsSync("users.txt")
    if (isFileExists) {
        // already user hai
        //  append user
        const userData = JSON.parse(fs.readFileSync("users.txt", "utf-8"))

        //check email address 
        const isUserExist = userData.find((obj) => {
            if (obj.email === userObj.email) {
                return true
            }
        })

        if (isUserExist) {
            return response.send("Email address already exist!")
        }

        userData.push(userObj)
        fs.writeFileSync("users.txt", JSON.stringify(userData))
        response.send("user created!")

    } else {
        // first user
        // 1. create file
        // 2. write user
        fs.writeFileSync("users.txt", JSON.stringify([userObj]))
        response.send("user created!")



    }
})
