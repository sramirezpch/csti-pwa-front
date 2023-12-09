import { useEffect, useState } from "react";
import Header from "../components/Header"
import { IoSearch } from "react-icons/io5";
import { getProviders } from "../service/api";
import CompanyCard from "../components/CompanyCard";

export default () => {
    const [isPending, setIsPending] = useState(false);
    const [providers, setProviders] = useState([]);

    useEffect(() => {
        (async() => {
            setIsPending(true);
            const controller = new AbortController();
            const signal = controller.signal;

            const { companies } = await getProviders(signal, controller);
            setProviders(companies);
            setIsPending(false);
        })();
    }, []);

    return (
        <>
            <Header headerTitle="Recargas" />
            <div className="px-4 py-6">
                <p className="text-sm font-semibold">Buscar empresa</p>
                <div className="relative">
                    <input type="text" placeholder="ej. Culqi" className="outline-none border-none shadow-lg bg-gray-200 px-3 py-3 w-full"/>
                    <IoSearch className="absolute top-2 right-4 w-[30px] h-auto z-30"/>
                    <div className="flex flex-col gap-y-3 mt-4">
                        {isPending ? 'Cargando proveedores' : providers && providers.map(({ _id, image, company }) => <>
                        <CompanyCard key={_id} company={company} image={image} />
                        <hr />
                        </>)}
                    </div>
                    
                </div>
            </div>
        </>
    )
}