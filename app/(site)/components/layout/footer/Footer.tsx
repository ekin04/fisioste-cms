import {FooterBanner} from "./components/FooterBanner";
import {FooterMenu} from "./components/FooterMenu";
import {FooterContatti} from "./components/FooterContatti";
import {FooterInfo} from "./components/FooterInfo";

interface FooterProps {
}

export const Footer: React.FC<FooterProps> = ({}) => {
    return (
        <footer>
            <div className="bg-gradient-to-t from-white to-[#d8e8ff] py-12 px-4">
                <FooterBanner/>
                <div className="flex container m-auto justify-center ">
                    <div className="grid lg:grid-cols-3 gap-4 w-full pt-14">
                        <FooterMenu/>
                        <FooterContatti/>
                        <FooterInfo/>
                    </div>
                </div>
            </div>
        </footer>
    )

}