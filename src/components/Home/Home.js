// import React from 'react';
// import { View, Text, TouchableOpacity} from 'react-native';
// import { Actions } from 'react-native-router-flux';
// export default function Home() {
//   return (
//     <View>
//       <Text>Home</Text>
//       <Text>Scene name: </Text>
//       <TouchableOpacity onPress={() => Actions.modal()}>
//         <Text>Detail</Text>
//       </TouchableOpacity>
//     </View>
//   )
// }


import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';
export default function Home(props) {

  const selectedPage = (page) => {
    Actions.modal();
    props.onSelectPage(page);
  };

  return (
    <TouchableWithoutFeedback onPress={() => selectedPage(props.page)}>
      <View>
        <Text>{ props.page.title }</Text>
        <Image source={{ uri: props.page.picture }} style={{ height: 150 }} />
      </View>
    </TouchableWithoutFeedback>
  );
}
