import React, { Component } from 'react';
import {Router, Scene, Actions, ActionConst} from 'react-native-router-flux'
import {connect} from 'react-redux'
import { Intro, Intro2 } from '~/components';
import { Home } from '~/components';
import { Search } from '~/components';
import { Detail } from '~/components';
import  { Text, StyleSheet } from 'react-native';
import { HomeContainer, IntroContainer} from '~/containers';
import { DetailContainer} from '~/containers';

const RouterWithRedux = connect()(Router)
// Simple component to render something in place of icon
const TabIcon = ({ selected, title }) => {
  return (
    <Text style={{color: selected ? 'red' :'black'}}>{title}</Text>
  );
}

let style = StyleSheet.create({
  tabBarStyle: {
    borderTopWidth : .5,
    borderColor    : '#b7b7b7',
    backgroundColor: 'yellow',
    opacity        : 1,

  }
});

class AppContainer extends Component {
  render() {
    return (
      <RouterWithRedux>
        { this.props.start
          ? <Scene key="root">
              <Scene key="start">
                <Scene key='intro' component={Intro} title='Intro Page' hideNavBar/>
                <Scene key='intro2' component={Intro2} title='Intro2' />
              </Scene>
              <Scene key="tabbar" tabs={true} tabBarStyle={style.tabBarStyle} animation="fade">
                 <Scene key="homeTab"  initial={true}  title="H" icon={TabIcon} titleStyle={{color:'#000'}} hideNavBar>
                   <Scene key="home" component={HomeContainer} title="Home" />
                   <Scene key="modal" direction="vertical" component={DetailContainer} hideTabBar title="Detail" onRight={()=>alert("Right button")} rightTitle="Right"  navBar titleStyle={{color:'black'}}/>
                   <Scene key="search" component={Search} title="SSSS" onLeft={()=>alert("Left button!")} leftTitle="Left"/>
                 </Scene>
                 <Scene key="searchTab" title="S" icon={TabIcon} hideNavBar>
                    <Scene key="tab2_1" component={Search} title="Tab #2_1" onLeft={()=>alert("Left button!")} leftTitle="Left"/>
                 </Scene>
                 <Scene key="mapTab" component={Search} title="M" hideNavBar icon={TabIcon}/>
                 <Scene key="profileTab" component={Search} title="P" hideNavBar={true} icon={TabIcon}/>
                 <Scene key="tab5" component={Search} title="T" hideNavBar icon={TabIcon} />
             </Scene>
            </Scene>
         : <Scene key="tabbar" tabs={true} tabBarStyle={style.tabBarStyle}>
             <Scene key="homeTab"  initial={true}  title="H" icon={TabIcon} titleStyle={{color:'#000'}} hideNavBar>
                 <Scene key="home" component={HomeContainer} title="Home" />
                 <Scene key="modal" direction="vertical" component={DetailContainer} hideTabBar title="Detail" onRight={()=>alert("Right button")} rightTitle="Right"  navBar titleStyle={{color:'black'}}/>
                 <Scene key="search" component={Search} title="SSSS" onLeft={()=>alert("Left button!")} leftTitle="Left"/>
             </Scene>
             <Scene key="searchTab" title="S" icon={TabIcon} hideNavBar>
                 <Scene key="tab2_1" component={Search} title="Tab #2_1" onLeft={()=>alert("Left button!")} leftTitle="Left"/>
             </Scene>
             <Scene key="mapTab" component={Search} title="M" hideNavBar icon={TabIcon}/>
             <Scene key="profileTab" component={Search} title="P" hideNavBar={true} icon={TabIcon}/>
             <Scene key="tab5" component={Search} title="T" hideNavBar icon={TabIcon} />
         </Scene>

        }






      </RouterWithRedux>
    )
  }

}


function mapStateToProps({ start }) {
  console.log('START', start);
  return {
    start: start.onStart
  };
}

export default connect(mapStateToProps)(AppContainer);
