interface IBenefits_item_props {
    firstStr: string;
    secondStr: string;
    thirdStr: string;
}

const Benefits_item = ({firstStr, secondStr, thirdStr}:IBenefits_item_props) => {
    const articleHoverFunction = (event: React.MouseEvent<HTMLElement>) => {
        const { currentTarget } = event
        const target = currentTarget.getBoundingClientRect()
        const gorizontalPercentage = (event.pageX - target.x) / target.width * 100
        const verticalPercentage = (event.pageY - target.y) / target.height * 100
        event.currentTarget.animate({
            background: `radial-gradient(circle at ${gorizontalPercentage}% ${verticalPercentage}%, rgba(255, 255, 255, 0.19) 11%, rgba(66, 66, 66, 0.097) 57%)`
        }, {
            duration: 20, fill: "forwards"
        })
    }

    const articleLeaveFunction = (e: React.MouseEvent<HTMLElement>) => {
        e.currentTarget.animate({
            background: `rgba(0, 0, 0, 0)`
        }, {
            duration: 50, fill: "forwards"
        })
    }
    return (
        <article
            onMouseMove={articleHoverFunction}
            onMouseLeave={articleLeaveFunction}
            className='benefits_item'>
            <p>{firstStr}</p>
            <span className='fs-1 fw-bold'>{secondStr}</span>
            <span>{thirdStr}</span>
        </article>
    );
};

export default Benefits_item;