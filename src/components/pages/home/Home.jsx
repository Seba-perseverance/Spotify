import NavHome from '../../common/navHome/NavHome';
import Card from '../../common/mainHome/Card';
import "../../common/mainHome/Card.css"
const home = () =>{

    return(
        <>
            <NavHome/>
            <Card classname="Card1" title="Unknown Pleasures - Joy Division"
            subtitle="Disorder - 2019 Digital Master - Joy Division"/>
            <Card title="Nevermind (Remastered) - Nirvana"
            subtitle="Smells Like Teen Spirit - Nirvana"/>
            <Card title="Marquee Moon - Television"
            subtitle="See No Evil - Television"/>
            <Card title="IMPERA - Ghost"
            subtitle="Imperium -Ghost"/>
            <Card title="Disintegration (Remastered) - The Cure"
            subtitle="Plainsong - Remastered - The cure "/>

        </>
    );
};
export default home;