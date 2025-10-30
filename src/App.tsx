import { Terminal, Shield, Users, Trophy, Zap, Code, Lock, ChevronRight, Calendar, Flag, UsersRound, Bell } from 'lucide-react';
import { Button } from './components/ui/button';
import { Card, CardContent } from './components/ui/card';
import { Badge } from './components/ui/badge';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-black text-green-400 font-mono overflow-hidden">
      <div className="scanlines"></div>
      <div className="crt"></div>

      <nav className="border-b border-green-900/30 backdrop-blur-sm fixed w-full z-50 bg-black/80">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Terminal className="w-6 h-6 text-green-400" />
            <span className="text-xl font-bold glitch" data-text="CTF_SERVER">CTF_SERVER</span>
          </div>
          <Button
            className="bg-green-500 hover:bg-green-400 text-black font-bold border-2 border-green-300 shadow-[0_0_10px_rgba(34,197,94,0.5)] hover:shadow-[0_0_20px_rgba(34,197,94,0.8)] transition-all"
          >
            <span className="mr-2"><a href="https://discord.gg/wrcaFWV2rq" target="_blank" rel="noopener noreferrer" className='text-black'>JOIN DISCORD</a></span>
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </nav>

      <main className="pt-20">
        <section className="container mx-auto px-6 py-20 relative">
          <div className="absolute inset-0 bg-gradient-radial from-green-900/20 to-transparent pointer-events-none"></div>

          <div className="text-center max-w-4xl mx-auto relative z-10">
            <Badge className="mb-6 bg-green-950 text-green-400 border-green-700 px-4 py-1.5 text-sm">
              <Lock className="w-3 h-3 mr-2 inline" />
              [STATUS: ONLINE]
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="glitch" data-text="ROOT ACCESS">CYBERWOLF</span>
              <br />
              <span className="text-green-500">ROOT ACCESS GRANTED</span>
            </h1>

            <div className="terminal-box mb-8 max-w-2xl mx-auto">
              <div className="flex items-center gap-2 mb-3 pb-3 border-b border-green-900/50">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-xs ml-2 text-green-600">root@ctf-server:~$</span>
              </div>
              <p className="text-left text-sm leading-relaxed">
                <span className="text-green-600">$</span> ./init_hacker.sh<br />
                <span className="typing-text">Join the greatest CTF discord server where we compete in all kind of CTF's</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-green-500 hover:bg-green-400 text-black font-bold border-2 border-green-300 shadow-[0_0_15px_rgba(34,197,94,0.6)] hover:shadow-[0_0_25px_rgba(34,197,94,0.9)] transition-all text-lg px-8"
              >
                <Terminal className="mr-2" />
                <a href="https://discord.gg/wrcaFWV2rq" target="_blank" rel="noopener noreferrer" className='text-black'>EXECUTE: JOIN SERVER</a>
              </Button>
            </div>

            <div className="mt-12 flex justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-600">1,337+ HACKERS</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-600">24/7 UPTIME</span>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-green-600">[</span>
            SYSTEM FEATURES
            <span className="text-green-600">]</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: 'BINARY EXPLOITATION (PWN)',
                desc: 'Master buffer overflows, ROP chains, and shellcode injection',
                level: 'EXPERT'
              },
              {
                icon: Lock,
                title: 'CRYPTOGRAPHY',
                desc: 'Break ciphers, crack hashes, and exploit weak implementations',
                level: 'ADVANCED'
              },
              {
                icon: Code,
                title: 'WEB EXPLOITATION',
                desc: 'SQL injection, XSS, CSRF, and modern web vulnerabilities',
                level: 'INTERMEDIATE'
              },
              {
                icon: Zap,
                title: 'REVERSE ENGINEERING',
                desc: 'Disassemble, decompile, and analyze binaries and file formats',
                level: 'EXPERT'
              },
              {
                icon: Terminal,
                title: 'FORENSICS',
                desc: 'Memory, disk, timeline analysis, file carving, and artifact recovery',
                level: 'INTERMEDIATE'
              },
              {
                icon: Trophy,
                title: 'STEGANOGRAPHY',
                desc: 'Hide and discover data in images, audio, and other media',
                level: 'BEGINNER'
              },
              {
                icon: Users,
                title: 'OSINT',
                desc: 'Open-source intelligence gathering and footprinting techniques',
                level: 'SOCIAL'
              },
              {
                icon: Bell,
                title: 'NETWORKING',
                desc: 'Packet analysis, protocol abuse, traffic forensics, and routing',
                level: 'INTERMEDIATE'
              },
              {
                icon: Calendar,
                title: 'MOBILE',
                desc: 'Android/iOS app exploitation, reverse engineering, and insecure storage',
                level: 'ADVANCED'
              },
              {
                icon: Flag,
                title: 'IOT & HARDWARE',
                desc: 'Firmware analysis, hardware interfaces, side-channel and embedded attacks',
                level: 'ADVANCED'
              },
              {
                icon: UsersRound,
                title: 'PRIVILEGE ESCALATION',
                desc: 'Kernel, service and configuration exploits to gain higher privileges',
                level: 'ADVANCED'
              },
              {
                icon: Code,
                title: 'PROGRAMMING & ALGORITHMS',
                desc: 'Scripting, algorithms, and challenge solving with code',
                level: 'ALL LEVELS'
              },
              {
                icon: Code,
                title: 'MISCELLANEOUS / CTF TOOLS',
                desc: 'Misc puzzles, tooling, challenges that span multiple categories',
                level: 'VARIED'
              }
            ].map((feature, idx) => (
              <Card
                key={idx}
                className="bg-black border-2 border-green-900/50 hover:border-green-500 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] group cursor-pointer"
              >
                <CardContent className="p-6">
                  <div className="mb-4 flex items-start justify-between">
                    <feature.icon className="w-8 h-8 text-green-500 group-hover:text-green-400 transition-colors" />
                    <Badge className="bg-green-950/50 text-green-500 border-green-800 text-xs">
                      {feature.level}
                    </Badge>
                  </div>
                  <h3 className="text-lg font-bold text-green-400 mb-2 group-hover:text-green-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-green-700 group-hover:text-green-600 transition-colors">
                    {feature.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-6 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="text-green-600">[</span>
            WEEKLY CTF OPERATIONS
            <span className="text-green-600">]</span>
          </h2>
          <p className="text-center text-green-600 mb-12 max-w-2xl mx-auto">
            <span className="text-green-500">$</span> cat weekly_ctf_schedule.txt
          </p>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card className="bg-black border-2 border-green-900/50 hover:border-green-600 transition-all duration-300 hover:shadow-[0_0_25px_rgba(34,197,94,0.3)] group">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-green-950/50 border-2 border-green-800 rounded-lg group-hover:border-green-500 transition-colors">
                    <Calendar className="w-8 h-8 text-green-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-green-400 mb-2">SCHEDULED CTF EVENTS</h3>
                    <p className="text-green-700 text-sm leading-relaxed">
                      Every week we compete in live CTF competitions. All upcoming events are posted in our Discord channels. Whether you're a beginner or expert, jump in and test your skills against real challenges.
                    </p>
                  </div>
                </div>
                <div className="pl-16 space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <span className="text-green-600">Weekly competitions announced in advance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <span className="text-green-600">All skill levels welcome to participate</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <span className="text-green-600">Discord notifications for upcoming events</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black border-2 border-green-900/50 hover:border-green-600 transition-all duration-300 hover:shadow-[0_0_25px_rgba(34,197,94,0.3)] group">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-green-950/50 border-2 border-green-800 rounded-lg group-hover:border-green-500 transition-colors">
                    <UsersRound className="w-8 h-8 text-green-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-green-400 mb-2">CREATE YOUR TEAM</h3>
                    <p className="text-green-700 text-sm leading-relaxed">
                      Form your own elite hacking squad or join existing teams. Collaborate with teammates, share strategies, and dominate the leaderboards together. Solo players are welcome too!
                    </p>
                  </div>
                </div>
                <div className="pl-16 space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <span className="text-green-600">Build teams with other members</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <span className="text-green-600">Dedicated team channels on Discord</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <span className="text-green-600">Compete solo or in groups</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black border-2 border-green-900/50 hover:border-green-600 transition-all duration-300 hover:shadow-[0_0_25px_rgba(34,197,94,0.3)] group">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-green-950/50 border-2 border-green-800 rounded-lg group-hover:border-green-500 transition-colors">
                    <Flag className="w-8 h-8 text-green-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-green-400 mb-2">NEWCOMERS WELCOME</h3>
                    <p className="text-green-700 text-sm leading-relaxed">
                      First time at a CTF? No problem! We encourage new players to join every competition. Learn by doing, get help from experienced members, and level up your skills with each event.
                    </p>
                  </div>
                </div>
                <div className="pl-16 space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <span className="text-green-600">Beginner-friendly environment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <span className="text-green-600">Mentorship from veteran players</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <span className="text-green-600">Practice challenges for newcomers</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black border-2 border-green-900/50 hover:border-green-600 transition-all duration-300 hover:shadow-[0_0_25px_rgba(34,197,94,0.3)] group">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-green-950/50 border-2 border-green-800 rounded-lg group-hover:border-green-500 transition-colors">
                    <Bell className="w-8 h-8 text-green-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-green-400 mb-2">COMMUNITY SUPPORT</h3>
                    <p className="text-green-700 text-sm leading-relaxed">
                      Everyone helps everyone here. Stuck on a challenge? Ask in our channels. Found a cool technique? Share it with the community. We grow stronger together through collaboration and knowledge sharing.
                    </p>
                  </div>
                </div>
                <div className="pl-16 space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <span className="text-green-600">Active help channels 24/7</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <span className="text-green-600">Share writeups and techniques</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <span className="text-green-600">Friendly and supportive community</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="terminal-box max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-green-900/50">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-xs ml-2 text-green-600">root@ctf-server:~/discord-preview$</span>
            </div>

            <div className="mb-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center font-bold text-black">
                  CT
                </div>
                <div>
                  <div className="text-green-400 font-bold text-sm">CTF-BOT</div>
                  <div className="text-green-800 text-xs">Today at 12:00 PM</div>
                </div>
              </div>
              <div className="bg-green-950/30 border-l-4 border-green-600 p-4 rounded">
                <div className="flex items-start gap-2 mb-2">
                  <Bell className="w-4 h-4 text-green-500 mt-0.5" />
                  <span className="text-green-400 font-bold text-sm">UPCOMING CTF ALERT</span>
                </div>
                <p className="text-green-600 text-sm mb-2">
                  <span className="font-bold text-green-400">CTF Name:</span> HackTheBox Weekly Challenge
                </p>
                <p className="text-green-600 text-sm mb-2">
                  <span className="font-bold text-green-400">Date:</span> Saturday, Nov 2nd @ 2:00 PM UTC
                </p>
                <p className="text-green-600 text-sm mb-3">
                  <span className="font-bold text-green-400">Duration:</span> 24 Hours
                </p>
                <div className="flex gap-2">
                  <div className="px-3 py-1 bg-green-600 text-black rounded text-xs font-bold">
                    React with ✓ to join
                  </div>
                  <div className="px-3 py-1 bg-green-950 border border-green-700 text-green-400 rounded text-xs font-bold">
                    Form Teams →
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center text-green-700 text-sm mt-6">
              <span className="text-green-600">&gt;</span> Join our Discord to see live CTF announcements and team up with hackers worldwide
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 py-20">
          <div className="terminal-box max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-green-900/50">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-xs ml-2 text-green-600">root@ctf-server:~/stats$</span>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-green-400 mb-2">500+</div>
                <div className="text-green-700 text-sm">CHALLENGES SOLVED</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-400 mb-2">1,337+</div>
                <div className="text-green-700 text-sm">ACTIVE MEMBERS</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-green-700 text-sm">SERVER AVAILABILITY</div>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 py-20">
          <Card className="bg-gradient-to-br from-green-950/40 to-black border-2 border-green-700 shadow-[0_0_30px_rgba(34,197,94,0.2)] overflow-hidden relative">
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
            <CardContent className="p-12 text-center relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="glitch" data-text="READY TO HACK?">READY TO HACK?</span>
              </h2>
              <p className="text-green-600 mb-8 text-lg">
                Join our elite community and start pwning challenges today.
              </p>
              <Button
                size="lg"
                className="bg-green-500 hover:bg-green-400 text-black font-bold border-2 border-green-300 shadow-[0_0_20px_rgba(34,197,94,0.7)] hover:shadow-[0_0_30px_rgba(34,197,94,1)] transition-all text-xl px-12 py-6"
              >
                <Terminal className="mr-3 w-6 h-6" />
                <a href="https://discord.gg/wrcaFWV2rq" target="_blank" rel="noopener noreferrer" className='text-black'>ACCESS DISCORD SERVER</a>
              </Button>
              <div className="mt-6 text-xs text-green-800">
                <span className="text-green-600">&gt;</span> No experience required. All skill levels welcome.
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="border-t border-green-900/30 py-8 mt-20">
        <div className="container mx-auto px-6 text-center text-green-800 text-sm">
          <div className="mb-2">
            <span className="text-green-600">root@ctf-server</span>:~$ echo "Happy Hacking"
          </div>
          <div>© 2025 CYBERWOLF CTF. ALL RIGHTS RESERVED.</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
