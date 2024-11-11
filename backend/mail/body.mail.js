const template = (username) => ({
    subject: "Ready, Set, Achieve! Welcome to Checkpoint 🎯",
    html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff; border-radius: 10px;">
            <div style="text-align: center; margin-bottom: 30px;">
                <h1 style="color: #2D3748; margin-bottom: 10px;">Welcome to Your Command Center! 🎯</h1>
            </div>

            <div style="color: #4A5568; font-size: 16px; line-height: 1.6;">
                <p style="font-size: 18px;">Hey ${username},</p>
                
                <p style="margin-bottom: 25px;">Amazing decision joining Checkpoint! You've just unlocked your personal mission control for success.</p>

                <div style="background-color: #F7FAFC; padding: 20px; border-radius: 8px; margin: 20px 0;">
                    <h2 style="color: #2D3748; margin-top: 0;">🌟 Why You'll Love Checkpoint:</h2>
                    <ul style="list-style: none; padding-left: 0;">
                        <li style="margin: 10px 0;">• Turn big dreams into achievable milestones</li>
                        <li style="margin: 10px 0;">• Never miss important deadlines</li>
                        <li style="margin: 10px 0;">• Celebrate progress at every step</li>
                        <li style="margin: 10px 0;">• Stay motivated with visual progress tracking</li>
                    </ul>
                </div>

                <div style="background-color: #EBF8FF; padding: 20px; border-radius: 8px; margin: 20px 0;">
                    <h2 style="color: #2D3748; margin-top: 0;">Ready for Takeoff? 🚀</h2>
                    <p>Your first checkpoint awaits! Jump in and:</p>
                    <ul style="list-style: none; padding-left: 0;">
                        <li style="margin: 10px 0;">✓ Create your first goal</li>
                        <li style="margin: 10px 0;">✓ Set your milestone checkpoints</li>
                        <li style="margin: 10px 0;">✓ Track your journey</li>
                        <li style="margin: 10px 0;">✓ Celebrate your wins</li>
                    </ul>
                </div>

                <p style="font-style: italic; background-color: #F7FAFC; padding: 15px; border-left: 4px solid #4299E1; margin: 20px 0;">
                    Remember: You're not just checking tasks off a list - you're building your success story, one checkpoint at a time.
                </p>

                <p style="margin: 20px 0;">
                    Got questions? Ideas? We're all ears!<br>
                    Reply to this email anytime - we love hearing from our Checkpoint family.
                </p>

                <p style="margin: 20px 0;">
                    Here's to your next milestone,<br>
                    Team Checkpoint
                </p>

                <div style="background-color: #FFFAF0; padding: 15px; border-radius: 8px; margin-top: 30px;">
                    <p style="margin: 0; font-style: italic; color: #744210;">
                        P.S. Did you know? Users who set their first checkpoint within 24 hours are 3x more likely to achieve their goals! Start yours now 🎯
                    </p>
                </div>
            </div>
        </div>

    `
});

module.exports = template