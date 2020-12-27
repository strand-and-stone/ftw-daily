import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';

import { NamedLink } from '..';

import css from './SectionCategories.module.css';

import helsinkiImage from './images/location_helsinki.jpg';
import rovaniemiImage from './images/location_rovaniemi.jpg';
import rukaImage from './images/location_ruka.jpg';

class CategoryImage extends Component {
  render() {
    const { alt, ...rest } = this.props;
    return <img alt={alt} {...rest} />;
  }
}
const LazyImage = lazyLoadWithDimensions(CategoryImage);

const categoryLink = (name, image, searchQuery) => {
  const nameText = <span className={css.categoryName}>{name}</span>;
  return (
    <NamedLink name="SearchPage" to={{ search: searchQuery }} className={css.category}>
      <div className={css.imageWrapper}>
        <div className={css.aspectWrapper}>
          <LazyImage src={image} alt={name} className={css.categoryImage} />
        </div>
      </div>
      <div className={css.linkText}>
        <FormattedMessage
          id="SectionCategories.listingsInCategory"
          values={{ category: nameText }}
        />
      </div>
    </NamedLink>
  );
};

const SectionCategories = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="SectionCategories.title" />
      </div>
      <div className={css.categories}>
        {categoryLink(
          'Helsinki',
          helsinkiImage,
          '?address=Helsinki%2C%20Finland&bounds=60.2978389%2C25.254484899999966%2C59.9224887%2C24.782875800000056&origin=60.16985569999999%2C24.93837910000002'
        )}
        {categoryLink(
          'Rovaniemi',
          rovaniemiImage,
          '?address=Rovaniemi%2C%20Finland&bounds=67.18452510000002%2C27.32667850000007%2C66.1553745%2C24.736871199999996&origin=66.50394779999999%2C25.729390599999988'
        )}
        {categoryLink(
          'Ruka',
          rukaImage,
          '?address=Ruka%2C%20Finland&bounds=66.1704578%2C29.14246849999995%2C66.1614402%2C29.110453699999994&origin=66.16594940000002%2C29.12646110000003'
        )}
      </div>
    </div>
  );
};

SectionCategories.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionCategories.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionCategories;
