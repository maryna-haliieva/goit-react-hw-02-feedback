import PropTypes from 'prop-types';
import { SectionBox, SectionTitle } from './Section.styled';

export default function Section({ title, children }) {
  return (
    <SectionBox>
      {title && <SectionTitle>{title}</SectionTitle>}
      {children}
    </SectionBox>
  );
}

SectionTitle.propTypes = {
  title: PropTypes.string,
};
