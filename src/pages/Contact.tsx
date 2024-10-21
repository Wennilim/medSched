const InputField = ({ id, placeholder, type = "text" }: { id: string, placeholder: string, type?: string }) => (
    <div>
        <label className="sr-only" htmlFor={id}>{placeholder}</label>
        <input
            className="w-full rounded-xl border-gray-200 border p-3 text-sm"
            placeholder={placeholder}
            type={type}
            id={id}
        />
    </div>
);

const RadioButton = ({ id, name, label }: { id: string, name: string, label: string }) => (
    <div>
        <label
            htmlFor={id}
            className="block w-full cursor-pointer rounded-xl border border-gray-200 p-3 text-gray-600 hover:border-logo has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
            tabIndex={0}
        >
            <input className="sr-only" id={id} type="radio" tabIndex={-1} name={name} />
            <span className="text-sm">{label}</span>
        </label>
    </div>
);

export const Contact = () => {
    return (
        <section className="bg-gray-100">
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                    <div className="lg:col-span-2 lg:py-12">
                        <p className="max-w-xl text-lg">
                            At the same time, the fact that we are wholly owned and totally independent from
                            manufacturer and other group control gives you confidence that we will only recommend what
                            is right for you.
                        </p>
                        <div className="mt-8">
                            <a href="#" className="text-2xl font-bold text-logo">0151 475 4450</a>
                            <address className="mt-2 not-italic">282 Kevin Brook, Imogeneborough, CA 58517</address>
                        </div>
                    </div>
                    <div className="rounded-xl bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                        <form action="#" className="space-y-4">
                            <InputField id="name" placeholder="Name" />
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <InputField id="email" placeholder="Email address" type="email" />
                                <InputField id="phone" placeholder="Phone Number" type="tel" />
                            </div>
                            <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                                <RadioButton id="Option1" name="option" label="Option 1" />
                                <RadioButton id="Option2" name="option" label="Option 2" />
                                <RadioButton id="Option3" name="option" label="Option 3" />
                            </div>
                            <div>
                                <label className="sr-only" htmlFor="message">Message</label>
                                <textarea
                                    className="w-full rounded-xl border border-gray-200 p-3 text-sm"
                                    placeholder="Message"
                                    rows={8}
                                    id="message"
                                ></textarea>
                            </div>
                            <div className="mt-4">
                                <button
                                    type="submit"
                                    className="inline-block w-full rounded-xl bg-logo px-5 py-3 font-medium text-white sm:w-auto"
                                >
                                    Send Enquiry
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
