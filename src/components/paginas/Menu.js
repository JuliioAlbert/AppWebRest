import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FirebaseContext } from '../../firebase';
import Platillo from '../ui/Platillo';

const MenuP = () => {

    const [platillos, guardarPlatillos] = useState([]);

    const { firebase } = useContext(FirebaseContext);
    useEffect(() => {

        const obtenerPlatillos = () => {
            //Metodo en tiempo real firebase
            firebase.db.collection('productos').onSnapshot(Snap);

        }

        obtenerPlatillos();
        // eslint-disable-next-line
    }, [])

    //Snapshot utilizar la base de datos en tiempo real de firestore 
    function Snap(snapshot) {
        const platillos = snapshot.docs.map(doc => {
            return {
                id: doc.id,
                ...doc.data()
            }
        });
        //Almacenar los resultados en el state 
        guardarPlatillos(platillos);
    }

    return (
        <>
            <h1 className='text-3xl font-light mb-4'>Menu</h1>
            <Link
                to="/nuevo-platillo"
                className="
            bg-blue-800 hover:bg-blue-700,
             inline-block mb-5 p-2 
             text-white uppercase font-bold"
            >
                Agregar Platillo
            </Link>

            {platillos.map(platillo => (
                <Platillo
                    key={platillo.id}
                    platillo={platillo} />
            ))}
        </>
    );
}

export default MenuP;