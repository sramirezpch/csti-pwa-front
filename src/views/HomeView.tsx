import { IoInformationCircleOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { IoReload } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";

import PWAButton from "../components/PWAButton";
import Header from "../components/Header";

import { getActualBalance } from "../service/api";

export default function HomeView() {
    const [balance, setBalance] = useState(undefined);
    const [isPending, setIsPending] = useState(false);

    useEffect(() => {
        (async () => {
            setIsPending(true);
            const controller = new AbortController()
            const signal = controller.signal;
            const balanceCommerce = await getActualBalance(signal, controller);

            setBalance(balanceCommerce);
            setIsPending(false);
        })()
    }, [])

    return (
        <>
            <Header headerTitle="Recargas y pagos"/>
            <div className="px-4 py-6">
                <div className="px-4">
                    <p className="text-md text-gray-600 font-semibold flex gap-x-3 items-center">Saldo virtual <IoInformationCircleOutline className="w-[20px] h-auto" /></p>
                    <p className="text-4xl font-extrabold flex gap-x-3 items-center mb-3">{isPending ? 'Cargando balance actual' : balance && `S/ ${balance}`} <IoReload className="w-[20px] h-auto"/></p>
                    <button className="flex gap-x-3 border-2 border-solid  border-gray-300 rounded-lg items-center px-6 py-1">
                        <IoHeartOutline />
                        <p>¿Cómo cargar mi saldo virtual?</p>
                    </button>
                    <p className="text-sm font-semibold mt-2 mb-4">Código para cargar tu saldo: <span className="text-cyan-500 font-bold">{"{1234567890}"}</span></p>
                </div>
                <hr className="my-4"/>
                <div className="flex flex-col gap-y-3">
                    <PWAButton text={"Recargas"} Icon={IoHeartOutline} to="/recargas"/>
                    <PWAButton text={"Pago de servicios"} Icon={IoHeartOutline}/>
                    <PWAButton text={"Historial de ganancias y operaciones"} Icon={IoHeartOutline}/>
                </div>
            </div>
        </>
    )
}