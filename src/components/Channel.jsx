export function Channel({channelName, channelDesc, channelUrl, subject}){
    return(
        <div className="channel">
            <div className="channel-image">
                <img src="src/assets/thumbnail.jpeg" alt="" />
            </div>
            <div className="channel-deets">
                <h3><a href={channelUrl} target="_blank">{channelName}</a></h3>
                <small>{subject}</small>
                <p>
                    {channelDesc}
                </p>
                <a href={channelUrl} target="_blank">Go Visit</a>
            </div>
        </div>
    )
}