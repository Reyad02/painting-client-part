
const Statistics = () => {
    return (
        <div className="mx-auto max-w-7xl ">
            <h1></h1>
            <div className="stats shadow flex ">
                <div className="stat place-items-center">
                    <div className="stat-title">5-Star Rating</div>
                    <div className="stat-value">319</div>
                    <div className="stat-desc">From January 1st to till now</div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title">Happy Customers</div>
                    <div className="stat-value text-secondary">4,200</div>
                    <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title">Design Award </div>
                    <div className="stat-value text-secondary">400</div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title">New Registers</div>
                    <div className="stat-value">1,200</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;