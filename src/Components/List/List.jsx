import PropTypes from 'prop-types';

const List = ({route}) => {
    const {name} = route;
    return (
        <div className='mr-20 list-none font-semibold'>
            {
                <li><a href={route.path}>{name}</a></li>
            }
        </div>
    );
};

List.propTypes = {
    route: PropTypes.object,
}

export default List;