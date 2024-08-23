import AboutVideo from "../components/about-vid"
import VideoModal from "../components/VideoModal"

const AboutSection = () => {
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 mx-auto p-5 md:my-20">
            <VideoModal/>
            <div className="flex flex-col justify-center my-5 space-y-5">
                <h3>About</h3>
                <p className="font-semibold text-3xl md:text-5xl ">We Invite You to Visit <br/> Our Restaurant.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et voluptatum soluta perspiciatis veniam laudantium ab atque optio voluptate voluptates quibusdam</p>
                <div>
                <button className="btn bg-orange-600 p-3  text-white">Read More</button>
                </div>
            </div>
        </div>
    )
}
export default AboutSection