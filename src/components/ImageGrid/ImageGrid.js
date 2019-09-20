import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadImages } from '../../actions';
import Button from '../Button/Button';

import './styles.css';

class ImageGrid extends Component {
  componentDidMount() {
    this.props.fetchImages();
  }

  render() {
    const { images, error, isLoading } = this.props;
    return (
      <div className="content">
        <section className="grid">
          {images.map(image => (
            <div
              key={image.id}
              className={`item item-${Math.ceil(image.height / image.width)}`}
            >
              <img src={image.urls.small} alt={image.user.username} />
            </div>
          ))}
        </section>
        <Button
          handleOnClick={this.props.fetchImages}
          isLoading={isLoading}
          label="Get More"
        />
        {error && <span> There are some error {error}</span>}
      </div>
    );
  }
}

const mapPropsToStates = ({ isLoading, images, error }) => ({
  isLoading,
  images,
  error,
});

const mapDispatchToProps = dispatch => ({
  fetchImages: () => dispatch(loadImages()),
});

export default connect(
  mapPropsToStates,
  mapDispatchToProps,
)(ImageGrid);
