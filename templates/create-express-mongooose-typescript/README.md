# Template Backend

## Features
 - Authentication
 - MongoDB Database
 - Password Hashing

## Usage
 - Set .env as given below.
 - `npm i` to install dependencies.
 - `npm run dev` for Development Server.


## .env Usage
 - **JWT_SECRET** - Your JWT Secret. Make it a long randomly generated string.
 - **MONGO_URL** - Your MongoDB instance url. Either local or atlas. Change the address accordingly.
 - **PORT** - Server Port. (If Not provided, 3000 will be used as default)
 - **CLIENT_URLS** - These are URLs for CORS. Space separated. Only add trusted domains and IPs.

## Specs
User (Editable in src/Users/user.model.ts)
 - User:
    - _id: ObjectID (MongoDB Default)
    - username: unique, string
    - name: string
    - email: string
    - hashed_password: string
    - salt: string
    - role: enum string
    - photo: image buffer