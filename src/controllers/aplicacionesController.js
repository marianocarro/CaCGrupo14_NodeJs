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

    getModificarById: async (req, res) => {
        const [appmodif] =await connection.query (`SELECT * FROM Aplicaciones WHERE id=?`, req.params.id);
        res.render('modificar', {
            tituloDePagina: 'Pagina para modificar Items',
            registro: appmodif[0]
        });    
    },

    updateAplicById: async (req, res) => {
        const sql = `UPDATE Aplicaciones SET Nombre=?, Descripcion=?, Precio=?, FechaLanzamiento=? WHERE id=?`;
        const { Nombre, Descripcion, Precio, FechaLanzamiento } = req.body;
        const appmodificado = await connection.query(sql, [Nombre, Descripcion, Precio, FechaLanzamiento]);
        res.redirect('/aplicaciones')
    },

    deleteAplicById: (req, res) => {
        const { id } = req.params;
        const sql = `DELETE FROM aplicaciones WHERE id=?`;
        connection.query(sql, [id], (err, results) => {
            if (err) {
                console.error('Error al borrar aplicación:', err);
                res.status(500).json({ error: 'Error al borrar aplicación' });
                return;
            }
            res.json({ mensaje: 'Aplicación borrada' });
        });
    }


}
