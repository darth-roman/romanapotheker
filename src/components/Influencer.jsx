export function Influencer({imgSrc, aliasName, realName, instagramName, country, faculty}){
    return(
        <div className="influencer">
            <div className="image">
                <img src={imgSrc} alt="" />
            </div>
            <div className="deets">
                <h4>{aliasName} / {realName}</h4>
                <a href={instagramName}>@{instagramName}</a>
                <p>{country} / {faculty}</p>
            </div>
        </div>
    )
}