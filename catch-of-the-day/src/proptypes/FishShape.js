import PropTypes from 'prop-types';

const FishShape = PropTypes.shape({
  image: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  desc: PropTypes.string,
  status: PropTypes.string
});

export default FishShape;
