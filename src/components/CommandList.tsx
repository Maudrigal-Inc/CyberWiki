import React from 'react'

const CommandList: React.FC = () => {
  const commands = [
    { command: '/play [text or youtube link]', description: 'Plays a song or adds it to the queue' },
    { command: '/video [link]', description: 'Plays a video in the voice channel' },
    { command: '/stop', description: 'Stops the current playback and clears the queue' },
    { command: '/level', description: 'Checks your current level and XP' },
    { command: '/balance', description: 'Checks your current balance' },
    { command: '/gstart [duration] [prize]', description: 'Starts a giveaway' },
  ]

  return (
    <ul className="command-list">
      {commands.map((cmd, index) => (
        <li key={index}>
          <code>{cmd.command}</code>: {cmd.description}
        </li>
      ))}
    </ul>
  )
}

export default CommandList