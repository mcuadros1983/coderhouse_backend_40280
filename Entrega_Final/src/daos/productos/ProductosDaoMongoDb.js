
import productSchema  from "../../models/producto.js";
import ContenedorMongoDb from "../../contenedores/ContenedorMongoDb.js"

class ProductosDaoMongoDb extends ContenedorMongoDb {
    constructor() {
        super('productos', productSchema)
    }
}
export { ProductosDaoMongoDb };