import { SectionTitle, Nav, PageControl, SocialMediaVertical } from "../ui/index";

const Window = ({ children, title, subtitle = 'Subtitle' }) => {
    return (
        <div className="flex gap-20 h-screen w-full mx-auto font-inter">
            {/* Asidebar */}
            <div className="flex flex-col flex-grow text-white justify-between">
                <div className="font-inter ml-auto">
                    <SectionTitle label={title} />
                    <div className="mt-10">
                        <Nav />
                    </div>
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
                <div className="flex-1 text-bone overflow-auto">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Window;