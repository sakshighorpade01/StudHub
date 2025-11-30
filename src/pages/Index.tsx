import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { StudHubLogo } from "@/components/StudHubLogo";
import { 
  Rocket, 
  Brain, 
  Trophy, 
  Target, 
  CheckCircle, 
  ArrowRight, 
  Play,
  Sparkles,
  Twitter,
  Linkedin,
  Instagram,
  Github,
  Zap
} from "lucide-react";

const Index = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden relative">
      
      {/* Modern Background Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px] animate-pulse"></div>
        <div className="absolute right-0 bottom-0 -z-10 h-[400px] w-[400px] rounded-full bg-secondary/10 opacity-20 blur-[120px]"></div>
      </div>

      {/* Navigation Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <StudHubLogo size="md" />
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/auth">
              <Button variant="ghost" className="text-sm font-medium hover:bg-primary/5">Log in</Button>
            </Link>
            <Link to="/auth">
              <Button className="text-sm font-medium shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow">Sign up</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* 1. HERO SECTION */}
      <section className="relative pt-6 pb-20 lg:pt-16 lg:pb-32 overflow-visible">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Text Content */}
          <div className="space-y-8 animate-in slide-in-from-left duration-700 relative z-10">
            <Badge variant="outline" className="px-4 py-1.5 text-sm border-primary/20 text-primary bg-primary/5 rounded-full backdrop-blur-sm shadow-sm">
              <Sparkles className="w-4 h-4 mr-2 inline fill-primary/20 animate-pulse" />
              #1 AI Learning Platform for Students
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.15]">
              Don't Just Learn. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-secondary animate-gradient-x">
                Prove Your Worth.
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
              Stop guessing your career path. Let our <span className="text-foreground font-semibold">AI Mentor</span> guide you, build your <span className="text-foreground font-semibold">Skill Credit Score</span>, and get hired by top companies based on real data.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link to="/auth">
                <Button size="xl" className="w-full sm:w-auto text-lg font-bold shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-1 bg-gradient-to-r from-primary to-purple-600">
                  Start Your Journey
                  <Rocket className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/auth">
                <Button size="xl" variant="outline" className="w-full sm:w-auto text-lg border-2 hover:bg-muted/50 hover:border-primary/30 transition-all duration-300">
                  <Play className="ml-2 h-5 w-5 mr-2 fill-current" />
                  Watch Demo
                </Button>
              </Link>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-4 pt-6">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <Avatar key={i} className="border-2 border-background w-10 h-10 ring-2 ring-background transition-transform hover:-translate-y-1 hover:z-10">
                    <AvatarImage src={`https://i.pravatar.cc/150?u=${i + 20}`} />
                    <AvatarFallback>S{i}</AvatarFallback>
                  </Avatar>
                ))}
              </div>
              <div className="text-sm">
                <div className="flex text-yellow-500 mb-1">★★★★★</div>
                <p className="text-muted-foreground font-medium">Joined by 10,000+ students</p>
              </div>
            </div>
          </div>

          {/* Right: Floating 3D/Image Content */}
          <div className="relative hidden lg:block perspective-1000 group">
            <div className="relative z-10 animate-float">
              {/* Image Wrapper */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/15 border border-white/10 bg-card/50 backdrop-blur-sm group-hover:scale-[1.01] transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop" 
                  alt="Students collaborating" 
                  className="w-full h-auto object-cover opacity-95 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>

              {/* Bottom Left Card - FIXED: Removed hover transforms to prevent conflict with animation */}
              <div 
                className="absolute -bottom-8 -left-8 z-20 bg-background/80 backdrop-blur-xl p-4 rounded-xl shadow-2xl border border-white/20 animate-float cursor-default"
                style={{ animationDelay: "2s" }}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-green-500/10 rounded-full border border-green-500/20">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-foreground">Skill Score Updated</p>
                    <p className="text-xs text-green-600 font-bold mt-0.5">+50 Points Earned!</p>
                  </div>
                </div>
              </div>

              {/* Top Right Card - Removed hover transforms for consistency */}
              <div className="absolute -top-8 -right-8 z-20 bg-background/80 backdrop-blur-xl p-4 rounded-xl shadow-2xl border border-white/20 animate-float cursor-default">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-full border border-primary/20">
                    <Brain className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-foreground">AI Recommendation</p>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                      <p className="text-xs text-muted-foreground font-medium">Try "React Advanced"</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Decor Elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-700"></div>
          </div>
        </div>
      </section>

      {/* 2. LOGO STRIP (Trust) */}
      <section className="py-8 border-y bg-muted/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm font-bold text-muted-foreground mb-8 uppercase tracking-widest">
            Trusted by top colleges and companies
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-2xl font-bold font-sans hover:text-blue-500 transition-colors cursor-default">Google</span>
            <span className="text-2xl font-bold font-serif hover:text-blue-400 transition-colors cursor-default">Microsoft</span>
            <span className="text-2xl font-bold font-mono hover:text-green-500 transition-colors cursor-default">Spotify</span>
            <span className="text-2xl font-bold italic hover:text-orange-500 transition-colors cursor-default">Amazon</span>
            <span className="text-2xl font-bold hover:text-purple-500 transition-colors cursor-default">Udemy</span>
          </div>
        </div>
      </section>

      {/* 3. BENEFITS SECTION */}
      <section className="py-16 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 blur-[120px] rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="outline" className="mb-6 px-6 py-2 text-base font-medium uppercase tracking-wider border-primary/30 bg-primary/5 text-primary rounded-full shadow-sm backdrop-blur-sm">
              Why Choose Us?
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70 pb-2 leading-tight">
              We bridge the gap between<br />Degrees & Careers
            </h2>
            <p className="text-lg text-muted-foreground">
              Traditional education misses the mark. We provide the practical skills, mentorship, and proof of competence that modern companies actually look for.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="glass-card group hover:-translate-y-2 transition-all duration-300 border-t-4 border-t-primary shadow-lg hover:shadow-primary/10">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Brain className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">AI Personal Mentor</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Confused about what to learn? Your AI mentor analyzes your interests, skills, and goals to create a dynamic, custom roadmap just for you.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card group hover:-translate-y-2 transition-all duration-300 border-t-4 border-t-secondary shadow-lg hover:shadow-secondary/10">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-gradient-to-br from-secondary/20 to-secondary/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Trophy className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Skill Credit Score</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Forget just CGPA. We calculate a real-time "Credit Score" for your skills based on projects, assessments, and consistency.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card group hover:-translate-y-2 transition-all duration-300 border-t-4 border-t-warning shadow-lg hover:shadow-warning/10">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-gradient-to-br from-warning/20 to-warning/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="w-8 h-8 text-warning" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Direct Hiring</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Skip the resume queue. Partner companies hire interns and freshers directly based on their Skill Score and verified Project Portfolio.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 4. "HOW IT WORKS" */}
      <section className="py-24 bg-muted/30 relative">
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] opacity-50"></div>
        <div className="max-w-7xl mx-auto px-6 relative">
          
          {/* Step 1 */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
            <div className="order-2 md:order-1 relative group perspective-1000">
               <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500 blur-sm"></div>
               <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop" 
                alt="AI Dashboard" 
                className="relative rounded-2xl shadow-xl border border-white/20 transform group-hover:rotate-y-2 transition-transform duration-500 z-10"
              />
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl shadow-lg shadow-primary/30">1</div>
                 <h3 className="text-3xl md:text-4xl font-bold">Input Your Interests</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed pl-16">
                Tell us what you love—whether it's Coding, Design, Marketing, or even Dancing. Our AI builds a deep profile around YOU, creating a personalized curriculum that adapts as you grow.
              </p>
              <div className="pl-16">
                 <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-foreground/80"><CheckCircle className="w-4 h-4 text-green-500"/> Personalized Skill Assessment</li>
                    <li className="flex items-center gap-2 text-sm text-foreground/80"><CheckCircle className="w-4 h-4 text-green-500"/> Goal Setting & Timeline</li>
                 </ul>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
               <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-xl shadow-lg shadow-secondary/30">2</div>
                 <h3 className="text-3xl md:text-4xl font-bold">Learn & Level Up</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed pl-16">
                Complete gamified courses, join study groups, and finish projects. Watch your Skill Score grow in real-time as you complete milestones and verify your skills.
              </p>
              <div className="pl-16">
                 <Button variant="link" className="p-0 h-auto text-secondary hover:text-secondary/80 font-semibold">Explore Learning Paths <ArrowRight className="w-4 h-4 ml-1"/></Button>
              </div>
            </div>
            <div className="relative group perspective-1000">
               <div className="absolute inset-0 bg-gradient-to-tl from-secondary/20 to-transparent rounded-2xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500 blur-sm"></div>
               <img 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop" 
                alt="Gamified Learning" 
                className="relative rounded-2xl shadow-xl border border-white/20 transform group-hover:-rotate-y-2 transition-transform duration-500 z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-purple-800 opacity-95"></div>
        {/* Abstract shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
             <div className="absolute -top-[50%] -left-[20%] w-[100%] h-[100%] rounded-full border-[20px] border-white/5"></div>
             <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] rounded-full bg-white/10 blur-[100px]"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 text-white">
          <Badge className="bg-white/10 text-white hover:bg-white/20 border-0 mb-6 px-4 py-1">Start your journey today</Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Ready to launch your career?</h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join the platform that is replacing the traditional resume. Start building your Skill Score today and get noticed by recruiters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/auth">
              <Button size="xl" variant="secondary" className="font-bold w-full sm:w-auto text-lg shadow-xl shadow-black/20 hover:shadow-2xl transition-all hover:scale-105 bg-white text-primary hover:bg-white/90">
                Get Started for Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
          <p className="mt-8 text-sm text-white/70 font-medium">No credit card required • Free for students</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1 space-y-4">
               <StudHubLogo size="md" />
               <p className="text-muted-foreground text-sm leading-relaxed">
                 Empowering the next generation of professionals with AI-driven learning, mentorship, and verifiable skill scores.
               </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Platform</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Courses</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">AI Mentorship</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Skill Score</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Internships</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-foreground">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-foreground">Connect</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 group">
                  <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 group">
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 group">
                  <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 group">
                  <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© 2025 StudHub. All rights reserved.</p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground">Privacy Policy</a>
              <a href="#" className="hover:text-foreground">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Index;