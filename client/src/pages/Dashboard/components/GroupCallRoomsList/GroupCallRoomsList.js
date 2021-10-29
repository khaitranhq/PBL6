import React from 'react';
import GroupCallRoomsListItem from './GroupCallRoomsListItem';
import { connect } from 'react-redux';
import './GroupCallRoomsList.css';

const GroupCallRoomsList = (props) => {
  const { groupCallRooms } = props;
  return (
    <div className="group-call-list">
      {groupCallRooms.map(room => <GroupCallRoomsListItem key={room.roomId} room={room} />)}
    </div>
  );
};

const mapStoreStateToProps = ({ dashboard }) => (
  {
    ...dashboard
  }
);

export default connect(mapStoreStateToProps)(GroupCallRoomsList);
