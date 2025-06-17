export function generateLogo(config) {
  const { primaryColor, fontStyle, icon, shape, brandName } = config;

  const shapeElements = {
    circle: `<circle cx="150" cy="100" r="80" fill="none" stroke="${primaryColor}" stroke-width="2" opacity="0.8" />`,
    square: `<rect x="70" y="20" width="160" height="160" fill="none" stroke="${primaryColor}" stroke-width="2" rx="12" opacity="0.3" />`,
    none: ''
  };

  const iconSize = 12;
  const iconX = 80;
  const iconY = 35;

  // Wrap icon SVG (assumed to be <svg>...</svg> or path) into a group and center it
  const iconSVG = icon
    ? `
      <g transform="translate(${iconX}, ${iconY}) scale(${iconSize / 24})"  stroke="${primaryColor}" opacity="1">
        <g transform="translate(-12, -12)">
          ${icon}
        </g>
      </g>`
    : '';

  const textY = 140;

  return `
    <svg width="300" height="200" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
      ${shapeElements[shape] || ''}
      
      ${iconSVG}
      
      <text
        x="150"
        y="${textY}"
        font-family="${fontStyle}"
        font-size="24"
        fill="${primaryColor}"
        text-anchor="middle"
        dominant-baseline="middle"
      >
        ${brandName || 'My Logo'}
      </text>
    </svg>
  `;
}
