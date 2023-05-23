import React, { ReactNode } from 'react';

export type HeaderProps = {
    title?: string;
    icon?: ReactNode;
}

const Header = ({ title, icon }: HeaderProps) => {
    return (
        <header className="flex space-x-2 w-full p-4 items-center rounded-t-lg bg-[#63708d]">
            <div className="">
                {icon}
            </div>
            <div className="font-bold text-white">{title}</div>
        </header>
    )
}

export default Header;