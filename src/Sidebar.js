import React from 'react';
import SiderbarRow from './SidebarRow';
import './Sidebar.css';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Sidebar() {
  return (
    <div className="sidebar">
      <SiderbarRow selected Icon={HomeIcon} title="Home"/>
      <SiderbarRow Icon={WhatshotIcon} title="Trending"/>
      <SiderbarRow Icon={SubscriptionsIcon} title="Subscription"/>
      <hr/>
      <SiderbarRow Icon={VideoLibraryIcon} title="Library"/>
      <SiderbarRow Icon={HistoryIcon} title="History"/>
      <SiderbarRow Icon={OndemandVideoIcon} title="Your videos"/>
      <SiderbarRow Icon={WatchLaterIcon} title="Watch later"/>
      <SiderbarRow Icon={ThumbUpIcon} title="Liked videos"/>
      <SiderbarRow Icon={ExpandMoreIcon} title="Show more"/>
      <hr/>
    </div>
  )
}

export default Sidebar
