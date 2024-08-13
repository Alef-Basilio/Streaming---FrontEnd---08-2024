import Navbar from "../../components/Navbar";
import Video from "../../components/Video";
import Slide from "../../components/Slide";
import Footer from "../../components/Footer";
import ButtonToTop from "../../components/ButtonToTop";
import Card from "../../components/Card";

export default function MainPage(): JSX.Element {
    return (
        <>
            <Navbar/>
            <Video/>
            <Slide/>
            <Footer/>
            <ButtonToTop/>
            <Card title="title" caption="caption" desc="desc"/>
        </>
    )
}