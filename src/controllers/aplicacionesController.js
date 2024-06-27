const {conn} = require('../db/db');

module.exports= {
     
    getAllAplic: async(req,res)=>{
        try{
            const [registros] =await conn.query(`SELECT * FROM Aplicaciones`)
            res.json(registros);           
        }catch (error) {
			throw error
		} finally{
			conn.releaseConnection()
		}
    },
            /*res.json(aplic)
        }catch (error){
            throw error('error')
        }finally {
            conn.releaseConnection()
        }
    },*/

    createAplic: async (req, res) => {
        const sql = `INSERT INTO Aplicaciones (Nombre, Descripcion, Precio, FechaLanzamiento) VALUES (?,?,?,?);`
        const appNueva= await conn.query(sql, [req.body.Nombre, req.body.Descripcion, req.body.Precio, req.body.FechaLanzamiento])
    /   res.redirect('/listadoApp.html')
    },
    /*createAplic: async (req, res) => {
        const { nombre, descripcion, precio, fechaLanzamiento } = req.body;
        let conn;
        try {
            conn = await pool.getConnection();
            const sql = 'INSERT INTO aplicaciones (Nombre, Descripcion, Precio, FechaLanzamiento) VALUES (?, ?, ?, ?)';
            await conn.query(sql, [nombre, descripcion, precio, fechaLanzamiento]);
            res.redirect('/listadoApp.html');
        } catch (error) {
            console.error('Error al crear la aplicación:', error);
            res.status(500).send('Error al crear la aplicación');
        } finally {
            if (conn) conn.release();
        }
    },*/

    getModificarById: async (req, res) => { //muestra la informacion a modificar
        try {
            // Realiza la consulta para obtener la información a modificar
            const [modificar] = await conn.query(`SELECT * FROM Aplicaciones WHERE AplicacionID=?`, [req.params.id]);
            
            // Renderiza la vista 'modificar' y pasa los datos necesarios a la plantilla EJS
            res.render('modificar', {
                tituloDePagina: 'Modificar Aplicacion Cargada',
                registro: modificar[0]
            });
        } catch (error) {
            console.error(error);
            res.status(500).send('Error en el servidor');
        }},
       
    updateAplicById: async (req, res) => { //realiza la modificacion
        const sql = `UPDATE Aplicaciones SET Nombre=?, Descripcion=?, Precio=?, FechaLanzamiento=? WHERE AplicacionID=?`;
        const { Nombre, Descripcion, Precio, FechaLanzamiento } = req.body;
        try {
           await conn.query(sql, [Nombre, Descripcion, Precio, FechaLanzamiento, req.params.id]);
             res.redirect('/aplicaciones');
         } catch (error) {
             console.error(error);
             res.status(500).send('Error en el servidor');
         }
        /*const sql = `UPDATE Aplicaciones SET Nombre=?, Descripcion=?, Precio=?, FechaLanzamiento=? WHERE AplicacionID=?`;
        const { Nombre, Descripcion, Precio, FechaLanzamiento } = req.body;
        const appmodificado = await conn.query(sql, [Nombre, Descripcion, Precio, FechaLanzamiento]);
        res.redirect('/listadoApp.html')     */
    },

    deleteAplicById: async(req, res) => {
        const eliminado = await conn.query(`DELETE FROM Aplicaciones WHERE AplicacionID=?`, req.body.idEliminar)
		res.redirect('/listadoApp.html')
    }


}
