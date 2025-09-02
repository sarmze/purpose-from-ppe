import { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Play, Pause, Volume2 } from "lucide-react";

interface AudioPlayerProps {
  audioUrl?: string;
  className?: string;
}

const AudioPlayer = ({ audioUrl, className = "" }: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlayPause = () => {
    if (!audioRef.current || !audioUrl) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  // Mock audio URL for demonstration (in real app, this would be the actual audio file)
  const mockAudioUrl = "data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmEUBEOZ2+y/diMFl0GZ6N2QQAoUXrTp66hVFApGn+DyvmEUBEOZ2+y/diMFl0GZ6N2QQAoUXrTp66hVFApGn+DyvmEUBEOZ2+y/diMFl0GZ6N2QQAoUXrTp66hVFApGn+DyvmEUBEOZ2+y/diMFl0GZ6N2QQAoUXrTp66hVFApGn+DyvmEUBEOZ2+y/diMFl0GZ6N2QQAoUXrTp66hVFApGn+DyvmEUBEOZ2+y/diMFl0GZ6N2QQAoUXrTp66hVFApGn+DyvmEUBEOZ2+y/diMFl0GZ6N2QQAoUXrTp66hVFApGn+DyvmEUBEOZ2+y/diMFl0GZ6N2QQAoUXrTp66hVFApGn+DyvmEUBEOZ2+y/diMFl0GZ6N2QQAoUXrTp66hVFApGn+DyvmEUBEOZ2+y/diMFl0GZ6N2QQAoUXrTp66hVFApGn+DyvmEUBEOZ2+y/diMFl0GZ6N2QQAoUXrTp66hVFApGn+DyvmEUBEOZ2+y/diMFl0GZ6N2QQAoUXrTp66hVFApGn+DyvmEUBEOZ2+y/diMFl0GZ6N2QQAoUXrTp66hVFApGn+DyvmEUBEOZ2+y/diMFl0GZ6N2QQAoUXrTp66hVFApGn+DyvmEUBEOZ2+y/diMFl0GZ6N2QQAoUXrTp66hVFApGn+DyvmEUBEOZ2+y/diMFl0GZ6N2QQAoUXrTp66hVFApGn+DyvmEUBEOZ2+y/diMFl0GZ6N2QQAoUXrTp66hVFApGn+DyvmEUBEOZ2+y/diMFl0GZ6N2QQAoUXrTp66hVFApGn+DyvmEUBEOZ2+y/diMFl0GZ6N2QQAoUXrTp66hVFApGn+DyvmEUBEOZ2+y/diMFl0GZ6N2QQAoUXrTp66hVFApGn+DyvmEUBEOZ2+y/diMFl0GZ6N2QQAoUXrTp66hVFApGn+DyvmEUBEOZ2+y/diMFl0GZ6N2QQAoUXrTp66hVFApGn+DyvmEUBEOZ2+y/diMFl0GZ6N2QQAoUXrTp66hVFApGn+DyvmEUBEOZ2+y/diMFl0GZ6N2QQAoUXrTp66hVFApGn+DyvmEUBEOZ2+y/diMFl0GZ6N2QQAoUXrTp66hVFApGn+DyvmEUBEOZ2+y/diMFl0GZ6N2QQAoUXrTp66hVFApGn+DyvmEUBEOZ2+y/diMFl0GZ6N2QQAoUXrTp66hVFApGn+DyvmEUBEOZ2+y/diMFl0GZ6N2QQAoUXrTp66hVFApGn+DyvmEUBEOZ2+y/diMFl0GZ6N2QQAoUXrTp66hVFApGn+DyvmEUBEOZ2+y/diMFl0GZ6N2QQAoUXrTp66hVFApGn+DyvmEUBEOZ2+y/diMFl0GZ6N2QQAoUXrTp66hVFApGn+DyvmEUBEOZ2+y/diMFl0GZ6N2QQAoUXrTp66hVFApGn+DyvmEUBEOZ2+y/diMFl0GZ6N2QQAoUXrTp66hVFApGn+DyvmEUBEOZ2+y/diMFl0GZ6N2QQAoUXrTp66hVFApGn+DyvmEUBEOZ2+y/diMFl0GZ6N2QQAoUXrTp66hVFApGn+DyvmEUBEOZ2+y/diMFl0GZ6N2QQAoUXrTp66hVFApGn+DyvmEUBEOZ2+y/diMFl0GZ6N2QQAoUXrTp66hVFApGn+DyvmEUBEOZ2+y/diMFl0GZ6N2QQAoUXrTp66hVFApGn+DyvmEUBEOZ2+y/diMFl0GZ6N2QQAoUXrTp66hVFApGn+DyvmEUBEOZ2+y/diMF";

  if (!audioUrl) {
    return null;
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Button
        variant="outline"
        size="sm"
        onClick={togglePlayPause}
        className="flex items-center gap-2"
        disabled={!audioUrl}
      >
        {isPlaying ? (
          <Pause className="w-4 h-4" />
        ) : (
          <Play className="w-4 h-4" />
        )}
        {isPlaying ? "Pause" : "Play"}
      </Button>
      
      <Volume2 className="w-4 h-4 text-muted-foreground" />
      
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <span>{formatTime(currentTime)}</span>
        <span>/</span>
        <span>{duration ? formatTime(duration) : "0:00"}</span>
      </div>

      <audio
        ref={audioRef}
        src={audioUrl || mockAudioUrl}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
        preload="metadata"
      />
    </div>
  );
};

export default AudioPlayer;