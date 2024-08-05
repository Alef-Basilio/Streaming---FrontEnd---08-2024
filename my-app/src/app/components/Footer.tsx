export default function Footer() {
    return (
        <footer className="flex justify-center items-center h-[300px] w-full bg-black text-white">
            <div className="flex justify-between gap-12 w-[1000px]">
                <div className="flex flex-col w-[25%]">
                    <h2 className="font-bold mb-6">Resources</h2>
                    <a href="">Application</a>
                    <a href="">Documentation</a>
                    <a href="">Systema</a>
                    <a href="">FAQ</a>
                </div>
                <div className="flex flex-col w-[25%]">
                    <h2 className="font-bold mb-6">Pricing</h2>
                    <a href="">Overview</a>
                    <a href="">Premium Plans</a>
                    <a href="">Affiliate Program</a>
                    <a href="">Promotions</a>
                </div>
                <div className="flex flex-col w-[25%]">
                    <h2 className="font-bold mb-6">Company</h2>
                    <a href="">About Us</a>
                    <a href="">Blog</a>
                    <a href="">Partnerships</a>
                    <a href="">Careers</a>
                    <a href="">Press</a>
                </div>
                <div className="flex flex-col w-[25%]">
                    <h2 className="font-bold mb-6">Social</h2>
                    <a href="">Facebook</a>
                    <a href="">Twitter</a>
                    <a href="">Instagram</a>
                    <a href="">LinkedIn</a>
                </div>
            </div>
        </footer>
    )
}