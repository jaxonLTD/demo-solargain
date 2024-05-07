export function respond (res:string) {
    return (
        <div className='bot-response'>
        <div className='bot-id'>
            <img src="/serve.png" />
            <small>Marshall</small>
        </div>
        <div className='bot-body'>
            <div className='bot-msg'>{res}</div>
        </div>
    </div>
    );
};

export function say (res:string) {
    return (
        <div className="usr-wrap">
            <div className="usr_mgs">{res}</div>
        </div>
    );
};