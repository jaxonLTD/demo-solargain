import './styles/started.css';

function Started () {
    return (
        <div id='get-started'>
            <div id='started-title'>SOLAR PANELS</div>
            <div id='started-title-second'>GET STARTED HERE</div>
            <p id='started-title-p'>Looking for <a className='text-red' href="/">solar panels</a>, solar hot water or service and repairs? Choose from our most popular services below.</p>
            
            <div id='services-row'>
                <div className='service'>
                    <div className='service-1'>
                        <div>
                            <img src="/solar-panels-line-art-02-01_0.png" />
                        </div>
                        <div>
                            <h2>Solar Power</h2>
                            <p>Solar panels for home</p>
                        </div>
                    </div>
                    <div className='service-2'>
                        <img src="/solar-panels-home.webp" />
                    </div>
                    <div className='service-3'>
                        <p className='service-text'>Looking for <a className='text-red' href="/">solar panels</a> and inverters for your home? Check out our solar packages or create your own system from our extensive range of products.</p>
                    </div>
                    <div className='service-4'>
                        <button className='service-button'>
                            See our solar specials
                        </button>
                    </div>
                </div>

                <div className='service'>
                    <div className='service-1'>
                        <div>
                            <img src="/solar-hot-water-line-art-01.png" />
                        </div>
                        <div>
                            <h2>Solar Hot Water</h2>
                            <p>Roof or Ground Mount Hot Water</p>
                        </div>
                    </div>
                    <div className='service-2'>
                        <img src="/solar-hot-water-home.webp" />
                    </div>
                    <div className='service-3'>
                        <p className='service-text'>Choosing the right <a className='text-red' href="/">solar hot water system</a> is critical when your aim is to reduce your energy consumption. Choose from a fantastic range.</p>
                    </div>
                    <div className='service-4'>
                        <button className='service-button'>
                            See our Hot Water System Offers
                        </button>
                    </div>
                </div>

                <div className='service'>
                    <div className='service-1'>
                        <div>
                            <img src="/solar-panels-service-line-art-1-01-01-01.png" />
                        </div>
                        <div>
                            <h2>Solar Repairs</h2>
                            <p>Need solar repairs, service or claims?</p>
                        </div>
                    </div>
                    <div className='service-2'>
                        <img src="/service-solar-inverters.webp" />
                    </div>
                    <div className='service-3'>
                        <p className='service-text'>With one of the largest service networks across Australia, Solargain will help you get your system back on track. Call us today! 1300 676 182.</p>
                    </div>
                    <div className='service-4'>
                        <button className='service-button'>
                            Service & Support Centre
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Started;