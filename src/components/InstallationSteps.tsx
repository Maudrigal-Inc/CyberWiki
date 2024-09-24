import React from 'react'

const InstallationSteps: React.FC = () => {
  const steps = [
    { step: 'Clone the repository:', code: 'git clone https://github.com/Maudrigal-Inc/cyberharmonix.git' },
    { step: 'Install dependencies:', code: 'npm install' },
    { step: 'Configure environment variables in the', code: '.env file' },
    { step: 'Start the bot:', code: 'npm run dev' },
  ]

  return (
    <ol>
      {steps.map((step, index) => (
        <li key={index}>
          {step.step} <code>{step.code}</code>
        </li>
      ))}
    </ol>
  )
}

export default InstallationSteps