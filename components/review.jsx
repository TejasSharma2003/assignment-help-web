import FiveStarts from "./ui/five-stars";

export default function Review({ comment, brief, name }) {
    return (
        <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-light rounded-lg border sm:p-8" >
            <div>
                <div className="flex gap-0.5">
                    <FiveStarts/>
                </div>

                <div className="mt-4">
                    <h4 className="text-[1.3rem] font-bold text-black/60">{comment}</h4>

                    <p className="mt-4 text-base font-medium leading-relaxed ">{brief}</p>
                </div>
            </div>

            <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                &mdash; {name}
            </footer>
        </blockquote>
    )
}
