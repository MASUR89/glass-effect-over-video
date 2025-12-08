
const Video = () => {
  return (
    <div className="w-[1240px] h-[565px]"    >
        <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/LjJmjDJ_Ook?list=PL8DAC8EFB5FD7EB11"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>

  )
}

export default Video