import React from 'react'

interface Props{
videoId:string
}


//https://www.youtube.com/watch?v=uIlI1pc9vQk
const YoutubeEmbed:React.FC<Props> = (Props) => {
    if(Props.videoId!==undefined){
        return (
            <iframe
            //width="560"
            //height="315"
            src={`https://www.youtube.com/embed/${Props.videoId}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ border: 'none' }} // Use inline style to remove the border
            className="w-100"
        ></iframe>
        );
    }
}

export default YoutubeEmbed