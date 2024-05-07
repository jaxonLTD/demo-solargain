/* PAGE 1: */
/* autum-sale24.webp */
/* autumn-leaves.webp */
/* sutumn-title.webp */

import './styles/slider.css';

function Slider () {
    let current_page = 0;
    let past_store:any;
    function update_slider () {
        const wrapper:any = document.querySelector("#slider-content");
        const counters = document.querySelectorAll('.counter-tile');

        // clear DOM
        let page_data = document.querySelectorAll(`.s${past_store}`);
        console.log(page_data)
        page_data.forEach((item) => {item.classList.remove('s-active')});

        counters.forEach((c, i) => {
            c.classList.remove('counter-active');

            if (i == current_page) {
                c.classList.add('counter-active');
            };
        });

        // update DOM
        wrapper.dataset.active=`${current_page}`;
        page_data = document.querySelectorAll(`.s${current_page}`);
        page_data.forEach((item) => {item.classList.add('s-active')});
    };

    function next_page () {
        past_store = current_page;
        current_page == 3 ? current_page = 0 : current_page++;
        update_slider();
    };

    function last_page () {
        past_store = current_page;
        current_page == 0 ? current_page = 3 : current_page--;
        update_slider();
    };

    return(
        <>
            <div id="slider-wrapper">
                <button onClick={last_page} id="slider-left" className="slider-nav">
                    
                </button>

                <button onClick={next_page} id="slider-right" className="slider-nav">

                </button>

                <div id="slider-counter">
                    <div onClick={() => {past_store=current_page; current_page=0; update_slider();}} className='counter-tile counter-active'></div>
                    <div onClick={() => {past_store=current_page; current_page=1; update_slider();}} className='counter-tile'></div>
                    <div onClick={() => {past_store=current_page; current_page=2; update_slider();}} className='counter-tile'></div>
                    <div onClick={() => {past_store=current_page; current_page=3; update_slider();}} className='counter-tile'></div>
                </div>

                <div id='slider-content' data-active='0'>
                    <img src="/autumn-leaves.webp" id='s0-1' className='s0 s-active' />
                    <img src="/sutumn-title.webp" id="s0-2" className='s0 s-active' />

                    <div id='s1-1' className='s1'>
                        <p>Purchase an inverter & battery</p>
                        <p>from iStore's new solar range and</p>
                        <p>go in the draw to win a BYD</p>
                        <p>Dolphin Electric Vehicle and more.</p>
                        <p>Over $100k prizes to be won!</p>
                    </div>
                    <button id='s1-2' className='s1'>FIND OUT MORE</button>
                    <img src="/sg-car-giveaway2.webp" id='s1-3' className='s1' />
                    
                    
                </div>

                <div id="slider-special">
                    Unlock your special offers! 
                    <i className="fas fa-arrow-up"></i>
                </div>
            </div>
            
            <div id='builder-wrapper'>
                <div id='builder-row'>
                    <div className='stat-box border-right'>
                        <div className='stat-count'>18</div>
                        <div className='stat-title'>YEARS IN SOLAR</div>
                    </div>

                    <div className='stat-box border-right'>
                        <div className='stat-count'><a className='text-red' href="/">88,000+</a></div>
                        <div className='stat-title'>SYSTEM INSTALLATIONS</div>
                    </div>

                    <div className='stat-box border-right'>
                        <div className='stat-count'>748,000</div>
                        <div className='stat-title'>TONNES CO2 PER YEAR</div>
                    </div>

                    <div className='stat-box border-right'>
                        <div className='stat-count'>100%</div>
                        <div className='stat-title'>AUSTRALIAN OWNED</div>
                    </div>

                    <div className='stat-box'>
                        <div className='stat-count'><a className='text-red' href="/">23</a></div>
                        <div className='stat-title'>AUSTRALIAN LOCATIONS</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Slider;