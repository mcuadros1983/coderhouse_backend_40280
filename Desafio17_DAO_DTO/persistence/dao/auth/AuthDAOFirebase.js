const admin = require("firebase-admin");
const formatDTO = require('../../dto/AuthDTO.js')

class AuthDaoFirebase {
    constructor() {
        const db = admin.firestore();
        this.query = db.collection("users");
    }

    init() {
        console.log('user dao in Firebase -> ready!')
    }

    async disconnect() {
        try {
            console.log('user dao in Firebase -> closed!')
        } catch (error) {
            console.error(error)
        }
    }

    async getById(id) {
        try {
            const docRef = this.query.doc(id);
            if (!docRef) {
                throw new Error(error)
            }
            const document = await docRef.get();
            const data = document.data()
            return formatDTO(data) 
            return data
        } catch (error) {
            throw new Error(error)
        }
    }

    async getAll() {
        try {
            const docRef = await this.query.get();
            const documents = docRef.docs;
            return documents.map((document) => ({
                id: document.id,
                ...document.data(),
            }));

        } catch (error) {
            throw new Error(error)
        }
    }
    async save(obj) {
        try {
            const docRef = this.query.doc();
            return await docRef.set(obj);
        } catch (error) {
            throw new Error(error)
        }
    }
    async updateById(id, obj) {
        try {
            const docRef = this.query.doc(id);
            if (!docRef) {
                throw new Error("No se encuentra esa id");
            }
            return await docRef.update(obj);
        } catch (error) {
            throw new Error(error)
        }
    }
    async deleteById(id) {
        try {
            const docRef = this.query.doc(id);
            return await docRef.delete();
        } catch (error) {
            throw new Error(error)
        }
    }
}

module.exports = AuthDaoFirebase