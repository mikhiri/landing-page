import { Heart, Sparkles, Star, Users, CheckCircle2, Clock } from 'lucide-react';
import { Button } from './components/Button';
import { Card } from './components/Card';
import heroImage from './assets/hero-kids-learning.jpg';

function App() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-svh py-20 px-6 gradient-hero flex items-center relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Stars with spinning animation */}
          <Sparkles className="absolute top-12 left-12 w-12 h-12 text-primary/60 animate-spin-slow" />
          <Sparkles className="absolute top-[15%] right-[15%] w-10 h-10 text-accent/50 animate-spin-slow" style={{ animationDelay: '1s' }} />
          <Star className="absolute bottom-[35%] right-[8%] w-8 h-8 text-secondary/50 animate-spin-slow" style={{ animationDelay: '2s' }} />
          <Sparkles className="absolute bottom-[15%] right-[35%] w-10 h-10 text-primary/40 animate-spin-slow" style={{ animationDelay: '0.5s' }} />

          {/* Dots */}
          <div className="absolute top-[20%] left-[5%] w-4 h-4 rounded-full bg-primary/40" />
          <div className="absolute top-[25%] right-[30%] w-3 h-3 rounded-full bg-secondary/50" />
          <div className="absolute top-[60%] left-[8%] w-3 h-3 rounded-full bg-accent/50" />
          <div className="absolute bottom-[20%] left-[15%] w-4 h-4 rounded-full bg-secondary/40" />
          <div className="absolute top-[45%] right-[5%] w-3 h-3 rounded-full bg-accent/40" />
          <div className="absolute bottom-[40%] right-[45%] w-4 h-4 rounded-full bg-primary/30" />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <h1 className="text-5xl lg:text-6xl leading-tight">
                Fun Learning Classes for <span className="text-primary">Kids</span> Ages 5-9
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Engaging private classes for children aged 5-9, taught by a qualified and experienced teacher who nurtures curiosity and confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg rounded-full px-8 py-6 shadow-soft hover:scale-105 transition-transform">
                  Book a Free Trial
                </Button>
                <Button size="lg" variant="outline" className="text-lg rounded-full px-8 py-6 border-2 hover:scale-105 transition-transform">
                  Learn More
                </Button>
              </div>
            </div>
            <div>
              <img
                src={heroImage}
                alt="Happy children learning in a bright, engaging classroom environment"
                className="rounded-3xl shadow-card w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Kids Love Our Classes */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl text-center mb-16">
            Why Kids <span className="text-secondary">Love</span> Our Classes
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="w-12 h-12" />,
                title: 'Personalized Care',
                description: 'Small group sizes mean every child gets individual attention and support tailored to their learning style.',
                color: 'text-secondary',
              },
              {
                icon: <Sparkles className="w-12 h-12" />,
                title: 'Fun & Engaging',
                description: 'Learning through play, games, and hands-on activities that make education exciting and memorable.',
                color: 'text-primary',
              },
              {
                icon: <CheckCircle2 className="w-12 h-12" />,
                title: 'Proven Results',
                description: 'Structured curriculum designed by an experienced educator with a track record of student success.',
                color: 'text-accent',
              },
            ].map((item, index) => (
              <Card key={index} className="p-8 rounded-3xl gradient-card border-0 hover:scale-105 transition-transform shadow-card">
                <div className={`${item.color} mb-4`}>{item.icon}</div>
                <h3 className="text-2xl mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Your Expert Teacher */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl mb-8">
            Meet Your <span className="text-primary">Expert Teacher</span>
          </h2>
          <div className="bg-card rounded-3xl p-10 shadow-card">
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-6">
              With over 10 years of experience in early childhood education and a certified teaching qualification, I'm passionate about creating a warm, supportive environment where every child can thrive.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I believe that learning should be joyful, engaging, and adapted to each child's unique pace. My approach combines proven educational methods with creativity and patience, helping children build strong foundations in reading, math, and critical thinking while developing confidence and a love for learning.
            </p>
          </div>
        </div>
      </section>

      {/* What Your Child Will Learn */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl text-center mb-16">
            What Your Child Will <span className="text-accent">Learn</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Early literacy and phonics fundamentals',
              'Math skills through games and activities',
              'Creative problem-solving techniques',
              'Social skills and emotional development',
              'Science exploration and curiosity',
              'Arts and crafts for self-expression',
              'Critical thinking and logic',
              'Building confidence and independence',
            ].map((item, index) => (
              <Card key={index} className="p-6 rounded-2xl flex items-start gap-4 border-2 hover:border-primary transition-all">
                <div className="bg-primary/10 rounded-full p-3 flex-shrink-0">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <p className="text-lg pt-2">{item}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Flexible Class Options */}
      <section className="py-20 px-6 gradient-hero">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl text-center mb-16">
            <span className="text-secondary">Flexible</span> Class Options
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-10 h-10" />,
                title: 'Small Groups',
                detail: '3-5 students',
                description: 'Perfect for social learning and peer interaction',
              },
              {
                icon: <Clock className="w-10 h-10" />,
                title: 'Convenient Times',
                detail: 'Weekdays & Weekends',
                description: "Flexible scheduling to fit your family's routine",
              },
              {
                icon: <CheckCircle2 className="w-10 h-10" />,
                title: 'Age-Appropriate',
                detail: 'Ages 5-9',
                description: 'Curriculum tailored to each developmental stage',
              },
            ].map((item, index) => (
              <div key={index} className="bg-card rounded-3xl p-8 text-center shadow-card">
                <div className="text-primary mb-4 flex justify-center">{item.icon}</div>
                <h3 className="text-2xl mb-2">{item.title}</h3>
                <p className="text-primary font-semibold text-xl mb-3">{item.detail}</p>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Parents Say */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl text-center mb-16">
            What <span className="text-secondary">Parents</span> Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "My daughter looks forward to every class! She's become so much more confident and her reading skills have improved dramatically.",
                parent: 'Sarah M.',
                child: 'Mom of Emma, age 7',
              },
              {
                quote: 'The personalized attention my son receives is incredible. The teacher truly understands how to make learning fun and engaging.',
                parent: 'James L.',
                child: 'Dad of Oliver, age 6',
              },
            ].map((testimonial, index) => (
              <Card key={index} className="p-8 rounded-3xl gradient-card border-0 shadow-card">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-lg italic mb-6 leading-relaxed">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-lg">{testimonial.parent}</p>
                  <p className="text-muted-foreground">{testimonial.child}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">
            Ready to Start Your Child's Learning Adventure?
          </h2>
          <p className="text-xl md:text-2xl mb-10 opacity-95">
            Book a free trial class today and see the difference personalized education can make!
          </p>
          <Button size="lg" variant="secondary" className="text-lg rounded-full px-10 py-7 shadow-soft hover:scale-105 transition-transform">
            Schedule Your Free Trial
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-muted/30 text-center">
        <div className="container mx-auto max-w-4xl">
          <p className="text-lg text-muted-foreground mb-4">Have questions? We'd love to hear from you!</p>
          <p className="text-lg mb-2">
            <strong>Email:</strong> hello@kidslearning.com
          </p>
          <p className="text-lg mb-6">
            <strong>Phone:</strong> (555) 123-4567
          </p>
          <p className="text-sm text-muted-foreground">
            © 2024 Happy Hands Classes. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
