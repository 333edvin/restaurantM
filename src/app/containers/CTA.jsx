import Image from "next/image";
import cta from '../../../public/images/cta.jpg'
const CTA = () => {
    return(
        <div className="relative w-full">
            <Image src={cta} className="w-full h-72 object-cover "/>
            <div className="absolute inset-0 bg-black/30 text-center text-white p-10 md:p-20 space-y-5 w-full">
                <h2 className="text-xl md:text-4xl font-semibold">Book Your Table Now and Savor the Flavor!</h2>
                <p className="text-sm "> Reserve now and indulge in a culinary delight !  Book your table today!</p>
                <button className="btn bg-orange-600 p-3  text-white">Reserve a Table</button>
            </div>
            <div></div>
        </div>
    )
}

export default CTA;