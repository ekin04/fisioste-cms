import {FooterBanner} from "./components/FooterBanner";
import {FooterMenu} from "./components/FooterMenu";
import {FooterContatti} from "./components/FooterContatti";
import {FooterInfo} from "./components/FooterInfo";
import Whatsapp from "../Whatsapp";

interface FooterProps {
}

export const Footer: React.FC<FooterProps> = ({}) => {
    return (
        <footer>
            <div className="bg-gradient-to-t from-white to-[#d8e8ff] py-12 px-4">
                <FooterBanner/>
                <div className="container flex justify-center m-auto ">
                    <div className="grid w-full gap-4 lg:grid-cols-3 pt-14">
                        <FooterMenu/>
                        <FooterContatti/>
                        <FooterInfo/>
                        <Whatsapp/>
                    </div>
                </div>
            </div>
        </footer>
    )

}