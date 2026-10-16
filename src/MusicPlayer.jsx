import { useRef, useState, useEffect } from 'react';


export default function MusicPlayer() {
    const audioRef=useRef(null);
    let[playing,setPlaying]=useState(false);

    useEffect(() => {
        const audio = audioRef.current;
        if(!audio){
            return;
        }
        audio.play()
            .then(()=>{setPlaying(true)})
            .catch(()=>{setPlaying(false)});
    }, []);  

    const toggleMusic = async () => {
    
        const audio = audioRef.current;
         if (!audio) return;
         if(playing) {
            audio.pause();
            setPlaying(false);
         } else {
            try{
                await audio.play();
                setPlaying(true);
            }catch(error){
                setPlaying(false);
            }}}
    
        return (
            <div>
                <audio
                ref={audioRef}
                src="/music.mp3"
                loop
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
                />
                <div className="flex flex-row">
                
               <button
               onClick={toggleMusic}
                  className="
                  g-white/20 backdrop-blur-md border border-white/30 text-white px-6 
                  py-3 rounded-xl shadow-lg hover:bg-white/30 transition
                "
                >
                    
                    {playing ? "⏸ توقف موزیک" : "🎵 پخش موزیک"}
                </button>
                <p className='text-2xl text-pink-400 bg-pink-100 rounded-xl p-2'>👈بزن موزیک‌وکیف کن😍</p>
                </div>
            </div>

  )  }
