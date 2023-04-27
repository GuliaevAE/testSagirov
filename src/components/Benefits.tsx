import Benefits_item from "./Benefits_item";

const Benefits = () => {
    return (
        <section className='benefits'>
            <div className="container">
                <div className="row">
                    <div className="col-6 py-0 px-0 ">
                        <Benefits_item
                            firstStr={'мы'}
                            secondStr={'1'}
                            thirdStr={'на рынке'} />
                    </div>
                    <div className="col-6 py-0 px-0 ">
                        <Benefits_item
                            firstStr={'гарантируем'}
                            secondStr={'50%'}
                            thirdStr={'безопасность'} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 py-0 px-0 ">
                        <Benefits_item
                            firstStr={'календарик за'}
                            secondStr={'2001'}
                            thirdStr={'в подарок'} />
                    </div>
                    <div className="col-6 py-0 px-0 ">
                        <Benefits_item
                            firstStr={'путешествие'}
                            secondStr={'597'}
                            thirdStr={'дней'} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Benefits;