import React from "react";

const ContactForm = () => {
    return (
        <div className="w-full max-w-[600px] mt-10">
            <form className="flex flex-col gap-5" action="#" method="POST">
                <div className="flex flex-col gap-2">
                    <label
                        htmlFor="name"
                        className="text-[0.9rem] font-medium text-primary dark:text-[#f4f4f5]"
                    >
                        Nome
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Seu nome"
                        required
                        className="p-3 border border-quaternary rounded-lg bg-transparent text-primary dark:text-[#f4f4f5] transition-colors focus:outline-none focus:border-accent"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label
                        htmlFor="email"
                        className="text-[0.9rem] font-medium text-primary dark:text-[#f4f4f5]"
                    >
                        E-mail
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="seu@email.com"
                        required
                        className="p-3 border border-quaternary rounded-lg bg-transparent text-primary dark:text-[#f4f4f5] transition-colors focus:outline-none focus:border-accent"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label
                        htmlFor="message"
                        className="text-[0.9rem] font-medium text-primary dark:text-[#f4f4f5]"
                    >
                        Mensagem
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Como posso ajudar?"
                        rows="5"
                        required
                        className="p-3 border border-quaternary rounded-lg bg-transparent text-primary dark:text-[#f4f4f5] transition-colors focus:outline-none focus:border-accent"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="px-6 py-3 bg-primary text-white border-none rounded-lg font-semibold cursor-pointer self-start transition-all hover:bg-secondary hover:-translate-y-0.5 active:translate-y-0 max-sm:w-full"
                >
                    Enviar Mensagem
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
