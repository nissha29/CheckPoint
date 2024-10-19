import React from 'react';
import { CheckCircle, Clock, Calendar, Users } from 'lucide-react';
import Navbar from '../Components/Navbar';
import Button from '../Components/Button';
import Background from '../Components/Background';
import { NavLink } from 'react-router-dom'
import Card from '../Components/Card'
import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
import image4 from '../assets/image4.png'
import image5 from '../assets/image5.png'
import Features, {Features2} from '../Components/Features';
import Footer from '../Components/Footer'

const LandingPage = () => {
  const suggestions = [
    { text: "Plan your week ahead", icon: <Calendar className="w-6 h-6 text-blue-500" /> },
    { text: "Set priorities for today", icon: <Clock className="w-6 h-6 text-green-500" /> },
    { text: "Delegate tasks to team", icon: <Users className="w-6 h-6 text-purple-500" /> },
    { text: "Track project deadlines", icon: <CheckCircle className="w-6 h-6 text-red-500" /> },
  ];

  const cards = [
    {heading: "Intuitive Interface", text: "Navigate your tasks with ease. Our clean, user-friendly design ensures you spend less time managing your to-do list and more time conquering it."},
    {heading: "Smart Prioritization", text: "Let CheckPoint's AI-powered system help you focus on what truly matters. It learns your habits and suggests the most impactful tasks to tackle first."},
    {heading: "Seamless Integration", text: "Connect CheckPoint with your favorite tools. From calendar apps to project management software, we play well with others to keep your workflow smooth."},
    {heading: "Collaborative Power", text: "Share tasks, delegate responsibilities, and track progress across teams. CheckPoint makes collaboration a breeze, whether you're working remotely or in the office."},
    {heading: "Customizable Workflows", text: "Tailor CheckPoint to fit your unique needs. Create custom tags, set up recurring tasks, and design workflows that match your personal or professional style."},
    {heading: "Progress Insights", text: "Visualize your productivity with beautiful, easy-to-understand charts and reports. Celebrate your wins and identify areas for improvement."},
    {heading: "Mobile Accessibility", text: "Take CheckPoint wherever you go. Our mobile app ensures you're always connected to your tasks, whether you're at your desk or on the move."},
    {heading: "Automated Reminders", text: "Never miss a deadline with intelligent notification systems. Set up customizable alerts and let CheckPoint keep you on track with gentle, timely reminders for your important tasks."},
  ];

  return (
    <div className="relative h-auto">
      <Background />
      <div className="relative z-10 main">
        <Navbar />
        <div className="flex flex-col items-center justify-center p-4 mt-32">
            <h1 className="text-[3.5rem] font-bold text-red-500 text-center tracking-wide">Mastering Tasks, Unleashing Potential !</h1>
            <div className='flex flex-col flex-wrap text-[1.5rem] text-gray-600 mb-10 mt-5 text-center'>
              <p>In a world where time is the ultimate currency, CheckPoint emerges as your</p>
              <p>personal productivity powerhouse. Say goodbye to chaos and hello to seamless task</p>
              <p>management that propels you towards success.</p>
            </div>
      
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl w-full">
                {suggestions.map((suggestion, index) => (
                    <div key={index} className="bg-[#eccece] p-4 rounded-lg shadow-md flex items-center space-x-4 hover:shadow-2xl transition-shadow border border-red-200">
                        {suggestion.icon}
                        <span className="text-[1.3rem] text-gray-700">{suggestion.text}</span>
                    </div>
                ))}
           </div>

           <NavLink to={'/signup'}>
              <Button 
                text='Start Organizing Now' 
                className="mt-8 rounded-xl py-2 hover:bg-red-700 transition-colors text-[1.6rem] font-semibold"
              />
           </NavLink>

          <div className="py-20">
            <h1 className="text-5xl font-bold text-gray-700 text-center tracking-wide mb-16">
              Why Choose CheckPoint?
            </h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14 mx-auto max-w-7xl px-4'>
              {cards.map((card, index) => (
                <Card 
                  key={index} 
                  index={index} 
                  heading={card.heading} 
                  text={card.text}
                />
              ))}
            </div>
          </div>
          
          <div>
            <h1 className="text-5xl font-bold text-gray-700 text-center tracking-wide">
              Ready to Transform Your Productivity?
            </h1>

            <Features 
              text1= "Elevate Your"
              text2= "Productivity"
              text3= "Experience the tool that's empowering thousands of professionals to achieve more with less stress. CheckPoint turns complex task lists into manageable actions."
              text4= "Stop juggling tasks, start completing them. Your productivity breakthrough awaits."              
              image={image1}
            />

            <Features2 
              image={image2}
              text1= "Time is Yours"
              text2= "To Command"
              text3= "Join the community of achievers who've discovered the secret to time mastery. CheckPoint transforms how you handle tasks, deadlines, and goals."
              text4= "Take control of your schedule and turn time into your greatest ally."
            />  



            <Features 
              text1= "Balance Tasks"
              text2= "Balance Life"
              text3= "Thousands have already discovered how CheckPoint brings harmony to their workday. Our intuitive system adapts to your style, making task management feel effortless."
              text4= "When your tasks are organized, your mind is free to focus on what truly matters."              
              image={image3}
            />

            <Features2 
              image={image4}
              text1= "From Chaos"
              text2= "To Clarity"
              text3= "Say goodbye to scattered to-do lists and missed deadlines. CheckPoint gives thousands of professionals the structure they need to turn task management into a superpower."
              text4= "Bring order to your workday and clarity to your goals. Start today."
            /> 

            <Features 
              text1= "Your Goals"
              text2= "Within Reach"
              text3= "Every major achievement starts with organized steps. Join thousands using CheckPoint to break down big goals into achievable tasks."
              text4= "Stop dreaming about your goals and start systematically achieving them."                            
              image={image5}
            />
        </div>
      </div>
      <div className='tagline bg-[#eecad3] w-full h-96 mt-24 font-thin text-7xl text-center flex justify-center items-center flex-wrap text-gray-700'>Transform your to-dos into ta-das!</div>
      <Footer />
    </div>
  </div>
  );
};

export default LandingPage;