import React, { useEffect, useState, useContext } from 'react';
import { FirebaseContext } from '../../firebase';
import Orden from '../ui/Orden';

const Ordenes = () => {

    const { firebase } = useContext(FirebaseContext);
    const [ordenes, guardarOrdenes] = useState([]);


    useEffect(() => {
        const obtenerOrdenes = () => {
            firebase.db.collection('ordenes').where('completado', '==', false).onSnapshot(manejarSnap);
        }

        obtenerOrdenes();
        // eslint-disable-next-line
    }, []);

    function manejarSnap(snapshot) {
        const ordenes = snapshot.docs.map(doc => {
            return {
                id: doc.id,
                ...doc.data()
            }
        })
        guardarOrdenes(ordenes);
    }


    return (
        <>
            <div className="sm:flex sm:flex-wrap -mx-3">
                {ordenes.map(orden => (
                    <Orden orden={orden} key={orden.id} />
                ))}
            </div>
        </>
    );
}

export default Ordenes;