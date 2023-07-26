import PropTypes from 'prop-types';
import { SectionBox, SectionTitle } from './Section.styled';

export default function Section(title, children) {
  return (
    <SectionBox>
      {title && <SectionTitle>{title}</SectionTitle>}
      {children}
      {/* <h2>Please leave feedback</h2> */}
    </SectionBox>
    // <section>
    //   <h2>Please leave feedback</h2>
    // </section>
  );
}

SectionTitle.propTypes = {
  title: PropTypes.string,
};
