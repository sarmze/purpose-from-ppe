import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mic, MicOff, Send, CheckCircle, Play, Pause, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useAudioRecorder } from "@/hooks/useAudioRecorder";

const DonationForm = () => {
  const [formData, setFormData] = useState({
    employeeId: "",
    name: "",
    hasDonated: false,
    story: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const { toast } = useToast();
  const { isRecording, audioData, error, startRecording, stopRecording, clearRecording } = useAudioRecorder();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.hasDonated) {
      toast({
        title: "Please confirm your donation",
        description: "You must confirm that you have donated PPE to submit your story.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    setIsSubmitted(true);
    toast({
      title: "Story submitted successfully!",
      description: "Thank you for participating in the KOC PPE Recycling Initiative.",
    });
  };

  const handleRecordingToggle = async () => {
    if (isRecording) {
      stopRecording();
      toast({
        title: "Recording stopped",
        description: "Your voice recording has been saved.",
      });
    } else {
      await startRecording();
      toast({
        title: "Recording started",
        description: "Start sharing your PPE story.",
      });
    }
  };

  const playAudio = () => {
    if (audioData?.url) {
      const audio = new Audio(audioData.url);
      setIsPlaying(true);
      
      audio.onended = () => setIsPlaying(false);
      audio.onerror = () => {
        setIsPlaying(false);
        toast({
          title: "Playback error",
          description: "Failed to play the audio recording.",
          variant: "destructive"
        });
      };
      
      audio.play().catch(() => {
        setIsPlaying(false);
        toast({
          title: "Playback error",
          description: "Failed to play the audio recording.",
          variant: "destructive"
        });
      });
    }
  };

  const handleClearRecording = () => {
    clearRecording();
    toast({
      title: "Recording cleared",
      description: "Your voice recording has been removed.",
    });
  };

  if (isSubmitted) {
    return (
      <section className="py-20 bg-gradient-subtle" id="donation">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-elevated animate-fade-in">
              <CardContent className="p-12 text-center">
                <CheckCircle className="w-16 h-16 text-sustainability mx-auto mb-6" />
                <h3 className="text-3xl font-bold mb-4 text-foreground">Thank You!</h3>
                <p className="text-lg text-muted-foreground mb-8">
                  Your donation story has been submitted successfully. You're now part of KOC's sustainability journey!
                </p>
                <div className="p-6 bg-accent rounded-xl">
                  <p className="text-accent-foreground font-semibold">
                    "Every piece of PPE you donate helps create a more sustainable future for KOC and our planet."
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-subtle" id="donation">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Submit Your Donation Story
            </h2>
            <p className="text-xl text-muted-foreground">
              Share your experience and be part of our sustainability story board
            </p>
          </div>

          {/* Form */}
          <Card className="shadow-elevated animate-fade-in">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Donation Information</CardTitle>
              <CardDescription>
                Help us track our collective impact and share inspiring stories
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Employee Details */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="employeeId">KOC ID</Label>
                    <Input
                      id="employeeId"
                      type="text"
                      placeholder="Enter your KOC ID"
                      value={formData.employeeId}
                      onChange={(e) => setFormData(prev => ({ ...prev, employeeId: e.target.value }))}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      required
                    />
                  </div>
                </div>

                {/* Donation Confirmation */}
                <div className="flex items-center space-x-2 p-4 bg-accent rounded-lg">
                  <Checkbox
                    id="hasDonated"
                    checked={formData.hasDonated}
                    onCheckedChange={(checked) => 
                      setFormData(prev => ({ ...prev, hasDonated: checked as boolean }))
                    }
                  />
                  <Label htmlFor="hasDonated" className="text-accent-foreground font-medium">
                    I have submitted my PPE to the collection bins
                  </Label>
                </div>

                {/* Story Section */}
                <div className="space-y-4">
                  <Label className="text-lg font-semibold">Share Your Story (Optional)</Label>
                  <p className="text-sm text-muted-foreground">
                    Tell us about your journey at KOC or your experience with PPE recycling
                  </p>
                  
                  <Textarea
                    placeholder="Share your KOC journey, why sustainability matters to you, or your PPE recycling experience..."
                    value={formData.story}
                    onChange={(e) => setFormData(prev => ({ ...prev, story: e.target.value }))}
                    rows={4}
                    className="resize-none"
                  />

                  {/* Voice Recording Option */}
                  <div className="space-y-4 p-4 border rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Voice Recording</p>
                        <p className="text-sm text-muted-foreground">
                          Record a voice message instead of writing
                        </p>
                      </div>
                      <Button
                        type="button"
                        variant={isRecording ? "destructive" : "sustainability"}
                        onClick={handleRecordingToggle}
                        className="flex items-center gap-2"
                        disabled={!!error}
                      >
                        {isRecording ? (
                          <>
                            <MicOff className="w-4 h-4" />
                            Stop Recording
                          </>
                        ) : (
                          <>
                            <Mic className="w-4 h-4" />
                            Start Recording
                          </>
                        )}
                      </Button>
                    </div>

                    {/* Error Display */}
                    {error && (
                      <div className="text-sm text-destructive bg-destructive/10 p-2 rounded">
                        {error}
                      </div>
                    )}

                    {/* Audio Playback */}
                    {audioData && (
                      <div className="flex items-center justify-between bg-accent p-3 rounded">
                        <div className="flex items-center gap-3">
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={playAudio}
                            disabled={isPlaying}
                            className="flex items-center gap-2"
                          >
                            {isPlaying ? (
                              <Pause className="w-4 h-4" />
                            ) : (
                              <Play className="w-4 h-4" />
                            )}
                            {isPlaying ? "Playing..." : "Play"}
                          </Button>
                          <span className="text-sm text-muted-foreground">
                            Duration: {Math.round(audioData.duration)}s
                          </span>
                        </div>
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={handleClearRecording}
                          className="flex items-center gap-2"
                        >
                          <Trash2 className="w-4 h-4" />
                          Remove
                        </Button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full flex items-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Submit My Story
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DonationForm;