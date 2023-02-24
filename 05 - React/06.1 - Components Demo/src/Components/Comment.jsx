import PropTypes from 'prop-types';

function Avatar(props) {
    return (
        <img id="avatar" src={props.author.avatarUrl} alt={props.author.name} />
    );
}

function formatDate(date) {
    return date.toLocaleDateString();
}

export default function Comment(props) {
    return (
        <div id="comment">

            <Avatar author={props.author} />

            <div>
                {props.author.name}
            </div>

            <div>
                {props.text}
            </div>

            <div>
                {formatDate(props.date)}
            </div>

        </div>
    );
}

Comment.propTypes = {
    text: PropTypes.string,
    author: PropTypes.object
};