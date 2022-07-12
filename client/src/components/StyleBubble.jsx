const StyleBubble = ({style, styleClick}) => {

    var handleClick = function (e) {
        styleClick(style)
   }

    return ( 
    <div className="style-bubble" onClick={handleClick}>
    <div >{style.name}</div>
    <img className="style-thumbnail" src={style.photos[0].thumbnail_url} />
    </div>
    )
}

export default StyleBubble;