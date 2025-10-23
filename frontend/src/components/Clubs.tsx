import { Users, Music, Camera, Code, Heart, Mic } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Clubs = () => {
  const clubs = [
    {
      name: "Music Club",
      icon: Music,
      members: "150+",
      description: "Express yourself through music with performances and jam sessions",
      category: "Arts",
    },
    {
      name: "Photography Club",
      icon: Camera,
      members: "120+",
      description: "Capture moments and develop your photography skills",
      category: "Arts",
    },
    {
      name: "Coding Club",
      icon: Code,
      members: "200+",
      description: "Learn programming, build projects, and participate in hackathons",
      category: "Technology",
    },
    {
      name: "Volunteer Club",
      icon: Heart,
      members: "180+",
      description: "Make a difference through community service and social projects",
      category: "Social",
    },
    {
      name: "Drama Club",
      icon: Mic,
      members: "90+",
      description: "Explore theater arts with productions and performances",
      category: "Arts",
    },
    {
      name: "Student Council",
      icon: Users,
      members: "50+",
      description: "Lead and represent the student body in university matters",
      category: "Leadership",
    },
  ];

  return (
    <section id="clubs" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full mb-6">
            <Users className="w-5 h-5 text-secondary" />
            <span className="text-sm font-semibold text-secondary-foreground">
              Student Life
            </span>
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Student Clubs & Organizations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join a vibrant community and explore your passions beyond the classroom
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {clubs.map((club) => {
            const Icon = club.icon;
            return (
              <Card
                key={club.name}
                className="p-6 border-2 hover:border-primary transition-all duration-300 hover:shadow-elegant bg-card group cursor-pointer"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-card">
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {club.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground font-medium">
                        {club.category}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {club.members} members
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {club.description}
                </p>

                <Button variant="ghost" size="sm" className="w-full">
                  Learn More
                </Button>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="shadow-card hover:shadow-elegant">
            View All Clubs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Clubs;
