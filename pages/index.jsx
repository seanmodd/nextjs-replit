import { useState } from 'react';
function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}

export default function HomePage() {
  const tools = ['Flask', 'Git', 'MongoDB', 'Swift'];
  const wants = ['Next.js', 'React']

  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <Header title="VulcanWM" />
      <p>Coding Tools I know</p>
      <ul>
        {tools.map((tool) => (
          <li key={tool}>{tool}</li>
        ))}
      </ul>
      <p>Tools I want to learn</p>
      <ul>
        {wants.map((want) => (
          <li key={want}>{want}</li>
        ))}
      </ul>
      <button onClick={handleClick}>Like ({likes})</button>
    </div>
  );
}