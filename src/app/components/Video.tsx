export default function Video(): JSX.Element {
    return (
        <section className="flex justify-center items-center xl:mt-6 xl:mb-2 mm:mt-12 mm:mb-12">
            <video autoPlay controls loop muted src="../video.mp4" className="xl:w-[1250px] 
            lg:w-[1000px] mm:w-[90%] cursor-pointer">
            </video>
        </section>
    )
}