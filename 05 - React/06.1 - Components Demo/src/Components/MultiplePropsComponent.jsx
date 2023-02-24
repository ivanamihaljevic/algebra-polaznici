import PropTypes from 'prop-types';

export default function MultiplePropsComponent({ name, years, gender, location, favoriteShow }) {
    return (
        <div>
            <p>
                Pozdrav, moje ime je {name}, imam {years} godine. Ja sam {gender}.
            </p>
            <p>
                Trenutno se nalazim u gradu koji se zove "{location}".
                Moja omiljena serija je {favoriteShow}.
            </p>
        </div>
    );
}

MultiplePropsComponent.propTypes = {
    name: PropTypes.string,
    years: PropTypes.string,
    gender: PropTypes.string,
    location: PropTypes.string,
    favoriteShow: PropTypes.string
}

MultiplePropsComponent.defaultProps = {
    name: "Stranger",
    years: "Unknown",
    gender: "Unknown",
    location: "Planet Earth",
    favoriteShow: "Supply the props and I'll let you know ;)"
}