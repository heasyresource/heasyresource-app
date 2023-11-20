
import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';

const SmoothScrollLink = ({ to, children, customOffset = -50, customDuration = 500 }) => {
  // Use the customOffset and customDuration props or fallback to default values
  const [offset, setOffset] = useState(customOffset);
  const duration = customDuration;

  return (
    <ScrollLink
      to={to}
      smooth
      duration={duration}
      offset={offset}
    >
      {children}
    </ScrollLink>
  );
};

export default SmoothScrollLink;
