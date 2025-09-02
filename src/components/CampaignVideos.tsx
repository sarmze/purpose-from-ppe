import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, RotateCcw, Info, Users, Heart } from "lucide-react";

const CampaignVideos = () => {
  const videos = [
    {
      id: 1,
      title: "The Helmet's Journey",
      description: "Watch the cinematic reverse lifecycle as a safety helmet transforms into a thriving plant pot",
      icon: RotateCcw,
      duration: "2:30",
      views: "15.2K",
      category: "Transformation",
      thumbnail: "bg-gradient-corporate"
    },
    {
      id: 2,
      title: "Environmental Impact",
      description: "Discover the facts about plastic waste, carbon emissions, and how PPE recycling makes a difference",
      icon: Info,
      duration: "3:45",
      views: "22.8K", 
      category: "Education",
      thumbnail: "bg-gradient-sustainability"
    },
    {
      id: 3,
      title: "Coveralls Reborn",
      description: "See how fabric waste transforms into visitor line uniforms and helps local charities",
      icon: Heart,
      duration: "2:15",
      views: "18.7K",
      category: "Community",
      thumbnail: "bg-gradient-corporate"
    },
    {
      id: 4,
      title: "Employee Voices",
      description: "Hear inspiring stories from KOC employees: 'I gave my PPE a second life'",
      icon: Users,
      duration: "4:20",
      views: "31.5K",
      category: "Stories",
      thumbnail: "bg-gradient-sustainability"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Campaign Videos
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore the story behind KOC's PPE Recycling Initiative through engaging video content
            </p>
          </div>

          {/* Videos Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {videos.map((video, index) => (
              <Card 
                key={video.id} 
                className="shadow-corporate hover:shadow-elevated transition-smooth animate-fade-in group overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Video Thumbnail */}
                <div className={`relative h-48 ${video.thumbnail} flex items-center justify-center group-hover:scale-105 transition-smooth overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="relative z-10 text-center">
                    <video.icon className="w-12 h-12 text-white mb-4 mx-auto" />
                    <Button 
                      variant="hero" 
                      size="lg" 
                      className="opacity-90 hover:opacity-100"
                    >
                      <Play className="w-5 h-5 mr-2" />
                      Play Video
                    </Button>
                  </div>
                  
                  {/* Video Info Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                    <span className="bg-black/50 text-white text-sm px-2 py-1 rounded">
                      {video.duration}
                    </span>
                    <span className="bg-black/50 text-white text-sm px-2 py-1 rounded">
                      {video.views} views
                    </span>
                  </div>
                </div>

                {/* Content */}
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl text-foreground group-hover:text-primary transition-smooth">
                      {video.title}
                    </CardTitle>
                    <span className="bg-accent text-accent-foreground text-xs px-2 py-1 rounded-full">
                      {video.category}
                    </span>
                  </div>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {video.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Featured Section */}
          <div className="mt-16 animate-slide-up">
            <Card className="shadow-elevated bg-gradient-corporate text-white overflow-hidden">
              <CardContent className="p-12">
                <div className="text-center">
                  <h3 className="text-3xl font-bold mb-6">
                    Featured: The Complete PPE Journey
                  </h3>
                  <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                    Watch our comprehensive documentary showcasing the entire lifecycle of PPE recycling at KOC, 
                    from protection to purpose.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button variant="hero" size="lg" className="bg-white text-primary hover:bg-gray-100">
                      <Play className="w-5 h-5 mr-2" />
                      Watch Full Documentary
                    </Button>
                    <span className="text-white/80">Runtime: 12:45 | 45.2K views</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampaignVideos;