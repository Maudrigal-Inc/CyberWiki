import React from 'react'

const FeatureList: React.FC = () => {
  const features = [
    'Seamless audio and video streaming',
    'Futuristic cyber-themed interface',
    'AI-based moderation system',
    'Level and experience system',
    'Virtual economy',
    'Voice commands',
    'Web dashboard for bot management',
    'Multilingual support',
  ]

  return (
    <ul className="feature-list">
      {features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
  )
}

export default FeatureList