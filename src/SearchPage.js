import React from 'react'
import './SearchPage.css'
import TuneIcon from '@material-ui/icons/Tune';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneIcon />
        <h2>FILTER</h2>
      </div>
      <hr/>

      <ChannelRow
        image="https://avatars0.githubusercontent.com/u/67520676?s=400&u=5ce3e4451d58528752aa7c8eabe8b4a652f9ff5b&v=4"
        channel="Cleaver Programmer"
        verified
        subs="660K"
        noOfVideos={382}
        description="You can find good programming lessons here..."
      />
      <hr/>

      <VideoRow 
        views="1.4M"
        subs="659K"
        description="Do you want a free one hour training..."
        timestamp="59 seconds ago"
        channel="Cleaver Programmer"
        title="Let's build a youtube clone with react"
        image="http://placehold.it/250x140"
      />

      <VideoRow 
        views="1.4M"
        subs="659K"
        description="Do you want a free one hour training..."
        timestamp="59 seconds ago"
        channel="Cleaver Programmer"
        title="Let's build a youtube clone with react"
        image="http://placehold.it/250x140"
      />

      <VideoRow 
        views="1.4M"
        subs="659K"
        description="Do you want a free one hour training..."
        timestamp="59 seconds ago"
        channel="Cleaver Programmer"
        title="Let's build a youtube clone with react"
        image="http://placehold.it/250x140"
      />
    </div>
  )
}

export default SearchPage
