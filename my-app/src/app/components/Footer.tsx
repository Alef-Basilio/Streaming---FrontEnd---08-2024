export default function Footer() {
    return (
        <footer className="flex justify-center h-fit w-full bg-black text-white sm:pt-12 sm:pb-12
        mm:pt-10 mm:pb-10">
            <div className="mm:flex sm:flex-row mm:flex-col justify-between xl:w-[1250px] lg:w-[1000px] mm:w-[90%] 
            sm:gap-0 mm:gap-8">
                <div className="flex sm:justify-around mm:justify-evenly sm:w-[50%] mm:w-[100%]">
                    <div className="flex flex-col w-[25%] gap-[2px]">
                        <h2 className="font-bold xl:text-[17px] mm:text-[15px] sm:mb-6 mm:mb-2">Resources</h2>
                        <a href="xl:text-[17px] mm:text-[15px]">Application</a>
                        <a href="xl:text-[17px] mm:text-[15px]">Documentation</a>
                        <a href="xl:text-[17px] mm:text-[15px]">Systema</a>
                        <a href="xl:text-[17px] mm:text-[15px]">FAQ</a>
                    </div>
                    <div className="flex flex-col w-[25%] gap-[2px]">
                        <h2 className="font-bold xl:text-[17px] mm:text-[15px] sm:mb-6 mm:mb-2">Pricing</h2>
                        <a href="xl:text-[17px] mm:text-[15px]">Overview</a>
                        <a href="xl:text-[17px] mm:text-[15px]">Premium Plans</a>
                        <a href="xl:text-[17px] mm:text-[15px]">Affiliate Program</a>
                        <a href="xl:text-[17px] mm:text-[15px]">Promotions</a>
                    </div>
                </div>
                <div className="flex sm:justify-around mm:justify-evenly sm:w-[50%] mm:w-[100%]">
                    <div className="flex flex-col w-[25%] gap-[2px]">
                        <h2 className="font-bold xl:text-[17px] mm:text-[15px] sm:mb-6 mm:mb-2">Company</h2>
                        <a href="xl:text-[17px] mm:text-[15px]">About Us</a>
                        <a href="xl:text-[17px] mm:text-[15px]">Blog</a>
                        <a href="xl:text-[17px] mm:text-[15px]">Partnerships</a>
                        <a href="xl:text-[17px] mm:text-[15px]">Careers</a>
                        <a href="xl:text-[17px] mm:text-[15px]">Press</a>
                    </div>
                    <div className="flex flex-col w-[25%] gap-[2px]">
                        <h2 className="font-bold xl:text-[17px] mm:text-[15px] sm:mb-6 mm:mb-2">Social</h2>
                        <a href="xl:text-[17px] mm:text-[15px]">Facebook</a>
                        <a href="xl:text-[17px] mm:text-[15px]">Twitter</a>
                        <a href="xl:text-[17px] mm:text-[15px]">Instagram</a>
                        <a href="xl:text-[17px] mm:text-[15px]">LinkedIn</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}