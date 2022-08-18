import React from 'react'
import { MdEmail,MdFacebook } from "react-icons/md";
import { RiWhatsappFill, RiInstagramFill } from "react-icons/ri";

export function Email() {
    return (
        <div className="flex items-center gap-3 text-xl">
            <MdEmail />
            <span>contato@aportesea.com</span>
        </div>
    )
}

export function Whatsapp() {
    return (
        <div className="flex items-center gap-3 text-xl">
            <RiWhatsappFill />
            <span>(91) 98494-3702 </span>
        </div>
    )
}

export function Facebook() {
    return (
        <div className="flex items-center gap-3 text-xl">
            <MdFacebook />
            <span>contato@aportesea.com</span>
        </div>
    )
}

export function Instagram() {
    return (
        <div className="flex items-center gap-3 text-xl">
            <RiInstagramFill />
            <span>@aportesea</span>
        </div>
    )
}
