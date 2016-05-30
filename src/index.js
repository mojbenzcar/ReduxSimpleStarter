import React ,{Component}from 'react';
import _ from 'lodash';
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_item_list'
import VideoDetail from './components/video_detail'
const API_KEY='AIzaSyA70hYBHDjySAQYLeqy1xjOtey3t-O3T9s';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {videos:[]};
    this.selectedVideo = {};
    this.videoSearch('react js');
  }

  videoSearch(query){
    YTSearch({key:API_KEY,term:query},(videos) =>{
        this.setState({selectedVideo:videos[0]});
        this.setState({videos});
    });
  }

  render () {
    const videoSearch= _.debounce((term)=>{this.videoSearch(term)},300)
    return (
      <div>
        <SearchBar onSearch={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList onVideoSelect={(selectedVideo)=>this.setState({selectedVideo})} videos={this.state.videos}/>
      </div>);
  }
}

ReactDom.render(<App/>,document.querySelector('.container'));
