import { SectionTitle, Nav, PageControl, SocialMediaVertical } from "../ui/index";

const Window = ({ children, subtitle = 'Subtitle' }) => {
    return (
        <div className="flex gap-10 h-screen w-full mx-auto">
            {/* Sidebar */}
            <div className="flex flex-col flex-grow bg-gray-950 bg-opacity-30 text-white justify-between">
                <div className="w-[225px] ml-auto">
                    <SectionTitle label='About' />
                    <Nav />
                </div>
                <div className="mt-auto self-end mr-2">
                    <SocialMediaVertical />
                </div>
                <footer className="p-4 border-t border-gray-800 text-sm text-gray-400">
                    Footer simple
                </footer>
            </div>
            {/* Contenido principal (más grande) */}
            <div className="flex flex-col w-[930px] relative">
                {/* Paginado arriba de la barra superior, absoluto y a la derecha */}
                <div className="absolute top-0 right-0 -translate-y-full z-10">
                    <PageControl />
                </div>
                {/* Barra superior */}
                <div className="flex items-center justify-end border-t-2 border-gray-900 ">
                    <p className="mt-2 tracking-wider text-2xl text-gray-500 font-semibold uppercase">
                        {subtitle}
                    </p>
                </div>
                {/* Children debajo de la barra superior */}
                <div className="flex-1 p-4 overflow-auto">
                    {children}
                    <p className="text-white">content</p>
                </div>
            </div>
        </div>
    );
};

export default Window;