import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Quote } from "lucide-react";

const StoriesBoard = () => {
  const stories = [
    {
      id: 1,
      name: "Ahmed Al-Rashid",
      department: "Operations",
      story: "After 15 years at KOC, seeing my safety helmet become a plant pot feels like completing a circle. From protecting me to protecting our environment.",
      type: "text",
      date: "2 days ago"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      department: "Engineering",
      story: "My coveralls have been with me through countless site visits. Now they'll help create new materials for future generations. That's true sustainability.",
      type: "text",
      date: "3 days ago"
    },
    {
      id: 3,
      name: "Mohammed Al-Sabah",
      department: "Safety",
      story: "Every piece of PPE tells a story of protection. Now they continue protecting - our planet. Proud to be part of this initiative.",
      type: "audio",
      date: "5 days ago"
    },
    {
      id: 4,
      name: "Lisa Chen",
      department: "Environmental",
      story: "Working in environmental compliance, I see the impact of waste daily. This initiative shows KOC's real commitment to change.",
      type: "text",
      date: "1 week ago"
    },
    {
      id: 5,
      name: "Hassan Al-Mutairi",
      department: "Maintenance",
      story: "My helmet protected my head for 3 years. Now it protects seedlings. From safety to sustainability - that's innovation.",
      type: "text",
      date: "1 week ago"
    },
    {
      id: 6,
      name: "Jennifer Smith",
      department: "HR",
      story: "Participated in this campaign not just as an employee, but as a mother who cares about the world we leave behind.",
      type: "audio",
      date: "2 weeks ago"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Employee Stories Board
            </h2>
            <p className="text-xl text-muted-foreground mb-4">
              Our PPE, Our Stories, Our Future
            </p>
            <Badge variant="secondary" className="text-lg px-6 py-2">
              {stories.length} Stories Shared
            </Badge>
          </div>

          {/* Stories Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stories.map((story, index) => (
              <Card 
                key={story.id} 
                className="shadow-corporate hover:shadow-elevated transition-smooth animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-corporate rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{story.name}</h4>
                        <p className="text-sm text-muted-foreground">{story.department}</p>
                      </div>
                    </div>
                    <Badge 
                      variant={story.type === 'audio' ? 'default' : 'secondary'}
                      className="text-xs"
                    >
                      {story.type === 'audio' ? '🎤 Audio' : '📝 Text'}
                    </Badge>
                  </div>

                  {/* Story Content */}
                  <div className="mb-4">
                    <Quote className="w-5 h-5 text-muted-foreground mb-2" />
                    <p className="text-foreground leading-relaxed italic">
                      "{story.story}"
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="text-xs text-muted-foreground">
                    {story.date}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 animate-slide-up">
            <div className="p-8 bg-gradient-corporate rounded-2xl shadow-elevated">
              <h3 className="text-2xl font-bold text-white mb-4">
                Share Your Story
              </h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Join your colleagues in sharing how PPE recycling connects to your KOC journey. Every story inspires others to participate.
              </p>
              <a 
                href="#donation" 
                className="inline-block bg-white text-primary font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-smooth"
              >
                Submit Your Story
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoriesBoard;