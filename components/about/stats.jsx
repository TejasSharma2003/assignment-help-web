import SectionHeading from "../section-heading";

export default function() {
    const title = "Trusted by eCommerce Businesses";
    const brief = "we are always up and running for you."
    return <section className="bg-white">
        <div className="">
            <div className="mt-8 sm:mt-12">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="flex flex-col rounded-lg border px-4 py-8 text-center shadow-light">
                        <div className="mb-5 text-4xl md:text-left font-extrabold text-secondary md:text-5xl">
                            1000+
                        </div>
                        <div className="text-base md:text-left font-medium text-secondary ">
                            <span>Students gets their assigment done with the help of assignment wallah experts.</span>
                        </div>
                    </div>

                    <div className="flex flex-col rounded-lg shadow-light border px-4 py-8 ">
                        <div className="mb-5 text-4xl text-center md:text-left font-extrabold text-secondary md:text-5xl">
                            7+
                        </div>
                        <div className="text-base text-center md:text-left font-medium text-secondary">
                            <span>Years of successfull work <br/>in the industry</span>
                        </div>
                    </div>
                    <div className="flex flex-col rounded-lg px-4 sm:col-span-full py-8 border shadow-light">
                        <div className="mb-5 text-4xl text-center  md:text-left font-extrabold text-secondary md:text-5xl">
                           300+
                        </div>
                        <div className="text-base text-center md:text-left font-medium text-secondary">
                            <span>Orders are delivered to the students</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}
