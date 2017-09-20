import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { CircularProgress } from 'material-ui/Progress';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import FolderIcon from 'material-ui-icons/Folder';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Grid from 'material-ui/Grid';
import { fetchUsers } from '../actions';
import ProjectCard from '../components/ProjectCard';

class Dashboard extends Component {

    static propTypes = {
        users: PropTypes.array.isRequired,
        fetching: PropTypes.bool.isRequired,
        fetched: PropTypes.bool.isRequired,
        actions: PropTypes.object.isRequired,
        dispatch: PropTypes.func,
    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.actions.fetchUsers();
    }

    renderProjectCard() {
        return (
            <ProjectCard />
        );
    }

    renderUsers(users) {
        if( this.props.fetching ) {
            return (
                <CircularProgress />
            );
        }
        return users.map((user) => {
            return (
                <ListItem button key={user.id}>
                    <Avatar>
                        <FolderIcon />
                    </Avatar>
                    <ListItemText primary={user.name} secondary={user.email} />
                </ListItem>
            );
        });
    }

    render() {
        const { users } = this.props;

        return (
            <div className="container">
                <Typography type="headline" color="inherit">Users</Typography>
                <Grid container>
                    <Grid item xs={6}>
                        { this.renderProjectCard() }
                    </Grid>
                    <Grid item xs={6}>
                        <List>
                            {this.renderUsers(users)}
                        </List>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users.users,
        fetching: state.users.fetching,
        fetched: state.users.fetched,
    };
};

const mapDispatchToProps = (dispatch) => {
    return { actions: bindActionCreators({ fetchUsers: fetchUsers }, dispatch)};
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);
