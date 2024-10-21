import { useState } from "react";


export const About = () => {
    const [imgLoad, setImgLoad] = useState(false);
    return (
        <section>
            <div className="mx-auto max-w-screen-xl px-4 pb-8 sm:px-6 sm:pb-24 lg:px-8">
                <div className="max-w-3xl">
                    <h2 className="text-3xl font-bold sm:text-4xl">
                        ABOUT US
                    </h2>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
                        {!imgLoad && (
                            <div className="bg-gray-200 rounded-xl w-full h-full animate-pulse" />
                        )}
                        <img
                            onLoad={() => setImgLoad(true)}
                            alt="poster"
                            src="https://plus.unsplash.com/premium_photo-1681843126728-04eab730febe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            className={`absolute inset-0 h-full w-full object-cover ${imgLoad ? '' : 'hidden'}`}
                        />
                    </div>

                    <div className="lg:py-16">
                        <article className="space-y-4 text-gray-600">
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur quis
                                eius quos ea neque sunt, accusantium soluta minus veniam tempora deserunt? Molestiae
                                eius quidem quam repellat.
                            </p>

                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum explicabo quidem
                                voluptatum voluptas illo accusantium ipsam quis, vel mollitia? Vel provident culpa
                                dignissimos possimus, perferendis consectetur odit accusantium dolorem amet voluptates
                                aliquid, ducimus tempore incidunt quas. Veritatis molestias tempora distinctio
                                voluptates sint! Itaque quasi corrupti, sequi quo odit illum impedit!
                            </p>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}
