import {DesktopMenu} from "./DesktopMenu";
import {MobileMenu} from "./MobileMenu";

interface HeaderProps {
}

export const Header: React.FC<HeaderProps> = ({}) => {
    return(
        <>
            <DesktopMenu/>
            <MobileMenu/>
        </>
    )
}