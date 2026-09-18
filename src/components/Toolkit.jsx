import React from 'react';

const tools = [
  { name: 'Python', path: 'M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.006 2.752h5.81v.826H3.852S0 5.79 0 11.904c0 6.115 3.371 5.9 3.371 5.9h2.012v-2.82c0-3.238 2.766-3.048 2.766-3.048h5.752c.877 0 1.625-.724 1.625-1.602V4.44s.484-4.44-3.612-4.44zm-3.24 1.832a1.018 1.018 0 1 1 0 2.035 1.018 1.018 0 0 1 0-2.035zM12.086 24c6.094 0 5.714-2.656 5.714-2.656l-.006-2.752h-5.81v-.826h8.164S24 18.21 24 12.096c0-6.115-3.371-5.9-3.371-5.9h-2.012v2.82c0 3.238-2.766 3.048-2.766 3.048H10.1c-.877 0-1.625.724-1.625 1.602v5.892s-.484 4.44 3.612 4.44zm3.24-1.832a1.018 1.018 0 1 1 0-2.035 1.018 1.018 0 0 1 0 2.035z' },
  { name: 'JavaScript', path: 'M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z' },
  { name: 'React', path: 'M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278z' },
  { name: 'Node.js', path: 'M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z' },
  { name: 'Move', path: 'M20.1484 0H3.8516C1.724 0 0 1.724 0 3.8516v16.2968C0 22.276 1.724 24 3.8516 24h16.2968C22.276 24 24 22.276 24 20.1484V3.8516C24 1.724 22.276 0 20.1484 0zM7.2 17.4L4.2 8.4h2.4l1.8 5.7 1.8-5.7h1.2l1.8 5.7 1.8-5.7h2.4l-3 9H12l-1.8-5.4-1.8 5.4H7.2z' },
  { name: 'MongoDB', path: 'M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296 4.462-3.065 4.292-11.375zM12.514 21.5l.015-1.132c-.028-.145-.312-.628-.462-1.158-.15.53-.388 1.013-.416 1.158l.017 1.132h.846z' },
  { name: 'Git', path: 'M13.09 23.549a1.54 1.54 0 0 1-2.18 0L.451 13.089a1.54 1.54 0 0 1 0-2.179l7.191-7.19 2.733 2.733a1.85 1.85 0 0 0 .964 2.326v6.66a1.849 1.849 0 1 0 1.54 0V8.957l2.508 2.508a1.85 1.85 0 1 0 1.09-1.09l-2.634-2.634a1.85 1.85 0 0 0-2.378-2.377L8.73 2.63 10.91.451a1.54 1.54 0 0 1 2.179 0l10.459 10.46a1.54 1.54 0 0 1 0 2.179z' },
  { name: 'Linux', path: 'M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.132 1.884 1.071.771-.06 1.592-.536 2.257-1.306.631-.765 1.683-1.084 2.378-1.503.348-.199.629-.469.649-.853.023-.4-.2-.811-.714-1.376v-.097l-.003-.003c-.17-.2-.25-.535-.338-.926-.085-.401-.182-.786-.492-1.046h-.003c-.059-.054-.123-.067-.188-.135a.357.357 0 00-.19-.064c.431-1.278.264-2.55-.173-3.694-.533-1.41-1.465-2.638-2.175-3.483-.796-1.005-1.576-1.957-1.56-3.368.026-2.152.236-6.133-3.544-6.139z' },
];

function ToolPill({ name, path }) {
  return (
    <li
      className="group flex shrink-0 items-center gap-3 rounded-full px-5 py-3 transition-all duration-300 sm:gap-4 sm:px-7 sm:py-4"
      style={{ border: '1.5px solid var(--border)', background: 'var(--card-bg)' }}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-6 shrink-0 sm:size-7" style={{ fill: 'var(--text)' }}>
        <path d={path} />
      </svg>
      <span className="eyebrow whitespace-nowrap" style={{ color: 'var(--text)' }}>{name}</span>
    </li>
  );
}

const skillCategories = [
  { title: 'Languages', badge: 'Core Syntax', items: ['Python', 'JavaScript (ES6+)', 'Move'] },
  { title: 'Frontend', badge: 'Interactive UI', items: ['HTML5', 'CSS3', 'React', 'Responsive Design', 'Accessible UI (ARIA)'] },
  { title: 'Backend', badge: 'APIs & Data', items: ['Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'Mongoose', 'PostgreSQL'] },
  { title: 'Tools & Cloud', badge: 'DevOps & Git', items: ['Git', 'GitHub', 'Linux', 'Render', 'Vercel'] },
  { title: 'Core Concepts', badge: 'Architecture', items: ['API Design', 'Full-Stack (MERN)', 'Async Programming', 'Debugging', 'Testing'] },
  { title: 'Soft Skills', badge: 'Professional', items: ['Problem Solving', 'Communication', 'Teamwork', 'Adaptability'] },
];

const interests = [
  'Full-Stack Web Development', 'Backend Engineering', 'Systems Design',
  'Web Design', 'UI/UX & Accessibility', 'Fintech Innovation',
];

export default function Toolkit() {
  const mid = Math.ceil(tools.length / 2);
  const row1 = [...tools.slice(0, mid), ...tools.slice(0, mid), ...tools.slice(0, mid)];
  const row2 = [...tools.slice(mid), ...tools.slice(mid), ...tools.slice(mid)];

  return (
    <section id="toolkit" aria-labelledby="toolkit-heading" className="py-20 sm:py-28 md:py-36 section-border">
      {/* Section label */}
      <p id="toolkit-heading" className="eyebrow mb-8 text-center sm:mb-10">My Toolkit & Skills</p>

      {/* Infinite Marquee */}
      <div className="marquee-mask flex flex-col gap-3 sm:gap-4 mb-20 sm:mb-24" aria-hidden="true">
        <ul className="marquee-track gap-3 sm:gap-4">
          {row1.map((tool, i) => <ToolPill key={`r1-${i}`} name={tool.name} path={tool.path} />)}
        </ul>
        <ul className="marquee-track-reverse gap-3 sm:gap-4">
          {row2.map((tool, i) => <ToolPill key={`r2-${i}`} name={tool.name} path={tool.path} />)}
        </ul>
      </div>

      {/* Skills Grid */}
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <p className="eyebrow mb-3">Technical Competencies</p>
          <h3 className="display-md chrome-text">Engineered for Reliability</h3>
          <p className="body-sm mt-3">
            Programming languages, modern frameworks, database paradigms, and systems engineering practices.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="card p-5 sm:p-6 flex flex-col gap-4"
            >
              <div className="flex items-center justify-between">
                <h4 className="font-kanit font-semibold text-base sm:text-lg tracking-wide" style={{ color: 'var(--text)' }}>
                  {category.title}
                </h4>
                <span className="badge">{category.badge}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span key={item} className="tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Interests */}
        <div
          className="mt-8 p-6 sm:p-8 card"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <h4 className="font-kanit font-semibold text-sm sm:text-base tracking-wide" style={{ color: 'var(--text)' }}>
              Areas of Interest & Research Focus
            </h4>
            <span className="eyebrow">Continuous Evolution</span>
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-2.5">
            {interests.map((interest) => (
              <span key={interest} className="tag">✦ {interest}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
