import PlanetImg from '../assets/Planet2.svg'

const Planet = () => {
    return (
        <section className='planet' >
            <div className='sunlight'></div>
            <img src={PlanetImg} alt="Planet" />
        </section>
    );
};

export default Planet;