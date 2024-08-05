export default function Video() {
    return (
        <section className="flex justify-center">
            <video autoPlay controls loop muted src="../video.mp4"></video>
        </section>
    )
}