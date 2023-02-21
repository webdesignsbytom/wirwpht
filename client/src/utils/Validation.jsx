// Uses NPM validator
import isURL from 'validator/lib/isURL';

export const validUrl = (value) => {
  if (!isURL(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid URL.
      </div>
    );
  }
};
