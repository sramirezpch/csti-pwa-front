import Header from "../components/Header";
import { IoInformationCircleOutline } from "react-icons/io5";
import { IoReload } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import PWAButton from "../components/PWAButton";
import { useEffect } from "react";

import { getActualBalance } from "../service/api";

export default function HomeView() {
    useEffect(() => {
        (async () => {
            await getActualBalance();
        })()
    }, [])

    return (
        <>
            <Header headerTitle="Recargas y pagos"/>
            <div className="px-4 py-6">
                <div className="px-4">
                    <p className="text-md text-gray-600 font-semibold flex gap-x-3 items-center">Saldo virtual <IoInformationCircleOutline className="w-[20px] h-auto" /></p>
                    <p className="text-4xl font-extrabold flex gap-x-3 items-center mb-3">S/ 150.00 <IoReload className="w-[20px] h-auto"/></p>
                    <button className="flex gap-x-3 border-2 border-solid  border-gray-300 rounded-lg items-center px-6 py-1">
                        <IoHeartOutline />
                        <p>¿Cómo cargar mi saldo virtual?</p>
                    </button>
                    <p className="text-sm font-semibold mt-2 mb-4">Código para cargar tu saldo: <span className="text-cyan-500 font-bold">{"{1234567890}"}</span></p>
                </div>
                <hr className="my-4"/>
                <div className="flex flex-col gap-y-3">
                    <PWAButton text={"Recargas"} Icon={IoHeartOutline}/>
                </div>
            </div>
        </>
    )
}